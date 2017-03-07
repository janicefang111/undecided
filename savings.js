//Exported variables
/* l1,l2,l3
name 1,2,3 */
var name_1 = document.getElementById("name_1");
var name_2 = document.getElementById("name_2");
var name_3 = document.getElementById("name_3");

var percent_1 = "";
var percent_2 = "";
var percent_3 =  "";

//Empty vs full rows
var l1 = 1;
var l2 = 0;
var l3 = 0;

//Update Local Storage Values
function StorageUpdate(){
  localStorage.setItem("l1_store", l1);
  localStorage.setItem("l2_store", l2);
  localStorage.setItem("l3_store", l3);
  localStorage.setItem("percent_store_1", percent_1);
  localStorage.setItem("percent_store_2", percent_2);
  localStorage.setItem("percent_store_3", percent_3);
  localStorage.setItem("name_store_1", name_1);
  localStorage.setItem("name_store_2", name_2);
  localStorage.setItem("name_store_3", name_3);
}
StorageUpdate();
// Get the modal
var AM_modal = document.getElementById('Add_more_modal');

// Get the button that opens the modal
var AM_button = document.getElementById("Add_more_button");

// Get the <span> element that closes the modal
var AM_span = document.getElementsByClassName("AM_close")[0];

// When the user clicks on the button, open the modal 
AM_button.onclick = function() {
    AM_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
AM_span.onclick = function() {
  AM_modal.style.display = "none";
  Added_row = 0;
}

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
    if (event.target == AM_modal) {
        AM_modal.style.display = "none";
    }
} */


// Get the modal
var D_modal = document.getElementById('D_modal');

// Get the button that opens the modal
var D1_button = document.getElementById("D1_button");
var D2_button = document.getElementById("D2_button");
var D3_button = document.getElementById("D3_button");

// Get the <span> element that closes the modal
var D_span = document.getElementsByClassName("D_close")[0];

var D_title = document.getElementById("D_title");
var D_amount = document.getElementById("D_amount");
var D_save_goal =  document.getElementById("D_save_goal");
var D_deposit_amount  =  document.getElementById("D_deposit_amount");
var progress =  document.getElementById("progress");
var percent_filled = 
 document.getElementById("percent_filled");
