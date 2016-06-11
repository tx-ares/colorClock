console.log("hello worldzz!")

var dateEl = document.querySelector(".time")
var hexColorEl = document.querySelector(".hexColor")

dateEl.innerHTML = new Date().getHours() +":"+ new Date().getMinutes() + ":"+ new Date().getSeconds()