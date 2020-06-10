const todos = getSavedTodos();

//filter object
const filters = {
    searchText: ''
}


filterTodos(todos, filters);

document.querySelector("#search").addEventListener("input", function(evt) {
    filters.searchText = evt.target.value;
    filterTodos(todos, filters);
});
document.querySelector("#create-todos").addEventListener("click", function(evt) {
    todos.push({
        text: 'playing football',
        completed: false,
    });
    saveTodos(todos);
    filterTodos(todos, filters);
})

// todos.forEach(function(todo) {
//     let p = document.createElement("p");
//     p.textContent = todo.text;
//     document.querySelector("body").appendChild(p);
// });

// document.querySelector("#search").addEventListener("input", function(e) {
//     console.log(e.target.value);
// })



// const link = () => {
//     let data = document.querySelector("#remove").addEventListener("click", function() {
//         document.querySelectorAll("p").forEach(function(p) {
//             p.remove();
//         })
//     });
//     return data;
// };

// link();

// const button2 = () => {
//     let data1 = document.querySelector("#the").addEventListener("click", function() {
//         document.querySelectorAll("b").forEach(function(b) {
//             b.remove();
//         })

//     });
//     return data1;
// };
// button2();

// let paragraph = document.querySelectorAll("p");
// paragraph.forEach(function(para) {
//     if (para.textContent.includes("the")) {
//         para.remove();
//     }
// })
// let data = document.querySelectorAll('p');
// data.forEach(function(p) {
//     p.textContent = todos.text;
// });

// const incompleteTodos = todos.filter(function(todo) {
//     return !todo.completed;
// });


// const display = () => {
//     let h2 = document.createElement("h2");
//     h2.textContent = `you have ${incompleteTodos.length} todos left`;
//     document.querySelector("body").appendChild(h2);
//     return h2;
// };
// display();