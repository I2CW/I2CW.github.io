//These are all the variables having to do with with paragraph.
//I am using a tooltip css program hint.css because it was simple and easy to implement.
//To add or remove a tooltip with a button, I simply add the span containing the text with a 
//hint always on setting.  When the paragraph resets, the span is removed and with it the tooltip. 

var introXshow = "<span class='hint--right hint--always hint--rounded hint--large' aria-label='This is the introduction of the essay.  The introduction is supposed to persuade the reader that this essay is worth reading.  Often times this is done with a story or narrative as in this case.  At the end of the introduction is the thesis statement.' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Friday afternoon, we were hustling to get everything finished before we left for the weekend. I had George moving all the pallets of finished product to the loading dock and placing them neatly in the holding area. As he came around the corner by the punch press, the hydraulic system on the forklift failed, the product tipped off the lift and was destroyed, and the entire area was flooded with hydraulic fluid. The cleanup took us several hours. A few of my guys were pretty miffed that it messed up their Friday-evening plans, and the product lost was worth about $3,500 as nearly as I can calculate. I think it’s really important that we get a new forklift, as it would increase safety, productivity and employee morale.</span>"

var introXclose = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Friday afternoon, we were hustling to get everything finished before we left for the weekend. I had George moving all the pallets of finished product to the loading dock and placing them neatly in the holding area. As he came around the corner by the punch press, the hydraulic system on the forklift failed, the product tipped off the lift and was destroyed, and the entire area was flooded with hydraulic fluid. The cleanup took us several hours. A few of my guys were pretty miffed that it messed up their Friday-evening plans, and the product lost was worth about $3,500 as nearly as I can calculate. I think it’s really important that we get a new forklift, as it would increase safety, productivity and employee morale."

var thesisXshow = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Friday afternoon, we were hustling to get everything finished before we left for the weekend. I had George moving all the pallets of finished product to the loading dock and placing them neatly in the holding area. As he came around the corner by the punch press, the hydraulic system on the forklift failed, the product tipped off the lift and was destroyed, and the entire area was flooded with hydraulic fluid. The cleanup took us several hours. A few of my guys were pretty miffed that it messed up their Friday-evening plans, and the product lost was worth about $3,500 as nearly as I can calculate. <span id='thesis' class='hint--right hint--rounded hint--always hint--medium' aria-label='This is the thesis statement.  It is a sentence that tells the reader what the essay is about.'>I think it’s really important that we get a new forklift, as it would increase safety, productivity and employee morale.</span> "

var thesisXclose = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Friday afternoon, we were hustling to get everything finished before we left for the weekend. I had George moving all the pallets of finished product to the loading dock and placing them neatly in the holding area. As he came around the corner by the punch press, the hydraulic system on the forklift failed, the product tipped off the lift and was destroyed, and the entire area was flooded with hydraulic fluid. The cleanup took us several hours. A few of my guys were pretty miffed that it messed up their Friday-evening plans, and the product lost was worth about $3,500 as nearly as I can calculate. I think it’s really important that we get a new forklift, as it would increase safety, productivity and employee morale." 

var conXshow = "<span class='hint--right hint--always hint--rounded hint--large' aria-label='This is the conclusion.  This is where wrap up the essay by making a quick one sentence restatement of the thesis followed by an obvious conclusion from the information in the essay, such as the purchase of a new forklift.' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Based on these concerns, please let me know if I can purchase a new forklift. The benefits to safety, productivity and morale are obvious. I’d really like to avoid another late-Friday-afternoon cleanup if we can, and get my crew back into the game.</span>"
 
var conXclose = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Based on these concerns, please let me know if I can purchase a new forklift. The benefits to safety, productivity and morale are obvious. I’d really like to avoid another late-Friday-afternoon cleanup if we can, and get my crew back into the game."

var topicXshow1 = "<span id='tpc1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First of all, the old forklift is presenting an unacceptable safety risk. </span> <i>Industrial Safety</i>, had a story in last May’s issue about a gal who was killed in Texas when some heavy product tipped off a forklift and crushed her. The forklift’s steering linkage had failed while the operator was trying to avoid hitting a wall. He had to slam on the brakes causing the product to tip over on top of the woman. Our forklift has a ton of similar problems. For example, the brake discs are so badly worn and warped that the forklift shakes when they’re applied. I’m worried that something similar to the Texas incident could happen here."

