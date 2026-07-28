function nextScene(number){

    // Sab scenes hide karo
    let scenes = document.querySelectorAll(".scene");

    scenes.forEach(function(scene){
        scene.classList.remove("active");
    });

    // Jo scene chahiye usko show karo
    document.getElementById("scene" + number).classList.add("active");
}


// Hearts animation
function createHeart(){

    let heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "25px";
    heart.style.animation = "fall 5s linear";

    document.body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },5000);
}

setInterval(createHeart,800);
