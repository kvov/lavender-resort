"use strict";
// $(document).ready(function () {
//     $('.slider').bxSlider(
//         {
//             auto: true,
//             autoControls: true,
//             captions: true
//         }
//     );
// });

//datepicker function
// $( function() {
//     $( "#datepicker" ).datepicker({
//         changeMonth: true,
//         changeYear: true,
//         minDate: 0
//     });
//     $( "#datepicker2" ).datepicker({
//         changeMonth: true,
//         changeYear: true,
//         minDate: 1
//     });
// });

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

        // Arrival Date Validation
        const arrival = $("#datepicker").val();
        if(arrival == "") {
            $("#datepicker").next().text("Select arrival date");
            isValid = false;
        }
        else {
            $("#datepicker").next().text("");
        }

        // Departure Date Validation
        const departure = $("#datepicker2").val();
        if(departure == "") {
            $("#datepicker2").next().text("Select departure date");
            isValid = false;
        } else if (new Date(departure) <= new Date(arrival)) {
            $("#datepicker2").next().text("Departure date must be after arrival date");
            isValid = false;
        } else {
            $("#datepicker2").next().text("");
        }

        // Rooms Validation
        let rooms = $("#rooms").val();
        if(rooms == "") {
            $("#rooms").next().text("Enter the number of rooms");
            isValid = false;
        } else if (rooms <= 0) {
            $("#rooms").next().text("Number of rooms must be a positive number");
            isValid = false;
        } else {
            $("#rooms").next().text("");
        }   
        
        

        // Adults Validation
        const adults = $("#adults").val();
        if(adults == "") {
            $("#adults").next().text("Enter the number of adults");
            isValid = false;
        } else if (adults <= 0) {
            $("#adults").next().text("Number of adults must be a positive number");
            isValid = false;
        } else {
            $("#adults").next().text("");
        }

       // Children Validation
        if(!$("#children").attr("disabled")) {
            const children = $("#children").val();
            if(children == "") {
                $("#children").next().text("Enter the number of children");
                isValid = false;
            } else if (children < 0) {
                $("#children").next().text("Number of children cannot be negative");
                isValid = false;
            } else {
                $("#children").next().text("");
            }
        }

        // First Name Validation
        const first_name = $("#first_name").val().trim();
        if(first_name == "") {
            $("#first_name").next().text("Enter your first name");
            isValid = false;
        } else if (!/^[a-zA-Z]+$/.test(first_name)) {
            $("#first_name").next().text("First name can only contain letters");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        } 

        // Last Name Validation
        const last_name = $("#last_name").val().trim();
        if(last_name == "") {
            $("#last_name").next().text("Enter your last name");
            isValid = false;
        } else if (!/^[a-zA-Z]+$/.test(last_name)) {
            $("#last_name").next().text("Last name can only contain letters");
            isValid = false;
        } else {
            $("#last_name").next().text("");
        }
        
        // Phone Number Validation
            const phonePattern = /^\d{3}[-]\d{3}[-]\d{4}$/;
            const phone_number = $("#phone").val().trim();
            if(phone_number == "") {
                $("#phone").next().text("Enter your phone number");
                isValid = false;
            } else if (!phonePattern.test(phone_number)) {
                $("#phone").next().text("Must be 999-999-9999 format");
                isValid = false;
            } else {
                $("#phone").next().text("");
            } 
        
        if(isValid == false) {
            evt.preventDefault();
        }
    });
});

//tabs function
// $( function() {
//     $( "#tabs" ).tabs();
// });

//accordion function
// $( function() {
//     $( "#accordion" ).accordion({
//       collapsible: true
//     });
// });
