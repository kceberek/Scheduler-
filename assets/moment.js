//task 1 - display current day at top --- complete
//task 2 - make condition to change time block color (past, present, future)
//task 3 - make a click function/event => save text to localStorage --- complete
//task 4 - make sure info from localStorage persists/stays --- complete 1/10

$(document).ready(function() {

    //Diplaying current day with moment
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    //click function to save info
    $(".saveBtn").on("click", function() {
        //grab info from text area
        var hour = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();

        console.log(hour);
        console.log(text);

        //save to localStorage
        localStorage.setItem(hour, text);
    });

    //Grabbing info from localStorage to perswist to the page
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));

    //create a function to check if the timeblock is in the past/present/future and add apporpriate class
    
})