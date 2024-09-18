document.getElementById('changeText').onclick = function() {
    document.getElementById('heading').innerHTML = 'Hey, This is moni';
};


document.getElementById('changeColor').onclick = function() {
    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = 'black'
    }
};

document.getElementById('moveElement').onclick = function() {
    document.getElementById('heading').style.left = '650px';
};