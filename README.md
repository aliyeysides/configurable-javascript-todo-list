# configurable-javascript-todo-list
a flexible javascript todo list that let's you configure your class names and add functionality to exsisting elements.

## Config Object
The purpose of this script is to create a bare bones todo list with easy configuration. A config object becomes passed into the main function which allows for easy setup of class and id names along with document writing permissions.

The default config object has the following values:

```javascript
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

### listId
Specify which element on the document will house the todo list elements when created.

### textBoxId
Specify which element on the document will be the input text field for the todo list items.

### addButtonId
Specify which element on the document will become the add button for the todo list.

### deleteLinkClass | editLinkClass | saveButtonClass | listItemValueClass
1. deleteLinkClass: the class name for all delete links
2. editLinkClass: the class name for all edit links
3. saveButtonClass: the class name for all save buttons
4. listItemValueClass: the class name for all todo list item values

### createFormHTML
When set to true, the script will write the todo list form onto the document. If set to false, you must create your own html elements.

