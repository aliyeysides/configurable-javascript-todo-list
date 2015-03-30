# configurable-javascript-todo-list
a flexible javascript todo list that let's you configure your class names

## Config Object
The purpose of this script is to create a bare bones todo list with easy configuration. A config object becomes passed into the main function which allows for easy setup of class and id names along with document writing permissions.

The default config object has the following values:

```
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
```

### createFormHTML
When set to true, the script will write the todo list form onto the document. If set to false, you must create your own html elements.

