const myTable = document.getElementById('theTable');
function addingRows(boxOne, boxTwo) {
    const newRow = myTable.insertRow();
    const one = newRow.insertCell(0);
    const two = newRow.insertCell(1);
    const three = newRow.insertCell(2);
   
    one.innerHTML = boxOne;
    two.innerHTML = boxTwo;

    const myNewButton = document.createElement('button');
    three.appendChild(myNewButton);
    myNewButton.innerHTML = "Click to Delete";

    myNewButton.addEventListener('click', function () {
     myTable.deleteRow(newRow.rowIndex);
    })
}
addingRows('one','two');
addingRows('three','four');



