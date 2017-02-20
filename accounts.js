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
var Added_Row = 0;

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
  Added_Row = 0;
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
//Which row is being deleted
var Deleted_Row = 0;

//Display for empty table
function EmptyCheck(){
  if (l1 === 0 && l2 === 0 && l3 === 0){
    table.style.display = "none";
    no_goals.innerHTML = "You have no linked accounts!";
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



var Add_account = document.getElementById("Add_account");
var D_save_goal = document.getElementById("D_save_goal");
var AM_account_name= document.getElementById("AM_account_name");
var AM_bank_name= document.getElementById("AM_bank_name");
var AM_routing_nb= document.getElementById("AM_routing_nb");
var AM_account_nb= document.getElementById("AM_account_nb");


var Bank_name_1 = document.getElementById("Bank_name_1");
var Account_nb_1 = document.getElementById("Account_nb_1");
var Routing_nb_1 = document.getElementById("Routing_nb_1");


var Bank_name_2 = document.getElementById("Bank_name_2");
var Account_nb_2 = document.getElementById("Account_nb_2");
var Routing_nb_2 = document.getElementById("Routing_nb_2");


var Bank_name_3 = document.getElementById("Bank_name_3");
var Account_nb_3 = document.getElementById("Account_nb_3");
var Routing_nb_3 = document.getElementById("Routing_nb_3");

//Saving a new goal


Add_account.onclick = function(){

  Add_row();
  AM_modal.style.display = "none";
 if (Added_Row === 1){
  name_1.innerHTML = AM_account_name.innerHTML;
  Bank_name_1.innerHTML = AM_bank_name.innerHTML; 
  Account_nb_1.innerHTML = "****" + AM_account_nb.innerHTML.substring(AM_account_nb.innerHTML.length-2,AM_account_nb.innerHTML.length);
  Routing_nb_1.innerHTML = AM_routing_nb.innerHTML;
  AM_modal.style.display = "none";
}
  else  if (Added_Row === 2){
   name_2.innerHTML = AM_account_name.innerHTML;
  Bank_name_2.innerHTML = AM_bank_name.innerHTML; 
  Account_nb_2.innerHTML = "****" + AM_account_nb.innerHTML.substring(AM_account_nb.innerHTML.length-2,AM_account_nb.innerHTML.length);
  Routing_nb_2.innerHTML = AM_routing_nb.innerHTML;
  AM_modal.style.display = "none";
}
  else  if (Added_Row === 3){
  name_3.innerHTML = AM_account_name.innerHTML;
  Bank_name_3.innerHTML = AM_bank_name.innerHTML; 
  Account_nb_3.innerHTML = "****" + AM_account_nb.innerHTML.substring(AM_account_nb.innerHTML.length-2,AM_account_nb.innerHTML.length);
  Routing_nb_3.innerHTML = "****" + AM_routing_nb.innerHTML.substring(AM_routing_nb.innerHTML.length-2,AM_routing_nb.innerHTML.length);
  AM_modal.style.display = "none";
  }
  Added_Row = 0;
  AM_target_amount.innerHTML = "0";
  AM_goal_name.innerHTML = "New Goal";
  AM_bank_name.innerHTML = ""; 
} 

