var inpFieds = document.getElementById('add-list-task')

var list =  document.getElementById('list')

function add(){
    var inputEl = inpFieds.value
    var listEl = list
    var itemEl = document.createElement("li")
    itemEl.setAttribute('class',"item")
    itemEl.textContent = inputEl
    listEl.appendChild(itemEl)
    var cut = document.createElement('div')
    cut.setAttribute('class',"cross")
    cut.innerHTML = "X";
    listEl.appendChild(cut)
    listEl.addEventListener("click",function (){
        itemEl.style.textDecoration = "line-through"
    })
    cut.addEventListener("click", function(){
        itemEl.remove()
        cut.remove()
    })
    
}