
  `use strict`;
    
      const equal=document.querySelector('.equal');

      const blackResult=document.querySelector('.black');

      const reset=document.querySelector('.reset');
      
      const arrow=document.querySelector('.arrow');


      //this is work correctly 
      const clearScreen=function(){

        blackResult.textContent='';


      }


      const show=function(value){

        blackResult.textContent+=value


      }

      const calculate=function(){

      const valueOfblackScreen= blackResult.textContent;
      const ev=eval(valueOfblackScreen);
      blackResult.textContent=ev;


      }

      // call calculate and clearScreen function 

      arrow.addEventListener('click',function(){

        // i take this string and store it in array then unpack it in
        // array be cause string has no method to 
        //remove last element than convert it to string  than
        // remove colon in that by non digit command like  str = str.replace(/\D/g,'');
          const strBlackResult=blackResult.innerHTML;
          const de=[...strBlackResult];
          console.log(de);
        
        
        //remove last element
        const removed = de.splice(-1); 
        console.log(de);
        // just want remove cama in calculation
        // convert to string 
        let str=de.toString();
        console.log(`str:${str}`);
          //   str.replaceAll(',','');
          //  blackResult.innerHTML=str;

          //remove , form string 
          str = str.replace(/\D/g,'');
          blackResult.innerHTML=str;

      })

      equal.addEventListener('click',calculate);


      // this is work correctly 
      reset.addEventListener('click',clearScreen);
    