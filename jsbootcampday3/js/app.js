function getRandomColor(){
    let randBgColor=`#${Math.random().toString(16).slice(2,8)}`
    return randBgColor
}
function changeBackgroundColor(hexColor){
    document.body.style.backgroundColor=hexColor
}
