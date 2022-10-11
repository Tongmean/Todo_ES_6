const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const generateTemplate = (todo)=>{
    const html = `
        <li class="list-group-item d-flex justify-content-between" >
            <span>${todo}</span>
            <i class="fa fa-trash delete"></i>
        </li>
    `;
    list.innerHTML += html;
};
addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim()
    if(todo.length > 0    ){
        generateTemplate(todo);
        addForm.reset(); 
    };
});
//Delete
list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    };
});


const filterTodos = (term)=>{
    Array.from(list.children)
    .filter((todo)=>{
        return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo)=>{
        return todo.classList.add('filtered');
    })

    Array.from(list.children)
    .filter((todo)=>{
        return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo)=>{
        return todo.classList.remove('filtered');
    })
};

// key event
search.addEventListener('keyup', ()=>{
    const term =search.value.trim().toLowerCase();
    filterTodos(term);
});