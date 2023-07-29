
// //! click
// var n;
// for (var n = 0; n < 7; n++) {
//     document.querySelectorAll("button")[n].addEventListener("click", function () {
        
       


//        var b = this.innerHTML
//        switch (b) {
//        case "w":
//         var audio = new Audio('sounds/crash.mp3');
//         audio.play();
//            break;

//            case "a":
//         var audio = new Audio('sounds/kick-bass.mp3');
//         audio.play();
//            break;

//            case "s":
//         var audio = new Audio('sounds/snare.mp3');
//         audio.play();
//            break;
           
//            case "d":
//         var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();
//            break;

//            case "j":
//         var audio = new Audio('sounds/tom-2.mp3');
//         audio.play();
//            break;

//            case "k":
//         var audio = new Audio('sounds/tom-3.mp3');
//         audio.play();
//            break;
      
//        default:
//             var audio = new Audio('sounds/tom-4.mp3');
//             audio.play();
//            break;
//       }
//     }

//     );
// }


// // ! keypress

// var n;
// for (var n = 0; n < 7; n++) {
//     document.querySelectorAll("button")[n].addEventListener("keydown", function () {
        
       


//        var b = this.innerHTML
//        switch (b) {
//        case "w":
//         var audio = new Audio('sounds/crash.mp3');
//         audio.play();
//            break;

//            case "a":
//         var audio = new Audio('sounds/kick-bass.mp3');
//         audio.play();
//            break;

//            case "s":
//         var audio = new Audio('sounds/snare.mp3');
//         audio.play();
//            break;
           
//            case "d":
//         var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();
//            break;

//            case "j":
//         var audio = new Audio('sounds/tom-2.mp3');
//         audio.play();
//            break;

//            case "k":
//         var audio = new Audio('sounds/tom-3.mp3');
//         audio.play();
//            break;
      
//        default:
//             var audio = new Audio('sounds/tom-4.mp3');
//             audio.play();
//            break;
//       }
//     }

//     );
// }





var n;
var n = document.querySelectorAll(".drum").length;

for (var n = 0; n < 7; n++) {

  document.querySelectorAll(".drum")[n].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
   case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
         break;

         case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
         break;

         case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
         break;
         
         case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
         break;

         case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
         break;

         case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
         break;
                   case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
         break;
    
     default:
        
         break;
  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
