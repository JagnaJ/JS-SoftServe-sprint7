//1. 
< !DOCTYPE html >
<html>
<head>
    <title>Creating a New Window with Resizing and Moving</title>
</head>
<body>
    <script>
        // Create a new window with a size of 300x300 pixels
        const newWindow = window.open('', '', 'width=300,height=300');

        setTimeout(() => {
            newWindow.resizeTo(500, 500);
        }, 2000);

        setTimeout(() => {
            newWindow.moveTo(200, 200);
        }, 2000);

        setTimeout(() => {
            newWindow.close();
        }, 2000);
    </script>
</body>
</html>


//2.
<!DOCTYPE html >
<html>
<head>
    <title>Change Style Example</title>
</head>
<body>
    <p id='text'>I am learning JavaScript events!</p>
    <div>
        <button onclick="changeCSS()">Change style!</button>
    </div>

    <script>
        function changeCSS() {
            var textElement = document.getElementById('text');
            textElement.style.color = 'orange';
            textElement.style.fontSize = '20px';
            textElement.style.fontFamily = 'Comic Sans MS';
        }
    </script>
</body>
</html>


//3.
<!DOCTYPE html >
<html>
<head>
    <title>Event Handling Example</title>
</head>
<body>
    <button id="btn1">Change background color to blue</button>
    <button id="btn2">Change background color to pink</button>
    <button id="btn3">Change background color to brown (mousedown) and white (mouseup)</button>
    <a href="#" id="link">Link</a>

    <script>

        document.getElementById('btn1').addEventListener('click', function () {
            document.body.style.backgroundColor = 'blue';
        });

        document.getElementById('btn2').addEventListener('dblclick', function () {
            document.body.style.backgroundColor = 'pink';
        });

        var btn3 = document.getElementById('btn3');
        btn3.addEventListener('mousedown', function () {
            document.body.style.backgroundColor = 'brown';
        });
        btn3.addEventListener('mouseup', function () {
            document.body.style.backgroundColor = 'white';
        });

        document.getElementById('link').addEventListener('mouseover', function () {
            document.body.style.backgroundColor = 'yellow';
        });
        document.getElementById('link').addEventListener('mouseout', function () {
            document.body.style.backgroundColor = 'white';
        });
    </script>
</body>
</html>


//4.
<!DOCTYPE html >
<html>
<head>
    <title>Remove Element from Dropdown List</title>
</head>
<body>
    <select id="mySelect">
        <option value="option1">Element 1</option>
        <option value="option2">Element 2</option>
        <option value="option3">Element 3</option>
        <option value="option4">Element 4</option>
    </select>

    <button onclick="removeSelectedOption()">Remove selected element</button>

    <script>
        function removeSelectedOption() {
            var select = document.getElementById("mySelect");
            var selectedOption = select.options[select.selectedIndex];

            if (selectedOption) {
                select.remove(select.selectedIndex);
            }
        }
    </script>
</body>
</html>


//5.
<!DOCTYPE html >
<html>
<head>
    <title>Messages on Button Interaction</title>
</head>
<body>
    <button id="myButton" onclick="displayMessage('I was pressed!')" onmouseover="displayMessage('Mouse on me!')" onmouseout="displayMessage('Mouse is not on me!')">Click me</button>

    <script>
        function displayMessage(message) {
            alert(message);
        }
    </script>
</body>
</html>


//6.
<!DOCTYPE html >
<html>
<head>
    <title>Window Resize Tracking</title>
</head>
<body>
    <p>Window size (width x height): <span id="windowSize"></span></p>

    <script>
        function updateWindowSize() {
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;

            var windowSizeElement = document.getElementById('windowSize');
            windowSizeElement.textContent = windowWidth + ' x ' + windowHeight;
        }

        window.addEventListener('load', updateWindowSize);
        window.addEventListener('resize', updateWindowSize);
    </script>
</body>
</html>


//7.
<!DOCTYPE html >
    <html>
        <head>
            <title>Dropdown Lists with Countries and Cities</title>
        </head>
        <body>
            <select name="country" id="country">
                <option value="ger">Germany</option>
                <option value="usa">USA</option>
                <option value="ukr">Ukraine</option>
            </select>

            <select name="cities" id="cities"></select>

            <p id="result"></p>

            <script>
                var countries = {
                    "ger": ["Berlin", "Hamburg", "Munich", "Frankfurt"],
                "usa": ["New York", "Los Angeles", "Chicago", "San Francisco"],
                "ukr": ["Kyiv", "Lviv", "Kharkiv", "Odessa"]
        };

                var countrySelect = document.getElementById("country");
                var citiesSelect = document.getElementById("cities");
                var resultParagraph = document.getElementById("result");

                countrySelect.addEventListener("change", function() {
            var selectedCountry = countrySelect.value;
                var selectedCities = countries[selectedCountry] || [];

                citiesSelect.innerHTML = "";

                selectedCities.forEach(function(city) {
                var option = document.createElement("option");
                option.text = city;
                citiesSelect.add(option);
            });

                var selectedCountryName = countrySelect.options[countrySelect.selectedIndex].text;
                var selectedCity = citiesSelect.options[citiesSelect.selectedIndex].text;
                resultParagraph.textContent = "Selected country: " + selectedCountryName + ", City: " + selectedCity;
        });
            </script>
        </body>
    </html>

