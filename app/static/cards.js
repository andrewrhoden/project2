 

window.onload = main;

var tittle="Gamer";
var pturns=0;

function main() {    
	
	
    var divs = document.getElementsByClassName("c");
    for(var i=0; i<divs.length; i++) {
        divs[i].onclick = setAudio;
    }
	
	try{
	 tittle=JSON.parse(window.localStorage.mydata).name;
	 pturns=JSON.parse(window.localStorage.mydata).turns;
	 
	 clicks=pturns;
	 document.getElementById("insert").innerHTML=" Hello  "+(tittle)+" : # of turns " +(clicks);
	}catch(exception){
		document.getElementById("insert").innerHTML="Hello "+(tittle)+" : # of turns " +(clicks);
	}
}

var setAudio = function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://accad.osu.edu/~pgerstma/class/vnv/work/2004_WI/mmuppala/task02/shotgun.mp3');
    audioElement.load()
    audioElement.play(); 
    clicks++;
	
	//alert(clicks);	
	document.getElementById("insert").innerHTML="Welcome "+(tittle)+" : # Of turns " +(clicks);
	
    if(clicks > 24){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'http://www.mediacollege.com/downloads/sound-effects/crowd/laugh-01.mp3');
        audioElement.load()
        audioElement.play();
        
        alert("Time is up!!! Try again...");        
        clicks=0;
		
		window.localStorage.clear();	
        document.location.reload(true);
	
		
    }
}

var clicks=0;
// constants we use a lot of time
A="position:absolute;";
W="width:99px;height:99px;";

// set class; we only use it on the element that always should have "w", so just add the rest
function C(e,c){e.className="w "+c}

// add css3 prefixes
function P(s){return";-webkit-"+s+";-moz-"+s+";-o-"+s}

// get out a random element from an array
function R(a){return a.splice(0|a.length*Math.random(),1)[0]}

// set up styles
// 1st I tried 3d transitions, but opera doesn't support hem yet


//var divNode = document.createElement("div");
//divNode.innerHTML 

var css = document.createElement('style');
css.type = 'text/css';

var styles
=".w{"+W+"border:1px solid# +777;text-align:center;margin:5px;float:left"+
"}.v .b,.p .b{"+P("transform:scale(0)")+"}.c{"+W+A+"font-size:80px; padding-top:10px;}.c b{"+A+"font-size:24px;left:5px}.b,.r{color:red}"+
".b{padding-top:0px; background-image: url(http://www.freestockphotos.biz/pictures/15/15539/Illustration%2Bof%2Ba%2Bcard%2Bdeck%2Bback.png);background-size:100px 100px;"+P("transition:1s")+"}";

css.appendChild(document.createTextNode(styles));
document.body.appendChild(css);


//document.getElementsByTagName("canvas")[0].appendChild(divNode);

/*
 * Flip the card
 *
 * We use classes to be able to count some group of cards:
 * "p" is used for "paired" cards that stay visible forever
 * "v" is used for the 1 or 2 cards that we turned on and are currently "visible"
 */
function F(t){
    // get the visible cards
    v=b.querySelectorAll(".v");
    x=v[0];
    y=v[1];
    // if 2 cards are visible we need to turn them back /*v.length==2*/
    if(y)
        C(x,""),
        C(y,"");
    // if one card was visible we need to compare it with the one we just turned /* v.length==1 */
    if(x&&!y&&x!=t&&x.innerHTML==t.innerHTML){
        // if they match we sign them as "paired"
        C(x,"p"),
        C(t,"p"),
        l--;
    }else C(t,"v");// otherwise we set the currently turned card to visible

    // see if we finished the whole pack
    if(!l) {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'http://www.mediacollege.com/downloads/sound-effects/crowd/laugh-01.mp3');
        audioElement.load()
        audioElement.play();
		
		window.localStorage.clear();	
        document.location.reload(true);
        alert("wayyyy kool")
    }
}

runCode();

function runCode(){
// Counter for the number of pairs left
l=8;

// Fill in p array that represents the pack of cards.
q="0A23456789JQK♥♠♦♣".split("");
q[0]=10;
p=[];
for(c=13;c<17;c++)
    for(i=0;i<13;i++)
        p.push([c%2?' r':'',c,q[i]]);

// Pull out a card and put it on the deck twice. Those will be the pairs.
d=[];
for(i=0;i<8;i++)
    d[i]=d[i+8]=R(p);

// start to draw the screen
h='<div style="width:450px">';
// we need to create 16 cards
for(i=16;i;i--)
    // take out a random element from the cards on the deck
    c=R(d),
    h+='<div class="w" onclick="F(this)"><div class="c f'
        +c[0]
        +'"><b>'
        +q[c[1]]
        +'</b>'
        +c[2]
        +'</div><div class="c b"></div></div>';
// add it to the DOM

 //var stat=window.localStorage.getItem("h")
 
 try{
	var stat = JSON.parse(window.localStorage.mydata).gameprogress;		
	b.innerHTML=stat+'</div>';	
   }catch(exception){	
	b.innerHTML=h+'</div>';	
  }	

}