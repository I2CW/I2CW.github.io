
 
buzz.defaults.formats = [ 'ogg', 'mp3' ];
buzz.defaults.preload = 'metadata';

var questions = [
    { sent:"Two pieces of paper slipped out of Josh\’s notebook he stopped to pick them up.",  ques:"Two pieces of paper slipped out of Josh’s notebook, he stopped to pick them up.:Two pieces of paper slipped out of Josh's notebook, however, he stopped to pick them up.:Two pieces of paper slipped out of Josh’s notebook, and he stopped to pick them up.:Two pieces of paper slipped out of Josh’s notebook but, he stopped to pick them up.", word: "Two pieces of paper slipped out of Josh’s notebook, and he stopped to pick them up.", sound: "sounds/probable", helptext: "<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>" },
	{ sent: "The store will open in the  morning, it is closed for inventory today.", ques: "The store will open in the  morning It is closed for inventory today.:The store will open in the  morning because it is closed for inventory today.:The store will open in the morning, but it is closed for inventory today.:The store will open in the  morning, meanwhile, it is closed for inventory today.", word : "The store will open in the morning, but it is closed for inventory today.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "\“What does it take to be successful?\” Christopher asked his boss Ms. Gray told him, \“Make lots of mistakes.\”", ques: "\“What does it take to be successful?\” Christopher. Asked his  boss Ms. Gray told him, \“Make lots of mistakes.\”:\“What does it take to be successful?\” Christopher asked. His boss Ms. Gray told him, \“Make lots of mistakes.\”:\“What does it take to be successful?\” Christopher asked his boss Ms. Gray. Told him, \“Make lots of mistakes.\”:\“What does it take to be successful?\” Christopher asked although his boss Ms. Gray told him, \“Make lots of mistakes.\”", word: "\“What does it take to be successful?\” Christopher asked. His boss Ms. Gray told him, \“Make lots of mistakes.\”", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The microwave’s buzzer sounded dinner was ready.", ques: "The microwave’s buzzer sounded that dinner was ready.:The microwave’s buzzer, and sounded dinner was ready.:The microwave’s buzzer was sounded, but dinner was ready.:The microwave’s buzzer sounded, therefore, dinner was ready.", word: "The microwave’s buzzer sounded that dinner was ready.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The house was painted brown the shutters and trim were red.", ques: "While the house was painted brown, the shutters and trim were red.:The house was painted, yet brown the shutters and trim were red.:The house was painted brown; and, the shutters and trim were red.:The house was painted brown the shutters. And trim were red.", word: "While the house was painted brown, the shutters and trim were red.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The park was overgrown with weeds the city workers were on strike.", ques: "The park was overgrown with weeds, for the city workers were on strike.:Because the park was overgrown with weeds, the city workers were on strike.:Although the park was overgrown with weeds, the city workers were on strike.:The park was overgrown. With  weeds the city workers were on strike.", word: "The park was overgrown with weeds, for the city workers were on strike.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Stephanie bought a five-year-old Toyota, newer cars were too expensive.", ques: "Stephanie bought a five-year-old Toyota because newer cars were too expensive.:Stephanie bought a five-year-old Toyota yet newer cars were too expensive.:Stephanie bought a five-year-old. Toyota newer cars were too expensive.:Stephanie bought a five-year-old; Toyota, meanwhile, newer cars were too expensive.", word: "Stephanie bought a five-year-old Toyota because newer cars were too expensive.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Tia thought she could get by without  studying, her grades suffered.", ques: "Tia thought she could get by without studying, her grades suffered.:Tia thought she could get by, but without studying, her grades suffered.:Tia thought she could get by without studying; however, her grades suffered.:Tia thought she could get by without. Studying, her grades suffered.", word: "Tia thought she could get by without studying; however, her grades suffered.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Dogs have lost their position as the most popular pet, Americans now own more cats than dogs.", ques: "Dogs have lost their position as the most popular pet, because, Americans now own more cats than dogs.:Dogs have lost their position as the most popular pet; accordingly, Americans now own more cats than dogs.:Dogs have lost their position as the most popular pet, but Americans now own more cats than dogs.:Dogs have lost their position as the most popular pet when Americans now own more cats than dogs.", word: "Dogs have lost their position as the most popular pet; accordingly, Americans now own more cats than dogs.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The throbbing pain in Gerald's leg was unbearable he drove to the emergency room.", ques: "The throbbing pain in Gerald's leg was unbearable, so he drove to the emergency room.:The throbbing pain in Gerald's leg was unbearable, and he drove to the emergency room.:The throbbing pain in Gerald's leg was unbearable; meanwhile, he drove to the emergency room.:The throbbing pain in Gerald's leg was unbearable. he drove to the emergency room.", word: "The throbbing pain in Gerald's leg was unbearable, so he drove to the emergency room.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The setting sun painted the lake red-gold, the breeze ruffled its mirrored surface.", ques: "The setting sun painted the lake red-gold, or the breeze ruffled its mirrored surface.:The setting sun painted the lake red-gold, and the breeze ruffled its mirrored surface.:The setting sun painted the lake red-gold; therefore, the breeze ruffled its mirrored surface.:The setting sun painted the lake red-gold; of course, the breeze ruffled its mirrored surface.", word: "The setting sun painted the lake red-gold, and the breeze ruffled its mirrored surface.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Helen won tickets to the  concert she is looking for someone to go with her.", ques: "Since Helen won tickets to the concert, she is looking for someone to go with her.:Since Helen won tickets to the concert she is looking for someone to go with her.:Helen won tickets to the concert while she is looking for someone to go with her.:Helen won tickets to the concert, but she is looking for someone to go with her.", word: "Since Helen won tickets to the concert, she is looking for someone to go with her.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The almost empty pond near the high school is a popular place to meet everyone calls it Lake Muck.", ques: "The almost empty pond near the high school is a popular place to meet, everyone calls it Lake Muck.:The almost empty pond near the high school is a popular place to meet; everyone calls it Lake Muck.:The almost empty pond near the high school is a popular place to meet because everyone calls it Lake Muck.:The almost empty pond near the high school is a popular place to meet, meanwhile, everyone calls it Lake Muck.", word: "The almost empty pond near the high school is a popular place to meet; everyone calls it Lake Muck.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Alex answered the telephone only silence greeted him on the other end.", ques: "As soon as Alex answered the telephone, only silence greeted him on the other end.:Alex answered the telephone; consequently, only silence greeted him on the other end.:Alex answered the telephone, only silence greeted him on the other end.:Alex answered the telephone, so only silence greeted him on the other end.", word: "As soon as Alex answered the telephone, only silence greeted him on the other end.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Nadine enjoys country and folk, her brother likes soul and jazz.", ques: "Nadine enjoys country and folk although her brother likes soul and jazz.:Nadine enjoys country and folk, for her brother likes soul and jazz.:Nadine enjoys country and folk, futhermore, her brother likes soul and jazz.:Nadine enjoys country and folk, and, her brother likes soul and jazz.", word: "Nadine enjoys country and folk although her brother likes soul and jazz.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "A stack of pancakes contains three pancakes a side of bacon contains only four slices.", ques: "A stack of pancakes contains three pancakes; on the other hand, a side of bacon contains only four slices.:A stack of pancakes contains three pancakes, however, a side of bacon contains only four slices.:A stack of pancakes contains three pancakes. a side of bacon contains only four slices.:A stack of pancakes contains three pancakes when a side of bacon contains only four slices.", word: "A stack of pancakes contains three pancakes; on the other hand, a side of bacon contains only four slices.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The non-medical term \“life support\” gets us closer, intensive-care units take artificial control of failing bodies.", ques: "The non-medical term \“life support\” gets us closer. Intensive-care units take artificial control of failing bodies.:The non-medical term \“life support\” gets us closer whenever intensive-care units take artificial control of failing bodies.:The non-medical term \“life support\” gets us closer, but intensive-care units take artificial control of failing bodies.:The non-medical term \“life support\” gets us closer because intensive-care units take artificial control of failing bodies.", word: "The non-medical term \“life support\” gets us closer. Intensive-care units take artificial control of failing bodies.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Dawn broke over northern Mexico Norman Borlaug wriggled from his sleeping bag.", ques: "Dawn broke over northern Mexico; Norman Borlaug wriggled from his sleeping bag.:Dawn broke over northern Mexico yet Norman Borlaug wriggled from his sleeping bag.:Dawn broke over northern Mexico and Norman Borlaug wriggled from his sleeping bag.:Dawn broke over northern Mexico because Norman Borlaug wriggled from his sleeping bag.", word: "Dawn broke over northern Mexico; Norman Borlaug wriggled from his sleeping bag.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "A vocal fringe called for military intervention, they were shouted down by the cheerfully democratic multitudes.", ques: "A vocal fringe called for military intervention, but they were shouted down by the cheerfully democratic multitudes.:A vocal fringe called for military intervention but when they were shouted down by the cheerfully democratic multitudes.:A vocal fringe called for military intervention, therefore they were shouted down by the cheerfully democratic multitudes.:A vocal fringe called for military. Intervention, and they were shouted down by the cheerfully democratic multitudes.", word: "A vocal fringe called for military intervention, but they were shouted down by the cheerfully democratic multitudes.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The wily intruder owes its success in part to a high rate of expansion a cat newly infected with Toxoplasma can excrete up to 800 million packets containing the parasite.", ques: "The wily intruder owes its success in part to a high rate of expansion. A cat newly infected with Toxoplasma can excrete up to 800 million packets containing the parasite.:The wily intruder owes its success in part to a high rate of expansion; however, cat newly infected with Toxoplasma can excrete up to 800 million packets containing the parasite.:The wily intruder owes its success in part to a high rate of expansion, a cat newly infected with Toxoplasma can excrete up to 800 million packets containing the parasite.:The wily intruder owes its success in part to a high rate of expansion a cat newly infected. With Toxoplasma can excrete up to 800 million packets containing the parasite.", word: "The wily intruder owes its success in part to a high rate of expansion. A cat newly infected with Toxoplasma can excrete up to 800 million packets containing the parasite.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Adjectives modify nouns they follow a specific order, such as age, shape, color, material, origin, and purpose.", ques: "Adjectives modify nouns; they follow a specific order, such as age, shape, color, material, origin, and purpose.:Adjectives modify nouns. they follow a specific order, such as age, shape, color, material, origin, and purpose.:Adjectives modify nouns, they follow a specific order, such as age, shape, color, material, origin, and purpose.:Adjectives modify nouns\" they follow a specific order, such as age, shape, color, material, origin, and purpose.\"", word: "Adjectives modify nouns; they follow a specific order, such as age, shape, color, material, origin, and purpose.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "You use commas with non-restrictive clauses restrictive clauses use no commas.", ques: "You use commas with non-restrictive clauses, but, restrictive clauses use no commas.:You use commas; with non-restrictive clauses restrictive clauses use no commas.:You use commas with non-restrictive. Clauses restrictive clauses use no commas.:Though you use commas with non-restrictive clauses, restrictive clauses use no commas.", word: "Though you use commas with non-restrictive clauses, restrictive clauses use no commas.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Fewer and less mean the same thing you should use less with mass nouns and fewer with count nouns.", ques: "Fewer and less mean the same thing; for example, you should use less with mass nouns and fewer with count nouns.:Fewer and less mean the same thing, you should use less with mass nouns and fewer with count nouns.:Fewer and less mean the same thing? You should use less with mass nouns and fewer with count nouns.:Fewer and less mean the same thing even though you should use less with mass nouns and fewer with count nouns.", word: "Fewer and less mean the same thing; for example, you should use less with mass nouns and fewer with count nouns.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "The water is warm too it has slipped over the yellow sands in the sunlight before reaching the narrow pool.", ques: "The water is warm too, for it has slipped over the yellow sands in the sunlight before reaching the narrow pool.:The water is warm too, it has slipped over the yellow sands in the sunlight before reaching the narrow pool.:Although the water is warm too, it has slipped over the yellow sands in the sunlight before reaching the narrow pool.:The water is warm. Too it has slipped over the yellow sands in the sunlight before reaching the narrow pool.", word: "The water is warm too, for it has slipped over the yellow sands in the sunlight before reaching the narrow pool.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "You learn a new technical concept something happens in your brain.", ques: "When you learn a new technical concept, something happens in your brain.:Even though you learn a new technical concept something happens in your brain.:You learn a new technical concept and something happens in your brain.:You learn a new technical concept when something happens in your brain.", word: "When you learn a new technical concept, something happens in your brain.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Before buying, it might be a good idea to speak to a lender you have some idea of how much you can afford.", ques: "Before buying, it might be a good idea to speak to a lender, so you have some idea of how much you can afford.:Before buying, it might be a good idea to speak. To a lender you have some idea of how much you can afford.:Before buying, it might be a good idea to speak to a lender so that you have some idea of how much you can afford.:Before buying, it might be a good idea to speak to a lender and have some idea of how much you can afford.", word: "Before buying, it might be a good idea to speak to a lender, so you have some idea of how much you can afford.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Affect is a verb effect is a noun.", ques: "Affect is a verb, but effect is a noun.:Affect is a verb, effect is a noun.:Affect is a verb, so effect is a noun.:Affect is a verb, for effect is a noun.", word: "Affect is a verb, but effect is a noun.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Good is an adjective that should be used with a noun well is an adverb to be used with a verb.", ques: "Good is an adjective that should be used with a noun; however, well is an adverb to be used with a verb.:Good is an adjective. That should be used with a noun well is an adverb to be used with a verb.:Good is an adjective that should be used with a noun; for example, well is an adverb to be used with a verb.:Good is an adjective that should be used with a noun well is an adverb. To be used with a verb.", word: "Good is an adjective that should be used with a noun; however, well is an adverb to be used with a verb.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Basic research resides in Bohr's quadrant it is the quest for knowledge without regard for the final use of that knowledge.", ques: "Basic research resides in Bohr's quadrant; it is the quest for knowledge without regard for the final use of that knowledge.:Basic research resides in Bohr's quadrant, it is the quest for knowledge without regard for the final use of that knowledge.:Basic research resides. In Bohr's quadrant it is the quest for knowledge without regard for the final use of that knowledge.:Basic research resides in Bohr's quadrant; It is the quest for knowledge. Without regard for the final use of that knowledge.", word: "Basic research resides in Bohr's quadrant; it is the quest for knowledge without regard for the final use of that knowledge.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "Run-on sentences are hard to spot they have multiple subjects and verbs minus the necessary punctuation or conjunctions.", ques: "Run-on sentences are hard to spot. They have multiple subjects and verbs minus the necessary punctuation or conjunctions.:Run-on sentences are hard. To spot they have multiple subjects and verbs minus the necessary punctuation or conjunctions.:Run-on sentences are hard to spot they have multiple subjects and verbs, minus the necessary punctuation or conjunctions.:Run-on sentences are hard to spot; They have multiple subjects and verbs minus the necessary punctuation or conjunctions.", word: "Run-on sentences are hard to spot. They have multiple subjects and verbs minus the necessary punctuation or conjunctions.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' },
	{ sent: "High school students discovered a rare pulsar star couple, they were looking at the sky using the Hubble space telescope.", ques: "High school students discovered a rare pulsar star couple while they were looking at the sky using the Hubble space telescope.:High school students discovered a rare pulsar star couple, meanwhile, they were looking at the sky using the Hubble space telescope.:High school students discovered a rare pulsar star couple, so they were looking at the sky using the Hubble space telescope.:High school students discovered. A rare pulsar star couple they were looking at the sky using the Hubble space telescope.", word: "High school students discovered a rare pulsar star couple while they were looking at the sky using the Hubble space telescope.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>'},
	{ sent: "Writing for the web is different than writing for print people scan text when surfing the web instead of reading.", ques: "Writing for the web is different. Than writing for print people scan text when surfing the web instead of reading.:Writing for the web is different than writing for print people scan text; when surfing the web instead of reading.:Writing for the web is different than writing for print because people scan text when surfing the web instead of reading.:Writing for the web is different than writing. For print people scan text when surfing the web instead of reading.", word: "Writing for the web is different than writing for print because people scan text when surfing the web instead of reading.", sound: 'sounds/probable', helptext: '<iframe width=\"800\" height=\"500\" src=\"../revealslides/runons.html\" frameborder=\"0\" allowfullscreen></iframe>' }
	
];
var games = questions.sort( function() { return Math.random() < 0.5 ? -1 : 1 });

var winSound        = new buzz.sound('sounds/win' ),
    errorSound      = new buzz.sound('sounds/error' ),
    alphabetSounds  = {},
	scoreKK			= 0,
	ez				= false,
	txthlp,
	scoreK,
	gameSound;
	
var NumOfQues = games.length;
var ScoreTotal = NumOfQues * 10;
var PercentTotal;


$( function() {
    if ( !buzz.isSupported() ) {
        $('#warning').show();
    }

    var idx = 0,
        $container  = $( '#container' ),
        $sent    = $( '#sent' ),
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
		gameSound.stop();
        $( '#models' ).html( '' );
        $( '#letters' ).html( '' );
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
		
		

		
        gameSound = new buzz.sound( game.sound );
		gameSound.load().play();
        var gmclr = "#"+((1<<24)*Math.random()|0).toString(16);
        // Fade the background color
        $( 'body' ).stop().animate({
            backgroundColor: gmclr
        }, 1000);
        $( '#header a' ).stop().animate({
            color: gmclr
        }, 1000);

        // Update the picture
       document.getElementById( "sent" ).innerHTML = game.sent; 
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

        // Build model
        var modelLetters = game.word;

        //for( var i in modelLetters ) {
            var letter = modelLetters;//[ i ];
            $models.append( '<li>' + letter + '</li></br>' );
        //}

        var letterWidth = $models.find( 'li' ).outerWidth( true );
		var letterHeight = $models.find( 'li' ).outerHeight(true);

        $models.width( letterWidth * $models.find( 'li' ).length );

        // Build shuffled letters
		var letters = game.ques.split(':');
		
		
		
		var shuffled = letters.sort( function() { return Math.random() < 0.5 ? -1 : 1 });

        for( var i in shuffled ) {
            $letters.append( '<li class="draggable">' + shuffled[ i ] + '</li>' );
        }

        $letters.find( 'li' ).each( function( i ) {
			var top   = ($models.offset().top - $container.offset().top * 2) + (i * letterHeight + 100),			
				left  = $sent.position().left,
				angle = 0;		
			
            $( this ).css({
                top:  top  + 'px',
                left: left + 'px'
            });

            rotate( this, angle );

            $( this ).mousedown( function() {
				gameSound.stop();
                var letter = $( this ).text();
                if ( alphabetSounds[ letter ] ) {
                    alphabetSounds[ letter ].play();
                }
            });
        });

        $letters.find( 'li.draggable' ).draggable({
            zIndex: 9999,
            stack: '#letters li'
        });

        $models.find( 'li' ).droppable( {
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
						
						
						winGame();
						   
					} else {
						ui.draggable.draggable( 'option', 'revert', true );
						scoreKK = scoreKK - 10;
						document.getElementById("sent").style.textAlign = "center";
						document.getElementById( "sent" ).innerHTML = '<font style="color:red; font-size:2em;">Incorrect</br></br>-10</font>'; 
						PercentTotal = (scoreKK / ScoreTotal) * 100;
						document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
						errorSound.play();
				
						
						setTimeout( function() {
							ui.draggable.draggable( 'option', 'revert', false );
						}, 100 );
						
						setTimeout( function() {
							document.getElementById( "sent" ).innerHTML = game.sent;
						}, 1000 );
					}
				
            }
        });
    }

    function winGame() {
        winSound.play();
		scoreKK = scoreKK + 10;
		NumOfQues = NumOfQues - 1;
		if ( NumOfQues < 1) {
			PercentTotal = (scoreKK / ScoreTotal) * 100;
			document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
			document.getElementById("sent").style.textAlign = "center";
			document.getElementById( "sent" ).innerHTML = '<font style="color:#00FF00; font-size:2em;">Percent Correct</br></br>' + PercentTotal.toFixed(2) + '%</font>'; 
			document.getElementById( "previous" ).innerHTML = "";
			document.getElementById( "next" ).innerHTML = "";
		} else {
		PercentTotal = (scoreKK / ScoreTotal) * 100;
		document.getElementById( "score" ).innerHTML = "Score = " + scoreKK + " | Percent Correct = " + PercentTotal.toFixed(2) + "% | Remaining questions = " + NumOfQues; 
		document.getElementById("sent").style.textAlign = "center";
		document.getElementById( "sent" ).innerHTML = '<font style="color:#00FF00; font-size:2em;">Correct</br></br>+10</font>'; 
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
