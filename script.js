var selectedRow = null;

function onFormSubmit(){
    var formData=readFormData();
    insertNewRecord(formData);
}


// Getting the data to the form
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["address"] = document.getElementById("address").value;
    formData["pincode"] = document.getElementById("pincode").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["state"] = document.getElementById("state").value;
    formData["country"] = document.getElementById("country").value;
    formData["foodChoice"] = document.getElementById("foodChoice").value;
    return formData;
}


//transferring the data  got from the form to the table

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.address;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.pincode;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.state;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.country;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.foodChoice;
}