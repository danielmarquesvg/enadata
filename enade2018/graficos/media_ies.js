{
	"$schema": "https://vega.github.io/schema/vega-lite/v4.json",
	"data": {
		"url": "https://raw.githubusercontent.com/danielmarquesvg/enadata/master/enade2018/dados/media_enade.csv"
  	},
    "title":"Média da nota geral dos estudantes de acordo com o tipo de instituição",
  	"width": "container",
  	"height": "300",
    "config": {
    	"background": "transparent",
    	"view": {"continuousWidth": 400, "continuousHeight": 300}
    },
  	"transform": [
      {
        "calculate": "if((datum.categoria === 'amostra_geral'),'Amostra Geral',datum.key)",
        "as": "key"
      },
		  {
        "calculate": "if((datum.categoria === 'ies_publicas'),'IES Públicas',datum.key)",
        "as": "key"
      },
		  {
        "calculate": "if((datum.categoria === 'ies_privadas'),'IES Privadas',datum.key)",
        "as": "key"
      }
	],
	"encoding": {
		"y": {
			"axis": {
				"title": "Média da nota geral",
				"labelFontSize": 12,
				"titleFontSize": 12
			},
			"field": "media",
			"type": "quantitative"
		},
		"x": {
			"axis": {
				"labelAngle": 0,
				"labelFontSize": 12,
				"titleFontSize": 12,
				"title": null
			},
      "sort":"y",
			"field": "key",
			"type": "nominal"
		}
	},
	"layer": [
		{
			"mark": {
				"type": "bar",
				"cornerRadiusEnd": 4,
				"size": 100
			},
			"encoding": {
				"color": {
					"legend": null,
					"field": "key",
					"type": "nominal",
					"scale": {
						"domain": ["Amostra Geral","IES Públicas","IES Privadas"],
	  					"range": ["#FE0312","#9E0059", "#FF5400", "#FF0054", "#9E0059", "#390099","#000000"]
					}
				},
				"opacity": {"value": 0.7}
			}
		},
		{
	  		"mark": {
	    		"type": "text",
	    		"baseline": "middle",
	    		"stroke": "black",
	    		"dy": -10,
	    		"fontSize": 15
	  		},
  			"encoding": {
		    	"text": {
		    		"field": "media",
		    		"type": "quantitative"
		    	}
  			}
		}
	]
}