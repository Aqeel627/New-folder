let inputtext = document.getElementById('input-text')
let addtask = document.getElementById('addtask')
let tasklist = document.getElementById('tesklist')

addtask.addEventListener("click", () => {
    let tasktext = inputtext.value.trim()
    if (tasktext) {
        add(tasktext)
        inputtext.value = ""
    }
})
function add(tasktext) {
    let li = document.createElement("li")
    li.classList.add('list-item')
    li.textContent = tasktext

    let createbtn = document.createElement("button")
    createbtn.textContent = "Edit"
    createbtn.classList.add("edit-btn")
    createbtn.addEventListener('click',()=>{
        let newtask = prompt("Edit task", tasktext)
        if(newtask){
            li.firstChild.textContent = newtask
        }
    })

    let deletebtn = document.createElement('button')
    deletebtn.textContent = "Delete"
    deletebtn.classList.add("del-btn")
    deletebtn.addEventListener('click',()=>{
        li.remove()
    })



    tasklist.appendChild(li)
    li.appendChild(createbtn)
    li.appendChild(deletebtn)
}
