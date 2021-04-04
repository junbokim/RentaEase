google.charts.load('current', {'packages':['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {

        var chartDiv = document.getElementById('chart_div');

        var data = google.visualization.arrayToDataTable([
          ['Galaxy', 'Views for listings'],
          ['Monday', 74],
          ['Tuesday', 12],
          ['Wednesday', 92],
          ['Thursday', 54],
          ['Friday', 59],
          ['Saturday', 24],
          ['Sunday', 35]
        ]);

        var materialOptions = {
          width: 650,
          chart: {
            title: 'Views for all your property listing(s) last week',
            subtitle: '11/05 to 17/05'
          },
          series: {
            0: { axis: 'distance' }, 
          },
          axes: {
            y: {
              distance: {label: 'Number of views'}, 
            }
          }
        };

        function drawMaterialChart() {
          var materialChart = new google.charts.Bar(chartDiv);
          materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
        }


        drawMaterialChart();
    };