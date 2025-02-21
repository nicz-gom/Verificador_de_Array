let addElement = document.getElementById("add");
let removElement = document.getElementById("remov");
let inputOfListElement = document.getElementById("inputOfList");
let divButtonElement = document.getElementById("buttonAdd");
let ulElement = document.querySelector("ul");
let buttonVerifyElement = document.getElementById("verify");
let positionElement = document.getElementById("position");

let limit = 5;

let list = [];

function render(){
    ulElement.innerHTML = '';

    list.map((todo) => {
        let liElement = document.createElement("li");
        let pElement = document.createElement("p");
        let pText = document.createTextNode(todo);
        let checkboxElement = document.createElement("input");
        checkboxElement.setAttribute("type", "checkbox");
        
        pElement.appendChild(pText);
        liElement.appendChild(checkboxElement);
        liElement.appendChild(pElement);
        ulElement.appendChild(liElement);
    })
}

function add(){
    if(inputOfListElement.value.trim() === ''){
        alert('You need to type something!!');
    }else{
        alert("Object added successfully!!");

        list.push(inputOfListElement.value.toUpperCase());

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
    let position = prompt('Type the position you want remove:')
    if(position <= list.length && position > 0){
        let truePosition = Number(position);
        truePosition--;
        list.splice(truePosition,1);
        
        if(list.length < limit){
            divButtonElement.appendChild(addElement);
        }

        render();
    }else{
        alert("Your position is wrong!");
    }
}


function position(){
    let receiver = positionElement.value.toUpperCase();
    console.log(receiver);
    positionElement.value = '';
    if(receiver == ''){
        alert("You need to type something");
    }else{
        alert(`This is your element (${receiver}). Inserted successfully...`);
        verify(list, receiver);
    }
}

function verify(pList, pItem){
    if(pList == ''){
        alert("Not have anything in your list!!!");
    }else{
        alert(`Searching...`);
        for(let i = 0; i <= pList.length; i++){
            if(i == pItem){
                alert(`Element foud! Your element: ${pList[i-1]}`);
                break;
            }
            if(i == pList.length){
                alert("Element not foud!");
            }
        }
    }
}



removElement.onclick = delet;
addElement.onclick = add;
buttonVerifyElement.onclick = position;
