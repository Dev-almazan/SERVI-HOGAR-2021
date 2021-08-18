


function ocultar(){
    
    document.getElementById('ocultar').style.display="none";
}



function redireccionar(){
  document.getElementById('id01').style.display='active';
  $("#id01").trigger("click");
} 
setTimeout ("redireccionar()", 1000); //tiempo expresado en milisegundos

          function inicio(){
       
       var delay = alertify.get('notifier','delay');
 alertify.set('notifier','delay', 100);
 alertify.success('Current delay : ' + alertify.get('notifier','delay') + ' seconds');
 alertify.set('notifier','delay', delay);  
   } 
             
           function validar() {
    
         
         var val= prompt("Pregunta de seguridad  ¿Cual es el resultado de la siguiente suma? 1+4");   
                
                
                if(val=="5")
                { 
                 alert('¡Muchas gracias por contactarnos, en breve uno de nuestros asesores de pondrá en contacto con usted, agradecemos su preferencia!'); 
                }
                else
                    {
                   alert("Por favor ingrese nuevamente, la respuesta es incorrecta.");  
                  return validaruno();
                   }         
                    
                } 
            
    function validaruno() {
    
         
         var val= prompt("Pregunta de seguridad  ¿Cual es el resultado de la siguiente suma? 3+3");   
                
                
                if(val=="6")
                { 
                 alert('¡Muchas gracias por contactarnos, en breve uno de nuestros asesores de pondrá en contacto con usted, agradecemos su preferencia!'); 
                }
                else
                    {
                   alert("Por favor ingrese nuevamente, la respuesta es incorrecta.");  
                  return validardos();
                   }         
                    
                } 
           
           function validardos() {
    
         
         var val= prompt("Pregunta de seguridad  ¿Cual es el resultado de la siguiente suma? 3+5");   
                
                
                if(val=="8")
                { 
                 alert('¡Muchas gracias por contactarnos, en breve uno de nuestros asesores de pondrá en contacto con usted, agradecemos su preferencia!'); 
                }
                else
                    {
                   alert("Por favor ingrese nuevamente, la respuesta es incorrecta.");  
                  return validartres();
                   }         
                    
                } 

    function validartres() {
    
         
         var val= prompt("Pregunta de seguridad  ¿Cual es el resultado de la siguiente suma? 2+7");   
                
                
                if(val=="9")
                { 
                 alert('¡Muchas gracias por contactarnos, en breve uno de nuestros asesores de pondrá en contacto con usted, agradecemos su preferencia!'); 
                }
                else
                    {
                   alert("Por favor ingrese nuevamente, la respuesta es incorrecta.");  
                  return validar();
                   }         
                    
                } 
           
            
 