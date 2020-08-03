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
    //     dayOfWeek = moment(new Date());
    //     datetime.html(date.format("dddd, MMMM do YYYY, h:mm:ss a"));
    // };
    // update;
    // setInterval(update, 1000);

var timeSlots = ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", 
"12 PM","1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "6 PM", "9 PM", "10 PM", "11 PM"];
console.log(timeSlots);
    //create predefined amount of timeblocks to create
    var timeBlockCount = 9; //9AM - 5PM # of hours I want to be available
    //hour I want to start schedule at
    var timeDayStart = 9;
    // var text = "";

    function storeNotes(key, value){
        // take our date-names for each content column and store it as our key
        //set the key value to the content in the textarea of our content column
        localStorage.setItem(key, value);
    }
    var key = "";
    var value = "";

    function pullNotes(){
        // var storedNotes = localStorage.getItem(key);
        console.log(JSON.parse(localStorage.getItem(key)));
            // $(key).children("textarea").val = storedNotes;
            // if (storedNotes !== null) {
            //     value = storedNotes;
            //   }
    }


    function createTimeBlocks(){
        var containerEl = $(".container");
        //Create our dynamic row
        var newRow = $("<div>").addClass("row text-center").attr("data-name", dynamicRow); 
        //Create 3 dynamic columns
        var timeCol = $("<div class = col-md-1>").addClass("timeCol").attr("data-name", dynamicTimeCol);
        var contentCol = $("<div class = col-md-10>").addClass("contentCol").attr("data-name", dynamicContentCol);
        var saveCol = $("<div class = col-md-1>").addClass("saveCol").attr("data-name", dynamicSaveCol);
        
        //Append correct time to each individual time block
        var timeColContent = timeCol.text(timeSlots[i+timeDayStart]);
        //Section for handling form input and output in our contents column
        // create a form element, an input element, and append the input element to the form
        //we will use the form placeholder to display previously saved content
        var contentColForm = contentCol.append("<form class = notes>");
        var contentColFormTextarea = $("<textarea type = 'submit' class = 'hourlyNote'>");
        
        saveCol.on("click", function(){
             key = $(this).parent().attr("data-name");
             value = $(this).siblings(".contentCol").children("textarea").val();
            // text = contentColFormTextarea.val();
            // console.log(key, value);
            storeNotes(key, value);
        });
        
        console.log(contentColFormTextarea.val());
        contentColForm.append(contentColFormTextarea);
        //append save button icon to individual save column block
        var saveColContent = saveCol.append("<i class='fas fa-save'></i>");
        //append our dynamically created columns to our dynamically created row
        newRow.append(timeCol, contentCol, saveCol);
        //append our dyanimically generated row to our HTML container
        containerEl.append(newRow);


    }
    pullNotes();
    // for loop to create a time block for each index until we reached our maximum timeblock count
    for (var i = 0; i < timeBlockCount; i++){
        var dynamicRow = "dynamicRow_" + String(i);
        var dynamicTimeCol = "dynamicTimeCol_" + String(i);
        var dynamicContentCol = "dynamicContentCol_" + String(i);
        var dynamicSaveCol = "dynamicSaveCol_" + String(i);
        // console.log(dynamicRow, dynamicTimeCol, dynamicContentCol, dynamicSaveCol);
        createTimeBlocks();
    }
});