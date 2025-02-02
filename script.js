let addElement = document.getElementById("add");
let removElement = document.getElementById("remov");
let inputOfListElement = document.getElementById("inputOfList");
let ulElement = document.querySelector("ul");
let limit = 2;

let list = [];

function render(){
    ulElement.innerHTML = '';

    list.map((todo) => {
        let liElement = document.createElement("li");
        let pElement = document.createElement("p");
        let pText = document.createTextNode(todo);
        
        pElement.appendChild(pText);
        liElement.appendChild(pElement);
        ulElement.appendChild(liElement);
    })
}

function add(){
    if(inputOfListElement.value.trim() === ''){
        alert('You need to type something!!');
    }else{
        alert("Object added successfully!!");

        list.push(inputOfListElement.value);

        inputOfListElement.value = '';
        inputOfListElement.focus();
        if(list.length === limit){
            addElement.remove();
            alert("You have reached the list item limit!");
        }

        render();

    }
}

function delet(){
    let position = prompt('Type the position you want remove:');

    if(position <= list.length && position > 0){
        let truePosition = Number(position);
        truePosition--;
        list.splice(truePosition,1);
        
        if(list.length < limit){
            addElement.innerHTML;
        }

        render();
    }else{
        alert("Your position is wrong!");
    }
}


function verify(pList, pIten){

}

removElement.onclick = delet;
addElement.onclick = add;
