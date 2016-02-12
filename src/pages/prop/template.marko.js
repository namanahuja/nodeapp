function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ______components_app_name_renderer_js = __renderer(require("../../components/app-name/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    __tag(out,
      ______components_app_name_renderer_js,
      {
        "name": "Proptiger",
        "email": "admin@proptiger.com",
        "head": "Proptiger"
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);