function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("orange");
  fill("black")
  
  textSize(40)
  textAlign(CENTER,CENTER);
  
  let maximo = width;
  let minimo = 0;
  
   let palavra = "PIERRE GASLY";
  
  let quantidade = map(mouseX,0,width,0,palavra.length);
 console.log(quantidade);
  let parcial = 
      palavra.substring(0,quantidade);
  text(parcial, 200, 200);
  
}
