
function popUpApp(x) {
    switch(x){
		case 'syllabus':
		$("#popUp").html('Syllabus<iframe height="90%" width="100%" src="https://docs.google.com/document/d/1JLMGXWO8VVucekg9G36xGMwf_kmINzDtwSgaFCgzOn0/edit?usp=sharing" allowfullscreen webkitallowfullscreen></iframe><span id="closeButton"> <a class="myButton" href="#" onClick="$(this).parent().parent().hide(300)">✖</a></span>').show(300);
		break;
		case 'writingbook':
		$("#popUp").html('Writing Book for Beginners<iframe height="90%" width="100%" src="/ViewerJS/#../docs/book4beginners.odt"></iframe><span id="closeButton"> <a class="myButton" href="#" onClick="$(this).parent().parent().hide(300)">✖</a></span>').show(300);
		break;
		default: 
	}

}
$(document).ready(function() {
		let idPick = "#0";
		let textSwal = "";
		for (i = 1; i < 118; i++) { 
				startdate = "01.13.2019";
				var new_date = moment(startdate, "MM.DD.YYYY");
				new_date.add(i, 'd');
				//alert(new_date);
				let newDateFormat = new_date.format("ddd, MMM D YYYY");
				//let checkDayOfWeek = newDateFormat.split(" ");
				switch (i) { 
					case 1:
					case 2:
					case 3:
					case 4:
					$("#content").append("<div class='day' id='day" + i + "'>" + i + " <br><strong>" + newDateFormat + "</strong></div><div data='" + newDateFormat  + "' id='info" + i + "' class='inform'>Welcome to <br />Introduction to College Writing<br><br><span><a class='myButton' onClick=\"popUpApp('syllabus');\">Click to read syllabus</a><a class='myButton' href='https://blackhawk.blackboard.com/webapps/assessment/take/launchAssessment.jsp?course_id=_56259_1&content_id=_1212455_1&mode=cpview'>Precourse Assessment</a><a class='myButton' href='https://blackhawk.blackboard.com/webapps/assessment/take/launchAssessment.jsp?course_id=_56259_1&content_id=_1220870_1&mode=cpview'>Student Survey</a></span><br><p>All assignments or assessments listed are due by the end of class.</p>");
					break;
					case 57:
					$("#content").append("<div class='day' id='day" + i + "'>" + i + " <br><strong>" + newDateFormat + "<br>Mid-term</strong></div><div data='" + newDateFormat  + "' id='info" + i + "' class='inform'>Welcome to <br />Introduction to College Writing<br><br><button class='button' onClick='swal(\"Hello world! 57\");' id='syllabusLink'>Click to Read the Syllabus</button>");
					$(".day:contains(" + i + ")").css( "background-color", "#66ff33" );
					break;
					case 58:
					case 59:
					case 60:
					case 61:
					$("#content").append("<div class='day' id='day" + i + "'>" + i + " <br><strong>" + newDateFormat + "<br>Spring Break No Classes</strong></div><div data='" + newDateFormat  + "' id='info" + i + "' class='inform'>Welcome to <br />Introduction to College Writing<br><br><button class='button' onClick='swal(\"Hello world! 58\");' id='syllabusLink'>Click to Read the Syllabus</button>");
					$(".day:contains(" + i + ")").css( "background-color", "#66ff33" );
					break;
					case 113:
					case 114:
					case 115:
					case 116:
					case 117:
					$("#content").append("<div class='day' id='day" + i + "'>" + i + " <br><strong>" + newDateFormat + "<br>Final Exam Week</strong></div><div data='" + newDateFormat  + "' id='info" + i + "' class='inform'>Welcome to <br />Introduction to College Writing<br><br><button class='button' onClick='swal(\"Hello world! 113\");' id='syllabusLink'>Click to Read the Syllabus</button>");
					$(".day:contains(" + i + ")").css( "background-color", "#66ff33" );
					break;
					default:
					$("#content").append("<div class='day' id='day" + i + "'>" + i + " <br><strong>" + newDateFormat + "</strong></div><div data='" + newDateFormat  + "' id='info" + i + "' class='inform'></div>");
					};
				
			$("#popUp").hide(); 		
					
				
		}
		


		$(".day").hover(function() {
				$( this ).css( "background-color", "black" );
				$( this ).css( "color", "yellow" );
				$(idPick).css("background-color", "red");
			}, function() {
				$( this ).css( "background-color", "yellow" );
				$( this ).css( "color", "black" );
				$(idPick).css("background-color", "red");
				$(".day:contains(57)").css( "background-color", "#66ff33" );
				$(".day:contains(58)").css( "background-color", "#66ff33" );
				$(".day:contains(59)").css( "background-color", "#66ff33" );
				$(".day:contains(60)").css( "background-color", "#66ff33" );
				$(".day:contains(61)").css( "background-color", "#66ff33" );
				$(".day:contains(113)").css( "background-color", "#66ff33" );
				$(".day:contains(114)").css( "background-color", "#66ff33" );
				$(".day:contains(115)").css( "background-color", "#66ff33" );
				$(".day:contains(116)").css( "background-color", "#66ff33" );
				$(".day:contains(117)").css( "background-color", "#66ff33" );
				
			});

		$(".day").click(function() {
            console.log($(this).next(".inform").is(":hidden"));
            if ($(this).next(".inform").is(":hidden") == true){
                $(idPick).css("background-color", "yellow");
                $(idPick).css("color", "black");	
                idPick = '#' + this.id;	
                console.log("clicked " + idPick)
                let dayPick = $(this).html().split(" ");
                $('.inform').slideUp(500);
                $(this).next('.inform').slideDown(500);
                $( this ).css( "background-color", "red" );
                //$( ".day" ).css( "background-color", "yellow" );
                //alert($(this).attr("id"));
                
                switch (dayPick[0]) { 
                    case '112': 
                    alert(dayPick[0]);	
                    $("#info").html( "Welcome to <br />Introduction to College Writing<br><br><button class='button' onClick=\"swal({\"  title: '<strong>HTML <u>example</u></strong>', type:'info',  html:'You can use <b>bold text</b><a href=\"//github.com\">links</a> and other HTML tags' showCloseButton: true,   showCancelButton: true,  focusConfirm: false,  confirmButtonText:'<i class=\"fa fa-thumbs-up\"></i> Great!', confirmButtonAriaLabel: 'Thumbs up, great!', cancelButtonText: '<i class=\"fa fa-thumbs-down\"></i>', cancelButtonAriaLabel: 'Thumbs down', })\");\" id='syllabusLink'>Click to Read the Syllabus</button>");
                    break;
                    case '113':
                    $(this).next('.inform').html("<h1>Final Exam Week</h1>");
                    break;
                    case '114':
                    $(this).next('.inform').html("<h1>Final Exam Week</h1>");
                    break;
                    case '115':
                    $(this).next('.inform').html("<h1>Final Exam Week</h1>");
                    break;
                    case '116':
                    $(this).next('.inform').html("<h1>Final Exam Week<br>Thursday Night 6:00 to 9:00 pm</h1>");
                    break;
                    default:
                    $("#info").html(textSwal);
                    };
                
                //
            } else {
                $(this).next('.inform').slideUp(500);
            }
                

			
		});

		$("#mon9").click(function() {
			shwAll(); 
			$(".day:contains(Tue)").hide();
			$(".day:contains(Sat)").hide();
			$(".day:contains(Sun)").hide();
			$(".day:contains(Wed)").hide(); 
			$(".day:contains(Thu)").hide(); 
			$(".day:contains(Fri)").hide(); 
			//$(".inform").hide();
			$(".inform").hide();
		})

		$("#wed9").click(function() {
			shwAll(); 
			$(".day:contains(Tue)").hide();
			$(".day:contains(Sat)").hide();
			$(".day:contains(Sun)").hide();		 
			$(".day:contains(Mon)").hide(); 
			$(".day:contains(Thu)").hide(); 
			$(".day:contains(Fri)").hide(); 
			$(".inform").hide();
		})

		$("#monWed1").click(function() {
			shwAll(); 
			$(".day:contains(Sat)").hide();
			$(".day:contains(Sun)").hide();
			$(".day:contains(Tue)").hide();
			$(".day:contains(Thu)").hide(); 
			$(".day:contains(Fri)").hide(); 
			$(".inform").hide();
		})
		function shwAll() {
			$(".day:contains(Sat)").show();
			$(".day:contains(Sun)").show();
			$(".day:contains(Mon)").show();
			$(".day:contains(Tue)").show();
			$(".day:contains(Wed)").show(); 
			$(".day:contains(Thu)").show(); 
			$(".day:contains(Fri)").show(); 
			$(".inform").hide();
		}

		$("#showAll").click(function() {
			shwAll(); 
		})

		$("#tuesNight").click(function() {
			shwAll(); 
			$(".day:contains(Mon)").hide();
			$(".day:contains(Sat)").hide();
			$(".day:contains(Sun)").hide();	 
			$(".day:contains(Wed)").hide(); 
			$(".day:contains(Thu)").hide(); 
			$(".day:contains(Fri)").hide(); 
			//$(".inform").hide();
			$(".inform").hide();
		})

		$("#thuNight").click(function() {
			shwAll(); 
			$(".day:contains(Mon)").hide();
			$(".day:contains(Sat)").hide();
			$(".day:contains(Sun)").hide();
			$(".day:contains(Wed)").hide(); 
			$(".day:contains(Tue)").hide(); 
			$(".day:contains(Fri)").hide(); 
			$(".inform").hide();
		})

		$(".inform").hide();
		$("#linkButtons").hide(); 
})