//your parameter variables go here!
let rect_width  = 150;
let rect_height = 150;
let n = 10;
let startN = 100;
let weight = 1;
let colour1 = '0';
let colour2 = 'black';
let colour3 = 'red';
let squareN = 100;
//let background = true;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
backgroundMaker(colour3,squareN);
glyph(55,45,n,startN,weight,colour1,colour2);
glyph(145,45,n,startN,weight,colour1,colour2);
glyphNeg(55,155,n,startN,weight,colour1,colour2);
glyphNeg(145,155,n,startN,weight,colour1,colour2);
border(weight,colour2,colour3);

}


function glyph(x,y,n,startN,weight,colour1,colour2){
  fill(colour1);
  if(colour1 == '0'){
    fill(0,0);
  } //workaround for getting fill to be transparent and work with parameters

  stroke(colour2);
  strokeWeight(weight*2);
  for(let i = startN; i > 0; i -= n){
    ellipse(x ,y+i, i, i/2);
    strokeWeight(10 - (i*2));
    stroke(colour2);
  }
}
function glyphNeg(x,y,n,startN,weight,colour1,colour2){
  fill(colour1);
    if(colour1 == '0'){
    fill(0,0);
  } //workaround for getting fill to be transparent and work with parameters

  stroke(colour2);
  strokeWeight(weight*2);
  for(let i = startN; i > 0; i -= n){
    ellipse(x ,y-i, i, i/2);
    strokeWeight(10 - (i*2));
    stroke(colour2);
  }

}
function border(weight,colour2,colour3){
  stroke(212, 92, 36);
  fill(colour2);
  strokeWeight(weight);
  rect(0,195,200,5);
  rect(0,0,200,5);
  rect(195,0,5,200);
  rect(0,0,5,200);

  pattern(195,0,colour3);
  pattern(0,0,colour3);
  pattern(0,195,colour3);
  pattern(195,195,colour3);
}

function pattern(x,y,colour3){
  stroke(colour3);
  line(1+x,1+y,1+x,1+y);
  line(4+x,1+y,4+x,1+y);
  line(1+x,4+y,1+x,4+y);
  line(4+x,4+y,4+x,4+y);
  line(2+x,2+y,2+x,2+y);
  line(3+x,3+y,3+x,3+y);
  line(2+x,3+y,2+x,3+y);
  line(3+x,2+y,3+x,2+y);
  //stroke(colour3);
}

function backgroundMaker(colour3,squareN){
  //if (){
  fill(colour3);
  let size = 200/squareN;
 for(let i = 0;i < squareN;i+=1){
  for(let d = 0;d < squareN;d+=1){
    rect(0+(size*d),0+(size*i),200/squareN,200/squareN);
  }
 }

}