var currentDay = $("#currentDay")
//currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));


// This way the time runs dynamically.
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    currentDay.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});


//Setting the info to a local Storage.

$(".btn").on("click",function(){

    var inputValue = $(this).siblings(".description").val();

    var id = $(this).parent().attr("id");
    
    localStorage.setItem(id, inputValue);
})

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));



function colorChange(){
    var currentHour = moment().hours();

    $(".time-block").each(function(){

        var currentId = $(this).attr("id");

        if(currentId < currentHour){
            $(this).addClass("past")
        }

        else if(currentId > currentHour){
            $(this).addClass("future");
        }

        else{$(this).addClass("present")}

    })

}

colorChange();






