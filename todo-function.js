// Read existing todos from localStorage
var getSavedTodos = function() {
    var notesJSON = localStorage.getItem("todos");
    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
};

//save todos to the localStorage
var saveTodos = function(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}
const filterTodos = function todosapp(todos, filters) {
    var filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })


    document.querySelector("#todos").innerHTML = "";

    filteredTodos.forEach(function(todo) {
        var todoEl = document.createElement("p");
        todoEl.textContent = todo.text;
        document.querySelector("#todos").appendChild(todoEl);
    });
};