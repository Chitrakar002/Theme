const container = document.querySelector('.container');
// console.log(container);
const paragraph = document.getElementById('para');
const head = document.getElementById('heading');
const option = document.querySelector('.option');
const btn = document.getElementById('button');
btn.addEventListener('click',()=>{
if(option.value==="Dark")
{
container.style.backgroundColor = "Black";
paragraph.style.color = "white";
head.style.color = "white";
head.style.fontFamily="verdana";
}
if(option.value==="Ocean")
{
container.style.backgroundColor = "aqua";
paragraph.style.color = "blue";
head.style.color = "black";
head.style.fontFamily="times new roman";
}
if(option.value==="Daybreak"){
container.style.backgroundColor = "gold";
paragraph.style.color = "black";
head.style.color = "red";
head.style.fontFamily="calibri";
}
if(option.value==="None")
{
    container.style.backgroundColor="antiquewhite";
    paragraph.style.color ="black";
    head.style.color = "black";
    head.style.fontFamily= "Courier New', Courier, monospace"
}
})

