function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html><head><title>Todo List</title><link rel="stylesheet" href="styles.css"><script>\n\t\tfunction chk(){\n\t\tvar e = document.getElementById("category");\nvar strUser = e.options[e.selectedIndex].value;\ndocument.getElementById(\'form\').action = "/todo/add/" + strUser;\n}\n</script></head><body><h1 align="center">Todo List</h1><form action method="post" id="form" onSubmit="chk()"><p><label for="newtodo"></label><input type="text" name="newtodo" id="newtodo" autofocus><div align="center"><select id="category"><option value="1">Category 1</option><option value="2">Category 2</option><option value="3">Category 3</option></select></div></p></form><div id="div1"><ul id="todolist">');

    forEach(data.list, function(item) {
      out.w('<li><a href="' +
        escapeXmlAttr(data.url) +
        escapeXmlAttr(item._id) +
        '"><img src="delete.png" width="12" height="12"></a>&nbsp;' +
        escapeXml(item.val) +
        '</li>');
    });

    out.w('</ul></div><div id="div2"><ul id="todolist">');

    forEach(data.list2, function(item) {
      out.w('<li><a href="' +
        escapeXmlAttr(data.url) +
        escapeXmlAttr(item._id) +
        '"><img src="delete.png" width="12" height="12"></a>&nbsp;' +
        escapeXml(item.val) +
        '</li>');
    });

    out.w('</ul></div><div id="div3"><ul id="todolist">');

    forEach(data.list3, function(item) {
      out.w('<li><a href="' +
        escapeXmlAttr(data.url) +
        escapeXmlAttr(item._id) +
        '"><img src="delete.png" width="12" height="12"></a>&nbsp;' +
        escapeXml(item.val) +
        '</li>');
    });

    out.w('</ul></div></body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);