//detecting button press:
let numOfDrum = document.querySelectorAll(".drum").length;
for (let i = 0 ; i <numOfDrum; i++ ){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
            var buttonHMTL = this.textContent;
            
            makeSound(buttonHMTL);

            buttonAnimation(buttonHMTL);


        });
    }   
        

    //detecting keyboard press:
    document.addEventListener("keypress" , function(event){
        
        makeSound(event.key);

        buttonAnimation(event.key);
    
    });

    
    function makeSound (key){
        switch (key) {
            case "w":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play(); 
                    break;
            case 'a':
                    let tom3 = new Audio ('sounds/tom-3.mp3');
                    tom3.play(); 
                break; 
            case 's':
                    let tom2 = new Audio ('sounds/tom-2.mp3');
                    tom2.play(); 
                break;
            case 'd':
                    let tom1 = new Audio ('sounds/tom-1.mp3');
                    tom1.play(); 
                break;
            case 'j':
                    let snare = new Audio ('sounds/snare.mp3');
                    snare.play(); 
                break;
            case 'k':
                    let kick = new Audio ('sounds/kick-bass.mp3');
                    kick.play(); 
                break;
            case 'l':
                    let crash = new Audio ('sounds/crash.mp3');
                    crash.play(); 
                break;
            
            default: console.log(buttonHMTL);
                break;
        }
    }


    function buttonAnimation(currentKey) {
        
        let buttonActive = document.querySelector("." + currentKey);
        buttonActive.classList.add("pressed"); 


        setTimeout(function(){
            buttonActive.classList.remove("pressed"); 
        },100);
    }

