function procesarformulario(ccosto_ori,id_ccosto,destinatario,descripcion,vineta){
  var datos_origen={
    "ccosto_ori":ccosto_ori,
    "id_ccosto":id_ccosto,
    "destinatario":destinatario,
    "descripcion":descripcion,
    "vineta":vineta
  };
  $.ajax({
    data:datos_origen,
    url:'../sistema/prg/ingreso_guia.php',
    type: 'post',
    beforeSend: function(){
      //$("#respuesta").html("procesando");
    },
    success: function (response){
      var str = response;
      var res = str.split("-");
      if(res[0]==200)
      {
        $('#destinatario').val('');
        $('#destinatario').focus();
        $('#descripcion').val('');
        $('#vineta').val('');

        $("#respuesta").html('<span style="color:green;"><b>'+ res[1]+' </b></span>');
      }else
      {
        $("#respuesta").html('<span style="color:red;"><b>Error form_ingreso_guia:</b>  <p> '+res[0]+res[1]+'</span></p>');
      }
    }
  })
}

function procesarMantAgencia(cli_id,id_agencia,codigo_agencia,nombre_agencia,direccion_agencia,telefono_agencia)
{
    var datos_origen={
      "cli_id":cli_id,
      "id_agencia":id_agencia,
      "codigo_agencia":codigo_agencia,
      "nombre_agencia":nombre_agencia,
      "direccion_agencia":direccion_agencia,
      "telefono_agencia":telefono_agencia
    };
    $.ajax({
      data:datos_origen,
      url:'../sistema/prg/mant_agencias.php',
      type: 'post',
      beforeSend: function(){
        //$("#respuesta").html("procesando");
        //$('.submitBtn').attr("disabled","disabled");
      },
      success: function (response){
        var str = response;
        var res = str.split("-");
        if(res[0]==200)
        {
          $('#respuesta').html('<span style="color:green;"><b>Agencia <b>'+ codigo_agencia +'</b> Ingresada Correctamente.</b></span>');
          $('#codigo_agencia').val('');
          $('#nombre_agencia').val('');
          $('#direccion_agencia').val('');
          $('#telefono_agencia').val('');
          $('#id_agencia').prop('selectedIndex', 0);
        }else
        {
          $("#respuesta").html('<span style="color:red;"><b>Error form_mant_agencias:</b>  <p> '+res[0]+res[1]+'</span></p>');
          //$('.submitBtn').removeAttr("disabled");
        }
      }
    })
}

function procesarMantCCosto(id_ccosto,cli_id,id_agencia,codigo_ccosto,nombre_ccosto,direccion_ccosto,telefono_ccosto)
{
  var datos_origen={
    "id_ccosto":id_ccosto,
    "cli_id":cli_id,
    "id_agencia":id_agencia,
    "codigo_ccosto":codigo_ccosto,
    "nombre_ccosto":nombre_ccosto,
    "direccion_ccosto":direccion_ccosto,
    "telefono_ccosto":telefono_ccosto
  };
  $.ajax({
    data:datos_origen,
    url:'../sistema/prg/mant_ccosto.php',
    type: 'post',
    beforeSend: function(){
      //$("#respuesta").html("procesando");
      //$('.submitBtn').attr("disabled","disabled");
    },
    success: function (response){
      var str = response;
      var res = str.split("-");
      if(res[0]==200)
      {
        $('#respuesta').html('<span style="color:green;"><b>Centro de Costo <b>'+ codigo_ccosto +'</b> Ingresado Correctamente.</b></span>');
        $('#codigo_ccosto').val('');
        $('#nombre_ccosto').val('');
        $('#direccion_ccosto').val('');
        $('#telefono_ccosto').val('');
        $('#id_agencia').prop('selectedIndex', 0);
        $('#id_ccosto').prop('selectedIndex', 0);
        
      }else
      {
        $("#respuesta").html('<span style="color:red;"><b>Error form_mant_ccostos:</b>  <p> '+res[0]+res[1]+'</span></p>');
        //$('.submitBtn').removeAttr("disabled");
      }
    }
  })
}

