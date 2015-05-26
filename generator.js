$( document ).ready(function() {
	
	function isDate(val) {
		var d = new Date(val);
		return !isNaN(d.valueOf());
	}	
  
	//TODO:
	//If there is an error then turn the text red
	//At the beginning of the function turn the text back to black
	
	//if it is a date then figure a way to display it correctly.  javascript dates are not correct for month with zero in front like 01 and if u put the date on the first of the month it ends up calculating it as the last of the prev month
  
  
	$( "#submitButton" ).click(function() {
		$( "#generatedLink" ).text("");
		var baseShowUrl = "http://www.phishtracks.com/shows/";
		var year = $( "#year" ).val();
		var month = $( "#month" ).val();
		var day = $( "#day" ).val();
		
		try
		{
			//Make sure show date is not empty
			if(!year || !month || !day){
				$( "#generatedLink" ).text("Year, Month, and Day are required.");
				return;
			}
			
			var date = year + "-" + month + "-" + day;
			//Make sure show date is a date
			if(!isDate(date) || isNaN(year) || isNaN(month) || isNaN(day) || parseInt(year) < 1980){
				$( "#generatedLink" ).text("Please enter a valid show date");
				return;
			}

			var finalText = baseShowUrl + date;
			
			var songNameText = $( "#songName" ).val();
			//If song name is filled out, concatenate it at the end
			if(songNameText){
				var songName = songNameText.replace(/\s+/g, '-').toLowerCase();
				finalText += "/" + songName;
			}
			
			$( "#generatedLink" ).text(finalText);
		}
		catch(e){
			$( "#generatedLink" ).text("An error occurred, please enter valid information and try again.");
		}
	});
  
});