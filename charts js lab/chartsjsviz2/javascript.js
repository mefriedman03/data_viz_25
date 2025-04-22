var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: '# Goals',
            data: [7, 17, 7, 18, 9, 0, 8, 4, 2, 2],
            fill: false,
            borderColor: 'rgba(255, 8, 0)'},
            {
            label: '# Assists',
            data: [0, 3, 2, 3, 3, 0, 2, 1, 4, 1],
            fill: false,
            borderColor: 'rgba(30,144,255)'},
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
                beginAtZero: true,
            }
        },
    },
});