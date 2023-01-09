let reduceButton = document.querySelector('.reduce-button')

let toggle = () =>{
    if(document.querySelector('.window').className == "window reduce"){
        document.querySelector('.window').className = "window reduce-reverse"
        }
        else{
            document.querySelector('.window').className = "window reduce"
     
    
        }
    }



    let expandButton = document.querySelector('.expand-button')

    let toggle2 = () =>{


        if(document.querySelector('.window').className == "window expand"){
            document.querySelector('.window').className = "window expand-reverse"
            document.querySelector('.container-window').className = "expension"
      
            }
            else{
                document.querySelector('.window').className = "window expand"
                document.querySelector('.expension').className = "container-window"
         
        
            }
        }
let body = document.querySelector('main')
let closeButton = () =>{
        document.querySelector('.container-window').style.display="none"
        
        setTimeout(()=>{
            const button = body.appendChild(document.createElement('button'));
            button.innerText = 'Bah alors ?'
            button.classList.add('voidButton')
            button.setAttribute('onclick', 'reset()')
            setTimeout(()=>{
                body.querySelector('.voidButton').style.display="block"
                button.classList.add('active');
            }, 1000)
        }, 1000)
}

let reset = () => {
    body.querySelector('.voidButton').remove()
    document.querySelector('.container-window').style.display="flex"
    
}