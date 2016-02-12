var template = require('./template.marko')

module.exports = function(input, out) {
	var name = input.name;
	var email = input.email;
	var head = input.head;

	if(name) {
		name = name.toUpperCase();
	} else {
		name = '(no name)';
	}

	template.render({
		name: name,
		email: email,
		head: head
	}, out);
}