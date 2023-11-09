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
            let textElement = document.getElementById('text');
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

        let btn3 = document.getElementById('btn3');
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
            let select = document.getElementById("mySelect");
            let selectedOption = select.options[select.selectedIndex];

            if (selectedOption) {
                select.remove(select.selectedIndex);
            }
        }
    </script>
</body>
</html>


//5.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouse Events</title>
    <style>
        #output {
            margin-top: 20px;
        }
    </style>
</head>
<body>

<button id="liveButton">Live Button!</button>
<p id="output"></p>

<script>
    let button = document.getElementById('liveButton');
    let output = document.getElementById('output');

    button.addEventListener('click', function() {
        output.innerText = 'I was pressed!';
    });

    button.addEventListener('mouseover', function() {
        output.innerText = 'Mouse on me!';
    });

    button.addEventListener('mouseout', function() {
        output.innerText = 'Mouse is not on me!';
    });
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
            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;

            let windowSizeElement = document.getElementById('windowSize');
            windowSizeElement.textContent = windowWidth + ' x ' + windowHeight;
        }

        window.addEventListener('load', updateWindowSize);
        window.addEventListener('resize', updateWindowSize);
    </script>
</body>
</html>


//7.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Dropdowns</title>
</head>
<body>

<select name="country" id="country">
    <option value="ger">Germany</option>
    <option value="usa">USA</option>
    <option value="ukr">Ukraine</option>
</select>

<select name="cities" id="cities"></select>

<p id="selectedLocation"></p>

<script>
    let countrySelect = document.getElementById('country');
    let citiesSelect = document.getElementById('cities');
    let output = document.getElementById('selectedLocation');

    let cities = {
        ger: ['Berlin', 'Hamburg', 'Munich'],
        usa: ['New York', 'Los Angeles', 'Chicago'],
        ukr: ['Kyiv', 'Lviv', 'Odessa']
    };

    function populateCities() {
        let selectedCountry = countrySelect.value;
        citiesSelect.innerHTML = ''; 

        cities[selectedCountry].forEach(function(city) {
            let option = document.createElement('option');
            option.value = city;
            option.text = city;
            citiesSelect.add(option);
        });
    }

    countrySelect.addEventListener('change', function() {
        populateCities();
        output.innerText = 'Selected Country: ' + countrySelect.options[countrySelect.selectedIndex].text;
    });

    citiesSelect.addEventListener('change', function() {
        output.innerText = 'Selected Country: ' + countrySelect.options[countrySelect.selectedIndex].text +
                           ', Selected City: ' + citiesSelect.options[citiesSelect.selectedIndex].text;
    });

    populateCities();
</script>

</body>
</html>

