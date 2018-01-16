'use strict';
//grafico barras

var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
	"startDuration": 2,
	"titles": [ {
    "text": "Tasas de colocación según situación de la demanda en diferentes sectores",
    "size": 12
  } ],
    "dataProvider": [{
        "country": "Act. Administrativas",
        "visits": 356596,
        "color": "#0d3632"
    }, {
        "country": "Agricultura y pesca",
        "visits": 218333,
        "color": "#114843"
    }, {
        "country": "Hostelería",
        "visits": 175716,
        "color": "#ffdc60"/*155a53*/
    }, {
        "country": "Restauración y Comercio",
        "visits": 121559,
        "color": "#1a6b64"
    }, {
        "country": "Comercio",
        "visits": 107062,
        "color": "#1e7d74"
    }, {
        "country": "Industria",
        "visits": 96206,
        "color": "#228f85"
    }, {
        "country": "Act. Sanitarias",
        "visits": 94648,
        "color": "#2ab3a6"
    }, {
        "country": "Construcción",
        "visits": 90935,
        "color": "#41c9bc"
    }, {
        "country": "Tec. de Apoyo",
        "visits": 58556,
        "color": "#54cec3"
    }, {
        "country": "Educación",
        "visits": 39445,
        "color": "#67d4c9"
    }, {
        "country": "Salud y Enseñanza",
        "visits": 34820,
        "color": "#8dded7"
    }, {
        "country": "Otros Servicios",
        "visits": 20127,
        "color": "#a0e4dd"
    }],
    "valueAxes": [{
        "position": "left",
        "title": "Colocaciones"
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 1,
        "lineAlpha": 0.1,
        "type": "column",
        "valueField": "visits"
    }],
    "depth3D": 20,
	"angle": 30,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
				"labelsEnabled": false


    },
    "export": {
    	"enabled": true
     }

});
//segunda grafica
var chart = AmCharts.makeChart("chartdivTwo", {
    "theme": "light",
    "type": "serial",
	"startDuration": 2,
	"titles": [ {
    "text": "Tasas de colocación según situación de la demanda en hostelería en hombres y mujeres",
    "size": 12
  } ],
    "dataProvider": [{
        "country": "Servicios de comidas y bebidas (H)",
        "visits": 70013,
        "color": "#182B3A"
    }, {
        "country": "Servicios de comidas y bebidas (M)",
        "visits": 66493,
        "color": "#2ec4b6"
    }, {
        "country": "Servicios de alojamiento (H)",
        "visits": 21871,
        "color": "#182B3A"
    }, {
        "country": "Servicios de alojamiento (M)",
        "visits": 17339,
        "color": "#2ec4b6"
    }],
    "valueAxes": [{
        "position": "left",
        "title": "Colocaciones"
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 1,
        "lineAlpha": 0.1,
        "type": "column",
        "valueField": "visits"
    }],
    "depth3D": 20,
	"angle": 30,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 90,
				"labelsEnabled": false
    },
    "export": {
    	"enabled": true
     }

});
//cunado marcas el check se muestra otra grafica
function changeGraphic (id){
	document.getElementById(id).style.display="block";

	if(id=="chartdiv"){
		document.getElementById("chartdivTwo").style.display="none";
	}
	else if(id=="chartdivTwo"){
		document.getElementById("chartdiv").style.display="none";
	}
}