function procesarMantZona(cli_id,id_zona,codigo_zona,nombre_zona)
{
    var datos_origen={
      "cli_id":cli_id,
      "id_zona":id_zona,
      "codigo_zona":codigo_zona,
      "nombre_zona":nombre_zona
    };
    $.ajax({
      data:datos_origen,
      url:'../sistema/prg/mant_zonas.php',
      type: 'post',
      beforeSend: function(){
        //$("#respuesta").html("procesando");
        //$('.submitBtn').attr("disabled","disabled");
      },
      success: function (response){
        var str = response;
        var res = str.split("-");
        if(res[0]==200)
        {
          $('#respuesta').html('<span style="color:green;"><b>Zona <b>'+ codigo_zona +'</b> Ingresada Correctamente.</b></span>');
          $('#codigo_zona').val('');
          $('#nombre_zona').val('');
          $('#id_zona').prop('selectedIndex', 0);
        }else
        {
          $("#respuesta").html('<span style="color:red;"><b>Error form_mant_zonas:</b>  <p> '+res[0]+res[1]+'</span></p>');
          //$('.submitBtn').removeAttr("disabled");
        }
      }
    })
}

function procesarMantMensajero(id_mensajero,nombre_mensajero,direccion_mensajero,telefono_mensajero)
{
    var datos_origen={
      "id_mensajero":id_mensajero,
      "nombre_mensajero":nombre_mensajero,
      "direccion_mensajero":direccion_mensajero,
      "telefono_mensajero":telefono_mensajero
    };
    $.ajax({
      data:datos_origen,
      url:'../sistema/prg/mant_mensajero.php',
      type: 'post',
      beforeSend: function(){
        //$("#respuesta").html("procesando");
        //$('.submitBtn').attr("disabled","disabled");
      },
      success: function (response){
        var str = response;
        var res = str.split("-");
        if(res[0]==200)
        {
          $('#respuesta').html('<span style="color:green;"><b>Mensajero <b>'+ id_mensajero +'-'+nombre_mensajero +'</b> Ingresado Correctamente.</b></span>');
          $('#nombre_mensajero').val('');
          $('#direccion_mensajero').val('');
          $('#telefono_mensajero').val('');
          $('#id_mensajero').prop('selectedIndex', 0);
        }else
        {
          $("#respuesta").html('<span style="color:red;"><b>Error form_mant_mensajero:</b>  <p> '+res[0]+res[1]+'</span></p>');
          //$('.submitBtn').removeAttr("disabled");
        }
      }
    })
}

function procesarMantUsuario(usr_cod2,usr_pass,usr_nombre,id_ccosto,perfil)
{
    var datos_origen={
      "usr_cod2":usr_cod2,
      "usr_pass":usr_pass,
      "usr_nombre":usr_nombre,
      "id_ccosto":id_ccosto,
      "perfil":perfil
    };
    $.ajax({
      data:datos_origen,
      url:'../sistema/prg/mant_usuarios.php',
      type: 'post',
      beforeSend: function(){
        //$("#respuesta").html("procesando");
        //$('.submitBtn').attr("disabled","disabled");
      },
      success: function (response){
        var str = response;
        var res = str.split("-");
        if(res[0]==200)
        {
          $('#respuesta').html('<span style="color:green;"><b>Usuario <b>'+ usr_cod2 +'-'+usr_nombre +'</b> Ingresado Correctamente.</b></span>');
          $('#usr_cod2').val('');
          $('#usr_pass').val('');
          $('#usr_nombre').val('');
          $('#id_ccosto').prop('selectedIndex', 0);
          $('#id_perfil').prop('selectedIndex', 0);
        }else
        {
          $("#respuesta").html('<span style="color:red;"><b>Error form_mant_usuario:</b>  <p> '+res[0]+res[1]+'</span></p>');
          //$('.submitBtn').removeAttr("disabled");
        }
      }
    })
}

