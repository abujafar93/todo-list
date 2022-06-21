const addForm = document.querySelector('.addTodo');
const list = document.querySelector('.myTodo');


const generateTemplate = todo => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="text-light">${todo}</span>
    <i class="fa-solid fa-trash-can delete"></i>
  </li>
  ;`


  list.innerHTML += html

};

addForm.addEventListener('submit', e => {

  e.preventDefault();

  const todo = addForm.addTodo.value.trim();
  console.log(todo)

  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  };
});


// Delete Todo
list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
})