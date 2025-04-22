var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jane Campbelle', 'Mandy Haught', 'Casey Murphy', 'Alyssa Naeher'],
        datasets: [{
            label: 'Games Played',
            data: [1, 1, 3, 18],
            backgroundColor: [
                '#ff0800'
            ]
        },
        {
            label: 'Shutouts',
            data: [1, 1, 2, 10],
            backgroundColor: [
                '#FFA500'
            ],
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Apples and Oranges by year',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'For all but one year, oranges outnumbered apples'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});