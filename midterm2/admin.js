window.addEventListener("load", function(event) {
    var users = [];

    for (let i = 0; i < localStorage.length; i++) {
        var table = document.getElementById("table").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);

        users.push(JSON.parse(localStorage.getItem(i)));

        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = users[i].fname;

        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = users[i].lname;

        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = users[i].email;

        var cell4 = newRow.insertCell(3);
        cell4.innerHTML = users[i].password;

        var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button class="btn" onclick="edit(this)">Edit</button> 
                           <button class="btn" onclick="onDelete(this)">Delete</button>`;
    }
});

function edit(button) {
    for (let i = 0; i < 4; i++) {
        button.parentElement.parentElement.cells[i].setAttribute("contenteditable", "true");
    }
    button.innerText = "Save";
    button.setAttribute("onclick", "save(this)");
};

function save(button) {
    var formData = {
        fname: button.parentElement.parentElement.cells[0].innerText,
        lname: button.parentElement.parentElement.cells[1].innerText,
        email: button.parentElement.parentElement.cells[2].innerText,
        password: button.parentElement.parentElement.cells[3].innerText
    };

    var index = button.parentElement.parentElement.rowIndex;

    localStorage.setItem(index - 1, JSON.stringify(formData));

    button.innerText = "Edit";
    button.setAttribute("onclick", "edit(this)");
}

function onDelete(button) {
    if (confirm('Are you want to delete this user?')) {
        row = button.parentElement.parentElement;

        var users = [];

        for (let i = 0; i < localStorage.length; i++) {
            users.push(JSON.parse(localStorage.getItem(i)));

            if (users[i].email == row.cells[2].innerText) {
                localStorage.removeItem(i);
                document.getElementById("table").deleteRow(row.rowIndex);
            }
        }
    }
}