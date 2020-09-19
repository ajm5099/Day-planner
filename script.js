//================================================================================
//Variables
//================================================================================
var hourOfTheDay = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"]
var rowNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var currentTime = moment().format('MMMM Do YYYY, h:mm a');
var currentHour = JSON.parse(moment().format("h"));
var amPm = (moment().format("a"))



//================================================================================
//Building the presentation of the calendar 
//================================================================================

// Using a for loop
for (let i = 0; i < hourOfTheDay.length; i++) {
console.log(amPm);
// loop over my array of hours and create a div for row, create div for hours, textarea, and a button, and give these ares content
    let rowMaker = $("<div class=\"row time-block\">");
    let hourMaker =$("<div class=\"col-md-1 hour\">" + hourOfTheDay[i] + "</div>");
    // var rowStyle = $("commentrow");
    // var rowStyle = $("textarea<");
    
    //determine how to style the text blocks
    let commentMaker = $("<textarea class=\"col-md-10 textarea\">");
    if (amPm == "am"){
        if (currentHour < hourOfTheDay[i]) {
            commentMaker.addClass('past');
        } else if (currentHour == hourOfTheDay[i]) {
            commentMaker.addClass('present');
        } else if (currentHour > hourOfTheDay[i])  {
            commentMaker.addClass('future');
        }
    } 
    else  {
        if (currentHour > hourOfTheDay[i]) {
            commentMaker.addClass('past');
        } else if (currentHour == hourOfTheDay[i]) {
            commentMaker.addClass('present');
        } else {
            commentMaker.addClass('future');
        }
    }
    // JSON.stringify(rowStyle)
    // console.log("Rowstyle = ", rowStyle)
    
    // let commentMaker = $("<textarea class=\"col-md-8 textarea\">"); 
    let buttonMaker = $("<button class=\"col-md-1 saveBtn\">")
    rowMaker.attr('id', 'myrow-' + i);
    commentMaker.attr('name', 'commentrow-' + i); //this may not be necessary for local storage
    buttonMaker.text("save")
    
    rowMaker.append(hourMaker, commentMaker, buttonMaker)
    $(".container").append(rowMaker)

    

    

}

//TODO: Show time on top of calendar, using moment.js grab the time, and append it to the p id currentDay


$("#currentDay").addClass("time-block");
$("#currentDay").append(currentTime);



//TODO: how can I compare the hours of my rows, to the current time (use moment.js to get the current time and compare to the time that is being assigned to the row)
    


//TODO:Give the elements the classes that they need. Using an if statement we can check using moment.js to see if the hour that we are looping over is past the current hour, if so give the text area the class of past

//TODO: Create a click event listener for the buttons
var appts = ["a note"];

function storeAppts() {
    localStorage.setItem("appts", JSON.stringify(appts))
}

var apptInput = document.querySelector('[name="commentrow"]')
document.querySelector(".container").addEventListener("click", function(event) {
    if(event.target.matches("button")){
    event.preventDefault();
    var apptText = apptInput.value.trim();
    if (apptText === "") {
        return;
    }
    appts.push(apptText);
    apptInput.value = ""
        storeAppts();
    }
    
})

$(function() {
    $('input[type="button"]').click(function() { alert('You clicked button with ID:' + this.name); });
});


//TODO: Grab the value of the text area and save it to a variable (I need to be able to save the text from the text area that is in the same row as my button)






//TODO: using localStorage.setItem save the text to local storage

localStorage.setItem("test", "my notes 1") //first value is the key, second is the value
localStorage.setItem("test1", "my notes 2")

//TODO: Retrieve the data from local storage using localStorage.getItem and show them back on the text area that they belong to (how can I know what text from local storage goes to what text area?)

function init() {
    var storedAppts = JSON.parse(localStorage.getItem("appts"))
    if (storedAppts !== null) {
        appts = storedAppts;
    }
    renderAppts() //I have to build a function to render the todos to their correct areas
}



var text1FromLocalStorage= localStorage.getItem("test") //getting the text test using the assigned key from earlier
$(".first").text(text1FromLocalStorage) //.first is the id for what we are trying to get the text from





