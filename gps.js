const button=document.getElementById('get-location-button')
function gotlocation(position){

console.log(position);
}
function failedtoget(){
console.log("issue")
}
button.addEventListener("click",async()=>{
    navigator.geolocation.getCurrentPosition(gotlocation,failedtoget)
});