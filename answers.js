//1. 
// Створюємо нове вікно розміром 300х300 пікселів
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

//2.
< !DOCTYPE html >
<html>
<head>
    <title>Change Style Example</title>
</head>
<body>
    <p id='text'>I learning JavaScript events!</p>
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
    <button id="btn1">Змінити фон на синій</button>
    <button id="btn2">Змінити фон на рожевий</button>
    <button id="btn3">Змінити фон на коричневий</button>
    <a href="#" id="link">Лінк</a>

    <script>
        // Функція для зміни кольору фону на синій
        document.getElementById('btn1').addEventListener('click', function () {
            document.body.style.backgroundColor = 'blue';
        });

        // Функція для зміни кольору фону на рожевий
        document.getElementById('btn2').addEventListener('dblclick', function () {
            document.body.style.backgroundColor = 'pink';
        });

        // Функція для зміни кольору фону на коричневий при утриманні кнопки, і білий при відпусканні
        var btn3 = document.getElementById('btn3');
        btn3.addEventListener('mousedown', function () {
            document.body.style.backgroundColor = 'brown';
        });
        btn3.addEventListener('mouseup', function () {
            document.body.style.backgroundColor = 'white';
        });

        // Функція для зміни кольору фону на жовтий при наведенні на лінку, і білий при відведенні
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
    <title>Видалення елемента із випадаючого списку</title>
</head>
<body>
    <select id="mySelect">
        <option value="option1">Елемент 1</option>
        <option value="option2">Елемент 2</option>
        <option value="option3">Елемент 3</option>
        <option value="option4">Елемент 4</option>
    </select>

    <button onclick="removeSelectedOption()">Видалити обраний елемент</button>

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
            <title>Повідомлення при взаємодії з кнопкою</title>
        </head>
        <body>
            <button id="myButton" onclick="displayMessage('I was pressed!')" onmouseover="displayMessage('Mouse on me!')" onmouseout="displayMessage('Mouse is not on me!')">Натисніть мене</button>

            <script>
                function displayMessage(message) {
                    alert(message);
        }
            </script>
        </body>
    </html>
