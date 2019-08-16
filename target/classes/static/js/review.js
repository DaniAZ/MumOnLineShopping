(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);
$(document).ready(function () {
    $('#btnReview').click(function (event) {
        event.preventDefault();
        let productId = $('#productId').val();
        let  review=$('#review').val();
        //
        var data = JSON.stringify($("#formReview").serializeFormJSON());


        $.ajax({
            url: "/buyer/review/add/"+productId,
            type: "POST",
            contentType: "application/json",
            data:data,
            dataType: "json",
            success: function (result) {
                $('#review').val("");
                $("#divConfirm").html("Thanks for Your Review");

                // $("#resultdiv").append('<p>Cities Connected? ' + result.toString().toUpperCase() + '</p>').show();
            },
            error: function (error) {
                console.log(error)
            }
        })
    })



    $('.btn_accept').click(acceptFunc);
    $('.btn_reject').click(rejectFunc);


    function acceptFunc(event) {
        event.preventDefault();
        var accept_id=$(this).attr('id');
        $.ajax({
            type: 'GET',
            url: '/admin/save/'+accept_id,
            contentType: 'application/json',
            dataType: 'json',
            success: function(data){
                //append to category list
                console.log("result",data);
                $('#'+data+'tr').remove();

            },
            error: function (xmlResponse) {
                console.log(xmlResponse.responseJSON)
            }

        });
    }
    function rejectFunc(event) {
        event.preventDefault();
        var reject_id=$(this).attr('id');
        var len=reject_id.length-6;
        var  id=reject_id.substring(0,len);
        console.log(id);
        $.ajax({
            type: 'GET',
            url: '/admin/delete/'+id,
            contentType: 'application/json',
            dataType: 'json',
            success: function(data){
                //append to category list
                console.log("result",data);
                 $('#'+data+'tr').remove();
            },
            error: function (xmlResponse) {
                console.log(xmlResponse.responseJSON)
            }

        });
    }
})
