// Get the modal
var AM_modal = document.getElementById('Add_more_modal');

// Get the button that opens the modal
var AM_button = document.getElementById("addacct_button");

// Get the <span> element that closes the modal
var AM_span = document.getElementsByClassName("AM_close")[0];

AM_button.onclick = function() {
    AM_modal.style.display = "block";
}

AM_span.onclick = function() {
  AM_modal.style.display = "none";
  Added_row = 0;
}

//Interactive table variables like delte button 
var row1 = document.getElementById("row1");
var del1 = document.getElementById("del_1");
var row2 = document.getElementById("row2");
var del2 = document.getElementById("del_2");
var row3 = document.getElementById("row3");
var del3 = document.getElementById("del_3");

var name_1 = document.getElementById("name_1");
var target_1 = document.getElementById("target_1");

var name_2 = document.getElementById("name_2");
var target_2 = document.getElementById("target_2");

var name_3 = document.getElementById("name_3");
var target_3 = document.getElementById("target_3");

//Empty vs full rows
var l1 = 1;
var l2 = 1;
var l3 = 1;
//Which row is being added (value 1,2 or 3)
var Added_Row = 0;
//Which Deposit modal is active (value 1,2 or 3)
var D_active = 0;

//Display for empty table
function EmptyCheck(){
  if (l1 === 0 && l2 === 0 && l3 === 0){
    table.style.display = "none";
    no_goals.innerHTML = "You have no bank accounts";
    no_goals.style.display = "block";
  }
}

//Deleting accounts
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
del1.onclick = CollapseRow1;
del2.onclick = CollapseRow2;
del3.onclick = CollapseRow3;

///Adding new account
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
var AM_goal_name= document.getElementById("AM_goal_name");
var AM_deposit_amount= document.getElementById("AM_deposit_amount");
var AM_target_amount= document.getElementById("AM_target_amount");

var name_1 = document.getElementById("name_1");
var target_1 = document.getElementById("target_1");

var name_2 = document.getElementById("name_2");
var target_2 = document.getElementById("target_2");

var name_3 = document.getElementById("name_3");
var target_3 = document.getElementById("target_3");

//Saving a new goal

AM_save_goal.onclick = function(){
  Add_row();
  AM_modal.style.display = "none";
 if (Added_Row === 1){
  name_1.innerHTML = AM_goal_name.innerHTML;
  target_1.innerHTML = AM_target_amount.innerHTML; 
  AM_modal.style.display = "none";
}
  else  if (Added_Row === 2){
  name_2.innerHTML = AM_goal_name.innerHTML;
  target_2.innerHTML = AM_target_amount.innerHTML; 
  AM_modal.style.display = "none";
}
  else  if (Added_Row === 3){
  name_3.innerHTML = AM_goal_name.innerHTML;
  target_3.innerHTML = AM_target_amount.innerHTML; 
  AM_modal.style.display = "none";
}
  Added_Row = 0;
  AM_target_amount.innerHTML = "";
  AM_goal_name.innerHTML = "";
  AM_deposit_amount.innerHTML = "";
}
