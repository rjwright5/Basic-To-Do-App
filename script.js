var addButton = document.getElementById('add');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');


function createListElement() {
	var div = document.createElement('div');
	var li = document.createElement('li');
	var delButton = document.createElement('button');

	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add('task');
	li.appendChild(document.createTextNode(input.value));
	input.value = '';
	delButton.classList.add('deleteClass');
	delButton.innerHTML = 'Delete';
}

function doneFunction(task) {
	if (task.target.tagName === 'LI') {
		task.target.classList.toggle('doneClass');
	}
}

function deleteTask(task) {
	if (task.target.className === 'deleteClass') {
		task.target.parentElement.remove();
	}
}

function ULclickFunction(task) {
	doneFunction(task);
	deleteTask(task);
}

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

ul.addEventListener('click', ULclickFunction);
addButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);