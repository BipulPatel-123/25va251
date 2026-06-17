document.getElementById('btn-next').addEventListener('click', function() {
    const num = parseInt(document.getElementById('num-subjects').value);
    if (isNaN(num) || num <= 0) {
        alert("Please enter a valid number of subjects (greater than 0).");
        return;
    }
    
    const marksInputsDiv = document.getElementById('marks-inputs');
    marksInputsDiv.innerHTML = '';
    
    // Using a loop to generate input fields
    for (let i = 1; i <= num; i++) {
        marksInputsDiv.innerHTML += `
            <label>Subject ${i}:</label>
            <input type="number" class="mark-input" min="0" max="100" placeholder="0-100">
        `;
    }
    
    document.getElementById('setup-section').style.display = 'none';
    document.getElementById('marks-section').style.display = 'block';
});

document.getElementById('btn-calculate').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.mark-input');
    let totalMarks = 0;
    let isValid = true;
    
    // Using a loop to calculate total marks
    for (let i = 0; i < inputs.length; i++) {
        let val = parseFloat(inputs[i].value);
        if (isNaN(val) || val < 0 || val > 100) {
            isValid = false;
            break;
        }
        totalMarks += val;
    }
    
    if (!isValid) {
        alert("Please enter valid marks for all subjects (0-100).");
        return;
    }
    
    const avgMarks = totalMarks / inputs.length;
    let grade = '';
    let status = '';
    
    // If-else conditions for grade and pass/fail
    if (avgMarks >= 90) {
        grade = 'A+';
        status = 'Pass';
    } else if (avgMarks >= 80) {
        grade = 'A';
        status = 'Pass';
    } else if (avgMarks >= 70) {
        grade = 'B';
        status = 'Pass';
    } else if (avgMarks >= 60) {
        grade = 'C';
        status = 'Pass';
    } else if (avgMarks >= 40) {
        grade = 'D';
        status = 'Pass';
    } else {
        grade = 'F';
        status = 'Fail';
    }
    
    document.getElementById('res-total').textContent = totalMarks;
    document.getElementById('res-average').textContent = avgMarks.toFixed(2);
    document.getElementById('res-grade').textContent = grade;
    
    const statusSpan = document.getElementById('res-status');
    statusSpan.textContent = status;
    if (status === 'Pass') {
        statusSpan.className = 'pass';
    } else {
        statusSpan.className = 'fail';
    }
    
    document.getElementById('marks-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
});

document.getElementById('btn-reset').addEventListener('click', function() {
    document.getElementById('num-subjects').value = '';
    document.getElementById('result-section').style.display = 'none';
    document.getElementById('setup-section').style.display = 'block';
});
