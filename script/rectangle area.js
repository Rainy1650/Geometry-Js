function calculateArea(){
    const lengthInput = document.getElementById('rectangle-l');
    const lengthinputText = lengthInput.value;
    const length = parseFloat(lengthinputText);
    console.log(length);

// get width of the rectangle
const widthInput = document.getElementById('rectangle-w');
const widthinputText = widthInput.value;
const width = parseFloat(widthinputText);
console.log(width);


// calculate the length and width
const area = width * length;
console.log(area)






}