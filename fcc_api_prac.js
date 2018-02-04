console.log("fcc_api_prac.js is connected");



 $(document).ready(function() {
	  	var html = "";
	    $("#getJson").on("click", function(){
			 $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/",function(json){
			    	 console.log("JSON file is connected");
			         
			               json = json.filter(function(object) { //only use this object
        				    return (object.author == "H. G. Wells (1866-1946)");
       						 });		   
					 json.forEach(function(object){
					 	   console.log("printing object:");
					       console.log(object); //print the whole object
					       console.log(object.quote); //print the value of the key named quote
					       console.log(object["author"]); //print the value of the author key
					     //console.log(object.author); //same as above
					        console.log("stop"); 

					       html += "<div>" + "<em>" + object.quote + "</em>" + "</div>" + "<div>" + "- " + object.author + "</div>"; 
					      //prints the quotes and the authors from each object
					 });
			  });
		  $(".message").html(html.content);
	    });
 });
 //takes time to load but works 

				          // var keys = object.keys(val);
				          // html += "<div class = 'cat'>";
				          
				          // keys.forEach(function(key){
				          //   html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
				          // });
				          
				          // html += "</div><br>";