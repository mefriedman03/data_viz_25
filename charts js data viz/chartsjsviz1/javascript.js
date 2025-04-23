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
                '#0000FF'
            ],
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Alyssa Naeher played in the most games and had the most shutouts in 2024. ',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Both goalkeepers who played in only one game had shutouts. '
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});