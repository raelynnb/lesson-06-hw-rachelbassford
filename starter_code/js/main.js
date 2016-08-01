$(document).ready(readyFunction);

    function readyFunction() {

         $("#submit-btn").click(changeImage);

         function changeImage() {
            event.preventDefault();

            var city = $("#city-type").val();

            if (city === "NYC" || city === "New York" || city === "New York City") {
                $("body").removeClass();
                $("body").addClass("nyc");
            }

            else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
                $("body").removeClass();
                $("body").addClass("sf");
            }

           else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
                $("body").removeClass();
                $("body").addClass("la");
            }

            else if (city === "Austin" || city === "ATX") {
                $("body").removeClass();
                $("body").addClass("austin");
            }

            else if (city === "Sydney" || city === "SYD") {
                $("body").removeClass();
                $("body").addClass("sydney");
            }
        }
    }