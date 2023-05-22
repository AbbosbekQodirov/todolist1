const form = document.querySelector(".form")
const inputText = document.querySelector(".inputText");
const todoList = document.querySelector(".todoList");



form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const text = inputText.value.trim();

    if(text){
        todoList.innerHTML += `
            <li class = "list" >
                ${text} 
                <div class="btns">
                    <button class="check"><i class="fa-solid fa-check"></i></button>
                    <button class="trash"><i class="fa-solid fa-trash"></i></button>
                </div>
            </li>`;

        inputText.value = "";
    } else {
        alert("Please enter text")
    }





    
})


document.addEventListener("click" , (e)=>{
    if (e.target.className == "check") {
        e.target.parentElement.parentElement.classList.toggle("active")
    } else if (e.target.className == "trash") {
        e.target.parentElement.parentElement.remove()
    }
})




