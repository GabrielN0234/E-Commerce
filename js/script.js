var cantidad = 0;
var nombres = [];
var precios = [];
var pchart = [5530,4550,2500,3500,2500];
var restaurantes = [];
function menu(n) {//    

    if (n == 1) {
        initMap1(9.865052, -83.920016, "pizza hut");
        document.getElementById("menuMc").innerHTML = '</br><div id="ph1"class="thumbnal"><img class="img-responsive" src="img/Phmenu1.jpg" width="100%" height="100%" onclick="agregar(\'Pizza personal\', 1950, \'Pizza hut\')"></div></br><div id="ph2"class="thumbnal"><img class="img-responsive" src="img/Phmenu2.jpg" width="100%" height="100%" onclick="agregar(\'Spaguetti supremo\', 6500, \'Pizza hut\')"></div></br><div id="ph3"class="thumbnal"><img class="img-responsive" src="img/Phmenu3.jpg" width="100%" height="100%" onclick="agregar(\'Par de pizzas medianas\',13800, \'pizza hut\')"></div>';
    } else if (n == 2) {
        initMap1(9.867340, -83.931678, "McDonalds");
        document.getElementById("menuMc").innerHTML = '</br><div id="mc1" class="thumbnal"><img class="img-responsive" src="img/Mcmenu1.jpg" width="100%" height="100%" onclick="agregar(\'McDUO\', 1850, \'Mcdonalds\')"></div></br><div id="mc2" class="thumbnal"><img class="img-responsive" src="img/Mcmenu2.png" width="100%" height="100%" onclick="agregar(\'McFiniTica\', 2750, \'Mcdonalds\')"></div></br><div id="mc3" class="thumbnal"><img class="img-responsive" src="img/Mcmenu3.jpg" width="100%" height="100%" onclick="agregar(\'Signature BlueCheese&Bacon\', 4750, \'Mcdonalds\')"></div>';
    } else if (n == 3) {
        initMap1(9.912349, -84.017382, "Starbucks");
        document.getElementById("menuMc").innerHTML = '</br><div id="st1" class="thumbnal"><img class="img-responsive" src="img/Stmenu1.png" width="100%" height="100%" onclick="agregar(\'Starbucks favoritos\', 2000, \'Starbucks\')"></div></br><div id="st2" class="thumbnal"><img class="img-responsive" src="img/Stmenu2.png" width="100%" height="100%" onclick="agregar(\'Cafe latte\', 2500, \'Starbucks\')"></div></br><div id="st3" class="thumbnal"><img class="img-responsive" src="img/Stmenu3.png" width="100%" height="100%" onclick="agregar(\'Capuchino\', 1500, \'Starbucks\')"></div>';
    } else if (n == 4) {
        initMap1(9.865052, -83.920016, "KFC");
        document.getElementById("menuMc").innerHTML = '</br><div id="kfc1" class="thumbnal"><img class="img-responsive" src="img/Kfcmenu1.jpg" width="100%" height="100%" onclick="agregar(\'Big box\', 4800, \'KFC\')"></div></br><div id="kfc2" class="thumbnal"><img class="img-responsive" src="img/Kfcmenu2.jpg" width="100%" height="100%" onclick="agregar(\'Full pack\', 13500, \'KFC\')"></div></br><div id="kfc3" class="thumbnal"><img class="img-responsive" src="img/Kfcmenu3.jpg" width="100%" height="100%" onclick="agregar(\'Mega 9\',14000, \'KFC\')"></div>';
    } else if (n == 5) {
        initMap1(9.866600, -83.943395, "Taco bell");
        document.getElementById("menuMc").innerHTML = '</br><div id="tc1" class="thumbnal"><img class="img-responsive" src="img/Tcmenu1.jpg" width="100%" height="100%" onclick="agregar(\'Xtra big burrito\', 1950, \'Taco bell\')"></div></br><div id="tc2" class="thumbnal"><img class="img-responsive" src="img/Tcmenu2.jpg" width="100%" height="100%" onclick="agregar(\'Dame esos 6\', 2500, \'Taco bell\')"></div></br><div id="tc3" class="thumbnal"><img class="img-responsive" src="img/Tcmenu3.jpg" width="100%" height="100%" onclick="agregar(\'Stacker\',2000, \'Taco bell\')"></div>';
    }

}//mapa


