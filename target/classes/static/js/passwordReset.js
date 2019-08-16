function checkPasswordResetMatch() {
    var password = $("#newPassword").val();
    var confirmPassword = $("#confirmNewPassword").val();

    if (password != confirmPassword){
        $(this).focus();
        $("#btnSubmit").prop("disabled", true);
        $("#spanCheckPasswordMatch").removeClass( "text-success" ).addClass( "text-danger" );
        $("#spanCheckPasswordMatch").html("Passwords do not match!");
    }
    else{
        $("#btnSubmit").prop("disabled", false);
        $("#spanCheckPasswordMatch").removeClass( "text-danger" ).addClass( "text-success" );
        $("#spanCheckPasswordMatch").html("Passwords match.");
    }
}


$(document).ready(function () {
    $("#confirmNewPassword").keyup(checkPasswordResetMatch);

});
