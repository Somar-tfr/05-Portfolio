const listitems = ["listwerbinich", "listprojekte", "listlebenslauf", "listzertifikate","listblog", "listkontakt",
    "listfooterwerbinich", "listfooterprojekte", "listfooterlebenslauf", "listfooterzertifikate", "listfooterblog", "listfooterkontakt" ];
const listitemsObjects = []

listitems.forEach(function(item){
    listitemsObjects.push(document.getElementById(item));
})

//changes
function mouseClick(event){
    event.target.style.backgroundColor = "#F25224";
    event.target.style.color = "white";
}

function mouseUp(event){
    event.target.style.backgroundColor = "";
    event.target.style.color = "";
}

function mouseOver(event){
    event.target.style.color = "black";
    event.target.style.backgroundColor = "#EDB403"
}

function mouseOut(event){
    event.target.style.color = "";
    event.target.style.backgroundColor = "";
}

//eventhandler

function handlerMouseList(obj){
    obj.onmousedown = mouseClick;
    obj.onmouseup = mouseUp;
    obj.onmouseover = mouseOver;
    obj.onmouseout = mouseOut;
}

//a loop for all listitems

listitemsObjects.forEach(handlerMouseList);