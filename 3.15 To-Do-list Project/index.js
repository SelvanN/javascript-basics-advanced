
let myForm = document.getElementById("myForm")
let mytInput = document.getElementById("myInput")
let myList = document.getElementById("myList")


myForm.addEventListener("submit",
    (data) => {
        data.preventDefault()
        createItem(myInput.value)
    })
        
createItem = (d) => {
    let myTemplate = ` <li>${d} &#160; <button onclick="deleteItem(this)"> Delete </button></li><br>`
    myList.insertAdjacentHTML("beforeend", myTemplate)
    myInput.value=""
    myInput.focus()
}

function deleteItem(x){
    x.parentElement.remove()
}



