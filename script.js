let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click" ,()=> {
console.log(input.value);
btn.style.backgroundColor ="lightgreen"
    
let li = document.createElement("li")
li.textContent=input.value
 document.querySelector("ul").append(li)
input.value = ""

})

