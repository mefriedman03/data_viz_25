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
                backgroundColor: "rgb(255,165,0,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                    {x: 0, y: 2},
                  ],
                  label: "Sam Coffey",
                  borderColor: "#3e95cd",
                  backgroundColor: "rgb(255,165,0,0.1)",
                  borderWidth:2,
                
              }, { 
                data: [
                    {x: 2, y: 0},
                    ],
                    label: "Tierna Davidson",
                    borderColor: "#3e95cd",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
                
              }, { 
                data: [
                    {x: 1, y: 1},
                    ],
                    label: "Crystal Dunn",
                    borderColor: "#3e95cd",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
                
              },{ 
                data: [
                    {x: 0, y: 1},
                    ],
                    label: "Emily Fox",
                    borderColor: "#3e95cd",
                    backgroundColor:"rgb(255,165,0,0.1)",
                    borderWidth:2,
                
              },{ 
                data: [
                {x: 2, y: 0},
                ],
                label: "Naomi Girma",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 5, y: 3},
                ],
                label: "Lindsey Horan",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 0, y: 2},
                ],
                label: "Casey Kreuger",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 0, y: 3},
                ],
                label: "Rose Lavelle",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 0, y: 1},
                ],
                label: "Catarina Macario",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 2, y: 1},
                ],
                label: "Alex Morgan",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 2, y: 1},
                ],
                label: "Jenna Nighswonger",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 0, y: 2},
                ],
                label: "Midge Purce",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 0, y: 1},
                ],
                label: "Yazmeen Ryan",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 1, y: 1},
                ],
                label: "Emma Sears",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 6, y: 1},
                ],
                label: "Jaedyn Shaw",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 9, y: 4},
                ],
                label: "Sophia Smith",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 6, y: 4},
                ],
                label: "Mallory Swanson",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 1, y: 0},
                ],
                label: "ALyssa Thompson",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 4, y: 1},
                ],
                label: "Lynn Williams",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 1, y: 0},
                ],
                label: "Lily Yohannes",
                borderColor: "#3e95cd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }

            ]
          },
          options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Sophia Smith and Mallory Swanson were tied for most assists in 2024, but Smith surpassed Swanson in goals',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Seven USWNNT players had at least one assist but never scored in 2024.'
                },},
                scales: {
              y: {
                title: {
                  display: true,
                  text: 'Assists'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Goals'
                  }
              }
            }
          }
        });