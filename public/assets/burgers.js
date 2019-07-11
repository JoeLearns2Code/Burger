//Ensure DOM loads before handlers are attached
$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newBurg");

        var newDevourState = {
            devoured: newBurger
        };


        //Ajax call to api/burgers for PUT request to update newDevourState
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour state to: ", newBurger);
                //Reload the page
                location.reload();
            }
        )
    });
    //Add new burger
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        //object variable for user input
        var newBurger = {
            burger_name: $("#newBurg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        //POST request for new burger from api/burgers
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New burger added to the menu");
                //Reload page
                location.reload();
            }
        );
    });
});