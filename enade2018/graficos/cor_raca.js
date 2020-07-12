{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": { "url": "https://raw.githubusercontent.com/danielmarquesvg/enadata/master/enade2018/dados/caracteristicas_estudante_raca.csv"},
  "title":"Cor/Raça dos estudantes do ENADE 2018",
  "width": {"step": 20},
  "mark": {
        "type": "bar",
        "cornerRadiusEnd": 4,
        "size": 20
  },
  "encoding": {
    "column": {
      "field": "categoria",
      "type": "nominal",
      "spacing": 50,
      "title":null
    },
    "y": {
      "field": "percentual", "type": "quantitative",
      "axis": {
        "labelFontSize": 12,
        "title": "Percentual (%)",
        "titleFontSize": 14
      }
    },
    "x": {
      "field": "raca_cor", "type": "nominal",
      "axis": {
        "labelAngle": 315,
        "labelFontSize": 12,
        "title": null,
        "titleFontSize": 14
      }
    },
    "color": {
      "field": "raca_cor", "type": "nominal",
      "legend": {
        "labelFontSize": 12,
        "orient": "bottom",
        "title": "Cor/Raça",
        "titleFontSize": 14
      },
      "scale": {"range": ["#FFBD00", "#FF5400", "#FF0054", "#9E0059", "#390099","#000000"]}
    }
  },
  "config": {
    "view": {"stroke": "transparent"},
    "axis": {"domainWidth": 1},
    "background": "transparent"
  }
}
