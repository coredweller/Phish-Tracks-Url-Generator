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
		var showDateText = $( "#showDate" ).val();
		
		//Make sure show date is not empty
		if(!showDateText){
			$( "#generatedLink" ).text("Show Date is required");
			return;
		}
		
		//Make sure show date is a date
		if(!isDate(showDateText)){
			$( "#generatedLink" ).text("Please enter a valid show date");
			return;
		}
	
		//Format the date the way Phish Tracks wants it
		var date = new Date(showDateText);
		var showDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate());
		
		var finalText = baseShowUrl + showDate;
		
		var songNameText = $( "#songName" ).val();
		//If song name is filled out, concatenate it at the end
		if(songNameText){
			var songName = songNameText.replace(/\s+/g, '-').toLowerCase();
			finalText += "/" + songName;
		}
		
		$( "#generatedLink" ).text(finalText);
	});
  
});