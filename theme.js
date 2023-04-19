const container = document.querySelector('.container');
// console.log(container);
const paragraph = document.getElementById('para');
const head = document.getElementById('heading');
const option = document.querySelector('.option');
const btn = document.getElementById('button');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');

btn.addEventListener('click',()=>{
if(option.value==="Dark")
{
container.style.backgroundColor = "Black";
paragraph.style.color = "white";
paragraph.style.fontWeight = `${option2.value}`
paragraph.style.fontStyle = `${option3.value}`
head.style.color = "white";
head.style.fontFamily="verdana";
}
if(option.value==="Ocean")
{
container.style.backgroundColor = "aqua";
paragraph.style.color = "blue";
paragraph.style.fontWeight = `${option2.value}`
paragraph.style.fontStyle = `${option3.value}`
head.style.color = "black";
head.style.fontFamily="times new roman";
}
if(option.value==="Daybreak"){
container.style.backgroundColor = "tomato";
paragraph.style.color = "black";
paragraph.style.fontWeight = `${option2.value}`
paragraph.style.fontStyle = `${option3.value}`
head.style.color = "yellow";
head.style.fontFamily="calibri";
}
if(option.value==="NightFall"){
    container.style.backgroundColor = "gold";
    paragraph.style.color = "black";
    paragraph.style.fontWeight = `${option2.value}`
    paragraph.style.fontStyle = `${option3.value}`
    head.style.color = "blue";
    head.style.fontFamily="Arial Rounded MT";
    }
    if(option.value==="Golden"){
        container.style.backgroundColor = "black";
        paragraph.style.color = "gold";
        paragraph.style.fontWeight = `${option2.value}`
        paragraph.style.fontStyle = `${option3.value}`
        head.style.color = "white";
        head.style.fontFamily="Tahoma";
        }
if(option.value==="None")
{
    container.style.backgroundColor="antiquewhite";
    paragraph.style.color ="black";
    paragraph.style.fontWeight = `${option2.value}`
    paragraph.style.fontStyle = `${option3.value}`
    head.style.color = "black";
    paragraph.style.fontFamily='Arial';
    head.style.fontFamily= 'Arial';
}

})