function changeAgencia()
{
  var id_agencia = $("#id_agencia").val();

  $.ajax({
    type: "POST",
    data: {id_agencia:id_agencia},
    url: "../sistema/prg/selects/changeAgencia.php",
    cache: false,
    success: function (response){
      //alert(response);return false;
      var str = response;
      var res = str.split("-");
      if(res[0]==200)
      {
        $('#codigo_agencia').val(res[3]);
        $('#nombre_agencia').val(res[4]);
        $('#direccion_agencia').val(res[5]);
        $('#telefono_agencia').val(res[6]);
      }
      //$("#nombre_agencia").val(response);
    }
  });
}

function changeCCosto()
{
  var id_ccosto = $("#id_ccosto").val();

  $.ajax({
    type: "POST",
    data: {id_ccosto:id_ccosto},
    url: "../sistema/prg/selects/changeCCosto.php",
    cache: false,
    success: function (response){
      //alert(response);return false;
      var str = response;
      var res = str.split("+");
      if(res[0]==200)
      { 
        $('#codigo_ccosto').val(res[4]);
        $('#nombre_ccosto').val(res[5]);
        $('#direccion_ccosto').val(res[6]);
        $('#telefono_ccosto').val(res[7]);
      }
      //$("#nombre_agencia").val(response);
    }
  });
}

function changeZona()
{
  var id_zona = $("#id_zona").val();

  $.ajax({
    type: "POST",
    data: {id_zona:id_zona},
    url: "../sistema/prg/selects/changeZona.php",
    cache: false,
    success: function (response){
      //alert(response);return false;
      var str = response;
      var res = str.split("-");
      if(res[0]==200)
      {
        $('#codigo_zona').val(res[2]);
        $('#nombre_zona').val(res[3]);
      }
      //$("#nombre_zona").val(response);
    }
  });
}

function changeMensajero()
{
  var id_mensajero = $("#id_mensajero").val();

  $.ajax({
    type: "POST",
    data: {id_mensajero:id_mensajero},
    url: "../sistema/prg/selects/changeMensajero.php",
    cache: false,
    success: function (response){
      //alert(response);return false;
      var str = response;
      var res = str.split("-");
      if(res[0]==200)
      {
        $('#nombre_mensajero').val(res[2]);
        $('#direccion_mensajero').val(res[3]);
        $('#telefono_mensajero').val(res[4]);
      }
      //$("#nombre_zona").val(response);
    }
  });
}

function detalle_ar()
{

  var datos_origen={
    "vineta":vineta
  };
  $.ajax({
    data:datos_origen,
    url:'../sistema/prg/ar.php',
    type: 'post',
    beforeSend: function(){
      //$("#respuesta").html("procesando");
    },
    success: function (response){
      var str = response;
      var res = str.split("-");
      if(res[0]==200)
      {
        $('#destinatario').val('');
        $('#destinatario').focus();
        $('#descripcion').val('');
        $('#vineta').val('');



        $("#respuesta").html(res[1]);
      }else
      {
        $("#respuesta").html("Error form_ingreso_guia<p> "+res[0]+res[1]+"</p>");
      }
    }
  })
}

function delRegistro(id_vineta)
{

  var datos_origen={
    "id_vineta":id_vineta
  };
  //console.log(id_vineta);
  $.ajax({
    data:datos_origen,
    url:'../sistema/prg/utileria/proTabDel.php',
    type: 'post',
    beforeSend: function(){
      //$("#respuesta").html("procesando");
    },
    success: function (response){
      var str = response;
      var res = str.split("-");
      if(res[0]==200)
      {
        console.log('#div_'+res[1]);
        $('#div_'+res[1]).html('<span style="color:green;"><b>Registro eliminado de tabla <br>correctamente.</b></span>');
      }
      else{
        $('#div_'+res[1]).html('<span style="color:red;"><b>Error eliminando registro de tabla: proTabDel.</b></span>');
      }
    }
  })
}

