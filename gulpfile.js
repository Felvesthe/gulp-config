const { src, dest, series, parallel, watch } = require('gulp');

const $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*', 'autoprefixer', 'browser-sync', 'cssnano'],
	postRequireTransforms: {
		sass: sass => {
			return sass(require('sass'));
		},
	},
});

const paths = {
	htmlSrc: './src/html/**/*.kit',
	sassSrc: './src/sass/**/*.scss',
	jsSrc: './src/js/**/*.js',
	imgSrc: './src/img/**/*',
	sassDest: './dist/css',
	jsDest: './dist/js',
	imgDest: './dist/img',
};

const buildHtml = cb => {
	src(paths.htmlSrc)
		.pipe($.kit())
		.pipe($.htmlmin({ collapseWhitespace: true }))
		.pipe(dest('./'));

	cb();
};

const buildStyles = cb => {
	const plugins = [$.autoprefixer(), $.cssnano()];

	src(paths.sassSrc, { sourcemaps: true })
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.postcss(plugins))
		.pipe($.rename({ suffix: '.min' }))
		.pipe(dest(paths.sassDest, { sourcemaps: true }));

	cb();
};

const buildJavaScript = cb => {
	src(paths.jsSrc, { sourcemaps: true })
		.pipe(
			$.babel({
				presets: ['@babel/env'],
			})
		)
		.pipe($.uglify())
		.pipe($.rename({ suffix: '.min' }))
		.pipe(dest(paths.jsDest, { sourcemaps: true }));

	cb();
};

const optimizeImages = cb => {
	src(paths.imgSrc).pipe($.imagemin()).pipe(dest(paths.imgDest));

	cb();
};

const cleanDist = cb => {
	src('./dist', { read: false }).pipe($.clean());

	cb();
};

const runLiveServer = cb => {
	$.browserSync.init({
		server: {
			baseDir: './',
		},
	});

	watch(
		[paths.htmlSrc, paths.sassSrc, paths.jsSrc, paths.imgSrc],
		parallel(buildHtml, buildStyles, buildJavaScript, optimizeImages)
	).on('change', $.browserSync.reload);

	cb();
};

const tasks = parallel(buildHtml, buildStyles, buildJavaScript, optimizeImages);

exports.cleanDist = cleanDist;

exports.default = series(tasks, runLiveServer);
