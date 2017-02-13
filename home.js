var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx,{
    type: 'pie',
    data: {
    labels: [
        "Utilities",
        "Entertainment",
        "Food",
        "Education"
    ],
    datasets: [
        {
            data: [30, 5, 10, 20],
            backgroundColor: [
                "#0C2440",
                "#3E627F",
                "#2A82E5",
                "#72B4E9"
            ],
            hoverBackgroundColor: [
                "#0C2440",
                "#3E627F",
                "#2A82E5",
                "#72B4E9"
            ]
        }]
},
    options: {
        animation:{
            animateScale:true
    },
      legend:{
        display: true,
        position: 'bottom',
        labels: {
          fontSize: 14,
          fontColor: "black"
        }
      },
      title:{
        display: true,
        position: "top",
        text: 'January Transactions',
        fontSize: 22,
        fontColor: "black"
      }
      
    }
});
