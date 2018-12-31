
 
buzz.defaults.formats = [ 'mp3' ]; 
buzz.defaults.preload = 'metadata';

var questions = [
    { sent: "Yesterday, there [] five different kinds of pizza available", color:'#666600', ques: "was were", word: "were", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Today, there [] only one kind of pizza.", color:'#666600', ques: "is are", word: "is", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Currently, Una and Dolores [] on their way to the party.", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Neither the field agents nor their supervisor [] happy with the policy changes", color:'#666600', ques: "was were", word : "was", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Jeremy [] his way to the gas station for some coffee", color:'#666600', ques: "make makes", word: "makes", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Daphne and Apollo [] to know why it is raining.", color:'#666600', ques: "want wants", word: "want", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Influenza, measles, polio, and chicken pox [] viruses.", color:'#666600', ques: "are is", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "All the nuns or just the one pastor [] going to the movie.", color:'#666600', ques: "is are", word: "is", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Neither of the two contestants [] happy with the outcome. ", color:'#666600', ques: "was were", word: "was", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Everyone [] unhappy with the outcome of the game.", color:'#666600', ques: "is are", word: "is", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Here [] the book you are looking for under this pile of fishing and hunting books.", color:'#666600', ques: "are is", word: "is", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Neither Maria nor Allison [] going to the play.", color:'#666600', ques: "is are", word: "is", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "There [] some leftover slices of pizza, cold hot dogs and a pitcher of iced tea in the refrigerator if you are hungry.", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Books or a magazine []  all that are needed for a restful day at the beach. ", color:'#666600', ques: "is are", word: "is", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The rules of the club [] its members attend at least 50 percent of the meetings.", color:'#666600', ques: "state states", word: "state", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: '"I like my job," said Amir, "but the company\'s requirement to wear a tie and jacket [] ridiculous."', color:'#666600', ques: "is are", word: "is", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Mara's driver's license [] already out of date  She doesn't look like her picture anymore.", color:'#666600', ques: "is are", word: "is", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Either Mary or one of her coworkers [] to close the vault door at the end of the shift.", color:'#666600', ques: "need needs", word: "needs", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "My grandfather [] the television on only when he wants to watch the news.", color:'#666600', ques: "turn turns", word: "turns", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "A committee of five people [] the scholarship recipients each year. ", color:'#666600', ques: "select selects", word: "selects", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "On the elephant's back [] a black dog wearing a white bowtie and a monkey in a plaid vest. ", color:'#666600', ques: "sit sits", word: "sit", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Everybody involved in the highland games [] for a large response from sponsors and participants.", color:'#666600', ques: "hope hopes", word: "hopes", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Where [] St Bartholemew's choir park their tour bus?", color:'#666600', ques: "did does", word: "did", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "When [] we going to find another employee to fill Nadine's old position? ", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "There [] 28 different vaccine shots given to babies over two years. ", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The guy who was arrested for his fifth DUI [] too much.", color:'#666600', ques: "drink drinks", word: "drinks", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The students do not [] enough time to finish the test", color:'#666600', ques: "has have", word: "have", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The scientist who built the first MRI [] just won a Nobel prize.", color:'#666600', ques: "has have", word: "has", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Now for the moment everyone [] been waiting for.", color:'#666600', ques: "have has", word: "has", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Few [] any idea what is going on.", color:'#666600', ques: "has have", word: "have", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Marilynn [] a brand new phone.", color:'#666600', ques: "has have", word: "has", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Several of those involved [] guilty.", color:'#666600', ques: "were was", word: "were", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Neither of the boys [] there.", color:'#666600', ques: "belong belongs", word: "belongs", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Nobody among the employees [] capable.", color:'#666600', ques: "seem seems", word: "seems", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Each of the orders [] been received.", color:'#666600', ques: "has have", word: "has", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Some of the investments [] doing well.", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The faculty [] to be against the proposal.", color:'#666600', ques: "seem seems", word: "seems", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "There [] three comments in the suggestion box.", color:'#666600', ques: "were was", word: "were", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The committee [] decided to change the policy.", color:'#666600', ques: "has have", word: "has", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "One of the proposals [] accepted.", color:'#666600', ques: "was were", word: "was", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Each of the cassettes [] ruined.", color:'#666600', ques: "is are", word: "is", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Everybody in sales [] asked to contribute to the United Way.", color:'#666600', ques: "was were", word: "was", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The box of materials [] stolen.", color:'#666600', ques: "was were", word: "was", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "There  [] no words to describe how I feel.", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The automobiles on the assembly line [] passed inspection.", color:'#666600', ques: "have has", word: "have", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "All of the officers [] elected each spring.", color:'#666600', ques: "are is", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Experts [] a rise in interest rates.", color:'#666600', ques: "predict predicts", word: "predict", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Where [] the building plans?", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Everyone in the department [] able to attend.", color:'#666600', ques: "is are", word: "is", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "There [] several critics of the new proposal.", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The board [] voting on the amendment.", color:'#666600', ques: "was were", word: "was", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Here [] the catalogs you wanted.", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "All of the suggestions [] been ignored.", color:'#666600', ques: "has have", word: "have", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The manager along with the support staff [] out every Friday.", color:'#666600', ques: "go goes", word: "goes", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Here on the desk [] the reports.", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Neither the doctor nor the nurses [] fired.", color:'#666600', ques: "was were", word: "were", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "There [] two designs you can make.", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "To the right fo the desk [] three chairs.", color:'#666600', ques: "was were", word: "were", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "On the table, there [] computers and tablets.", color:'#666600', ques: "are is", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Here [] the blueprints for the motel.", color:'#666600', ques: "are is", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Economists [] future trends in business.", color:'#666600', ques: "predict predicts", word: "predict", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "All of the members of the board [] elected for two year terms.", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Before you leave, where [] the specifications for this transmission?", color:'#666600', ques: "are is", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Engineering and architecture [] different skills.", color:'#666600', ques: "involve involves", word: "involve", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The trucks on our highways [] put the locomotive out of business.", color:'#666600', ques: "have has", word: "have", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "A keyboard and monitor [] to be used in every class.", color:'#666600', ques: "is are", word: "are", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Neither the box nor the crate [] damaged.", color:'#666600', ques: "was were", word: "was", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Each of the secretaries [] sixty words per minute.", color:'#666600', ques: "type types", word: "types", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Everyone [] able to complete the assignment.", color:'#666600', ques: "is are", word: "is", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "One of the experiments [] not finished.", color:'#666600', ques: "was were", word: "was", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Both of them [] very well.", color:'#666600', ques: "play plays", word: "play", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Everybody in these cities [] a municipal tax.", color:'#666600', ques: "pay pays", word: "pays", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Neither of the newspapers [] news about South America.", color:'#666600', ques: "print prints", word: "prints", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The box of old tools [] stolen from the truck.", color:'#666600', ques: "was were", word: "was", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "A crate of supplies [] daily.", color:'#666600', ques: "arrives arrive", word: "arrives", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "There  [] been no criticism from the board.", color:'#666600', ques: "has have", word: "has", sound: '', helptext: '<iframe width=\"800\" height=\"500\" src=\"../subjectverb.html#/menu" frameborder=\"0\" allowfullscreen></iframe>' }

	
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
