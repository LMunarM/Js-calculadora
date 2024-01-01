const botones = document.querySelectorAll('.boton');
const pantalla = document.querySelector('#pantalla')
const resultado = document.querySelector('#resultado')




botones.forEach( btn =>{
    btn.addEventListener("click", ()=>{
        const activeBtn = btn.textContent;

        if(btn.id === "bdelete"){
            if( pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0"
            }else{
            pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return;
        }
        if(btn.id === "bequal"){
            try{
            resultado.textContent = eval(pantalla.textContent);
            }
            catch{
                pantalla.textContent = "Error";
            }
            return;
        }
        
        if(pantalla.textContent === "0" || pantalla.textContent === "Error"){
            pantalla.textContent = activeBtn;
        } else{
            pantalla.textContent += activeBtn;
        }

        if(btn.id === "bclear"){
         pantalla.textContent = "0" ; 
         resultado.textContent = "";
         return ;
        }


    })

       
})