function ventana() { }
function mostrarVentana(id) {
    var ventana = document.getElementById(id);
    ventana.style.marginTop = "15em";
    var n=(document.body.clientWidth)/2-((document.body.clientWidth)/3);
    ventana.style.left = n + "px";
    ventana.style.display = 'block';
}
function ocultarVentana(id) {
    var ventana = document.getElementById(id);
    ventana.style.display = 'none';

}

function agregar(nombre, precio, restaurante) {
    this.cantidad++;
    nombres.push(nombre);
    precios.push(precio);
    restaurantes.push(restaurante);

    document.getElementById("contador").innerHTML = '<li><a id="menu" href=formularioCompra.html><i class="fas fa-shopping-cart"></i>(' + cantidad + ')COMPRAR </a></li>';


    sessionStorage.setItem("Nombres", nombres);
    sessionStorage.setItem("Precios", precios);
    sessionStorage.setItem("Restaurantes", restaurantes);

    if (nombre == "promocion1" || nombre == "promocion2" || nombre == "promocion3") {
        ocultarVentana(nombre)
    }
}


function cargar() {

    var nombres = window.onload = sessionStorage.getItem("Nombres");
    var precios = window.onload = sessionStorage.getItem("Precios");
    var restaurantes = window.onload = sessionStorage.getItem("Restaurantes");

    var cadenaNombre = "";
    var cadenaPrecio = "";
    var cadenaRestaurante = "";
    var total = 0;
    var totalImp = 0;

    for (var n = 0; n < nombres.length; n++) {
        cadenaNombre = cadenaNombre + nombres[n];
    }
    for (var n = 0; n < precios.length; n++) {
        cadenaPrecio = cadenaPrecio + precios[n];
    }
    for (var n = 0; n < restaurantes.length; n++) {
        cadenaRestaurante = cadenaRestaurante + restaurantes[n];
    }

    var arrayNombres = cadenaNombre.split(",");
    var arrayPrecios = cadenaPrecio.split(",");
    var arrayRestaurantes = cadenaRestaurante.split(",");

    var html = "";
    for (var n = 0; n < arrayNombres.length; n++) {
        html = html + '<div><label>Producto: ' + arrayNombres[n] + ' </label></div> <div><label>Precio: ' + arrayPrecios[n] + ' </label></div> <div><label>Restaurante: ' + arrayRestaurantes[n] + ' </label></div></br>';
    }

    for (var n = 0; n < arrayPrecios.length; n++) {
        total += parseInt(arrayPrecios[n]);
    }
    totalImp += total * 0.13;
    totalImp += total;

    html = html + '<div><label>TOTAL: ' + total + ' </label></div>';
    html = html + '<div><label>TOTAL ivi: ' + parseInt(totalImp) + ' </label></div>';
    html = html + '<div><label>TOTAL con envio: ' + (parseInt(totalImp) + 1209) + ' </label></div>';
    document.getElementById("datos").innerHTML = html;
}

function enviar() {
    alert("Su compra se ha realizado exitosamente");
    sessionStorage.clear;
    location.href = "index.html";
}

function refresh(){
    location.href = "index.html";
}

var map;

function initMap() { }

function initMap1(c1, c2, title) {
    map = new google.maps.Map(document.getElementById('mapa'), {
        center: { lat: c1, lng: c2 },
        zoom: 16,
    });
    var marker = new google.maps.Marker({
        position: { lat: c1, lng: c2 },
        map: map,
        title: title
    });
}


new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Pizza hut", "McDonalds", "Starbucks", "KFC", "Taco bell"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [pchart[0],pchart[1],pchart[2],pchart[3],pchart[4]]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'resturantes'
      }
    }
});