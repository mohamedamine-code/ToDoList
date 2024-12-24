const input = document.querySelector("#input");
const list =document.querySelector(".list");
function add(){
    if(input.value === ''){
        alert("Say Somthing ! ");
    }
    else{
        let li =document.createElement('li');
        li.innerHTML=input.value;
        list.appendChild(li);

        let x=document.createElement('span');
        x.innerHTML="x";
        li.appendChild(x);
    }
    input.value="";
    saveTask()
}

list.addEventListener("click",function(e){
    if(e.target.tagName ==="SPAN" ){
        e.target.parentElement.remove();
        saveTask();
    }
    if(e.target.tagName === "LI" ){
        e.target.classList.toggle("chcked")
    }
})

function saveTask(){
    localStorage.setItem("D1",list.innerHTML);
}
function showTask(){
    list.innerHTML=localStorage.getItem("D1");
}
showTask()