// CIBLER LES ELEMENTS DU HTML
let todoInput = document.querySelector(".todoInput")
let todoButton = document.querySelector('.todoButton')

let todoList = document.querySelector(".todoList")

let clearBtn = document.querySelector("#clearBtn")

let textToDo = document.querySelector('.todo-text')

let newTodo = document.querySelector('.todo-item')

let bouton1 = document.querySelector('#btnMenu1')
let bouton2 = document.querySelector('#btnMenu2')
let bouton3 = document.querySelector('#btnMenu3')


// EVENT
todoButton.addEventListener('click', addTodo)
todoInput.addEventListener('keyup', (e)=> {
    if (e.keyCode ===  13) {
        addTodo(e)
    }
})
todoList.addEventListener('click', deleteToDo)
todoList.addEventListener('click', checkToDo)
clearBtn.addEventListener('click', clearToDo)
todoList.addEventListener('dblclick', editToDoTexte)
todoList.addEventListener('click', editToDoButton)

bouton1.addEventListener('click', termineMenu)
bouton2.addEventListener('click', afaireMenu)
bouton3.addEventListener('click', toutMenu)

// FUNCTIONS

// CREER LES TACHES
function addTodo() {
    // To Do Div
    let todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    // Créer première tout do
    let newTodo = document.createElement("div")
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    // Créer Texte
    let textToDo = document.createElement("p")
    textToDo.classList.add("todo-text")
    textToDo.innerText = todoInput.value
    newTodo.appendChild(textToDo)
    // Créer DIV des Btns
    let divBtn = document.createElement("div")
    divBtn.classList.add("divBtn")
    newTodo.appendChild(divBtn)
    // Créer le bouton Check
    let checkButton = document.createElement("button")
    checkButton.innerHTML= '<i class="fas fa-check"></i>'
    checkButton.classList.add("checkButton")
    divBtn.appendChild(checkButton)
    console.log(checkButton);
    // Bouton Delete
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML= '<i class="fas fa-trash-alt"></i>'
    deleteButton.classList.add("deleteButton")
    divBtn.appendChild(deleteButton)
    console.log(deleteButton);
    // Bouton Edit
    let editButton = document.createElement("button")
    editButton.innerHTML= '<i class="fas fa-edit"></i>'
    editButton.classList.add("editButton")
    divBtn.appendChild(editButton )
    // Ajouter Todo Div à TodoList
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}

// RETIRER TACHES
function deleteToDo(e) {
    let item = e.target;
    //Supprimer un toDo
    if (item.classList[0] === "deleteButton") {
        let parentItem = item.parentElement.parentElement
        parentItem.remove()
    }
}

// CHECKER TACHES
function checkToDo(e) {
    let item = e.target;
    // Check la todo
    if (item.classList[0] === "checkButton") {
        let parentItem = item.parentElement.parentElement
        parentItem.classList.toggle("checked")
        console.log(parentItem);
    }
}

// EDIT TEXT
function editToDoTexte(e) {
    let item = e.target
    if (item.classList[0] === "todo-text") {
        let texte = item.innerText
        let inputTexte = document.createElement("input") 
        inputTexte.type = "text"
        inputTexte.value = texte
        item.innerText = ""
        item.appendChild(inputTexte)
        item.addEventListener('keyup', (e) => {
            if (e.keyCode ===  13) {
                let newTexte = inputTexte.value
                item.innerText = newTexte
            }
        })
    }
}

function editToDoButton(e) {
    let item = e.target
    if (item.classList[0] === "editButton") {
        let leTexte = item.parentElement.previousSibling
        let inputTexte2 = document.createElement("input") 
        inputTexte2.type = "text"
        inputTexte2.value = leTexte.innerText
        leTexte.innerText= ""
        leTexte.appendChild(inputTexte2)
        leTexte.addEventListener('keyup', (e) => {
            if (e.keyCode ===  13) {
                let newTexte = inputTexte2.value
                leTexte.innerText = newTexte
            }
        })
    }
}


// CLEAR LIST
function clearToDo() {
    document.querySelector(".todoList").innerHTML = "";
}


// LES MENUS 
// MENU TERMINE - COMPLETED

function termineMenu() {
    // classes sans "checked" : display-none
    let tabNode = todoList.children
    var tab = Array.from(tabNode)
    tab.forEach(element => {
        element.classList.remove("none")
        if (element.classList == "todo-item checked") {
        } else {
            element.classList.add("none")
        }
    });
}

// MENU A FAIRE

function afaireMenu() {
    let tabNode = todoList.children
    var tab = Array.from(tabNode)
    tab.forEach(element => {
        element.classList.remove("none")
        if (element.classList == "todo-item") {

        } else {
            element.classList.add("none")
        }
    });
}

// MENU TOUT

function toutMenu() {
    let tabNode = todoList.children
    var tab = Array.from(tabNode)
    tab.forEach(element => {
        element.classList.remove("none")
    });
}
