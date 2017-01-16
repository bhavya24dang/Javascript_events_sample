var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");
// console.log(items);

for (var i = 0; i < items.length; i++) {
	items[i].addEventListener("click", editItem);
	items[i].addEventListener("blur", updateItem);
	items[i].addEventListener("keypress", itemKeyPress);
}

function editItem() {
	console.log(this);
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	console.log("my current value is ", input.value.length);
	input.setSelectionRange(0, input.value.length);
}

function updateItem() {
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function itemKeyPress() {
	console.log(event.which);
	if(event.which == 13){
		updateItem.call(this);
	}
}