var topicXshow2 = "<span id='tpc2' class='hint--right hint--always hint--rounded hint--large' aria-label='These are the three topic sentences for the body paragraphs.  The topic sentences stick to the points of the thesis statement and tell the reader what the paragraph is going to be about.' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beyond safety, the old forklift is reducing productivity.</span> Toward the beginning of last week, we were working on several rush orders for automotive parts: the blowers for Acme Corlefton, the alternators for Montana Supply, and the fin extenders for Napa. The forklift kept breaking down, and we had to continually shut down production because we couldn’t get the pallets moved out of the production areas. I had to have the employees working on the fin extenders take them off the pallets, load them onto hand trucks and then restack them on pallets in the holding area at the loading dock. We lost about 17 man hours from this, which may have completely eaten up our profit on that order."

var topicXshow3 = "<span id='tpc3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In addition to productivity, a new forklift will also help employee morale.</span> My crew is starting to make comments about how it doesn’t seem like the higher-ups have a clue. They can see that we’re losing money with these delays. Last week one of the guys said, “They obviously don’t care, so why should we?” We used to have a ton of fun making the work a real team sport. We have always kept the production numbers up on the white board where we all can see them, and we love to beat the other plants for most production without a lost-time accident. After the accident last Friday, I can tell my crew isn’t even trying to beat our Toledo plant because they’re sure that some of our “chewing gum and bailing wire” equipment will fail and we’ll lose.";

var bpXshow = "<span class='hint--right hint--always hint--rounded hint--large' aria-label='These are the three body paragraphs.  Paragraphs are a group of sentences that stick to one single topic.  Each begins with a topic sentence that matches the three points in the thesis, which are in turn supported by facts, examples, or anecdotes in the supporting sentences.  Notice the details: it quotes exactly what people said, provides exact names, specific events, and detailed examples.' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beyond safety, the old forklift is reducing productivity. Toward the beginning of last week, we were working on several rush orders for automotive parts: the blowers for Acme Corlefton, the alternators for Montana Supply, and the fin extenders for Napa. The forklift kept breaking down, and we had to continually shut down production because we couldn’t get the pallets moved out of the production areas. I had to have the employees working on the fin extenders take them off the pallets, load them onto hand trucks and then restack them on pallets in the holding area at the loading dock. We lost about 17 man hours from this, which may have completely eaten up our profit on that order.</span>"

var bpXclose = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beyond safety, the old forklift is reducing productivity. Toward the beginning of last week, we were working on several rush orders for automotive parts: the blowers for Acme Corlefton, the alternators for Montana Supply, and the fin extenders for Napa. The forklift kept breaking down, and we had to continually shut down production because we couldn’t get the pallets moved out of the production areas. I had to have the employees working on the fin extenders take them off the pallets, load them onto hand trucks and then restack them on pallets in the holding area at the loading dock. We lost about 17 man hours from this, which may have completely eaten up our profit on that order.</span>"

var bd1Xclose = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First of all, the old forklift is presenting an unacceptable safety risk. Industrial Safety, had a story in last May’s issue about a gal who was killed in Texas when some heavy product tipped off a forklift and crushed her. The forklift’s steering linkage had failed while the operator was trying to avoid hitting a wall. He had to slam on the brakes causing the product to tip over on top of the woman. Our forklift has a ton of similar problems. For example, the brake discs are so badly worn and warped that the forklift shakes when they’re applied. I’m worried that something similar to the Texas incident could happen here.";

var bd3Xclose = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In addition to productivity, a new forklift will also help employee morale. My crew is starting to make comments about how it doesn’t seem like the higher-ups have a clue. They can see that we’re losing money with these delays. Last week one of the guys said, “They obviously don’t care, so why should we?” We used to have a ton of fun making the work a real team sport. We have always kept the production numbers up on the white board where we all can see them, and we love to beat the other plants for most production without a lost-time accident. After the accident last Friday, I can tell my crew isn’t even trying to beat our Toledo plant because they’re sure that some of our “chewing gum and bailing wire” equipment will fail and we’ll lose.";

