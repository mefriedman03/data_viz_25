
var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 1, y: 1},
                ],
                label: "Korbin Albert",
                borderColor: "#3e95cd",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 0, y: 2},
                ],
                label: "Sam Coffey",
                borderColor: "#3e95cd",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 2, y: 0},
                ],
                label: "Tierna Davidson",
                borderColor: "#3e95cd",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 1, y: 1},
                ],
                label: "Crystal Dunn",
                borderColor: "#3e95cd",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 0, y: 1},
                ],
                label: "Emily Fox",
                borderColor: "#3e95cd",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 2, y: 0},
                ],
                label: "Naomi Girma",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 5, y: 3},
                ],
                label: "Lindsey Horan",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 0, y: 2},
                ],
                label: "Casey Kreuger",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 0, y: 3},
                ],
                label: "Rose Lavelle",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 0, y: 1},
                ],
                label: "Catarina Macario",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 2, y: 1},
                ],
                label: "Alex Morgan",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 2, y: 1},
                ],
                label: "Jenna Nighswonger",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 0, y: 2},
                ],
                label: "Midge Purce",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 0, y: 1},
                ],
                label: "Yazmeen Ryan",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 1, y: 1},
                ],
                label: "Emma Sears",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 6, y: 1},
                ],
                label: "Jaedyn Shaw",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 9, y: 4},
                ],
                label: "Sophia Smith",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 6, y: 4},
                ],
                label: "Mallory Swanson",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 1, y: 0},
                ],
                label: "ALyssa Thompson",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 4, y: 1},
                ],
                label: "Lynn Williams",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 1, y: 0},
                ],
                label: "Lily Yohannes",
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
