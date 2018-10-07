var cellObjectArray = [];
			function initialRow() {
				let rows = 101;
				for(i=0; i < rows; i ++){
					let cellobject = {active: true, element: document.createElement("div")};
					let randomState = Math.random();

					if(randomState < 0.8) {
						cellobject.active = false;
						cellobject.element.setAttribute("style", "display: inline; float: left; background-color: black; border: 0.2px solid gray; width: 5px; height: 5px;");
						cellObjectArray[i] = cellobject.active;
					}
					else {
						cellobject.active = true;
						cellobject.element.setAttribute("style", "display: inline; float: left; background-color: white; border: 0.2px solid gray; width: 5px; height: 5px;");
						cellObjectArray[i] = cellobject.active;
					}
				}
			}
				
				var getRow = function(context, colours, y, pixelSize, data){
					var i;
					for(i = 0; i < 101; i ++){
					context.fillStyle = colours[data[i]];
        			context.fillRect(i * pixelSize, y * pixelSize, pixelSize, pixelSize);
					}
				};
			function genDiv(v){ 
				
				
      			var e = document.body; // whatever you want to append the rows to: 
      			for(var i = 0; i < 101; i++){ 
        			var row = document.createElement("div"); 
        			row.className = "row"; 
        			for(var x = 1; x <= v; x++){ 
            			var cell = document.createElement("div"); 
            			cell.className = "gridsquare"; 
            			row.appendChild(cell); 
        			} 
        			e.appendChild(row); 
      			} 
      			document.getElementById("code").innerText = e.innerHTML;

    		}

