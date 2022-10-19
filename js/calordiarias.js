
$( document ).ready(function() {

  


  $("#sendData").click(function(){
    var edad=$('#sedad').val();
    var peso=$("#ipeso").val();
    var altura=$("#ialtura").val();
    var sexo=$("#ssexo").val();
    var action=$('input[name=actividad]:checked').val();
    var tmb=getTMB(edad,peso,sexo,altura);
    var tmba=getTMBbyAction(tmb,action);
    
    console.log(action);
    $("#tmb").html(number_format(tmba)+' kcal.');
  });

  function getTMB(edad, peso, sexo, altura)
  {
    var tmb=null;
    if(sexo=='0')
      tmb=(10*peso)+(6.25*altura)-(5*edad)+5;
    else
      tmb=(10*peso)+(6.25*altura)-(5*edad)-161;
    /*
    ---Hombres
    TMB = (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) + 5


    ---Mujeres
    TMB = (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) - 161*/
    return tmb;
  }
  function getTMBbyAction(tmb, action)
  {
    var tmba=null;
    /*  Poco o ningún ejercicio
      Calorías diarias necesarias = TMB x 1,2
    */
    if(action==0)
      tmba=tmb*1.2;
    /*
      Ejercicio ligero (1-3 días a la semana)
      Calorías diarias necesarias = TMB x 1,375
    */
    if(action==1)
      tmba=tmb*1.375;
    /*
      Ejercicio moderado (3-5 días a la semana)
      Calorías diarias necesarias = TMB x 1,55
    */
    if(action==2)
      tmba=tmb*1.55;

    /*
      Ejercicio fuerte (6-7 días a la semana)
      Calorías diarias necesarias = TMB x 1,725
    */
    if(action==3)
      tmba=tmb*1.725;
    /*
      Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)
      Calorías diarias necesarias = TMB x 1,9

    */
    if(action==4)
      tmba=tmb*1.9;
    return tmba;
  }
  function number_format(n) {
      return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }

});
