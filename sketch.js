var gameState = 0;
var waterGirl;
var block1,block2,block3,block4,block5;
var invisibleGround,invisibleGround2;
var fire1,fire2,fire3,firetop;
var playbutton;
var door,door2;


function preload(){
bgImage = loadImage("fI.jpg")
dayImg = loadImage("stage1.jpg")
night = loadImage("nightBg.jpg")

playB = loadImage("playB.png")
waterGIRLimg = loadAnimation("waterGirl.png")
leftwaterGIRLimg = loadAnimation("lefttWg.png")
rightwaterGIRLimg = loadAnimation("rightside.png")
upWGI = loadAnimation("upWG.png")
block1Img = loadImage("block1.png")
block2Img = loadImage("block2.png")
block3Img = loadImage("block3.png")
block4Img = loadImage("blk4.png")
block5Img = loadImage("block5.jpg")
fireImg = loadAnimation("fire.png","flamemoving.png")
firetopIMG = loadAnimation("firetop.png","fireontop.png")
doorImg = loadImage("woodDoor.png")
smokeImg = loadAnimation("smoke.png")

}


function setup() {
  createCanvas(1400,500);
  playbutton =createSprite(730, 400, 50, 50);
  playbutton.addImage(playB)
  playbutton.scale = 0.3;
  playbutton.visible = true;


  waterGirl = createSprite(80,340,50,50)
  waterGirl.addAnimation("standing",waterGIRLimg)
  waterGirl.addAnimation("running",leftwaterGIRLimg)
  waterGirl.addAnimation("runningLeft",rightwaterGIRLimg)
  waterGirl.addAnimation("runningUp",upWGI)
  waterGirl.addAnimation("dying",smokeImg)
  //waterGirl.setCollider("rectangle",80,340,waterGirl.width,waterGirl.height);
  //waterGirl.addAnimation("runninglef",runleft)
  waterGirl.debug = true;


  waterGirl.scale = 0.4;
  waterGirl.visible = false;


  invisibleGround = createSprite(600,430,1600,10);
  invisibleGround.visible = false;

  invisibleGround2= createSprite(1400,230,10,500);
  invisibleGround2.visible =true;

  fire1 = createSprite(450,360,50,50);
  fire1.addAnimation("flame",fireImg)
  fire1.visible = false;
  fire1.scale = 0.7;
  fire1.setCollider("rectangle",-5,50,fire1.width-150,fire1.height-45);
  fire1.debug = true


  fire2= createSprite(900,350,50,50);
  fire2.addAnimation("flame",fireImg)
  fire2.visible = false;
  fire2.scale = 0.8;
  fire2.setCollider("rectangle",-5,50,fire2.width-150,fire2.height-45);
  fire2.debug = true

  fire3= createSprite(1200,380,50,50);
  fire3.addAnimation("flame",fireImg)
  fire3.visible = false;
  fire3.scale = 0.4;

  firetop= createSprite(790,250,50,50);
  firetop.addAnimation("burning",firetopIMG)
  firetop.visible = false;
  firetop.scale = 0.1;
  firetop.setCollider("rectangle",-5,50,firetop.width-150,firetop.height-45);
  firetop.debug = true

  door= createSprite(1340,80,50,50);
  door.addImage(doorImg)
  door.visible = false;
  door.scale = 0.35;

  door2= createSprite(1340,340,50,50);
  door2.addImage(doorImg)
  door2.visible = false;
  door2.scale = 0.35;

  block1 = createSprite(300,300,50,50)
  block1.addImage(block1Img)
block1.visible = false;
block1.setCollider("rectangle",-10,10,10,0.1);
block1.debug = true


block2 = createSprite(500,200,50,50)
block2.addImage(block2Img)
block2.visible = false;

block2.setCollider("rectangle",-10,0,block2.width-180,block2.height-30);
block2.debug = true

block3 = createSprite(700,300,50,50)
block3.addImage(block3Img)
block3.visible = false;

block3.setCollider("rectangle",-10,10,block3.width-200,block3.height-50);
block3.debug = true


block4 = createSprite(1100,350,50,50)
block4.addImage(block4Img)
block4.visible = false;

block4.setCollider("rectangle",-5,0.1,block4.width-90,block4.height-50);
block4.debug = true

block5 = createSprite(1000,180,50,20)
block5.addImage(block5Img)
block5.visible = false;

block5.setCollider("rectangle",-5,0.1,block5.width-200,block5.height-45);
block5.debug = false;


//elements of gamestate 2
block6 = createSprite(110,320,50,50)
block6.addImage(block4Img)
block6.visible = false;

block6.setCollider("rectangle",-5,0.1,block4.width-90,block4.height-50);
block6.debug = true




}

