export const dataCleaner = (graphData) => ({
  data: {
    labels: graphData.dataset.data.map(dataPoint => dataPoint[0]).reverse(),
    datasets: [
      {
        label: graphData.dataset.name,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderndColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: graphData.dataset.data.map(dataPoint => dataPoint[1]).reverse()
      }
    ]
  },
  legend: {
    display: true,
    position: 'bottom'
  }
});




