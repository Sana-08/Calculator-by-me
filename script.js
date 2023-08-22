const display=document.getElementById("Show")
const buttons=document.querySelector(".buttons")

buttons.addEventListener("click",(event)=>{
    // console.log(event.target)
    if (event.target.innerHTML==="C"){
        display.value=""
    }
    else if(event.target.innerHTML==="0"||event.target.innerHTML==="1"||event.target.innerHTML==="2"
    ||event.target.innerHTML==="3"||event.target.innerHTML==="4"||event.target.innerHTML==="5"
    ||event.target.innerHTML==="6"||event.target.innerHTML==="7"||event.target.innerHTML==="8"
    ||event.target.innerHTML==="9"){
        display.value+=event.target.innerHTML;
    }

    else if(event.target.innerHTML==="+"||event.target.innerHTML==="-"||
    event.target.innerHTML==="*"||event.target.innerHTML==="/"){
        let lastChar=display.value[display.value.length-1];
        if (lastChar==="+"||lastChar==="-"||lastChar==="*"||lastChar==="/"){
            display.value=display.value.slice(0,-1)+event.target.innerHTML
        }
        else{
            display.value+=event.target.innerHTML;
        }

    }
    
    else if (event.target.innerHTML==="="){
        if (display.value.length!==0){
            try{
                display.value=eval(display.value)
            }
            catch (error){
                display.value="syntax error";
            }
        }
        else{ 
            display.value=""
        }
    }
});