var all=document.querySelectorAll(".drum").length;
 for(var i=0; i<all; i++)
 {
     document.querySelectorAll(".drum")[i].addEventListener("click",handle);


 }

  function handle()
  {
    var buttonInnerHTML=this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
       var audio=new Audio("sounds/crash.mp3");
       audio.play();
        document.querySelector("body").style.background="red";
        break;
        case "a":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
         document.querySelector("body").style.background="blue";
          break;
          case "s":
          var audio=new Audio("sounds/snare.mp3");
          audio.play();
           document.querySelector("body").style.background="green";

            break;
            case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
             document.querySelector("body").style.background="yellow";

              break;
              case "j":
              var audio=new Audio("sounds/tom-2.mp3");
              audio.play();
               document.querySelector("body").style.background="white";

                break;
                case "k":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                 document.querySelector("body").style.background="purple";
                  break;
                  case "l":
                  var audio=new Audio("sounds/tom-4.mp3");
                  audio.play();
                   document.querySelector("body").style.background="black";

                    break;
      default:
      document.querySelector("body").style.background="black";

    }
  };
  document.addEventListener("keypress",function(event){
    var n1=event.key;

    switch (n1) {
      case "w":
       var audio=new Audio("sounds/crash.mp3");
       audio.play();
        document.querySelector("body").style.background="red";
        break;
        case "a":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
         document.querySelector("body").style.background="blue";
          break;
          case "s":
          var audio=new Audio("sounds/snare.mp3");
          audio.play();
           document.querySelector("body").style.background="green";

            break;
            case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
             document.querySelector("body").style.background="yellow";

              break;
              case "j":
              var audio=new Audio("sounds/tom-2.mp3");
              audio.play();
               document.querySelector("body").style.background="white";

                break;
                case "k":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                 document.querySelector("body").style.background="purple";
                  break;
                  case "l":
                  var audio=new Audio("sounds/tom-4.mp3");
                  audio.play();
                   document.querySelector("body").style.background="black";

                    break;
      default:
      document.querySelector("body").style.background="black";
    }
    animation(n1);

  });
  function animation(current)
  {
    var activation=document.querySelector("."+current);
    activation.clasList.add("pressed");
    setTimeout(function () {
      activation.clasList.remove("pressed")
    },100);
  }
