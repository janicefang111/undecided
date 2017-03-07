for (var i=1; i<5; i++) {
  var budget = document.getElementById("budget" + i).value;
  var spent = document.getElementById("spent" + i).innerHTML.replace("$","");
  var percent = parseFloat(spent)/parseFloat(budget);
  var percent_filled = document.getElementById("percent_filled" + i);
  percent_filled.style.width = (percent*59.7).toFixed(2) + "%";
  var difference = (parseFloat(budget) - parseFloat(spent));
  var rest = document.getElementById("rest" + i);
  rest.innerHTML = "$" + Math.abs(difference);
  var rem_over = document.getElementById("rem_over" + i);
  if (difference >= 0) {
    rem_over.innerHTML = "remaining";
    rem_over.style.color = "black";
    rest.style.color = "black";
  }
  else {
    rem_over.innerHTML = "over";
    rem_over.style.color = "#ef4940";
    rest.style.color = "#ef4940";
  }
};

function functionC(val) {
  var i = val.id.substring(6);
  var budget = val.value;
  var spent = document.getElementById("spent" + i).innerHTML.replace("$","");
  var percent_filled = document.getElementById("percent_filled" + i);
  if(parseFloat(budget) == 0) {
    percent_filled.style.width = "0%";
    percent_filled.style.background = "#3ba7ff";
  }
  if(parseFloat(spent)/parseFloat(budget) > 1) {
    percent_filled.style.width = "59.7%";
    percent_filled.style.background = "#ef4940";
  }
  else {
  var percent = parseFloat(spent)/parseFloat(budget);
  percent_filled.style.width = (percent*59.7).toFixed(2) + "%";
  percent_filled.style.background = "#3ba7ff";
  }
  var difference = (parseFloat(budget) - parseFloat(spent));
  var rest = document.getElementById("rest" + i);
  rest.innerHTML = "$" + Math.abs(difference);
  var rem_over = document.getElementById("rem_over" + i);
  if (difference >= 0) {
    rem_over.innerHTML = "remaining";
    rem_over.style.color = "black";
    rest.style.color = "black";
  }
  else {
    rem_over.innerHTML = "over";
    rem_over.style.color = "#ef4940";
    rest.style.color = "#ef4940";
  }
};

