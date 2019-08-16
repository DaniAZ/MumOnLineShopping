"use strict";
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
$(function() {

   console.log()
    $('.cartItemQty').change(qtyChange);
    $('.btn_brand').click(followBrand)
   function qtyChange() {
       var qty = $(this).val();
       var cartItem_id=$(this).attr('id');

       $.ajax({
           type: 'GET',
           url: '/buyer/shoppingCart/updateCartItem/'+qty+'/'+cartItem_id+'/',
           contentType: 'application/json',
           dataType: 'json',
           success: function(data){
               //append to category list
              console.log("result",data);

               $('#grandTotal').text(data)
           },
           error: function (xmlResponse) {
                       console.log(xmlResponse.responseJSON)
           }

       });
   }
   function followBrand(event) {
        event.preventDefault();
       let btn_id=$(this).attr('id');
       let x=$('#'+btn_id).text();
       let url=null;
       if(x==="Subscribe"){
             url='/buyer/brands/add/'+btn_id+'/'
         }else if(x==="UnSubscribe"){
           url='/buyer/brands/delete/'+btn_id+'/'
       }

       $.ajax({
           type: 'GET',
           url: url,
           contentType: 'application/json',
           dataType: 'json',
           success: function(data){
                 console.log("result",data);
               if(data){
                   console.log('#'+btn_id)
                  $('#'+btn_id).html('UnSubscribe')
               }else{
                   $('#'+btn_id).html('Subscribe')
               }
               var x=$('#'+btn_id).text();
               console.log(x);
           },
           error: function (xmlResponse) {
               console.log(xmlResponse.responseJSON)
           }

       });
   }
})