var sup2Xshow = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beyond safety, the old forklift is reducing productivity. <span id='sup2' class='hint--right hint--always hint--rounded hint--large' aria-label='These are the supporting sentences.  They provide specific facts, details, and examples in support of the topic sentence.  For example, in the first body paragraph, it specifically refers to the steering linkage and the disc brakes. In the second body paragraph, it refers to two specific customers by name: Acme Corlefton and Montana Supply.  In the third, it quotes exactly what employees said about morale.'> Toward the beginning of last week, we were working on several rush orders for automotive parts: the blowers for Acme Corlefton, the alternators for Montana Supply, and the fin extenders for Napa. The forklift kept breaking down, and we had to continually shut down production because we couldn’t get the pallets moved out of the production areas. I had to have the employees working on the fin extenders take them off the pallets, load them onto hand trucks and then restack them on pallets in the holding area at the loading dock.</span> We lost about 17 man hours from this, which may have completely eaten up our profit on that order."

var sup1Xshow = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First of all, the old forklift is presenting an unacceptable safety risk. <i>Industrial Safety</i>, had a story in last May’s issue about a gal who was killed in Texas when some heavy product tipped off a forklift and crushed her. <span id='sup1'>The forklift’s steering linkage had failed while the operator was trying to avoid hitting a wall. He had to slam on the brakes causing the product to tip over on top of the woman. Our forklift has a ton of similar problems. For example, the brake discs are so badly worn and warped that the forklift shakes when they’re applied.</span> I’m worried that something similar to the Texas incident could happen here.";

var sup3Xshow = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In addition to productivity, a new forklift will also help employee morale. <span id='sup3'>My crew is starting to make comments about how it doesn’t seem like the higher-ups have a clue. They can see that we’re losing money with these delays. Last week one of the guys said, “They obviously don’t care, so why should we?” We used to have a ton of fun making the work a real team sport. We have always kept the production numbers up on the white board where we all can see them, and we love to beat the other plants for most production without a lost-time accident.</span> After the accident last Friday, I can tell my crew isn’t even trying to beat our Toledo plant because they’re sure that some of our “chewing gum and bailing wire” equipment will fail and we’ll lose.";

var con2Xshow = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beyond safety, the old forklift is reducing productivity.  Toward the beginning of last week, we were working on several rush orders for automotive parts: the blowers for Acme Corlefton, the alternators for Montana Supply, and the fin extenders for Napa. The forklift kept breaking down, and we had to continually shut down production because we couldn’t get the pallets moved out of the production areas. I had to have the employees working on the fin extenders take them off the pallets, load them onto hand trucks and then restack them on pallets in the holding area at the loading dock.<span id='con2' class='hint--right hint--always hint--rounded hint--large' aria-label='A concluding sentence provides an analysis or opinion based on the supporting sentences.  The first concluding sentence expresses worry; the second the loss of man hours and profits, and the third, the decline of morale and productivity.'> We lost about 17 man hours from this, which may have completely eaten up our profit on that order.</span> "

var con1Xshow = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First of all, the old forklift is presenting an unacceptable safety risk. <i>Industrial Safety</i>, had a story in last May’s issue about a gal who was killed in Texas when some heavy product tipped off a forklift and crushed her. The forklift’s steering linkage had failed while the operator was trying to avoid hitting a wall. He had to slam on the brakes causing the product to tip over on top of the woman. Our forklift has a ton of similar problems. For example, the brake discs are so badly worn and warped that the forklift shakes when they’re applied. <span id='con1'>I’m worried that something similar to the Texas incident could happen here.</span>";

var con3Xshow = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In addition to productivity, a new forklift will also help employee morale. My crew is starting to make comments about how it doesn’t seem like the higher-ups have a clue. They can see that we’re losing money with these delays. Last week one of the guys said, “They obviously don’t care, so why should we?” We used to have a ton of fun making the work a real team sport. We have always kept the production numbers up on the white board where we all can see them, and we love to beat the other plants for most production without a lost-time accident. <span id='con3'>After the accident last Friday, I can tell my crew isn’t even trying to beat our Toledo plant because they’re sure that some of our “chewing gum and bailing wire” equipment will fail and we’ll lose.</span>";
 



