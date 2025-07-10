let NewMain = document.getElementById("main");

NewMain.textContent = "This is the new main content";

NewMain.style.background = "green";

NewMain.style.color = "white";

NewMain.style.padding = "20px";


let Paras = document.getElementsByClassName("text")[1];

Paras.innerHTML = "<strong>NewPara</strong>";

let FirstPara = document.querySelector(".text")

FirstPara.innerText = "This is again the first paragraph";
FirstPara.innerHTML = "<strong>This is the first paragraph</strong>";


let AllParas = document.querySelectorAll(".text");

AllParas.forEach(Paras => {


    Paras.innerHTML = "<strong>NewPara</strong>";
});


let newData = document.createElement("h3");

newData.textContent = "Newest Heading";

document.body.appendChild(newData);

newData.style.color = "blue";

FirstPara.appendChild(newData);


let toRemove = document.getElementById("main");

toRemove.remove();




let smallBox = document.querySelector(".card");

smallBox.classList.remove("hidden");

smallBox.classList.add("Active");

smallBox.classList.toggle("dark");

let check = smallBox.classList.contains("dark");

console.log(check);


let InPut = document.getElementById("input-text");

InPut.style.fontSize = "50px"
console.log(InPut.value);

let Image = document.getElementById("image");

Image.setAttribute("src", "https://picsum.photos/900/400");


Image.setAttribute("alt", "new Image");

let currentSrc = Image.getAttribute("src");

console.log(currentSrc);