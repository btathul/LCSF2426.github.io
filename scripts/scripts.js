/* 
    Student Name: Athul Babu Teeyancheri
    File Name: script.js

*/

//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");

//Function to display the content
function product(){
    videoSource.src = "media/video.mp4";
    video.style.display = "block";
    video.load();
}
