//your parameter variables go here!
let rect_width  = 150;
let rect_height = 150;
let n = 10;
let startN = 100;



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
glyph(55,45,n,startN);
glyph(145,45,n,startN);
glyphNeg(55,155,n,startN);
glyphNeg(145,155,n,startN);
border();
}

function glyph(x,y,n,startN){
  noFill();
  stroke(36, 56, 212);
  strokeWeight(1);
  for(let i = startN; i > 0; i -= n){
    ellipse(x ,y+i, i, i);
    strokeWeight(10 - (i*2));
    stroke(36, 56, 212-i);
  }
}
function glyphNeg(x,y,n,startN){
  noFill();
  stroke(36, 56, 212);
  strokeWeight(1);
  for(let i = startN; i > 0; i -= n){
    ellipse(x ,y-i, i, i);
    strokeWeight(10 - (i*2));
    stroke(36, 56, 212-i);
  }

}
function border(){
  stroke(212, 92, 36);
  strokeWeight(1);
  rect(0,0,200,5);
  pattern(0,0);
  rect(0,0,5,200);
  pattern(195,0);
  rect(0,195,200,5);
  pattern(0,195);
  rect(195,0,5,200);
  pattern(195,195);
}

function pattern(x,y){
  stroke(0);
  line(1+x,1+y,1+x,1+y);
  line(4+x,1+y,4+x,1+y);
  line(1+x,4+y,1+x,4+y);
  line(4+x,4+y,4+x,4+y);
  line(2+x,2+y,2+x,2+y);
  line(3+x,3+y,3+x,3+y);
  line(2+x,3+y,2+x,3+y);
  line(3+x,2+y,3+x,2+y);
  stroke(212, 92, 36);
}