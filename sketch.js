let angle, angle2, hist, hist2;
function setup() {
  createCanvas(400, 400);
  angle = PI;
  angle2 = 0;

  hist = [];
  hist2 = [];
}



function draw() {
  background(0);
  translate(width/2, height/2);

  if(sin(angle) > 0)
  {
      angle += 0.04;
      angle2 += 0.04;
  }
  else
  {
    angle += 0.02;
    angle2 += 0.02;
  }
  
  let x = 100 * cos(angle);
  let y = 100 * sin(angle);
  let x2 = 100 * cos(angle2);
  let y2 = 100 * sin(angle2);

  hist.push(createVector(x,y));
  hist2.push(createVector(x2,y2));

  if(hist.length > 80){
    hist.splice(0,1);
  }
  if(hist2.length > 80){
    hist2.splice(0,1);
  }

  stroke(0,0,255);
  fill(0,0,255);


  for(let i = 0; i < hist.length; i++){
    let pos = hist[i];
    let pos2 = hist2[i];
    ellipse(pos.x, pos.y, 10);
    ellipse(pos2.x, pos2.y, 10);
  }



}
