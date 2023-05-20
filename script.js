let constValue = document.querySelector('p');

function increment(){
    let value = parseInt(constValue.innerHTML);
    value = value+1;
    constValue.innerHTML = value;
}
function decrement(){
    let value = parseInt(constValue.innerHTML);
    value = value-1;
    constValue.innerHTML = value;
}