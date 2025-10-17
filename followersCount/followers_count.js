let count = 0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();// Check count value and display messages 
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function checkCountValue(){
    if (count === 10) {
        alert("Your instagram post gained 10 followers! Congras!");
    } else if (count === 20) {
        alert("Your instagam post gained 20 followers! Keep it up!");
    }
}