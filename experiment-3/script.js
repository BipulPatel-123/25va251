// 1. Change Heading Text
document.getElementById('btn-heading').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    if (textInput.trim() !== '') {
        document.getElementById('main-heading').textContent = textInput;
        document.getElementById('text-input').value = ''; // clear input
    } else {
        alert("Please enter some text in the input field first.");
    }
});

// 2. Change Background Color
document.getElementById('btn-bg').addEventListener('click', function() {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    // Change body background color
    document.body.style.backgroundColor = randomColor;
});

// 3. Increase Font Size
let currentFontSize = 2; // starting size for h1 approximately
document.getElementById('btn-fontsize').addEventListener('click', function() {
    // simple trick to increase by 0.2em
    currentFontSize += 0.2;
    document.getElementById('main-heading').style.fontSize = currentFontSize + 'em';
});

// 4. Show/Hide Paragraph
document.getElementById('btn-toggle').addEventListener('click', function() {
    const para = document.getElementById('main-paragraph');
    // We check either explicitly inline display style or computed style
    if (para.style.display === 'none') {
        para.style.display = 'block';
    } else {
        para.style.display = 'none';
    }
});

// Extra event listeners: mouseover and mouseout on paragraph
const para = document.getElementById('main-paragraph');
para.addEventListener('mouseover', function() {
    para.style.color = '#e74c3c';
    para.style.fontWeight = 'bold';
});
para.addEventListener('mouseout', function() {
    para.style.color = '#555';
    para.style.fontWeight = 'normal';
});
