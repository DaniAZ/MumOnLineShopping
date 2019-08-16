$(document).ready(function () {
    $('#btnSearch').click(function(event){
        event.preventDefault();

        var email = $("#email").val();

        $.ajax({
            url: "http://localhost:8080/security/question/"+ email,
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function(result){
                $("#emailDiv").hide();
                $("#question").val(result.securityQuestion);
                $("#resultdiv").show();
                // $("#resultdiv").append('<p>Cities Connected? ' + result.toString().toUpperCase() + '</p>').show();
            },
            error: function () {
                $("#resultdiv").empty();
                $("#resultdiv").append("<h2>FAILED</h2>").show();
            }
        });
    });

    $('#btnReset').click(function(event){
        event.preventDefault();

        var answer = $("#answer").val();

        $.ajax({
            url: "http://localhost:8080/security/question/"+ answer,
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            success: function(result){
                $("#emailDiv").hide();
                $("#response").empty();
                if(result.success){
                    $("#response").removeClass("text-danger");
                    $("#response").addClass("text-success");
                    $("#response").html(result.success);
                }
                else {
                    $("#response").removeClass("text-success");
                    $("#response").addClass("text-danger");
                    $("#response").html(result.failure);
                }

                $("#resultdiv").show();
                // $("#resultdiv").append('<p>Cities Connected? ' + result.toString().toUpperCase() + '</p>').show();
            },
            error: function () {
                $("#response").empty();
                $("#response").html("Incorrect answer");
                $("#resultdiv").show();
            }
        });
    });
});
