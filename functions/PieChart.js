function DisPieChart () {
    
var e = document.getElementById("xAxis");
var xAxis = e.options[e.selectedIndex].text; 
var x1=-1;
    var points;
    
$.getJSON("Data/output.js", function(data) {
    

            for (i in data.Attributs)
            { 

	 if(data.Attributs[i]== xAxis)
          x1 = i;
    
         
     }
       
    
         if( x1 != -1)
     {  
          points = [{ y: parseFloat(data.Values[x1][1][0])},
	               {  y: parseFloat(data.Values[x1][1][1])},
                   {  y: parseFloat(data.Values[x1][1][2])},
	               {  y: parseFloat(data.Values[x1][1][3])},
                   {  y: parseFloat(data.Values[x1][1][4])},
	               {  y: parseFloat(data.Values[x1][1][5])},
                   {  y: parseFloat(data.Values[x1][1][6])}
                 ]
            

			var chart = new CanvasJS.Chart("barchartContainer",
			{
				title: {
					text: document.getElementById("Lable").value
				},
				animationEnabled: true,
				animationDuration: 2000,
				legend: {
					verticalAlign: "bottom",
					horizontalAlign: "center"
				},
				data: [
				{
					indexLabelFontSize: 20,
					indexLabelFontFamily: "Monospace",
					indexLabelFontColor: "darkgrey",
					indexLabelLineColor: "darkgrey",
					indexLabelPlacement: "outside",
					type: "pie",
					toolTipContent: "{y} - <strong>#percent%</strong>",
					dataPoints: points
				}
				]
			});
			chart.render();
			}
 });}
