const taskInput = document.querySelector('input')
const taskAddBtn = document.querySelector('.btn')

const activeTaskBlock = document.querySelector('.tasks__active')
const complitedTaskBlock = document.querySelector('.tasks__complete')

let content

function taskActive(content) {
    let task = document.createElement('div')
    task.classList.add('task')
    let activeCircle = document.createElement('div')
    activeCircle.classList.add('circle__active')
    task.append(content,activeCircle)
    activeTaskBlock.append(task)
    taskInput.value = ''
}

function changeCirlce(element,classAdd,classDelete){
    element.classList.remove(classDelete)
    element.classList.add(classAdd)
}  


function taskComplited() {
    activeTaskBlock.addEventListener('click', (e) => {
        target = e.target
        if (target.classList.contains('circle__active')){
            changeCirlce(target,'circle__completed','circle__active')
            complitedTaskBlock.append(target.parentNode)
        }
    })
}

function enterTask(){
    if (content != undefined){
        taskActive(content)
        content = undefined
    }
}

function newTask() {
    taskInput.addEventListener('input', (e) => {
        content = taskInput.value
    })
    taskAddBtn.addEventListener('click', () => {
        enterTask()
    })
    document.addEventListener('keydown', (e) => {
        if (e.keyCode == 13){
            enterTask()
        }
    })
    taskComplited()
}

newTask()