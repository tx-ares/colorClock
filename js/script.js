console.log("hello worldzz!")

// Capturing DOM nodes.  Gotta catch'em all . Gotta catch'em all!

var timeEl = document.querySelector(".time")
var hexColorEl = document.querySelector(".hexColor")
var bodyEl = document.querySelector('body')
var lineEl = document.querySelector('.line')
var ringEl = document.querySelector(".loader-ring-light")


var lineWidth = parseInt(lineEl.style.width)

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
currentHours = currentHours % 12
currentHours = ( currentHours == 0 ) ? 12 : currentHours;

// Pad the minutes and seconds with leading zeros, if needed
currentHours = (currentHours < 10 ? "0": "") + currentHours;
currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;


// Concatenate the string and display it to the humons!
timeEl.innerHTML = currentHours + ":" + currentMinutes + ":" + currentSeconds + timeOfDay

// Now to update the hexcolor of our radial gradient background according to what time it is.

var hexHours =  currentHours.toString(16)
var hexMinutes = currentMinutes.toString(16)
var hexSeconds = currentSeconds.toString(16)

hexColorEl.innerHTML = '#' + hexHours + hexMinutes + hexSeconds 

// Hex color is now concatenated into a string readable by CSS.
var updatedHexColor = hexColorEl.innerHTML

// Passing in the updated hex color to our background. 
bodyEl.style.background = 'radial-gradient(circle, #FFF , rgba(10,100,100,.5), '+ updatedHexColor +' , #FFF)'

// Make ring change color too.. We gettin' fancy now.
ringEl.style.boxShadow = '0 4px 0 ' +  updatedHexColor + ' inset'

// Make the line grow over time.

function addUnit(){
	lineWidth = currentSeconds * 2
	lineEl.style.width = lineWidth + "px"
	}

addUnit()

}


setInterval(updateTime, 1000)








