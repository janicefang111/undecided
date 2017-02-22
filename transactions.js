function deleteRow(row)
{
    var x = document.getElementById('transactionTable')
    // get total number of rows
    var len = x.rows.length;
    // if  single input column remains, add another before deleting
    if (len==2){
      insRow();
    }
  
    // delete row
    var i=row.parentNode.parentNode.rowIndex;
    document.getElementById('transactionTable').deleteRow(i);
}


function insRow()
{
    var x=document.getElementById('transactionTable');
    // clone the targeted row
    var new_row = x.rows[1].cloneNode(true);
    // get the total number of rows
    var len = x.rows.length;
  
    // grab the input from each cell and update its ID and value
    var inp1 = new_row.cells[1].getElementsByTagName('input')[0];
    inp1.id += len;
    inp1.value = '';
    var inp2 = new_row.cells[2].getElementsByTagName('input')[0];
    inp2.id += len;
    inp2.value = '';
    var inp3 = new_row.cells[3].getElementsByTagName('input')[0];
    inp3.id += len;
    inp3.value = '';
    var inp4 = new_row.cells[4].getElementsByTagName('input')[0];
    inp4.id += len;
    inp4.value = '';

    // append the new row to the table
    x.appendChild( new_row );
}
