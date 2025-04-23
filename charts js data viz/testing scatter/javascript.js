var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 1, y: 1},
                ],
                label: "Korbin ALbert",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                    {x: 0, y: 2},
                  ],
                  label: "Sam Coffey",
                  borderColor: "#3cba9f",
                  backgroundColor: "rgb(60,186,159,0.1)",
                  borderWidth:2,
                
              }, { 
                data: [
                    {x: 2, y: 0},
                    ],
                    label: "Tierna Davidson",
                    borderColor: "#ffa500",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
                
              }, { 
                data: [
                    {x: 1, y: 1},
                    ],
                    label: "Crystal Dunn",
                    borderColor: "#ffa500",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
                
              },{ 
                data: [
                    {x: 0, y: 1},
                    ],
                    label: "Emily Fox",
                    borderColor: "#ffa500",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
                
              }

            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Y axis title'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'X axis title'
                  }
              }
            }
          }
        });