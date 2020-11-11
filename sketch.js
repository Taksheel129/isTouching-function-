var mrect
var frect
var ob1,ob2,ob3,ob4

function setup() {
  createCanvas(800,400);
  ob1=createSprite(230,376,50,80)
ob1.shapeColor="yellow"
ob1.debug=true;
  ob2=createSprite(100,200,50,80)
  ob2.shapeColor="yellow"
  ob2.debug=true;
  ob3=createSprite(250,34,150,80)
  ob3.shapeColor="yellow"
  ob3.debug=true;
  ob4=createSprite(600,267,38,90)
  ob4.shapeColor="yellow"
  ob4.debug= true;
  frect = createSprite(400,200,35,60)
  frect.shapeColor="yellow"
  frect.debug = true;
  mrect = createSprite(50,180,45,80)
  mrect.shapeColor="yellow"
  mrect.debug = true;
}

function draw() {
  background(0);
   mrect.x = mouseX;
   mrect.y = mouseY;

   if(isTouching(frect)){
    mrect.shapeColor="red"
    }

    else if(isTouching(ob1)){
      mrect.shapeColor="blue"
      }
      
      else if(isTouching(ob2)){
        mrect.shapeColor="green"
        }

        else if(isTouching(ob3)){
          mrect.shapeColor="grey"
          }

          else if(isTouching(ob4)){
            mrect.shapeColor="white"
            }

    else {
    mrect.shapeColor="yellow"
    }
    
   
  drawSprites();

}function isTouching(obj){
  if(mrect.x - obj.x < mrect.width/2+  obj.width/2&&
    obj.x - mrect.x < mrect.width/2+  obj.width/2&&
    mrect.y - obj.y < mrect.height/2+  obj.height/2&&
    obj.y - mrect.y < mrect.height/2+  obj.height/2){
      return true;
   }
   else{return false;
   }}