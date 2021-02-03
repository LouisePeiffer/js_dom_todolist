// CIBLER LES ELEMENTS DU HTML
let todoInput = document.querySelector(".todoInput")
let todoButton = document.querySelector('.todoButton')
let todoList = document.querySelector(".todoList")

// EVENT
todoButton.addEventListener('click', addTodo)

// FUNCTIONS

// Cette fonctions crée les éléments qui ne sont pas dans le HTML
function addTodo() {
    // To Do Div
    let todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    // Créer les LI de la UL
    let newTodo = document.createElement("div")
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    // Créer DIV des Btns
    let divBtn = document.createElement("div")
    divBtn.classList.add("divBtn")
    newTodo.appendChild(divBtn)
    // Créer le bouton Check
    let checkButton = document.createElement("button")
    checkButton.innerHTML= '<i class="fas fa-check"></i>'
    checkButton.classList.add("checkButton")
    divBtn.appendChild(checkButton)
    // Bouton Delete
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML= '<i class="fas fa-trash-alt"></i>'
    deleteButton.classList.add("deleteButton")
    divBtn.appendChild(deleteButton)
    // Bouton Edit
    let editButton = document.createElement("button")
    editButton .innerHTML= '<i class="fas fa-edit"></i>'
    editButton .classList.add("editButton")
    divBtn.appendChild(editButton )
    // Ajouter Todo Div à TodoList
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}