// When the user clicks on the button, open the modal 
D1_button.onclick = function() {
  D_title.innerHTML = name_1.innerHTML;
  D_amount.innerHTML =  collected_1.innerHTML  + " out of " + target_1.innerHTML ;
  D_rec_pay.innerHTML = rec_1.innerHTML;
  
 percent_1 = (parseFloat(collected_1.innerHTML.replace("$",""))
                                 / parseFloat(target_1.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%";
  
  progress.innerHTML = percent_1;
  
  if(parseFloat(percent_1.replace("%",""))> 100)
    { percent_filled.style.width = "100%";}
  else 
  {percent_filled.style.width = percent_1;}

  D_modal.style.display = "block";
  D_active = 1;
}
D2_button.onclick = function() {
  D_title.innerHTML = name_2.innerHTML;
  D_amount.innerHTML =  collected_2.innerHTML  + " out of " + target_2.innerHTML ;
  D_rec_pay.innerHTML = rec_2.innerHTML;
  percent_2 =  (parseFloat(collected_2.innerHTML.replace("$",""))
                                 / parseFloat(target_2.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%"   ;
  progress.innerHTML = percent_2;
    if(parseFloat(percent_2.replace("%",""))> 100)
    { percent_filled.style.width = "100%";}
  else 
  {percent_filled.style.width = percent_2;}
  
  D_modal.style.display = "block";
  D_active = 2;
}
D3_button.onclick = function() {
  D_title.innerHTML = name_3.innerHTML;
  D_amount.innerHTML =  collected_3.innerHTML  + " out of " + target_3.innerHTML ;
  D_rec_pay.innerHTML = rec_3.innerHTML;
  percent_3 = (parseFloat(collected_3.innerHTML.replace("$",""))
                                 / parseFloat(target_3.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%"
  progress.innerHTML = percent_3;
    if(parseFloat(percent_3.replace("%",""))> 100)
    { percent_filled.style.width = "100%";}
  
  else 
  {percent_filled.style.width = percent_3;}
  D_modal.style.display = "block";
  D_active = 3;
}
// When the user clicks on <span> (x), close the modal
D_span.onclick = function() {
    D_modal.style.display = "none";
  D_active = 0;
}
//Depositing an amount to a goal
D_save_goal.onclick = function(){
  if(D_deposit_amount.innerHTML != ""){
  if (D_active === 1){
    collected_1.innerHTML = "$"+(parseFloat(collected_1.innerHTML.replace("$",""))
                                 + parseFloat(D_deposit_amount.innerHTML)).toString();
    percent_1 = (parseFloat(collected_1.innerHTML.replace("$",""))
                                 / parseFloat(target_1.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%";
    
    if(rec_pay_D === 1){
      rec_1.innerHTML = "$"+ D_deposit_amount.innerHTML;
    }
  }
  else if (D_active === 2){
    collected_2.innerHTML = "$"+(parseFloat(collected_2.innerHTML.replace("$","")) + parseFloat(D_deposit_amount.innerHTML)).toString();
    percent_2 =  (parseFloat(collected_2.innerHTML.replace("$",""))
                                 / parseFloat(target_2.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%"   ;
    if(rec_pay_D === 1){
      rec_2.innerHTML = "$"+ D_deposit_amount.innerHTML;
    }
  }
  else  if (D_active === 3){
    collected_3.innerHTML = "$"+(parseFloat(collected_3.innerHTML.replace("$","")) + parseFloat(D_deposit_amount.innerHTML)).toString();
     percent_3 = (parseFloat(collected_3.innerHTML.replace("$",""))
                                 / parseFloat(target_3.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%"
    if(rec_pay_D === 1){
      rec_3.innerHTML = "$"+ D_deposit_amount.innerHTML;
    }
  }
  }
  D_modal.style.display = "none";
  D_deposit_amount.innerHTML = "";
  D_active = 0;
  rec_pay_D = 0;
  button_no_D.style.color = "black";
  button_yes_D.style.background = "lightgrey";
  button_yes_D.style.color = "black";
  button_no_D.style.background = "lightgrey";
  StorageUpdate();
}
// Cancel Monthly payment button
var cancel_rec_pay = document.getElementById("cancel_rec_pay");
cancel_rec_pay.onclick = function(){
 if (D_active === 1){
   rec_1.innerHTML = "N/A"
 }
else  if (D_active === 2){
   rec_2.innerHTML = "N/A"
 }
   else  if (D_active === 3){
   rec_3.innerHTML = "N/A"
 }
  D_rec_pay.innerHTML = "N/A";
}



// When the user clicks anywhere outside of the modal, close it
/* window.onclick = function(event) {
    if (event.target == D_modal) {
        D_modal.style.display = "none";
    }
} */

// Yes and no buttons for the Add Goal modal
var rec_pay_AM = 0;
var button_yes_AM  = document.getElementById("yes_button_AM");
var button_no_AM = document.getElementById("no_button_AM");
button_yes_AM.onclick = function(e){
  rec_pay_AM = 1;
  button_no_AM.style.color = "black";
  button_yes_AM.style.background = "#3ba7ff";
  button_yes_AM.style.color = "white";
  button_no_AM.style.background = "lightgrey";
  button_yes.style.border = "none";
}
button_no_AM.onclick = function(e){
  rec_pay_AM = 0;
  button_yes_AM.style.color = "black";
  button_yes_AM.style.background = "lightgrey";
  button_no_AM.style.color = "white";
  button_no_AM.style.background = "#3ba7ff";
  button_yes.style.border = "none";
}

//Yes and no buttons for the Deposit button

var rec_pay_D = 0;
var button_yes_D  = document.getElementById("yes_button_D");
var button_no_D = document.getElementById("no_button_D");
button_yes_D.onclick = function(e){
  button_no_D.style.color = "black";
  button_yes_D.style.background = "#3ba7ff";
  button_yes_D.style.color = "white";
  button_no_D.style.background = "lightgrey";
  rec_pay_D = 1;
}
button_no_D.onclick = function(e){
  button_yes_D.style.color = "black";
  button_yes_D.style.background = "lightgrey";
  button_no_D.style.color = "white";
  button_no_D.style.background = "#3ba7ff";
  rec_pay_D = 0;
}

//Interactive Table variables
var row1 = document.getElementById("row1");
var del1 = document.getElementById("del_1");
var row2 = document.getElementById("row2");
var del2 = document.getElementById("del_2");
var row3 = document.getElementById("row3");
var del3 = document.getElementById("del_3");
var headers = document.getElementById("headers");
var no_goals = document.getElementById("no_goals");
var add_more = document.getElementById("Add_more_button");
var goal_limit = document.getElementById("goal_limit");
var Del_modal = document.getElementById("Del_modal");
var Del_title = document.getElementById("Del_title");
//Indicators

//Which row is being added (value 1,2 or 3)
var Added_Row = 0;
//Which Deposit modal is active (value 1,2 or 3)
var D_active = 0;
//Which row is being deleted
var Deleted_Row = 0;

//Display for empty table
function EmptyCheck(){
  if (l1 === 0 && l2 === 0 && l3 === 0){
    table.style.display = "none";
    no_goals.innerHTML = "You have no Goals yet!";
    no_goals.style.display = "block";
  }
}
 function CollapseRow1(){
   row1.style.display = "none";
   l1 = 0;
   goal_limit.style.display = "none";
     add_more.style.display = "inline";
   EmptyCheck();
 }

function CollapseRow2(){
    row2.style.display = "none";
    l2 = 0;
  goal_limit.style.display = "none";
    add_more.style.display = "inline";
  EmptyCheck();
}

function CollapseRow3(){
  row3.style.display= "none";
  add_more.style.display = "inline";
  l3 = 0;
  goal_limit.style.display = "none";
  EmptyCheck();
}
del1.onclick = function() {
  Del_title.innerHTML = "Delete "+ name_1.innerHTML;
    Del_modal.style.display = "block";
    Deleted_Row = 1;
}
del2.onclick = function() {
    Del_title.innerHTML = "Delete "+ name_2.innerHTML;
    Del_modal.style.display = "block";
    Deleted_Row = 2;}
del3.onclick = function() {
    Del_title.innerHTML = "Delete "+ name_3.innerHTML;
    Del_modal.style.display = "block";
    Deleted_Row = 3;}

//Delete Confirm
var del_yes = document.getElementById("Del_yes");
var del_no = document.getElementById("Del_no");
var Del_span = document.getElementsByClassName("Del_close")[0];

Del_span.onclick = function() {
    Del_modal.style.display = "none";
  Deleted_Row = 0;
}
del_no.onclick = function() {
    Del_modal.style.display = "none";
  Deleted_Row = 0;
}
del_yes.onclick = function(){
  if(Deleted_Row === 1){
  CollapseRow1();}
    if(Deleted_Row === 2){
  CollapseRow2();}
    if(Deleted_Row === 3){
  CollapseRow3();}
  Del_modal.style.display = "none";
  Deleted_Row = 0;
  StorageUpdate();}


 function Add_row(){
   //display for full table
   if( l1 === 0 && l2 === 0 && l3 === 0){
   table.style.display = "table";
   no_goals.style.display = "none";
   row1.style.display = "table-row";
   l1 = 1;
   Added_Row = 1;
   }
   else if( l1 === 0){
     row1.style.display = "table-row";
     l1 = 1;
     Added_Row = 1;
   }
   else if (l2 === 0){
     row2.style.display = "table-row";
     l2 = 1;
     Added_Row = 2;
   }
    else if (l3 === 0){
     row3.style.display = "table-row";
     l3 = 1;
     Added_Row = 3;
   }
   else{
     goal_limit.style.display = "inline";
   }
   if(l1 === 1 && l2 === 1 && l3 === 1){
  goal_limit.style.display = "inline";
      add_more.style.display  = "none";
}
 }

//When arriving on the page
if(l1 === 1 && l2 === 1 && l3 === 1){
  goal_limit.style.display = "inline";
  add_more.style.display  = "none";
}



var AM_save_goal = document.getElementById("AM_save_goal");
var D_save_goal = document.getElementById("D_save_goal");
var AM_goal_name= document.getElementById("AM_goal_name");
var AM_deposit_amount= document.getElementById("AM_deposit_amount");
var AM_target_amount= document.getElementById("AM_target_amount");


var target_1 = document.getElementById("target_1");
var collected_1 = document.getElementById("collected_1");
var rec_1 = document.getElementById("rec_1");


var target_2 = document.getElementById("target_2");
var collected_2 = document.getElementById("collected_2");
var rec_2 = document.getElementById("rec_2");


var target_3 = document.getElementById("target_3");
var collected_3 = document.getElementById("collected_3");
var rec_3 = document.getElementById("rec_3");

//Saving a new goal

AM_save_goal.onclick = function(){
  Add_row();
  AM_modal.style.display = "none";
 if (Added_Row === 1){
  name_1.innerHTML = AM_goal_name.innerHTML;
  target_1.innerHTML = "$" + AM_target_amount.innerHTML; 
  collected_1.innerHTML = "$"+ AM_deposit_amount.innerHTML;
  AM_modal.style.display = "none";
  if(rec_pay_AM === 1){
    rec_1.innerHTML = "$"+ AM_deposit_amount.innerHTML;
  }
   if (rec_pay_AM === 0){
     rec_1.innerHTML = "N/A";
   }
}
  else  if (Added_Row === 2){
  name_2.innerHTML = AM_goal_name.innerHTML;
  target_2.innerHTML = "$" + AM_target_amount.innerHTML; 
  collected_2.innerHTML = "$" + AM_deposit_amount.innerHTML;
  AM_modal.style.display = "none";
  if(rec_pay_AM === 1){
    rec_2.innerHTML = "$"+ AM_deposit_amount.innerHTML;
  }
   else{
     rec_2.innerHTML = "N/A";
   }  
}
  else  if (Added_Row === 3){
  name_3.innerHTML = AM_goal_name.innerHTML;
  target_3.innerHTML = "$" + AM_target_amount.innerHTML; 
  collected_3.innerHTML = "$" + AM_deposit_amount.innerHTML;
  AM_modal.style.display = "none";
    if(rec_pay_AM === 1){
    rec_3.innerHTML = "$"+ AM_deposit_amount.innerHTML;
  }
   else{
     rec_3.innerHTML = "N/A";
   }
}
  Added_Row = 0;
  rec_pay_AM = 0;
  AM_target_amount.innerHTML = "";
  AM_goal_name.innerHTML = "";
  AM_deposit_amount.innerHTML = "";
  button_no_AM.style.color = "black";
  button_yes_AM.style.background = "lightgrey";
  button_yes_AM.style.color = "black";
  button_no_AM.style.background = "lightgrey";
  percent_1 = (parseFloat(collected_1.innerHTML.replace("$",""))
                                 / parseFloat(target_1.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%";
  percent_2 =  (parseFloat(collected_2.innerHTML.replace("$",""))
                                 / parseFloat(target_2.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%";
  percent_3 = (parseFloat(collected_3.innerHTML.replace("$",""))
                                 / parseFloat(target_3.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%";
  StorageUpdate();
}


//Exported variables
/* l1,l2,l3
name 1,2,3 */
var name_1 = document.getElementById("name_1");
var name_2 = document.getElementById("name_2");
var name_3 = document.getElementById("name_3");

var percent_1 = "";
var percent_2 = "";
var percent_3 =  "";

//Empty vs full rows
var l1 = 1;
var l2 = 0;
var l3 = 0;

//Update Local Storage Values
function StorageUpdate(){
  localStorage.setItem("l1_store", l1);
  localStorage.setItem("l2_store", l2);
  localStorage.setItem("l3_store", l3);
  localStorage.setItem("percent_store_1", percent_1);
  localStorage.setItem("percent_store_2", percent_2);
  localStorage.setItem("percent_store_3", percent_3);
  localStorage.setItem("name_store_1", name_1);
  localStorage.setItem("name_store_2", name_2);
  localStorage.setItem("name_store_3", name_3);
}
StorageUpdate();
// Get the modal
var AM_modal = document.getElementById('Add_more_modal');

// Get the button that opens the modal
var AM_button = document.getElementById("Add_more_button");

// Get the <span> element that closes the modal
var AM_span = document.getElementsByClassName("AM_close")[0];

// When the user clicks on the button, open the modal 
AM_button.onclick = function() {
    AM_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
AM_span.onclick = function() {
  AM_modal.style.display = "none";
  Added_row = 0;
}

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
    if (event.target == AM_modal) {
        AM_modal.style.display = "none";
    }
} */


// Get the modal
var D_modal = document.getElementById('D_modal');

// Get the button that opens the modal
var D1_button = document.getElementById("D1_button");
var D2_button = document.getElementById("D2_button");
var D3_button = document.getElementById("D3_button");

// Get the <span> element that closes the modal
var D_span = document.getElementsByClassName("D_close")[0];

var D_title = document.getElementById("D_title");
var D_amount = document.getElementById("D_amount");
var D_save_goal =  document.getElementById("D_save_goal");
var D_deposit_amount  =  document.getElementById("D_deposit_amount");
var progress =  document.getElementById("progress");
var percent_filled = 
 document.getElementById("percent_filled");
// When the user clicks on the button, open the modal 
D1_button.onclick = function() {
  D_title.innerHTML = name_1.innerHTML;
  D_amount.innerHTML =  collected_1.innerHTML  + " out of " + target_1.innerHTML ;
  D_rec_pay.innerHTML = rec_1.innerHTML;
  
 percent_1 = (parseFloat(collected_1.innerHTML.replace("$",""))
                                 / parseFloat(target_1.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%";
  
  progress.innerHTML = percent_1;
  
  if(parseFloat(percent_1.replace("%",""))> 100)
    { percent_filled.style.width = "100%";}
  else 
  {percent_filled.style.width = percent_1;}

  D_modal.style.display = "block";
  D_active = 1;
}
D2_button.onclick = function() {
  D_title.innerHTML = name_2.innerHTML;
  D_amount.innerHTML =  collected_2.innerHTML  + " out of " + target_2.innerHTML ;
  D_rec_pay.innerHTML = rec_2.innerHTML;
  percent_2 =  (parseFloat(collected_2.innerHTML.replace("$",""))
                                 / parseFloat(target_2.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%"   ;
  progress.innerHTML = percent_2;
    if(parseFloat(percent_2.replace("%",""))> 100)
    { percent_filled.style.width = "100%";}
  else 
  {percent_filled.style.width = percent_2;}
  
  D_modal.style.display = "block";
  D_active = 2;
}
D3_button.onclick = function() {
  D_title.innerHTML = name_3.innerHTML;
  D_amount.innerHTML =  collected_3.innerHTML  + " out of " + target_3.innerHTML ;
  D_rec_pay.innerHTML = rec_3.innerHTML;
  percent_3 = (parseFloat(collected_3.innerHTML.replace("$",""))
                                 / parseFloat(target_3.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%"
  progress.innerHTML = percent_3;
    if(parseFloat(percent_3.replace("%",""))> 100)
    { percent_filled.style.width = "100%";}
  
  else 
  {percent_filled.style.width = percent_3;}
  D_modal.style.display = "block";
  D_active = 3;
}
// When the user clicks on <span> (x), close the modal
D_span.onclick = function() {
    D_modal.style.display = "none";
  D_active = 0;
}
//Depositing an amount to a goal
D_save_goal.onclick = function(){
  if(D_deposit_amount.innerHTML != ""){
  if (D_active === 1){
    collected_1.innerHTML = "$"+(parseFloat(collected_1.innerHTML.replace("$",""))
                                 + parseFloat(D_deposit_amount.innerHTML)).toString();
    percent_1 = (parseFloat(collected_1.innerHTML.replace("$",""))
                                 / parseFloat(target_1.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%";
    
    if(rec_pay_D === 1){
      rec_1.innerHTML = "$"+ D_deposit_amount.innerHTML;
    }
  }
  else if (D_active === 2){
    collected_2.innerHTML = "$"+(parseFloat(collected_2.innerHTML.replace("$","")) + parseFloat(D_deposit_amount.innerHTML)).toString();
    percent_2 =  (parseFloat(collected_2.innerHTML.replace("$",""))
                                 / parseFloat(target_2.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%"   ;
    if(rec_pay_D === 1){
      rec_2.innerHTML = "$"+ D_deposit_amount.innerHTML;
    }
  }
  else  if (D_active === 3){
    collected_3.innerHTML = "$"+(parseFloat(collected_3.innerHTML.replace("$","")) + parseFloat(D_deposit_amount.innerHTML)).toString();
     percent_3 = (parseFloat(collected_3.innerHTML.replace("$",""))
                                 / parseFloat(target_3.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%"
    if(rec_pay_D === 1){
      rec_3.innerHTML = "$"+ D_deposit_amount.innerHTML;
    }
  }
  }
  D_modal.style.display = "none";
  D_deposit_amount.innerHTML = "";
  D_active = 0;
  rec_pay_D = 0;
  button_no_D.style.color = "black";
  button_yes_D.style.background = "lightgrey";
  button_yes_D.style.color = "black";
  button_no_D.style.background = "lightgrey";
  StorageUpdate();
}
// Cancel Monthly payment button
var cancel_rec_pay = document.getElementById("cancel_rec_pay");
cancel_rec_pay.onclick = function(){
 if (D_active === 1){
   rec_1.innerHTML = "N/A"
 }
else  if (D_active === 2){
   rec_2.innerHTML = "N/A"
 }
   else  if (D_active === 3){
   rec_3.innerHTML = "N/A"
 }
  D_rec_pay.innerHTML = "N/A";
}



// When the user clicks anywhere outside of the modal, close it
/* window.onclick = function(event) {
    if (event.target == D_modal) {
        D_modal.style.display = "none";
    }
} */

// Yes and no buttons for the Add Goal modal
var rec_pay_AM = 0;
var button_yes_AM  = document.getElementById("yes_button_AM");
var button_no_AM = document.getElementById("no_button_AM");
button_yes_AM.onclick = function(e){
  rec_pay_AM = 1;
  button_no_AM.style.color = "black";
  button_yes_AM.style.background = "#3ba7ff";
  button_yes_AM.style.color = "white";
  button_no_AM.style.background = "lightgrey";
  button_yes.style.border = "none";
}
button_no_AM.onclick = function(e){
  rec_pay_AM = 0;
  button_yes_AM.style.color = "black";
  button_yes_AM.style.background = "lightgrey";
  button_no_AM.style.color = "white";
  button_no_AM.style.background = "#3ba7ff";
  button_yes.style.border = "none";
}

//Yes and no buttons for the Deposit button

var rec_pay_D = 0;
var button_yes_D  = document.getElementById("yes_button_D");
var button_no_D = document.getElementById("no_button_D");
button_yes_D.onclick = function(e){
  button_no_D.style.color = "black";
  button_yes_D.style.background = "#3ba7ff";
  button_yes_D.style.color = "white";
  button_no_D.style.background = "lightgrey";
  rec_pay_D = 1;
}
button_no_D.onclick = function(e){
  button_yes_D.style.color = "black";
  button_yes_D.style.background = "lightgrey";
  button_no_D.style.color = "white";
  button_no_D.style.background = "#3ba7ff";
  rec_pay_D = 0;
}

//Interactive Table variables
var row1 = document.getElementById("row1");
var del1 = document.getElementById("del_1");
var row2 = document.getElementById("row2");
var del2 = document.getElementById("del_2");
var row3 = document.getElementById("row3");
var del3 = document.getElementById("del_3");
var headers = document.getElementById("headers");
var no_goals = document.getElementById("no_goals");
var add_more = document.getElementById("Add_more_button");
var goal_limit = document.getElementById("goal_limit");
var Del_modal = document.getElementById("Del_modal");
var Del_title = document.getElementById("Del_title");
//Indicators

//Which row is being added (value 1,2 or 3)
var Added_Row = 0;
//Which Deposit modal is active (value 1,2 or 3)
var D_active = 0;
//Which row is being deleted
var Deleted_Row = 0;

//Display for empty table
function EmptyCheck(){
  if (l1 === 0 && l2 === 0 && l3 === 0){
    table.style.display = "none";
    no_goals.innerHTML = "You have no Goals yet!";
    no_goals.style.display = "block";
  }
}
 function CollapseRow1(){
   row1.style.display = "none";
   l1 = 0;
   goal_limit.style.display = "none";
     add_more.style.display = "inline";
   EmptyCheck();
 }

function CollapseRow2(){
    row2.style.display = "none";
    l2 = 0;
  goal_limit.style.display = "none";
    add_more.style.display = "inline";
  EmptyCheck();
}

function CollapseRow3(){
  row3.style.display= "none";
  add_more.style.display = "inline";
  l3 = 0;
  goal_limit.style.display = "none";
  EmptyCheck();
}
del1.onclick = function() {
  Del_title.innerHTML = "Delete "+ name_1.innerHTML;
    Del_modal.style.display = "block";
    Deleted_Row = 1;
}
del2.onclick = function() {
    Del_title.innerHTML = "Delete "+ name_2.innerHTML;
    Del_modal.style.display = "block";
    Deleted_Row = 2;}
del3.onclick = function() {
    Del_title.innerHTML = "Delete "+ name_3.innerHTML;
    Del_modal.style.display = "block";
    Deleted_Row = 3;}

//Delete Confirm
var del_yes = document.getElementById("Del_yes");
var del_no = document.getElementById("Del_no");
var Del_span = document.getElementsByClassName("Del_close")[0];

Del_span.onclick = function() {
    Del_modal.style.display = "none";
  Deleted_Row = 0;
}
del_no.onclick = function() {
    Del_modal.style.display = "none";
  Deleted_Row = 0;
}
del_yes.onclick = function(){
  if(Deleted_Row === 1){
  CollapseRow1();}
    if(Deleted_Row === 2){
  CollapseRow2();}
    if(Deleted_Row === 3){
  CollapseRow3();}
  Del_modal.style.display = "none";
  Deleted_Row = 0;
  StorageUpdate();}


 function Add_row(){
   //display for full table
   if( l1 === 0 && l2 === 0 && l3 === 0){
   table.style.display = "table";
   no_goals.style.display = "none";
   row1.style.display = "table-row";
   l1 = 1;
   Added_Row = 1;
   }
   else if( l1 === 0){
     row1.style.display = "table-row";
     l1 = 1;
     Added_Row = 1;
   }
   else if (l2 === 0){
     row2.style.display = "table-row";
     l2 = 1;
     Added_Row = 2;
   }
    else if (l3 === 0){
     row3.style.display = "table-row";
     l3 = 1;
     Added_Row = 3;
   }
   else{
     goal_limit.style.display = "inline";
   }
   if(l1 === 1 && l2 === 1 && l3 === 1){
  goal_limit.style.display = "inline";
      add_more.style.display  = "none";
}
 }

//When arriving on the page
if(l1 === 1 && l2 === 1 && l3 === 1){
  goal_limit.style.display = "inline";
  add_more.style.display  = "none";
}



var AM_save_goal = document.getElementById("AM_save_goal");
var D_save_goal = document.getElementById("D_save_goal");
var AM_goal_name= document.getElementById("AM_goal_name");
var AM_deposit_amount= document.getElementById("AM_deposit_amount");
var AM_target_amount= document.getElementById("AM_target_amount");


var target_1 = document.getElementById("target_1");
var collected_1 = document.getElementById("collected_1");
var rec_1 = document.getElementById("rec_1");


var target_2 = document.getElementById("target_2");
var collected_2 = document.getElementById("collected_2");
var rec_2 = document.getElementById("rec_2");


var target_3 = document.getElementById("target_3");
var collected_3 = document.getElementById("collected_3");
var rec_3 = document.getElementById("rec_3");

//Saving a new goal

AM_save_goal.onclick = function(){
  Add_row();
  AM_modal.style.display = "none";
 if (Added_Row === 1){
  name_1.innerHTML = AM_goal_name.innerHTML;
  target_1.innerHTML = "$" + AM_target_amount.innerHTML; 
  collected_1.innerHTML = "$"+ AM_deposit_amount.innerHTML;
  AM_modal.style.display = "none";
  if(rec_pay_AM === 1){
    rec_1.innerHTML = "$"+ AM_deposit_amount.innerHTML;
  }
   if (rec_pay_AM === 0){
     rec_1.innerHTML = "N/A";
   }
}
  else  if (Added_Row === 2){
  name_2.innerHTML = AM_goal_name.innerHTML;
  target_2.innerHTML = "$" + AM_target_amount.innerHTML; 
  collected_2.innerHTML = "$" + AM_deposit_amount.innerHTML;
  AM_modal.style.display = "none";
  if(rec_pay_AM === 1){
    rec_2.innerHTML = "$"+ AM_deposit_amount.innerHTML;
  }
   else{
     rec_2.innerHTML = "N/A";
   }  
}
  else  if (Added_Row === 3){
  name_3.innerHTML = AM_goal_name.innerHTML;
  target_3.innerHTML = "$" + AM_target_amount.innerHTML; 
  collected_3.innerHTML = "$" + AM_deposit_amount.innerHTML;
  AM_modal.style.display = "none";
    if(rec_pay_AM === 1){
    rec_3.innerHTML = "$"+ AM_deposit_amount.innerHTML;
  }
   else{
     rec_3.innerHTML = "N/A";
   }
}
  Added_Row = 0;
  rec_pay_AM = 0;
  AM_target_amount.innerHTML = "";
  AM_goal_name.innerHTML = "";
  AM_deposit_amount.innerHTML = "";
  button_no_AM.style.color = "black";
  button_yes_AM.style.background = "lightgrey";
  button_yes_AM.style.color = "black";
  button_no_AM.style.background = "lightgrey";
  percent_1 = (parseFloat(collected_1.innerHTML.replace("$",""))
                                 / parseFloat(target_1.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%";
  percent_2 =  (parseFloat(collected_2.innerHTML.replace("$",""))
                                 / parseFloat(target_2.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%";
  percent_3 = (parseFloat(collected_3.innerHTML.replace("$",""))
                                 / parseFloat(target_3.innerHTML.replace("$",""))*100).toFixed(2).toString() + "%";
  StorageUpdate();
}


