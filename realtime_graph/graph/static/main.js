var ctx = document.getElementById('myChart').getContext('2d');
var graphData = {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderWidth: 1
        }]
    },
    options: {}
}
var myChart = new Chart(ctx,graphData);



var socket = new WebSocket('ws://192.168.1.4:8000/ws/graph/');

socket.onmessage = function(e){
    var djangodata = JSON.parse(e.data);
    console.log(djangodata);

    var newGraphData = graphData.data.datasets[0].data;
    newGraphData.shift();
    newGraphData.push(djangodata.value);
    
    graphData.data.datasets[0].data = newGraphData;
    myChart.update();

}