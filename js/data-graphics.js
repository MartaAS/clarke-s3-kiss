'use strict';
//grafico barras

var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
	"startDuration": 2,
    "dataProvider": [{
        "country": "Act. Administrativas",
        "visits": 356596,
        "color": "#FF0F00"
    }, {
        "country": "Agricultura y pesca",
        "visits": 218333,
        "color": "#FF6600"
    }, {
        "country": "Hostelería",
        "visits": 175716,
        "color": "#FF9E01"
    }, {
        "country": "Restauración y Comercio",
        "visits": 121559,
        "color": "#FCD202"
    }, {
        "country": "Comercio",
        "visits": 107062,
        "color": "#F8FF01"
    }, {
        "country": "Industria",
        "visits": 96206,
        "color": "#B0DE09"
    }, {
        "country": "Construcción",
        "visits": 90935,
        "color": "#04D215"
    }, {
        "country": "Act. Sanitarias",
        "visits": 94648,
        "color": "#0D8ECF"
    }, {
        "country": "Tec. Profesionales de Apoyo",
        "visits": 58556,
        "color": "#0D52D1"
    }, {
        "country": "Educación",
        "visits": 39445,
        "color": "#2A0CD0"
    }, {
        "country": "Tec. Prof. Salud y Enseñanza",
        "visits": 34820,
        "color": "#8A0CCF"
    }, {
        "country": "Otros Servicios",
        "visits": 20127,
        "color": "#CD0D74"
    }, {
        "country": "Protección y Seguridad",
        "visits": 7366,
        "color": "#754DEB"
    }, {
        "country": "Directores y Gerentes",
        "visits": 5088,
        "color": "#DDDDDD"
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
//fin grafico barras
//quesito
var chart2 = AmCharts.makeChart( "chartdiv2", {
  "type": "pie",
  "theme": "none",
  "titles": [ {
    "text": "Visitors countries",
    "size": 16
  } ],
  "dataProvider": [ {
    "country": "United States",
    "visits": 7252
  }, {
    "country": "China",
    "visits": 3882
  }, {
    "country": "Japan",
    "visits": 1809
  }, {
    "country": "Germany",
    "visits": 1322
  }, {
    "country": "United Kingdom",
    "visits": 1122
  }, {
    "country": "France",
    "visits": 414
  }, {
    "country": "India",
    "visits": 384
  }, {
    "country": "Spain",
    "visits": 211
  } ],
  "valueField": "visits",
  "titleField": "country",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  "innerRadius": "50%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
  "export": {
    "enabled": true
  }
} );
//fin quesito
