const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");

gulp.task("build", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("index.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("../build"));
});

// gulp.task("sass", function () {
//   gulp.src("client/stylesheets/site.scss")
//     .pipe(sass())
//     .pipe(minifyCss())
//     .pipe(gulp.dest("client/build"));
// });

// gulp.task("build-client", ["sass"], function () {
//   if (environment !== "dev"){
//     // Minify for non-development
//     gulp.src(["client/src/**/*.js", "client/views/**/*.js"])
//       .pipe(sourcemaps.init())
//         .pipe(concat("app.js"))
//         .pipe(uglify())
//       .pipe(gulp.dest("client/build"));
//   } else {
//     gulp.src(["client/src/**/*.js", "client/views/**/*.js"])
//       .pipe(sourcemaps.init())
//         .pipe(concat("app.js"))
//       .pipe(sourcemaps.write("."))
//       .pipe(gulp.dest("client/build"));
//   }
// });

gulp.task("dev", ["build"], function(){
  nodemon({
    script: "src/index.js",
    env: { "NODE_ENV": process.env.NODE_ENV || "dev" },
    watch: [
      "src"
    ]
  });
});