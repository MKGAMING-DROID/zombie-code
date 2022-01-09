var player , zombie1,zombie2;
var heart,arrowsign,bush,skeleton,tree,tombstone;
var heartimg,arrowsignimg,bushimg,skeletonimg,treeimg,tombstoneimg;
var playerimg,zombie1img,zombie2img;
var BG;
var playersh;


function preload(){
	heartimg=loadImage('images/heart.png');
	arrowsignimg=loadImage('images/ArrowSign.png');
	bushimg=loadImage('images/Bush.png');
	skeletonimg=loadImage('images/Skeleton.png');
	treeimg=loadImage('images/Tree.png');
	tombstoneimg=loadImage('images/TombStone.png');
	BG=loadImage('images/BG.png');

    playerimg=loadAnimation('pc images/Idle (1).png','pc images/Idle (2).png','pc images/Idle (3).png','pc images/Idle (4).png',
	'pc images/Idle (5).png','pc images/Idle (6).png','pc images/Idle (7).png','pc images/Idle (8).png','pc images/Idle (9).png'
	,'pc images/Idle (10).png')
	//playerimg=loadAnimation('pc images/Idle (1).png','pc images/Idle (2).png','pc images/Idle (3).png'
	//,'pc images/Idle (4).png','pc images/Idle (5).png','pc images/Idle (6).png','pc images/Idle (7).png'
	//,'pc images/Idle (8).png','pc images/Idle (9).png','pc images/Idle (10).png');

	//zombie1img=loadAnimation('npc images/Idle (1).png');
	  zombie1img=loadAnimation('npc images/Idle (1).png','npc images/Idle (2).png','npc images/Idle (3).png',
	 'npc images/Idle (4).png','npc images/Idle (5).png'
	 ,'npc images/Idle (6).png','npc images/Idle (7).png',
	 'npc images/Idle (8).png','npc images/Idle (9).png',
	 'npc images/Idle (10).png','npc images/Idle (11).png',
	 'npc images/Idle (12).png','npc images/Idle (13).png',
	 'npc images/Idle (14).png','npc images/Idle (15).png');

	 playersh=loadAnimation('shoot/Shoot(1).png','shoot/Shoot(2).png',
	 'shoot/Shoot(3).png');
	

	


}

function setup(){
createCanvas(windowWidth, windowHeight);

player=createSprite(200,500.30,30);
player.addAnimation('Idle',playerimg);
player.scale=0.3;

//zombie1.addAnimation('Idle',zombie1img);

}

function draw(){

background(BG);
/*if (keyDown("UP_ARROW")){
player.addAnimation("shoot",playersh)	
}*/
spawnNPC();
drawSprites();
}
function spawnNPC() {
	if(frameCount % 60 === 0) {
	  var zombie1 = createSprite(1000,500,80,80);
	  zombie1.setCollider('circle',0,0,45)
	  zombie1.addAnimation('Idle',zombie1img);
	  //obstacle.debug = true
	
	  //zombie1.velocityX = -(6 + 3*score/100);
	  
	  //generate random obstacles
	  //var rand = Math.round(random(1,2));
	  //switch(rand) {
		//case 1: obstacle.addImage(obstacle1);
		//		break;
		//case 2: obstacle.addImage(obstacle2);
		//		break;
		//default: break;
	 // }
	  
	  //assign scale and lifetime to the obstacle           
	  zombie1.scale = 0.3;
	   //zombie1.lifetime = 300;
	   //obstacle.depth = trex.depth;
	   //trex.depth +=1;
	  //add each obstacle to the group
	  //obstaclesGroup.add(obstacle);
	}
	//function killNPC(){
	//if keyPressed(RIGHT ARROW ) {
	//	zombie1.addAnimation('Shoot',playersh);

	//}
  }
  
