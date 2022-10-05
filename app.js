const inputField = document.querySelector('.input-field textarea');
const todolists = document.querySelector('.todolists');
const pendingNnum = document.querySelector('.pending-num');
const clearButton = document.querySelector('.clear-button');



function allTasks() {
    
    let tasks  = document.querySelectorAll(".pending")   
    
    pendingNnum.textContent = tasks.length === 0 ? "0" : tasks.length;
    
    
    let allLists = document.querySelectorAll('.list');  
    
    if (allLists.length > 0) {
        todolists.style.marginTop = " 20px";
        clearButton.style.pointerEvents = "auto"
        return
    }
        todolists.style.marginTop = ' 0px';
        clearButton.style.pointerEvents = 'none';
        
    
}












inputField.addEventListener('keyup',(e) => {
    
    let inputVal = inputField.value.trim();
    
    
    
    if(e.key === "Enter" && inputVal.length > 0){
        
        let liTag = `
                     <li class="list pending" onclick=" handleStatus(this) " >
                <input type="checkbox">
                <span class="task" >${inputVal}</span>
                <i class="uil uil-trash" onclick="deleteTask(this)" ></i>
            </li>

        `;
        
        todolists.insertAdjacentHTML("beforeend", liTag); //
        inputField.value = " ";
        allTasks();
    }
    
    
})


// checkbox

function handleStatus(e) {
    
    const checkbox = e.querySelector("input")
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending")
    allTasks();
}


// eliminar




clearButton.addEventListener("click",() => {
  
    todolists.innerHTML = ' '    
    allTasks();
})


function deleteTask(e)  {
    e.parentElement.remove();
    allTasks();
    
}