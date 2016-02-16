function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html><head><title>Todo List</title><link rel="stylesheet" href="styles.css"><script>\n\t\tfunction chk(){\n\t\tvar e = document.getElementById("category");\nvar strUser = e.options[e.selectedIndex].value;\ndocument.getElementById(\'form\').action = "/todo/add/" + strUser;\n}\n\nfunction update(){\n\t\n\t\n \n\nlocalStorage.setItem(\'updatelist\', JSON.stringify({list:[],list2:[],list3:[]}));\n\n\nvar list = document.getElementsByTagName("UL")[0];\nvar text = list.getElementsByTagName("LI");\nfor(i=0; i<text.length; i++){\n\ta=JSON.parse(localStorage.getItem(\'updatelist\'));\n\n\ta.list.push(text[i].innerText.substring(2).trim())\n\tlocalStorage.setItem(\'updatelist\', JSON.stringify(a));\n}\n\nvar list2 = document.getElementsByTagName("UL")[1];\nvar text2 = list2.getElementsByTagName("LI");\nfor(i=0; i<text2.length; i++){\n\ta=JSON.parse(localStorage.getItem(\'updatelist\'));\n\n\ta.list2.push(text2[i].innerText.substring(2).trim())\n\tlocalStorage.setItem(\'updatelist\', JSON.stringify(a));\n}\n\nvar list3 = document.getElementsByTagName("UL")[2];\nvar text3 = list3.getElementsByTagName("LI");\nfor(i=0; i<text3.length; i++){\n\ta=JSON.parse(localStorage.getItem(\'updatelist\'));\n\n\ta.list3.push(text3[i].innerText.substring(2).trim())\n\tlocalStorage.setItem(\'updatelist\', JSON.stringify(a));\n}\n\nvar jsontext = localStorage.getItem(\'updatelist\');\n\n\ndocument.getElementById("updatetext").value=jsontext;\n\ndocument.getElementById("updateform").submit();\n\n//window.location="http://localhost:5000/todo/update";\n}\n</script><style id="jsbin-css">body { padding: 30px; } ul { list-style: none; } .my-handle { cursor: move;\ncursor: -webkit-grabbing;\n}</style></head><body><link rel="stylesheet" href="bootstrap.min.css"><script src="Sortable.js"></script><h1 align="center">Todo List</h1><form action method="post" id="form" onSubmit="chk()"><p><label for="newtodo"></label><input type="text" name="newtodo" id="newtodo" autofocus><div align="center"><select id="category"><option value="1">Category 1</option><option value="2">Category 2</option><option value="3">Category 3</option></select></div></p></form><div id="div1"><ul id="listWithHandle">');

    forEach(data.list, function(item) {
      out.w('<li id="naman"><span class="my-handle">::&nbsp;</span><a href="' +
        escapeXmlAttr(data.url) +
        escapeXmlAttr(item._id) +
        '"><img src="delete.png" width="12" height="12"> &nbsp;</a>' +
        escapeXml(item.val) +
        '</li>');
    });

    out.w('</ul></div><div id="div2"><ul id="listWithHandle2">');

    forEach(data.list2, function(item) {
      out.w('<li><span class="my-handle">::&nbsp;&nbsp;</span><a href="' +
        escapeXmlAttr(data.url) +
        escapeXmlAttr(item._id) +
        '"><img src="delete.png" width="12" height="12"> &nbsp;</a>' +
        escapeXml(item.val) +
        '</li>');
    });

    out.w('</ul></div><div id="div3"><ul id="listWithHandle3">');

    forEach(data.list3, function(item) {
      out.w('<li><span class="my-handle">::&nbsp;&nbsp;</span><a href="' +
        escapeXmlAttr(data.url) +
        escapeXmlAttr(item._id) +
        '"><img src="delete.png" width="12" height="12"> &nbsp;</a>' +
        escapeXml(item.val) +
        '</li>');
    });

    out.w('</ul></div><div align="center"><button type="button" onclick="update()" id="update">Update</button></div><form method="post" action="/todo/update" id="updateform"><input type="hidden" name="updatetext" id="updatetext" value="naqan"></form><script id="jsbin-javascript">\n// List with handle\nSortable.create(listWithHandle, {\n  handle: \'.my-handle\',\n  animation: 150\n});\nSortable.create(listWithHandle2, {\n  handle: \'.my-handle\',\n  animation: 150\n});\nSortable.create(listWithHandle3, {\n  handle: \'.my-handle\',\n  animation: 150\n});\n\n</script></body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);