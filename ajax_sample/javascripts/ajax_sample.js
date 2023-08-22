let number = 0;
let data = [];
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
    fetch('ajax.json')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData;
            changeVideo();
        })
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
}

function changeVideo() {
    if (data.length === 0) {
        getData();
    } else {
        titleArea.textContent = data[number].title;
        contentArea.textContent = data[number].content;
        videoArea.src = data[number].url;
        number++;
        if (number >= data.length) {
            number = 0;
        }
    }
}
button.addEventListener('click', changeVideo);
window.onload = getData;