function draw() {
    background(255,255,255);  


  if(gameState === 0){
      background(bgImage);

      textFont("Impact")
      textSize(60)
      fill("White")
      text("ICE GIRL  V/S  THE FIRE WORLD",400,300);
      text("______________________",400,310)


      textSize(50)
      fill("white")
      text("WELCOME TO ",590,150)
      text("----------------------",550,180)

      if(mousePressedOver(playbutton)){
        gameState = 1;
        playbutton.visible = false;
      }  
  }

   if(gameState === 1){
      background(dayImg)

      

      textFont("Impact")
      textSize(40)
      text("STAGE-1",40,20,60,50)

      textFont("Ariel")
      textSize(20)
      fill("blue")
      text("Choose",1300,180,50,50)
      text("*One-Door*",1280,210,50,50)
   

      waterGirl.collide(invisibleGround)
      waterGirl.collide(invisibleGround2)
      waterGirl.collide(block1)
      waterGirl.collide(block2)
      waterGirl.collide(block3)
      waterGirl.collide(block4)
      waterGirl.collide(block5)
    

      waterGirl.visible = true;
   
      block1.visible = true;
      block2.visible = true;
      block3.visible = true;
      block4.visible = true;
      block5.visible = true;
      fire1.visible = true;
      fire2.visible = true;
      fire3.visible = true;
      firetop.visible =true;
      door.visible =true;
      door2.visible =true;



      if(keyDown("left_arrow")){
        waterGirl.x= waterGirl.x-4;
        waterGirl.changeAnimation("running",leftwaterGIRLimg);
        waterGirl.scale = 1.2;
        //waterGirl.changeAnimation("runninglef",runleft);
        //waterGirl.scale = 0.3;
      }

      if(keyDown("right_arrow")){
        waterGirl.x= waterGirl.x+4;
        waterGirl.changeAnimation("runningLeft",rightwaterGIRLimg,);
        waterGirl.scale = 1.2;
      }

      if(keyDown("up_Arrow") && waterGirl.y >= 30) {
        waterGirl.velocityY = -5;
        waterGirl.changeAnimation("runningUp",upWGI);
        waterGirl.scale = 0.6;
      }
      waterGirl.velocityY = waterGirl.velocityY + 0.8;

      if(waterGirl.isTouching(fire1)){

        waterGirl.changeAnimation("dying",smokeImg);
        waterGirl.x = 80;
        waterGirl.y = 340;
        
       

       
      }

      if(waterGirl.isTouching(fire2)){

        waterGirl.changeAnimation("dying",smokeImg);
        waterGirl.x = 80;
        waterGirl.y = 340;
        
      }
      if(waterGirl.isTouching(fire3)){

        waterGirl.changeAnimation("dying",smokeImg);
        waterGirl.x = 80;
        waterGirl.y = 340;
        
      }
      if(waterGirl.isTouching(firetop)){

        waterGirl.changeAnimation("dying",smokeImg);
        waterGirl.x = 80;
        waterGirl.y = 340;
        
      }
  
      if(waterGirl.isTouching(door)){
        
        textFont("Ariel")
        textSize(20)
        fill("yellow")
        text("congatulations ",200,100)
        gameState =2;

        waterGirl.x = 40;
        waterGirl.y = 280;
       
      }
        
      if(waterGirl.isTouching(door2)){
        waterGirl.x = 200;
        waterGirl.y = 200;
      }

  }



  else  if(gameState === 2){
          background(night)
          
          
          waterGirl.visible = true;
          waterGirl.collide(invisibleGround)

          textFont("Impact")
          textSize(40)
          fill("yellow")
          text("STAGE2 ",50,70)
       

          textFont("Impact")
          textSize(20)
          fill("yellow")
          text("DISCLAIMER-Use down arrow to stop ICE GIRL ",30,470)

         if(keyCode === UP_ARROW && waterGirl.y >= 30){
          waterGirl.velocityY = -5;
        waterGirl.changeAnimation("runningUp",upWGI);
        waterGirl.scale = 0.6;
       
        
      }
       waterGirl.velocityY = waterGirl.velocityY + 0.8;

      if(keyCode === LEFT_ARROW){
     waterGirl.x= waterGirl.x-4;
        waterGirl.changeAnimation("running",leftwaterGIRLimg);
        waterGirl.scale = 1.2;
    }

    if(keyCode === RIGHT_ARROW){
      waterGirl.x= waterGirl.x+4;
      waterGirl.changeAnimation("runningLeft",rightwaterGIRLimg,);
      waterGirl.scale = 1.2;
    }
    if(waterGirl.isTouching(block6)){
      textFont("Impact")
      textSize(40)
      fill("blue")
      text("Congratulations!! You have passed stage 1 ",50,120)
   

    }

      waterGirl.collide(block6)
  block6.visible = true

          block1.destroy()
          block2.destroy()
          block3.destroy()
          block4.destroy()
          block5.destroy()
          fire1.destroy()
          fire2.destroy()
          fire3.destroy()
          firetop.destroy()
          door.destroy()
          door2.destroy()
        

          

  edges = createEdgeSprites();
  waterGirl.bounceOff(edges[0])
  waterGirl.bounceOff(edges[1])
  }

  drawSprites();
}

