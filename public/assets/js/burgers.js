// Load the DOM first
$(function() {
    // Create click handlers

    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: newDevour
      };
  
      // Send the PUT request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("Changed devoured to " + newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Use preventDefault on this submit event
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  