
 
buzz.defaults.formats = [ 'ogg', 'mp3' ];
buzz.defaults.preload = 'metadata';

var questions = [
    { sent: "Under the circumstances, he [] the right thing.", color:'#666600', ques: "did done", word: "did", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "They have always [] a standard sized car.", color:'#666600', ques: "drove driven", word: "driven", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "We would have had more time if we had [] straight to New York.", color:'#666600', ques: "flew flown", word: "flown", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Tomas has [] the computer.", color:'#666600', ques: "broke broken", word: "broken", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "I [] that the car smashed into the truck.", color:'#666600', ques: "seen saw", word: "saw", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "He has [] on the bench longer than any other judge.", color:'#666600', ques: "sat set", word: "sat", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Insurance rates [] after natural disasters.", color:'#666600', ques: "raise rise", word: "rise", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Working this hard has [] me out.", color:'#666600', ques: "wore worn", word: "worn", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "She [] the best she could.", color:'#666600', ques: "did done", word: "did", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "I [] him at the carnival, but he never realized that I was there.", color:'#666600', ques: "seen saw", word: "saw", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "I knew you [] going to win that race.", color:'#666600', ques: "were are", word: "were", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "He [] in bed thinking about the sales he hoped to make.", color:'#666600', ques: "lay laid", word: "lay", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Has he [] any of the buns I bought?", color:'#666600', ques: "ate eaten", word: "eaten", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Why don't you [] down for awhile?", color:'#666600', ques: "lay lie", word: "lie", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Please [] the microscope closer to the table.", color:'#666600', ques: "sit set", word: "set", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The road [] 3000 feet above sea level.", color:'#666600', ques: "rises raises", word: "rises", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The day [] early.", color:'#666600', ques: "begun began", word: "began", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "I have always [] the minutes for special meetings.", color:'#666600', ques: "written wrote", word: "written", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Tyrese had never [] the machine before.", color:'#666600', ques: "saw seen", word: "seen", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Cecily [] down for nearly an hour.", color:'#666600', ques: "lay laid", word: "lay", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "He had [] away the ballots before they were recorded.", color:'#666600', ques: "threw thrown", word: "thrown", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "William had not [] in the river before today.", color:'#666600', ques: "swum swam", word: "swum", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Many of the supervisors have [] to the convention.", color:'#666600', ques: "went gone", word: "gone", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "We have never [] an appointment", color:'#666600', ques: "broke broken", word: "broken", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The minutes of the meeting were [] in the desk drawer.", color:'#666600', ques: "lying laying", word: "lying", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Who is the lady [] outside my office?", color:'#666600', ques: "sitting setting", word: "sitting", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Jane [] two miles every day.", color:'#666600', ques: "swam swum", word: "swam", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "I would have [] down if I had know the meeting was postponed.", color:'#666600', ques: "laid lain", word: "lain", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Where did you [] the rake I bought yesterday?", color:'#666600', ques: "sit set", word: "set", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "We wish he had [] more clearly.", color:'#666600', ques: "spoke spoken", word: "spoken", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The day [] early for the campers and hikers.", color:'#666600', ques: "began begun", word: "began", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "I [] you at the concert.", color:'#666600', ques: "saw seen", word: "saw", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Juanita just [] there while the police officer questioned her.", color:'#666600', ques: "set sat", word: "sat", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Costs are [] rapidly.", color:'#666600', ques: "raising rising", word: "rising", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "He [] around all day.", color:'#666600', ques: "lies lays", word: "lies", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The union leader [] slowly to his feet.", color:'#666600', ques: "rose raised", word: "rose", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "He [] the right thing.", color:'#666600', ques: "did done", word: "did", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "We [] the most expensive textbooks last spring.", color:'#666600', ques: "chose choose", word: "chose", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "She is the only one who has [] to every meeting.", color:'#666600', ques: "come came", word: "come", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "I [] down all day yesterday.", color:'#666600', ques: "laid lay", word: "lay", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "I had [] all the apple cider last weekend.", color:'#666600', ques: "drank drunk", word: "drunk", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/partsofspeech.html#/verbs" frameborder=\"0\" allowfullscreen></iframe>' }
	
	


	
];
games = questions.sort( function() { return Math.random() < 0.5 ? -1 : 1 });

var winSound        = new buzz.sound('sounds/win' ),
    errorSound      = new buzz.sound('sounds/error' ),
    alphabetSounds  = {},
    //alphabet        = 'abcdefg'.split( '' ),
	scoreKK			= 0,
	ez				= false,
	txthlp,
	scoreK,
	gameSound;
	
	
var NumOfQues = games.length;
var ScoreTotal = NumOfQues * 10;
var PercentTotal;



/*for( var i in alphabet ) {
    var letter = alphabet[ i ];
    alphabetSounds[ letter ] = new buzz.sound('sounds/kid/'+ letter );
}*/

$( function() {
    if ( !buzz.isSupported() ) {
        $('#warning').show();
    }

    var idx = 0,
        $container  = $( '#container' ),
        $sent    	= $( '#sent' ),
        $models     = $( '#models' ),
        $letters    = $( '#letters' );

    $( 'body' ).bind('selectstart', function() { 
        return false 
    });

    $( '#next' ).click( function() {
		NumOfQues = NumOfQues - 1;
		PercentTotal = (scoreKK / ScoreTotal) * 100;
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
		refreshGame();
        buildGame( ++idx ); 
		return false;
		
    });
	
    $( '#previous' ).click( function() {
       refreshGame();
       buildGame( --idx ); 
       return false;
    });

	
	$( '#helptxt' ).click( function() {
        if ( $( this ).text() == 'click for help' ) {
            $( this ).text( 'click for no help' );
            } else {
            $( this ).text( 'click for help' );
			$('#help').text('');
			refreshGame(); 
			buildGame( idx );
			return false;
        }
        return false;
    });

    function refreshGame() {
		//gameSound.stop();
        $( '#models' ).html( '' );
        $( '#letters' ).html( '' );
        $( '#sent' ).html('');
		document.getElementById("sent").style.textAlign = "left";
    }

    function buildGame( x ) {
        if ( x > games.length - 1 ) {
            idx = 0;
        }
        if ( x < 0 ) {
            idx = games.length - 1;
        }
		

		if (NumOfQues == games.length) {
			PercentTotal = (scoreKK / ScoreTotal) * 100;
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
		}
		
        var game  = games[ idx ],
		scoreK = 0;
		
        //gameSound = new buzz.sound( game.sound );
		//gameSound.load().play();

         var gmclr = "#"+((1<<24)*Math.random()|0).toString(16);
        // Fade the background color
        $( 'body' ).stop().animate({
            backgroundColor: gmclr
        }, 1000);
        $( '#header a' ).stop().animate({
            color: gmclr
        }, 1000);


        // Update the picture
		txthlp = game.helptext + '<br><a href="#" onclick="popup(\'popUpDiv\')" >click to close</a>';
		document.getElementById( "popUpDiv" ).innerHTML = txthlp; 
		PercentTotal = (scoreKK / ScoreTotal) * 100;
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
        //document.getElementById( "helptxt" ).innerHTML = "click for help";
		//$sent.attr( 'html', game.sent )
        //    .unbind( 'click' )
        //    .bind( 'click', function() {
		//		gameSound.increaseVolume(100);
		//		gameSound.play();
        //    });
		var quessplit = game.sent.split('[]');
        // Build model
        var modelLetters = game.word.split(' ');
 		var letter = modelLetters;//[ i ];
        //$models.append( '<li>' + letter + '</li>' );
        //document.getElementById( "score" ).innerHTML = letter; 
        $sent.append("<p>" + quessplit[0] + "<ulm>" + letter + "</ulm>" + quessplit[1] + "</p>");

        var letterWidth =58;
		var letterHeight = 40;

        $models.width( letterWidth * $models.find( 'li' ).length );

        // Build shuffled letters
		var letters = game.ques.split(' ');
		
		
		 
		var shuffled = letters.sort( function() { return Math.random() < 0.5 ? -1 : 1 });

        for( var i in shuffled ) {
            $letters.append( '<li class="draggable">' + shuffled[ i ] + '</li>' );
        }

       $letters.find( 'li' ).each( function( i ) {
			var top   = ($models.offset().top - $container.offset().top * 2) + (i * letterHeight + 100),			
				left  = ($sent.width() / 2 - 30),
				angle = 0;
			
            $( this ).css({
                top:  top  + 'px',
                left: left + 'px'
            });

            rotate( this, angle );

            $( this ).mousedown( function() {
            	
   				
            });
        });

        $letters.find( 'li.draggable' ).draggable({
            zIndex: 9999,
            stack: '#letters li'
        });
		
        
        $sent.find( 'ulm' ).droppable( {
            accept:     '.draggable',
            hoverClass: 'hover',
            drop: function( e, ui ) {
                var modelLetter      = $( this ).text(),
                    droppedLetter = ui.helper.text(); 

				
					if ( modelLetter == droppedLetter ) {
						ui.draggable.animate( {
							top:     $( this ).position().top,
							left:     $( this ).position().left
						} ).removeClass( 'draggable' ).draggable( 'option', 'disabled', true );
						
						rotate( ui.draggable, 0 );
						
						scoreK++;
						
						if ( scoreK == modelLetters.length ) {
							winGame();
						}    
					} else {
						ui.draggable.draggable( 'option', 'revert', true );
						scoreKK = scoreKK - 10;
						var question = $sent.find("p").detach();
						document.getElementById("sent").style.textAlign = "center";
						$sent.append('<p><font style="color:red; font-size:2em;">Incorrect<br><br>-10</font></p>'); 
						PercentTotal = (scoreKK / ScoreTotal) * 100;
						document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; errorSound.play();
						
						setTimeout( function() {
							ui.draggable.draggable( 'option', 'revert', false );
						}, 100 );
						
						setTimeout( function() {
							$sent.find("p").remove();
							question.appendTo( "#sent" );
						}, 1000 );
					}
				
            }
        });
    
    }

    function winGame() {
        winSound.play();
		scoreKK = scoreKK + 10;
		NumOfQues = NumOfQues - 1;
		$sent.empty();
		if ( NumOfQues < 1) {
			PercentTotal = (scoreKK / ScoreTotal) * 100;
			document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
			document.getElementById("sent").style.textAlign = "center";
			document.getElementById( "sent" ).innerHTML = '<font style="color:#00FF00; font-size:2em;"></br>Percent Correct</br></br>' + PercentTotal.toFixed(2) + '%</font>'; 
			document.getElementById( "previous" ).innerHTML = "";
			document.getElementById( "next" ).innerHTML = "";
		} else {
		PercentTotal = (scoreKK / ScoreTotal) * 100;
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
		document.getElementById("sent").style.textAlign = "center";
		document.getElementById( "sent" ).innerHTML = '<font style="color:#00FF00; font-size:2em;"></br>Correct</br></br>+10</font>'; 
        $( '#letters li' ).each( function( i ) {
            var $$ = $( this );
            setTimeout( function() {
                $$.animate({
                    top:'+=60px'
                });
            }, i * 300 );
        });


        setTimeout( function() {
            refreshGame();
            buildGame( ++idx );
        }, 3000);
    }
	}

    function rotate( el, angle ) {
        $( el ).css({
            '-webkit-transform': 'rotate(' + angle + 'deg)',
            '-moz-transform': 'rotate(' + angle + 'deg)',
            '-ms-transform': 'rotate(' + angle + 'deg)',
            '-o-transform': 'rotate(' + angle + 'deg)',
            'transform': 'rotate(' + angle + 'deg)'
        }); 
    }

    buildGame( idx );
});
