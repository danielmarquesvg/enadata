{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": { "url": "https://raw.githubusercontent.com/danielmarquesvg/enadata/master/enade2018/dados/caracteristicas_estudante_sexo.csv"},
  "title":"Sexo dos estudantes do ENADE 2018",
  "width": {"step": 50},
  "transform": [
    {
      "calculate": "if((datum.categoria === 'amostra_geral'),'Amostra Geral',datum.key)",
      "as": "key"
    },
    {
      "calculate": "if((datum.categoria === 'ies_privadas'),'IES Privadas',datum.key)",
      "as": "key"
    },
    {
      "calculate": "if((datum.categoria === 'ies_publicas'),'IES Públicas',datum.key)",
      "as": "key"
    }
  ],
  "mark": {
				"type": "bar",
				"cornerRadiusEnd": 4,
				"size": 40
	},
  "encoding": {
    "column": {
      "field": "key",
      "type": "nominal",
      "spacing": 50,
      "title":null
    },
    "y": {
      "field": "percentual", "type": "quantitative",
      "axis": {
        "labelFontSize": 12,
        "title": "Percentual de estudantes (%)",
        "titleFontSize": 14
      }
    },
    "x": {
      "field": "sexo", "type": "nominal",
      "axis": {
        "labelAngle": 315,
        "labelFontSize": 12,
        "title": null,
        "titleFontSize": 14
      }
    },
    "color": {
      "field": "sexo", "type": "nominal",
      "legend": {
        "labelFontSize": 12,
        "orient": "bottom",
        "title": "Sexo",
        "titleFontSize": 14
      },
      "scale": {"range": ["#dc56b4", "#1f77b4"]}
    }
  },
  "config": {
    "view": {"stroke": "transparent"},
    "axis": {"domainWidth": 1},
    "background": "transparent"
  }
}
