//================================================================================
//Variables
//================================================================================
var container = $("container")
var hourOfTheDay = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"]
var rowNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


//================================================================================
//Building the presentation of the calendar 
//================================================================================

//TODO: Write the code that will build the hour blocks

for (let i = 0; i < hourOfTheDay.length; i++) {
    //adding the hour to the div
    var hour = $("<div>");
    hour.addClass("row");
    hour.attr("data-number", hourOfTheDay[i]);
    hour.text(hourOfTheDay[i]);
    hour.attr('id', 'myrow-' + i);
    $("#planner").append(hour);
    //adding the text block
}

for (let i = 0; i < rowNumber.length; i++) {
var inputField = $("INPUT");
inputField.addClass(textarea)
inputField.attr("INPUT")
$("myrow-[i]").append(inputField)
}

//================================================================================
//Content that goes inside the calendar
//================================================================================

    //TODO: Include the time in each block

    //TODO: Include an input field in each block


//================================================================================
//Saving the input from the calendar
//================================================================================

        //TODO: Save the input from each block to memory

    //TODO: Include a button for each block that will save the input from that block to memory, and that the memory persists after refresh is clicked

//================================================================================
//Connecting the calendar to a time and date finder
//================================================================================

//TODO: Connect a time and date finder to the code

//================================================================================
//Styling the date blocks
//================================================================================

    //TODO: Have the time and date finder style the hour blocks correctly

        //TODO: Style past blocks in grey

        //TODO: Style current block in red

        //TODO: Style future blocks in green
