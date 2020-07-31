$(document).ready(function(){
    // //displaying current date and time at top of page
    //create a span element to store our Day of the week
    var dayOfWeekSpanEl = $("<span class = dayOfWeekSpanEl>");
    //get day of the week value from moment() library
    var dayOfWeek = moment().format('dddd');
    console.log(dayOfWeek); 
    //add class to day of week for css styling
    dayOfWeekSpanEl.text(dayOfWeek);
    //create span element to store current date
    var currentDateSpanEl = $("<span class = currentDateSpanEl>");
    //get current date value from moment() library
    var currentDate = moment().format(' - MMMM Do YYYY');
    currentDateSpanEl.text(currentDate);
    console.log(currentDate);
    // console.log(currentDate);
    
    $("#currentDay").append(dayOfWeekSpanEl,currentDateSpanEl);

    // var update = function() {
    //     date = moment(new Date());
    //     datetime.html(date.format("dddd, MMMM do YYYY, h:mm:ss a"));
    // };
});
// update();
// setInterval(update, 1000);


    //create predefined amount of timeblocks to create
    var timeBlockCount = 9; //9AM - 5PM

    function createTimeBlocks(){
        var containerEl = $(".container");
        var newRow = $("<div>").addClass("row text-center").attr("data-name", "dynamicRow"); //add class of ROW
        $(containerEl).append(newRow);
        var dateCol = $("<div class = col-md-1>").attr("data-name", "dynamicDateCol").css("background-color", "blue");
        var contentCol = $("<div class = col-md-10>").attr("data-name", "dynamicContentCol").css("background-color", "green");
        var saveCol = $("<div class = col-md-1>").attr("data-name", "dynamicSaveCol").css("background-color","teal");
        newRow.append(dateCol, contentCol, saveCol);
        containerEl.append(newRow);
        

    }
    // for loop to create a time block for each index until we reached our maximum timeblock count
    for (var i = 0; i < timeBlockCount; i++){
        createTimeBlocks();
    }