function procesarOS(id_cli,id_ccosto)
{
    var datos_origen={
      "id_cli":id_cli,
      "id_ccosto":id_ccosto
    };
    $.ajax({
      data:datos_origen,
      url:'../sistema/prg/proc_OS.php',
      type: 'post',
      beforeSend: function(){
        //$("#respuesta").html("procesando");
        //$('.submitBtn').attr("disabled","disabled");
      },
      success: function (response){
        var str = response;
        var res = str.split("-");
        if(res[0]==200)
        {
          $('#respuesta').html('<span style="color:green;"><b>Orden # '+res[1] +' Creada Correctamente.</b></span>');
        }else
        {
          $("#respuesta").html('<span style="color:red;"><b>Error form_proc_os:</b>  <p> '+res[0]+res[1]+'</span></p>');
          //$('.submitBtn').removeAttr("disabled");
        }
        
      }
    })
}

function procesarAR(id_vineta)
{
  var datos_origen={
    "id_vineta":id_vineta
  };
  $.ajax({
    data:datos_origen,
    url:'../sistema/prg/proc_AR.php',
    //url:'../sistema/prg/ar.php',
    type: 'post',
    beforeSend: function(){
      //$("#respuesta").html("procesando");
      //$('.submitBtn').attr("disabled","disabled");
    },
    success: function (response){
      var str = response;
      var res = str.split("-");
      if(res[0]==200)
      {
        $('#msj_div').val();
        $('#msj_div').html('<br><span style="color:green;"><b>Arribo Vi&ntilde;eta '+ id_vineta +' Procesado Correctamente.</b></span>');
        $('#vineta').val('');
      }else
      {
        $('#msj_div').val();
        $("#msj_div").html('<br><span style="color:red;">Vi&ntilde;eta <b>'+ id_vineta +'</b> no procesada <br> Error: <b>'+res[1] +'</b></span></p>');
        $('#vineta').select();
      }
      
    }
  })
}

function procesarLD(numid,posicion,id_zona,id_mensajero,vineta)
{
  var datos_origen={
    "numid":numid,
    "posicion":posicion,
    "id_zona":id_zona,
    "id_mensajero":id_mensajero,
    "vineta":vineta
  };
  $.ajax({
    data:datos_origen,
    url:'../sistema/prg/proc_LD.php',
    type: 'post',
    beforeSend: function(){
      //$("#respuesta").html("procesando");
      //$('.submitBtn').attr("disabled","disabled");
    },
    success: function (response){
      var str = response;
      var res = str.split("-");

      var total = parseInt(posicion)+1;; // Convertir el valor a un entero (número).
	
      if(res[0]==200)
      {
        $('#msj_div').val();
        $('#msj_div').html('<br><span style="color:green;"><b>Salida a ruta '+ vineta +' Procesada Correctamente.</b></span>');
        $('#posicion').val(total);
        $('#vineta').val('');
      }else
      {
        $('#msj_div').val();
        $("#msj_div").html('<br><span style="color:red;">Vi&ntilde;eta <b>'+ vineta +'</b> no procesada <br> Error: <b>'+res[1] +'</b></span></p>');
        $('#vineta').select();
      }
      
    }
  })
}

function procesarDL(numid)
{
  var datos_origen={
    "numid":numid
  };
  $.ajax({
    data:datos_origen,
    url:'../sistema/prg/proc_DL.php',
    type: 'post',
    beforeSend: function(){
      //$("#respuesta").html("procesando");
      //$('.submitBtn').attr("disabled","disabled");
    },
    success: function (response){
      var str = response;
      var res = str.split("-");
      if(res[0]==200)
      {
        $('#msj_div').val();
        $('#msj_div').html('<br><span style="color:green;"><b>Entrega '+ numid +' Procesada Correctamente.</b></span>');
        $('#numid').val('');
      }else
      {
        $('#msj_div').val();
        $("#msj_div").html('<br><span style="color:red;">Manifiesto <b>'+ numid +'</b> no procesado <br> Error: <b>'+res[1] +'</b></span></p>');
        $('#numid').select();
      }
      
    }
  })
}

function recargarTab(){
  location.reload(); 
}

function test(numid,id_zona){
  alert ("Hola Mundo "+numid +" - "+id_zona );
}