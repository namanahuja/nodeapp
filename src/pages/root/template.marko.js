function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<html><head><title>Root</title></head><body><ul>');

    forEach(data.urls, function(url) {
      out.w('<li><a href="' +
        escapeXmlAttr(data.common) +
        escapeXmlAttr(url) +
        '">' +
        escapeXml(url) +
        '</a></li>');
    });

    out.w('</ul></body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);