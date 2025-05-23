var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#000000",
                backgroundColor: "rgb(255,165,0,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#000000",
                backgroundColor: "rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#000000",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#000000",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#000000",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#000000",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 61.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#000000",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#000000",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#000000",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
              plugins: {
                  title: {
                      display: true,
                      text: 'Countries with high life expectancies also tend to have higher GDP per capitas', 
                      font: {
                          size: 18
                      }
                  },
                  subtitle: {
                      display: true,
                      text: 'Japan and the U.S. have the highest life expectancies and the highest GDPs per capita.', 
                      font: {
                          size: 14
                      },
                      color: '#666'
                  }
              },
  
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });