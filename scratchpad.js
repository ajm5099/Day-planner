//================================================================================
//Code from Building the Calendar on 9-17 
//================================================================================

    rowCreation();
    inputFieldCreation();

function rowCreation() {
    var RowMaker = $("<div>");
    RowMaker.addClass("row time-block");
    RowMaker.attr("id", hourOfTheDay[i]);
    RowMaker.text(hourOfTheDay[i]);
    RowMaker.attr('id', 'myrow-' + i);
    $(".container").append(RowMaker);
}

function inputFieldCreation() {
    var commentMaker = $("<div>")
    commentMaker.addClass("col-md-8 textarea");
    commentMaker.text("Click to add an event")
    $(".time-block").append(commentMaker);
}


    
    adding the hour to the div
    
    
    adding the text block
    var hour = $("<INPUT>");
    hour.addClass("row");
    hour.attr("data-number", hourOfTheDay[i]); //keep these on the input field and textbox
    hour.text(hourOfTheDay[i]);
    hour.attr('id', 'myrow-' + i);
    $("#" + hourOfTheDay[i]).append(hour);

//================================================================================
//PsuedoCode from Building the Calendar on 9-17 
//================================================================================

 for (let i = 0; i < hourOfTheDay.length; i++) {
    //adding the hour to the div
    var hour = $("<div>");
    hour.addClass("row");
    hour.attr("id", hourOfTheDay[i]);
    hour.text(hourOfTheDay[i]);
    // hour.attr('id', 'myrow-' + i);
    $("#planner").append(hour);
    //adding the text block
    var hour = $("<INPUT>");
    hour.addClass("row");
    hour.attr("data-number", hourOfTheDay[i]); //keep these on the input field and textbox
    hour.text(hourOfTheDay[i]);
    hour.attr('id', 'myrow-' + i);
    $("#" + hourOfTheDay[i]).append(hour);
}

console.log(moment().format());




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