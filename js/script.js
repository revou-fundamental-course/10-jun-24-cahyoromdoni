/* Javascript*/
        function convertCtoF() {
            var celsius = document.getElementById("celsius").value;
            var fahrenheit = (celsius * 9/5) + 32;
            document.getElementById("result").value = fahrenheit.toFixed(2);
            document.getElementById("formula").value = celsius + "°C * (9/5) + 32 = " + fahrenheit.toFixed(2) + "°F";
        }

        function refreshPage() {
            document.getElementById("celsius").value = "";
            document.getElementById("result").value = "";
            document.getElementById("formula").value = "";
        }

        function reverseConversion() {
            var fahrenheit = document.getElementById("result").value;
            var celsius = (fahrenheit - 32) * 5/9;
            document.getElementById("celsius").value = celsius.toFixed(2);
            document.getElementById("formula").value = fahrenheit + " °F - 32 * (5/9) = " + celsius.toFixed(2) + "°C";
        }