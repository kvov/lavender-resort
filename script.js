"use strict";
$(document).ready(function () {
    //slider function
    $('.slider').bxSlider(
        {
            auto: true,
            autoControls: true,
            captions: true
        }
    );
});

//datepicker function
$( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
    $( "#datepicker2" ).datepicker({
        changeMonth: true,
        changeYear: true
    });
});

//form validation function
$( () => {
    $(":radio").change( () => {
        const radioButton = $(":radio:checked").val();
        if(radioButton == "yes") {
            $("#children").attr("disabled", false);
        } 
        else {
            $("#children").attr("disabled", true);
            $("#children").next().text("");
        }
    });
    $("#rooms").change(() =>{
        $("#fee").val((parseInt($("#rooms").val())) * 10);
    })
    
        
    $("#reserve_form").submit( evt => {
        let isValid = true;

        const arrival = $("#datepicker").val();
        if(arrival == "") {
            $("#datepicker").next().text("Select arrival date");
            isValid = false;
        }
        else {
            $("#datepicker").next().text("");
        }

        const departure = $("#datepicker2").val();
        if(departure == "") {
            $("#datepicker2").next().text("Select departure date");
            isValid = false;
        }
        else {
            $("#datepicker2").next().text("");
        }

        let rooms = $("#rooms").val();
        if(rooms == "") {
            $("#rooms").next().text("Enter the number of rooms");
            isValid = false;
        }
        else {
            $("#rooms").next().text("");
        }    
        
        

        const adults = $("#adults").val();
        if(adults == "") {
            $("#adults").next().text("Enter the number of adults");
            isValid = false;
        }
        else {
            $("#adults").next().text("");
        }

        if( !$("#children").attr("disabled") ) {
            const children = $("#children").val();
            if(children == "") {
                $("#children").next().text("Enter the number of children");
                isValid = false;
            }
            else {
                $("#children").next().text("");
            }
        }

        const first_name = $("#first_name").val().trim();
        if(first_name == "") {
            $("#first_name").next().text("Enter your first name");
            isValid = false;
        }
        else {
            $("#first_name").next().text("");
        } 

        const last_name = $("#last_name").val().trim();
        if(last_name == "") {
            $("#last_name").next().text("Enter your last namr");
            isValid = false;
        }
        else {
            $("#last_name").next().text("");
        } 
        const phonePattern = /\d{3}[\-]\d[3][\-]\d{4}/;
        const phone_number = $("#phone").val().trim();
        if(phone_number == "") {
            $("#phone").next().text("Enter your phone number");
            isValid = false;
        }
        else if ( !phonePattern.test(email) ) {
            $("#phone").next().text(
                "Must be 999-999-9999 format");
            isValid = false;
        }
        else {
            $("#phone").next().text("");
        } 
        
        if(isValid == false) {
            evt.preventDefault();
        }
    });
});

//tabs function
$( function() {
    $( "#tabs" ).tabs();
});

//accordion function
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
});
