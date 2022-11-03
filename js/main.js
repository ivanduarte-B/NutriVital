var buttooon = document.getElementById("buttooon");

buttooon.addEventListener('click', function(){
    alert("Diste Click")
    notify();
});

function notify(){

    //verificar que el navegador soporta notificaciones

    if(!("Notification" in window)){
        alert("Necesito permiso de notificacion");

    }else if (Notification.permission === "granted"){

        //lanzar notificacion si ya esta autorizado

    var notification = new Notification("¡Olvidaste comer bien!, Ven y entra a conocer nuestras nuevas Novedades");
    
    }

    }