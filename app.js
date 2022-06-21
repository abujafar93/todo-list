const addForm = document.querySelector('.addTodo');
const list = document.querySelector('.myTodo');
const search = document.querySelector('.search input');


const generateTemplate = todo => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="text-light">${todo}</span>
    <i class="text-light fa-solid fa-trash-can delete"></i>
  </li>`


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
  };
});

// keyup event
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))  
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};


search.addEventListener('keyup', () =>{
  const term = search.value.trim();
  filterTodos(term);
});