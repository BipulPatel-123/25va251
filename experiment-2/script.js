let employees = [];

document.getElementById('btn-add').addEventListener('click', function() {
    const name = document.getElementById('emp-name').value.trim();
    const id = document.getElementById('emp-id').value.trim();
    const salary = parseFloat(document.getElementById('emp-salary').value);
    const department = document.getElementById('emp-dept').value.trim();

    if (!name || !id || isNaN(salary) || !department) {
        alert("Please fill all fields correctly.");
        return;
    }

    // Creating object and adding to array
    const employee = {
        name: name,
        id: id,
        salary: salary,
        department: department
    };
    employees.push(employee);

    // Clear inputs
    document.getElementById('emp-name').value = '';
    document.getElementById('emp-id').value = '';
    document.getElementById('emp-salary').value = '';
    document.getElementById('emp-dept').value = '';

    displayData(employees, "Added employee successfully!");
});

function displayData(data, message = "") {
    const outputBox = document.getElementById('output-box');
    if (data.length === 0) {
        outputBox.innerHTML = "<p>No required employees found.</p>";
        return;
    }

    let html = (message ? `<p><strong>${message}</strong></p>` : "") + `
        <table>
            <tr>
                <th>Name</th>
                <th>Employee ID</th>
                <th>Salary (₹)</th>
                <th>Department</th>
            </tr>
    `;

    // using for...of to iterate array of objects
    for (const emp of data) {
        html += `
            <tr>
                <td>${emp.name}</td>
                <td>${emp.id}</td>
                <td>₹${emp.salary}</td>
                <td>${emp.department}</td>
            </tr>
        `;
    }
    html += `</table>`;
    outputBox.innerHTML = html;
}

document.getElementById('btn-show-all').addEventListener('click', function() {
    displayData(employees, "All Employees Record");
});

document.getElementById('btn-filter-salary').addEventListener('click', function() {
    // using filter array method
    const filtered = employees.filter(emp => emp.salary > 50000);
    displayData(filtered, "Employees with Salary > ₹50,000");
});

document.getElementById('btn-total-payout').addEventListener('click', function() {
    let total = 0;
    // using for...of
    for (const emp of employees) {
        total += emp.salary;
    }
    document.getElementById('output-box').innerHTML = `<h3>Total Salary Payout: ₹${total}</h3>`;
});

document.getElementById('btn-avg-salary').addEventListener('click', function() {
    if (employees.length === 0) {
        document.getElementById('output-box').innerHTML = `<p>No employees to calculate average.</p>`;
        return;
    }
    let total = 0;
    for (const emp of employees) {
        total += emp.salary;
    }
    const avg = total / employees.length;
    document.getElementById('output-box').innerHTML = `<h3>Average Salary: ₹${avg.toFixed(2)}</h3>`;
});

document.getElementById('btn-count-dept').addEventListener('click', function() {
    const dept = document.getElementById('filter-dept').value.trim();
    if (!dept) {
        alert("Please enter a department.");
        return;
    }

    let count = 0;
    for (const emp of employees) {
        if (emp.department.toLowerCase() === dept.toLowerCase()) {
            count++;
        }
    }
    document.getElementById('output-box').innerHTML = `<h3>Employee Count for '${dept}': ${count}</h3>`;
});
