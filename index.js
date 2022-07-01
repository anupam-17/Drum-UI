//document.querySelector("button").addEventListener("click",handClick);
//
//
//
//function handClick()
//{
//    alert("I got clicked!");
//}
//Detecting Button press
var lenghtofdrum=document.querySelectorAll(".drum").length;
for(var i=0;i<lenghtofdrum;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()

    {
        //alert("I got clicked!");
        //var audio= new Audio("sounds/Tom-1.mp3");
        //audio.play();
        var buttoninnerhtml= this.innerHTML;
        Makesound(buttoninnerhtml);
        //switch (buttoninnerhtml) {
        //    case "w":
        //         var audio= new Audio("sounds/tom-1.mp3");
        //         audio.play();
        //         alert("Ssss");
        //    break;
        //    case "a":
        //        var audio1=new Audio("sounds/tom-2.mp3");
        //        audio1.play();
        //    break;
        //    case "s":
        //        var audio2=new Audio("sounds/tom-3.mp3");
        //        audio2.play();
        //    break;
        //    case "d":
        //        var audio3=new Audio("sounds/tom-4.mp3");
        //        audio3.play();
        //    break;
        //    case "j":
        //        var audio4=new Audio("sounds/snare.mp3");
        //        audio4.play();
        //    break;
        //    case "k":
        //        var audio5=new Audio("sounds/crash.mp3");
        //        audio5.play();
        //    break;
        //    case "l":
        //       var audio6=new Audio("sounds/kick-bass.mp3");
        //        audio6.play();
        //    break;
        //    default:
        //        console.log(buttoninnerhtml);
        //        break;
        //}
    


    });
}

//Detecting Keyboard press
document.addEventListener("keydown",function(event) // functions as call backs.
{                                               // here the addEventListener is a higher order function as it takes other functions as its inputs.
    Makesound(event.key);

});



function Makesound(key)
{
    switch (key) {
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "a":
            var audio1=new Audio("sounds/tom-2.mp3");
            audio1.play();
        break;
        case "s":
            var audio2=new Audio("sounds/tom-3.mp3");
            audio2.play();
        break;
        case "d":
            var audio3=new Audio("sounds/tom-4.mp3");
            audio3.play();
        break;
        case "j":
            var audio4=new Audio("sounds/snare.mp3");
            audio4.play();
        break;
        case "k":
            var audio5=new Audio("sounds/crash.mp3");
            audio5.play();
        break;
        case "l":
            var audio6=new Audio("sounds/kick-bass.mp3");
            audio6.play();
        break;
    default:
        console.log("A button has been clicked!");
        break;
    }
}