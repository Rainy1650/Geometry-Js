function triangleCalculate(){
    const triangleBaseArea = document.getElementById('triangle-base')
    const triangleBaseText = triangleBaseArea.value;
    const base = parseFloat( triangleBaseText)
    console.log(base);
// get hight value
    const triangleHightInput = document.getElementById('triangle-hight');
    const triangleHightText = triangleHightInput.value;
    const height= parseFloat(triangleHightText)
    console.log(height);
}
//caculate triangle and hight
const area = (0.5 * base * height);
console.log( area)