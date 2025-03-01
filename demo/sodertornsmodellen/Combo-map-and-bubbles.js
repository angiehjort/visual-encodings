VIZABI_MODEL = {
  "state": {
    "time": {
      "startOrigin": "1993",
      "endOrigin": "2018",
      "value": "2000",
      "dim": "year",
      "delay": 700
    },
    "entities": {
      "dim": "basomrade",
      "filter": {"basomrade": {"size": "big"}},
      "show": {}
    },
    "entities_colorlegend": {
      "dim": "municipality"
    },
    "entities_map_colorlegend": {
      "dim": "municipality"
    },
    "entities_tags": {
      "dim": "tag"
    },
    "marker": {
      "space": ["entities", "time"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "axis_y": {
        "which": "post_secondary_education_min_3_years_aged_25_64",
        "use": "indicator"
      },
      "axis_x": {
        "which": "mean_income_aged_gt_20",
        "use": "indicator",
        "scaleType": "linear",
        "zoomedMin": "64000",
        "zoomedMax": "700000"
      },
      "size": {
        "which": "population_total",
        "use": "indicator",
        "scaleType": "linear",
        "extent": [0, 0.4],
        "allow": {
          "scales": ["linear"]
        }
      },
      "color": {
        "use": "property",
        "which": "municipality",
        "scaleType": "ordinal",
        "syncModels": ["marker_colorlegend"]
      },
      "hook_centroid": {
        "use": "property",
        "which": "baskod2010",
        "_important": true
      },
      "color_map": {
        "use": "property",
        "which": "municipality",
        "scaleType": "ordinal",
        "syncModels": ["marker_colorlegend"]
      }
    },
 
    
    "marker_colorlegend": {
      "space": ["entities_colorlegend"],
      "opacityRegular": 0.8,
      "opacityHighlightDim": 0.3,
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_rank": {
        "use": "property",
        "which": "rank"
      },
      "hook_geoshape": {
        "use": "property",
        "which": "shape_lores_svg"
      }
    },
    "marker_tags": {
      "space": ["entities_tags"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_parent": {
        "use": "property",
        "which": "parent"
      }
    }
  },
  "ui": {
    datawarning: {
      doubtDomain: [2000, 2018],
      doubtRange: [0, 0]
    },
    "map": {
      "overflowBottom": 50,
      "scale": 1,
      "preserveAspectRatio": true,
      "mapEngine": "mapbox",
      "mapStyle": "mapbox://styles/mapbox/light-v9",
      "showBubbles": true,
      "showAreas": false,
      "showMap": true,
      "offset": {
        "top": 0.05,
        "bottom": -0.12,
        "left": 0,
        "right": 0
      },
      "path": null,
      "bounds": {
        "north": 59.48,
        "west": 17.72,
        "south": 59.21,
        "east": 18.32
      },
      "projection": "mercator",
      "topology": {
        "path": "assets/sodertorn-basomr2000.json",
        "objects": {
          "geo": "sodertorn-basomr2000",
          "boundaries": "sodertorn-basomr2000"
        },
        "geoIdProperty": "BASKOD2000"
      }
    }
  
  }
};
