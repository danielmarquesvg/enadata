{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": { "url": "https://raw.githubusercontent.com/danielmarquesvg/enadata/master/enade2018/dados/media_enade.csv"},
  "title":"Notas dos estudantes do ENADE 2018",
  "width": {"step": 50},
  "transform": [
    {"fold": ["minimo", "maximo"]},
    {
      "calculate": "if((datum.categoria === 'amostra_geral'),'Amostra Geral',datum.categoria2)",
      "as": "categoria2"
    },
    {
      "calculate": "if((datum.categoria === 'ies_privadas'),'IES Privadas',datum.categoria2)",
      "as": "categoria2"
    },
    {
      "calculate": "if((datum.categoria === 'ies_publicas'),'IES Públicas',datum.categoria2)",
      "as": "categoria2"
    },
    {
          "calculate": "if((datum.key === 'minimo'),'Mínimo',datum.maxmin)",
          "as": "maxmin"
        },
    {
          "calculate": "if((datum.key === 'maximo'),'Máximo',datum.maxmin)",
          "as": "maxmin"
        }
  ],
  "mark": {
				"type": "bar",
				"cornerRadiusEnd": 4,
				"size": 40
	},
  "encoding": {
    "column": {
      "field": "categoria2",
      "type": "nominal",
      "spacing": 50,
      "title":null
    },
    "y": {
      "field": "value", "type": "quantitative",
      "axis": {
        "labelFontSize": 12,
        "title": "Notas dos estudantes",
        "titleFontSize": 14
      }
    },
    "x": {
      "field": "maxmin", "type": "nominal",
      "axis": {
        "labelAngle": 315,
        "labelFontSize": 12,
        "title": null,
        "titleFontSize": 14
      }
    },
    "color": {
      "field": "maxmin", "type": "nominal",
      "legend": {
        "labelFontSize": 12,
        "orient": "bottom",
        "title": "Valor da nota",
        "titleFontSize": 14
      },
      "scale": {"range": ["#1f77b4","#dc56b4","#000000"]}
    }
  },
  "config": {
    "view": {"stroke": "transparent"},
    "axis": {"domainWidth": 1},
    "background": "transparent"
  }
}
