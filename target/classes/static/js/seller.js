function loadComments () {

    this.source = null;

    this.start = function () {

        var commentTable = document.getElementById("comments");

        this.source = new EventSource("/seller/reviews");

        this.source.addEventListener("message", function (event) {

            // These events are JSON, so parsing and DOM fiddling are needed
            var comment = JSON.parse(event.data);
               console.log(comment)
            var row = commentTable.getElementsByTagName("tbody")[0].insertRow(0);
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);


            cell0.className = "author-style";
            cell0.innerHTML = comment.productid;

            cell1.className = "text";
            cell1.innerHTML = comment.description;


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
