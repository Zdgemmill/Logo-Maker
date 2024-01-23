
//function for creating a circle
function drawCircle() {
  return '<circle cx="25" cy="75" r="20" />';

}


//function for creating a square

function drawSquare() {
  return `<rect x="40" y="40" width="200" height="200" />`;
};

//function for creating a triangle 

function drawTriangle() {
  const svgString = `
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,10 90,90 10,90" />
      </svg>
    `;
  return svgString;
};


export { drawCircle, drawTriangle, drawSquare };