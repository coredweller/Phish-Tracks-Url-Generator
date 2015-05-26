$( document ).ready(function() {
	
	function isDate(val) {
		var d = new Date(val);
		return !isNaN(d.valueOf());
	}	
  
	//TODO:
	//If there is an error then turn the text red
	//At the beginning of the function turn the text back to black
  
  
	$( "#submitButton" ).click(function() {
		$( "#generatedLink" ).text("");
		$( "#errorMessage" ).text("");
		var baseShowUrl = "http://www.phishtracks.com/shows/";
		var year = $( "#year" ).val();
		var month = $( "#month" ).val();
		var day = $( "#day" ).val();
		
		try
		{
			if(!year || !month || !day){
				$( "#errorMessage" ).text("Year, Month, and Day are required.");
				return;
			}
			
			var date = year + "-" + month + "-" + day;
			if(!isDate(date) || isNaN(year) || isNaN(month) || isNaN(day) || parseInt(year) < 1980){
				$( "#errorMessage" ).text("Please enter a valid show date");
				return;
			}

			var finalText = baseShowUrl + date;
			
			var songNameText = $( "#songName" ).val();
			//If song name is filled out, concatenate it at the end
			if(songNameText){
				var songName = songNameText.replace(/\s+/g, '-').toLowerCase();
				finalText += "/" + songName;
			}
			
			$( "#generatedLink" ).prop("href", finalText);
			$( "#generatedLink" ).text(finalText);
		}
		catch(e){
			$( "#errorMessage" ).text("An error occurred, please enter valid information and try again.");
		}
	});
  
});