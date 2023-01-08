let reduceButton = document.querySelector('.reduce-button')

let toggle = () =>{
    let windowReduce = document.querySelector('.reduce')
    let windowExpand = document.querySelector('.reduce-reverse')
    if(document.querySelector('.window').className == "window reduce"){
        document.querySelector('.window').className = "window reduce-reverse"
  
        }
        else{
            document.querySelector('.window').className = "window reduce"
     
    
        }
    }