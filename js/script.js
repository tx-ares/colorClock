console.log("hello worldzz!")

// Capturing DOM nodes.  Gotta catch'em all . Gotta catch'em all!

var timeEl = document.querySelector(".time")
var hexColorEl = document.querySelector(".hexColor")
var bodyEl = document.querySelector('body')


// Getting the time and turning it readable to humans.  (In HH:MM:SS format)

function updateTime() {
	console.log('tick')

var d = new Date()

var currentHours = d.getHours()
var currentMinutes = d.getMinutes()
var currentSeconds = d.getSeconds()

// Choose either "AM" or "PM" as appropriate
var timeOfDay = ( d.getHours() < 12 ) ? "AM" : "PM";


// Convert an hours component of "0" to "12"
currentHours = ( currentHours == 0 ) ? 12 : currentHours;

// Pad the minutes and seconds with leading zeros, if needed
currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;


// Concatenate the string and display it to the humons!
timeEl.innerHTML = currentHours +":"+ currentMinutes + ":"+ currentSeconds + timeOfDay

// Now to update the hexcolor of our radial gradient background according to what time it is.

var hexHours = (parseInt(currentHours) - 10) + currentHours.toString(16)
var hexMinutes = currentMinutes.toString(16)
var hexSeconds = currentSeconds.toString(16)

hexColorEl.innerHTML= '#' + hexHours + hexMinutes + hexSeconds 

var updatedHexColor = hexColorEl.innerHTML

console.log(bodyEl.style.backgroundImage)
console.log(timeEl.style.position)

// bodyEl.style.backgroundImage = "radial-gradient(circle at 50% 50% , " + updatedHexColor + "0%, #0000FF 100%);"

// var updatedHexColorJQ = this.updatedHexColor

// console.log($('body').css('background-image', 'radial-gradient(circle at 50% 50%' + updatedHexColorJQ )
// )
// timeEl.style.backgroundImage = "radial-gradient(circle at 50% 50% , " + updatedHexColor + "0%, #0000FF 100%);"

}

setInterval(updateTime, 1000)








