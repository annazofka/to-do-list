const addForm = document.querySelector(".add-form");
const list = document.querySelector(".todos");

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
