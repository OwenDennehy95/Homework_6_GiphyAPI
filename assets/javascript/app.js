      // Initial array of emotions
      var emotions = ["Satisfied", "Wanting More", "Fulfilled", "Happy", "Restless"];

      
      function displayEmotions() {

        var userinput = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=95uRQdqxwFxF7xlZ8cDJRtMNfJLuYtfO&q=Simpsons&limit=5&offset=0&rating=PG-13&lang=en" + userinput + "95uRQdqxwFxF7xlZ8cDJRtMNfJLuYtfO";

        // Creating an AJAX call 
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            console.log(response)


            
        
          var inputDiv = $("<div class='input'>");

          var dataResponse = response.data;

          
          var pOne = $("<p>").text("Rating: " + gif);

         
          inputDiv.append(pOne);


          var imgURL = response.url;

          var image = $("<img>").attr("src", imgURL);

          // Appending the image
          inputDiv.append(image);

          $("#button-view").prepend(movieDiv);
        });

      }

      // Function for displaying data
      function renderButtons() {

        $("#button-view").empty();

        // Looping through the array 
        for (var i = 0; i < emotions.length; i++) {

         
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("userEmotions-btn");
          // Adding a data-attribute
          a.attr("data-name", emotions[i]);
          // Providing the initial button text
          a.text(emotions[i]);
          // Adding the button 
          $("#button-view").append(a);
        }
      }

      // function handles events where button is clicked
      $("#button-add").on("click", function(event) {
        event.preventDefault();
        // grabs the input from the textbox
        var userEmotions = $("#giphy-input").val().trim();

        emotions.push(userEmotions);

        
        renderButtons();
      });

      // Adding a click event listener
      $(document).on("click", ".userEmotions-btn", displayEmotions);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();


