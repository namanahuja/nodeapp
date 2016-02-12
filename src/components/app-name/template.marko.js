function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html><head><title>' +
      escapeXml(data.head) +
      '</title></head><body>Hello ' +
      escapeXml(data.name) +
      '! Your email id is ' +
      escapeXml(data.email) +
      '</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);