var config = {
	listId: "todo-list",
	textBoxId: "textBox",
	addButtonId: "btnAdd",
	deleteLinkClass: "delete-link",
	editLinkClass: "edit-link",
	saveButtonClass: "save-btn",
	listItemValueClass: "item-value",
	createFormHtml: true
}

var todoList = (function (config){

	config = config || {}

	if (config.createFormHtml == true){
		createTextBoxHtml();
		createAddButtonHtml();
		createListHtml();
	}

	var addButton = document.getElementById(config.addButtonId),
			textBox = document.getElementById(config.textBoxId),
			list = document.getElementById(config.listId);

	addButton.addEventListener("click", addItem);

	function createListHtml(){

		var list = document.createElement('ul');

		if (config.listId != "" && config.listId != undefined && config.listId != null){
			list.setAttribute("id", config.listId) ; 
		} else {
			list.setAttribute("id", "todo-list");
		}

		document.body.appendChild(list);
	}

	function createTextBoxHtml(){

		var textBox = document.createElement('input');

		textBox.setAttribute("value", "");
		textBox.setAttribute("placeholder", "What's on the docket?");

		if (config.textBoxId != "" && config.textBoxId != undefined && config.textBoxId != null){
			textBox.setAttribute("id", config.textBoxId);
		} else {
			textBox.setAttribute("id", "text-box");
		}

		document.body.appendChild(textBox);
	}

	function createAddButtonHtml(){

		var button = document.createElement('button');

		button.innerText = "Add";

		if (config.addButtonId != "" && config.addButtonId != undefined && config.addButtonId != null){
			button.setAttribute("id", config.addButtonId)
		} else {
			button.setAttribute("id", "btnAdd");
		}

		document.body.appendChild(button);
	}

	function createDeleteLink(){
		
		var deleteLink = document.createElement('a');

		deleteLink.setAttribute("href", "#");
		deleteLink.setAttribute("class", config.deleteLinkClass);
		deleteLink.innerHTML = "x";
		deleteLink.addEventListener("click", removeItem);
		return deleteLink;
	}

	function createEditLink(){

		var editLink = document.createElement('a');

		editLink.setAttribute("href", "#");
		editLink.setAttribute("class", config.editLinkClass);
		editLink.innerHTML = "edit";
		editLink.addEventListener("click", editItem);
		return editLink;
	}

	function createSaveButton(){

		var saveButton = document.createElement('button')

		saveButton.setAttribute("href", "#");
		saveButton.setAttribute("class", config.saveButtonClass);
		saveButton.innerHTML = "save";
		saveButton.addEventListener("click", saveItem);
		return saveButton;
	}

	function addItem(){
		
		var listElement = document.createElement('li'),
				span = document.createElement('span');

		if (textBox.value){
			span.innerText = textBox.value;
			span.setAttribute('class', 'item-value');

			listElement.appendChild(span);
			listElement.appendChild(createDeleteLink());
			listElement.appendChild(createEditLink());
			
			list.appendChild(listElement);
		} else {
			alert("Can't add an empty note!");
		}

		textBox.value = "";
	}

	function removeItem(){
		
		var parent = this.parentNode.parentNode,
				child = this.parentNode;

		parent.removeChild(child);
	}

	function editItem(){

		var note = this.parentNode,
				span = note.childNodes[0],
				input = document.createElement('input');

		input.setAttribute("value", span.innerText)
		note.replaceChild(input, span);
		note.replaceChild(createSaveButton(), note.childNodes[2]);
	}

	function saveItem(){

		var note = this.parentNode,
				input = note.childNodes[0],
				span = document.createElement('span'),
				newValue = input.value;

		span.setAttribute('class', config.listItemValueClass);

		if (input.value != ""){
			note.replaceChild(span, input);
			span.innerText = newValue;
			note.replaceChild(createEditLink(), note.childNodes[2]);
		} else {
			alert("Can't save an empty note!")
		}

	}
})(config);