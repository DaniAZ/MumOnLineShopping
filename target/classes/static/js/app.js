function loadComments () {

    this.source = null;

    this.start = function () {

         this.source = new EventSource("/buyer/notify");

        this.source.addEventListener("message", function (event) {

            // These events are JSON, so parsing and DOM fiddling are needed

             var comment = JSON.parse(event.data);
            // console.log(comment);
            // console.log("test",comment.description);
            var notifyList = comment;
            $('#notfiy_id').html("Notfication <sup><span class=\"badge badge-danger\" style=\"background: red;\">" +comment.size +"</span></sup>")
            $('#notify').append('<li style="color: red">').append('<a>' + comment.productName + ', ' + comment.description + '</a>');

        });

        this.source.onerror = function () {
            this.close();
        };

    };

    this.stop = function() {
        this.source.close();
    }

}

comment = new loadComments();

/*
 * Register callbacks for starting and stopping the SSE controller.
 */
window.onload = function() {
    comment.start();
};
window.onbeforeunload = function() {
    comment.stop();
}