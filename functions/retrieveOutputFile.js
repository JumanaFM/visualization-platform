
        $.getJSON("Data/output.js", function(data) {
            console.log(data.Attributs[0]);
            
            for (i in data.Attributs)
            { 

	
         var x = document.getElementById("xAxis");
         var xOption = document.createElement("option");
         xOption.text = data.Attributs[i];
         x.add(xOption);
         var y = document.getElementById("yAxis");
         var yOption = document.createElement("option");
         yOption.text = data.Attributs[i];
         y.add(yOption);


         
     }
        });