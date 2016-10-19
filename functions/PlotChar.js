/*var e ;
var e1;
var x-axis;
var y-axis;*/
function DisBarChart () {
    
var e = document.getElementById("xAxis");
var xAxis = e.options[e.selectedIndex].text;
var e1 = document.getElementById("yAxis");
var yAxis = e1.options[e1.selectedIndex].text; 
var x1=-1;
var y1=-1;
    var points;
    
$.getJSON("Data/output.js", function(data) {
    

            for (i in data.Attributs)
            { 

	 if(data.Attributs[i]== xAxis)
          x1 = i;
    
            if(data.Attributs[i]== yAxis)
          y1 = i;

         
     }
       
    if(y1!=-1 && x1 != -1)
     {  
         if(isNaN(parseFloat(data.Values[x1][1][0])))
                 {          
         points = [{  y: parseFloat(data.Values[y1][1][0]), lable: "hi1"},
	               {  y: parseFloat(data.Values[y1][1][1]), lable: "hi1"},
                   {  y: parseFloat(data.Values[y1][1][2]), lable: "hi1"},
	               {  y: parseFloat(data.Values[y1][1][3]), lable: "hi1"},
                   {  y: parseFloat(data.Values[y1][1][4]), lable: "hi1"},
	               {  y: parseFloat(data.Values[y1][1][5]), lable: "hi1"},
                   { y: parseFloat(data.Values[y1][1][6]),  lable: "hi1"}
                 ]
            }    
             else
         if(isNaN(parseFloat(data.Values[y1][1][0])))
                     {          
         points = [{ x: parseFloat(data.Values[x1][1][0]), lable: data.Values[y1][1][0]},
	               { x: parseFloat(data.Values[x1][1][1]), lable: data.Values[y1][1][1]},
                   { x: parseFloat(data.Values[x1][1][2]), lable: data.Values[y1][1][2]},
	               { x: parseFloat(data.Values[x1][1][3]), lable: data.Values[y1][1][3]},
                   { x: parseFloat(data.Values[x1][1][4]), lable: data.Values[y1][1][4]},
	               { x: parseFloat(data.Values[x1][1][5]), lable: data.Values[y1][1][5]},
                   { x: parseFloat(data.Values[x1][1][6]), lable: data.Values[y1][1][6]}
                 ]
            }
              
            else
            {          
         points = [{ x: parseFloat(data.Values[x1][1][0]), y: parseFloat(data.Values[y1][1][0])},
	               { x: parseFloat(data.Values[x1][1][1]), y: parseFloat(data.Values[y1][1][1])},
                   { x: parseFloat(data.Values[x1][1][2]), y: parseFloat(data.Values[y1][1][2])},
	               { x: parseFloat(data.Values[x1][1][3]), y: parseFloat(data.Values[y1][1][3])},
                   { x: parseFloat(data.Values[x1][1][4]), y: parseFloat(data.Values[y1][1][4])},
	               { x: parseFloat(data.Values[x1][1][5]), y: parseFloat(data.Values[y1][1][5])},
                   { x: parseFloat(data.Values[x1][1][6]), y: parseFloat(data.Values[y1][1][6])}
                 ]
            }
         
			CanvasJS.addCultureInfo("es", {
				decimalSeparator: ",",// Observe ToolTip Number Format
				digitGroupSeparator: ".", // Observe axisY labels
				days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]

			});

			var chart = new CanvasJS.Chart("barchartContainer", {
				theme: "theme1",
				culture: "es",
				animationEnabled: true,
                title:{
        text: document.getElementById("Lable").value   
      },
      axisY: {
        title: yAxis
      },
      axisX: {
        title: xAxis
      },
      theme: "theme2",
				data: [
				{
					type: "column",
					dataPoints: points
				}
				]
			});

			chart.render();
		}
 });}