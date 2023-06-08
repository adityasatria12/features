// Input Username
var nickname = prompt("Masukan nama Kamu");
document.getElementById("username").innerText = nickname


// Automatic Slide 
let start = 0;
automatic();

function automatic(){
    const sliders = document.querySelectorAll(".image-slider");

    for (let i = 0 ; i < sliders.length; i++){
        sliders[i].style.display = "none";
    }

    if (start >= sliders.length){
        start = 0;
    }

    sliders[start].style.display = "block";
    start++;
    setTimeout(automatic,2000);
}

// Function Output Form
function validateform(){
    var name = document.forms["message-form"]["full-name"].value;
    var birthDate = document.forms["message-form"]["birth-date"].value;
    var gender= document.forms["message-form"]["gender"].value;
    var  messages= document.forms["message-form"]["messages"].value;
    
    if (name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("Semua wajib di isikan!!");
        return false;
    }

    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
    return false;
}

// Humberger menu

const wrapperHumberger = document.querySelector(".humberger-menu");
const humberger = document.querySelectorAll(".humberger");
const slider = document.querySelector(".slider")



wrapperHumberger.addEventListener("click",()=>{
    
    
    slider.style.right = '-1000px';
         
})
