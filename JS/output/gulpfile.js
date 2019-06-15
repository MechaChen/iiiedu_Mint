const { src, dest } = require("gulp");

function copy() {
  return src("./*.html").pipe(dest("export/"));
}

function copy2() {
  return src("./*.js").pipe(dest("JS/output/"));
}

exports.copy = copy;
exports.copy2 = copy2;
