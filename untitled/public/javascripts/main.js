$(document).ready(function(){
});

function directDashboard(){
    console.log("hey");
    $.ajax({
        url:'localhost:3000/ajax',
        type: 'post',
        success: function(data) {
            console.log(data);
        }
    })
    $(".header_dashboard").click(function(){
        // alert(user.fullName);
    })
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

    $('#sidebar_button').on('click', function() {
        $('.content').toggleClass('isOpen');
    });

    $('#float_button').on('click', function() {
        $('.submission_form').fadeIn();
    });

    $('.forms_buttons-cancel').on('click', function() {
        $('.submission_form').fadeOut();
    });

};