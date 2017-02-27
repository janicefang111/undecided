for (var i=1; i<5; i++) {
  var budget = document.getElementById("budget" + i).value;
  var spent = document.getElementById("spent" + i).innerHTML.replace("$","");
  var percent = parseFloat(spent)/parseFloat(budget);
  var percent_filled = document.getElementById("percent_filled" + i);
  percent_filled.style.width = (percent*59.7).toFixed(2) + "%";
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
    percent_filled.style.background = "red";
  }
  else {
  var percent = parseFloat(spent)/parseFloat(budget);
  percent_filled.style.width = (percent*59.7).toFixed(2) + "%";
  percent_filled.style.background = "#3ba7ff";
  }
};

