function checkBuyerPasswordMatch() {
    var password = $("#txtNewPassword").val();
    var confirmPassword = $("#txtConfirmPassword").val();

    if (password != confirmPassword){
        $(this).focus();
        $("#spanCheckPasswordMatch").removeClass( "text-success" ).addClass( "text-danger" );
        $("#spanCheckPasswordMatch").html("Passwords do not match!");
    }
    else{
        $("#spanCheckPasswordMatch").removeClass( "text-danger" ).addClass( "text-success" );
        $("#spanCheckPasswordMatch").html("Passwords match.");
    }
}

function checkSellerPasswordMatch() {
    var password = $("#txtNewPasswordSeller").val();
    var confirmPassword = $("#txtConfirmPasswordSeller").val();

    if (password != confirmPassword){
        $(this).focus();
        $("#spanCheckPasswordMatchSeller").removeClass( "text-success" ).addClass( "text-danger" );
        $("#spanCheckPasswordMatchSeller").html("Passwords do not match!");
    }
    else{
        $("#spanCheckPasswordMatchSeller").removeClass( "text-danger" ).addClass( "text-success" );
        $("#spanCheckPasswordMatchSeller").html("Passwords match.");
    }
}

$(document).ready(function () {
    $("#txtConfirmPassword").keyup(checkBuyerPasswordMatch);
    $("#txtConfirmPasswordSeller").keyup(checkSellerPasswordMatch);
});
