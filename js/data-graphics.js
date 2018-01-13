'use strict';
//grafico barras

var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
	"startDuration": 2,
	"titles": [ {
    "text": "Tasas de colocacion según situacion de la demanda en diferentes sectores",
    "size": 16
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
        "country": "Construcción",
        "visits": 90935,
        "color": "#2ab3a6"
    }, {
        "country": "Act. Sanitarias",
        "visits": 94648,
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
        "labelRotation": 90
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
    "text": "Tasas de colocacion según situacion de la demanda en hosteleria en hombres y mujeres",
    "size": 16
  } ],
    "dataProvider": [{
        "country": "Servicios de comidas y bebidas",
        "visits": 70013,
        "color": "#182B3A"
    }, {
        "country": "Servicios de comidas y bebidas",
        "visits": 66493,
        "color": "#2ec4b6"
    }, {
        "country": "Servicios de alojamiento",
        "visits": 21871,
        "color": "#182B3A"
    }, {
        "country": "Servicios de alojamiento",
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
        "labelRotation": 90
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
//fin grafico barras
//quesito
/* quesito cometadovar chart2 = AmCharts.makeChart( "chartdiv2", {
  "type": "pie",
  "theme": "none",
  "titles": [ {
    "text": "Tasas de paro en España dutante el tercer trimestre de 2017",
    "size": 16
  } ],
  "dataProvider": [ {
    "country": "Menores de 20 años",
    "visits": 150000000
  }, {
    "country": "Entre 20 y 24 años",
    "visits": 429000000
  }, {
    "country": "Entre 25 y 54 años",
    "visits": 2629000000
  }, {
    "country": "Mayores de 55 años",
    "visits": 524000000
  } ],
  "valueField": "visits",
  "titleField": "country",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  "innerRadius": "10%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
  "export": {
    "enabled": true
  }
} );*/
//fin quesito
