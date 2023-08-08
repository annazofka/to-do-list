const addForm = document.querySelector(".add-form");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// Add todos
const generateTemplateForToDo = (toDoInput) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${toDoInput}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const toDoInput = addForm.addtodo.value.trim(); //trim white spaces

  if (toDoInput.length) {
    generateTemplateForToDo(toDoInput);
    addForm.reset();
  }
});

// Delete todos:

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});

// Filter todos:

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLocaleLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
