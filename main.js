let container = document.getElementsByClassName("container");
let items=["martina","asaad","hello","world","any","words","to","test"]

items.forEach(item => {
    let ele=document.createElement('div');

    ele.setAttribute("class","item");
    ele.innerHTML=item;
    container[0].appendChild(ele);
});