function essayplay(sect) {
	
	//This resets each paragraph back to its original text and state
	document.getElementById("intro").innerHTML = introXclose;
	document.getElementById("intro").style.color = "initial";
	document.getElementById("intro").style.backgroundColor = "initial";
	
	document.getElementById("conclusion").innerHTML = conXclose;
	document.getElementById("conclusion").style.color = "initial";
	document.getElementById("conclusion").style.backgroundColor = "initial";
	
	document.getElementById("bd1").innerHTML = bd1Xclose;
	document.getElementById("bd1").style.color = "initial";
	document.getElementById("bd1").style.backgroundColor = "initial";
	
	document.getElementById("bd2").innerHTML = bpXclose;
	document.getElementById("bd2").style.color = "initial";
	document.getElementById("bd2").style.backgroundColor = "initial";
	
	document.getElementById("bd3").innerHTML = bd3Xclose;
	document.getElementById("bd3").style.color = "initial";
	document.getElementById("bd3").style.backgroundColor = "initial";
	
	
	
	//This section tells which paragraphs and sentences to highlight and tooltip
	switch(sect) {
    case "intro":
		    document.getElementById("container").scrollIntoView();
			document.getElementById("intro").innerHTML = introXshow;
			document.getElementById("intro").style.color = "yellow";
			document.getElementById("intro").style.backgroundColor = "black";
        break;
    case "thesis":
        document.getElementById("intro").scrollIntoView();
		document.getElementById("intro").innerHTML = thesisXshow;
		document.getElementById("thesis").style.color = "yellow";
		document.getElementById("thesis").style.backgroundColor = "black";
        break;
    case "bdyprgrphs":
			document.getElementById("bd1").scrollIntoView();
			document.getElementById("bd2").innerHTML = bpXshow; 
			document.getElementById("bd1").style.color = "yellow";
			document.getElementById("bd1").style.backgroundColor = "black";
			document.getElementById("bd2").style.color = "yellow";
			document.getElementById("bd2").style.backgroundColor = "black";
			document.getElementById("bd3").style.color = "yellow";
			document.getElementById("bd3").style.backgroundColor = "black";
				
    	break;
	case "tpcsntncs":
			document.getElementById("bd1").scrollIntoView();
			document.getElementById("bd1").innerHTML = topicXshow1; 
			document.getElementById("bd2").innerHTML = topicXshow2; 
			document.getElementById("bd3").innerHTML = topicXshow3; 
			document.getElementById("tpc1").style.color = "yellow";
			document.getElementById("tpc1").style.backgroundColor = "black";
			document.getElementById("tpc2").style.color = "yellow";
			document.getElementById("tpc2").style.backgroundColor = "black";
			document.getElementById("tpc3").style.color = "yellow";
			document.getElementById("tpc3").style.backgroundColor = "black";
				
		break;
	case "cnclsn":
		document.getElementById("conclusion").scrollIntoView();
		document.getElementById("conclusion").innerHTML = conXshow;
		document.getElementById("conclusion").style.color = "yellow";
		document.getElementById("conclusion").style.backgroundColor = "black";
		
		break;
	case "spprtngsntncs":
		document.getElementById("bd1").scrollIntoView();
		document.getElementById("bd1").innerHTML = sup1Xshow;
		document.getElementById("bd2").innerHTML = sup2Xshow;
		document.getElementById("bd3").innerHTML = sup3Xshow;
		
		document.getElementById("sup1").style.color = "yellow";
		document.getElementById("sup1").style.backgroundColor = "black";
		
		document.getElementById("sup2").style.color = "yellow";
		document.getElementById("sup2").style.backgroundColor = "black";
		
		document.getElementById("sup3").style.color = "yellow";
		document.getElementById("sup3").style.backgroundColor = "black";
		break;
	case "cnclsnsntcs":
		document.getElementById("bd1").scrollIntoView();
		document.getElementById("bd1").innerHTML = con1Xshow;
		document.getElementById("bd2").innerHTML = con2Xshow;
		document.getElementById("bd3").innerHTML = con3Xshow;
		
		document.getElementById("con1").style.color = "yellow";
		document.getElementById("con1").style.backgroundColor = "black";
		
		document.getElementById("con2").style.color = "yellow";
		document.getElementById("con2").style.backgroundColor = "black";
		
		document.getElementById("con3").style.color = "yellow";
		document.getElementById("con3").style.backgroundColor = "black";
	}
}

