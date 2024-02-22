(function () {
  var map = new ol.Map({
    target: 'map',
    //controls: [],
    layers: [
    new ol.layer.Group({
     //title: 'Mapas Base',
      fold: 'close',
      layers: [
      
          
          new ol.layer.Tile({
            'title': 'Satelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
           attributions: ' ',
                        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png'    
            }

            )
          
          }),
          new ol.layer.Tile({
            'title': 'ArgenMap Color',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
           attributions: ' ',
                        url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png'    
            }

            )
          
          }),
          new ol.layer.Tile({
            'title': 'ArgenMap (D.A. 797/2022-IGN)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
           attributions: ' ',
                        url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG:3857@png/{z}/{x}/{-y}.png'    
            }

            )
          }),
          
        ],

      }),
      
    
    
    
    
        /*new ol.layer.Group({
          title: 'Paso de Frontera',
          fold: 'close',
          layers: [ 
            
           wmsSource = new ol.layer.Tile({
              source: new ol.source.TileWMS(({
                url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
                params: {
                  "LAYERS": "geonode:Pasos_de_Frontera",
                  "TILED": "true",
                  "VERSION": "1.3.0"},
              })),
              title: 'Tipo<br />\
              <img src="legend/geonodePasos_de_Frontera_10_0.png" /> Fluvial<br />\
              <img src="legend/geonodePasos_de_Frontera_10_1.png" /> Terrestre<br />',
              opacity: 1.000000,
              visible: false,
              
            }),
            
          ]
        }),
        new ol.layer.Group({
          // A layer must have a title to appear in the layerswitcher
          title: 'Fluvio-Marítimo',
          // Adding a 'fold' property set to either 'open' or 'close' makes the group layer
          // collapsible
          fold: 'close',
          layers: [
            new ol.layer.Tile({
              source: new ol.source.TileWMS(({
                url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
                params: {
                  "LAYERS": "geonode:Puertos",
                  "TILED": "true",
                  "VERSION": "1.3.0"},
              })),
              title: '<img src="legend/Puertos_16.png" /> Puertos',
              opacity: 1.000000,
              visible: false,
              
              
            }),
          ]
        }),
        new ol.layer.Group({
          // A layer must have a title to appear in the layerswitcher
          title: 'Ferroviario',
          // Adding a 'fold' property set to either 'open' or 'close' makes the group layer
          // collapsible
          fold: 'close',
          layers: [
            new ol.layer.Group({
              // A layer must have a title to appear in the layerswitcher
              title: 'Red Ferroviaria',
              // Adding a 'fold' property set to either 'open' or 'close' makes the group layer
              // collapsible
              fold: 'close',
              layers: [
            new ol.layer.Tile({
              source: new ol.source.TileWMS(({
                url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
                params: {
                  "LAYERS": "geonode:ferroviario_no_operativo",
                  "TILED": "true",
                  "VERSION": "1.3.0"},
              })),
              title: '<img src="legend/FFCCNoOperativo_2.png" /> FFCC No Operativo',
              opacity: 1.000000,
              visible: false,
              
            }),
            new ol.layer.Group({
              title: 'FFCC Operativo',
              fold: 'close',
              layers: [
                new ol.layer.Tile({
                  source: new ol.source.TileWMS(({
                    url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
                    params: {
                      "LAYERS": "geonode:ffcc_urquiza",
                      "TILED": "true",
                      "VERSION": "1.3.0"},
                  })),
                  title: '<img src="legend/geonodeferroviario_operativo_8_5.png" /> FFCC Urquiza',
                  opacity: 1.000000,
                  visible: false,
                  
                }),
                new ol.layer.Tile({
                  source: new ol.source.TileWMS(({
                    url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
                    params: {
                      "LAYERS": "geonode:ffcc_sarmiento",
                      "TILED": "true",
                      "VERSION": "1.3.0"},
                  })),
                  title: '<img src="legend/geonodeferroviario_operativo_8_4.png" /> FFCC Sarmiento',
                  opacity: 1.000000,
                  visible: false,
                  
                }),
                new ol.layer.Tile({
                  source: new ol.source.TileWMS(({
                    url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
                    params: {
                      "LAYERS": "geonode:ffcc_sanmartin",
                      "TILED": "true",
                      "VERSION": "1.3.0"},
                  })),
                  title: '<img src="legend/geonodeferroviario_operativo_8_5.png" /> FFCC San Martín',
                  opacity: 1.000000,
                  visible: false,
                  
                }),
                new ol.layer.Tile({
                  source: new ol.source.TileWMS(({
                    url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
                    params: {
                      "LAYERS": "geonode:ffcc_roca",
                      "TILED": "true",
                      "VERSION": "1.3.0"},
                  })),
                  title: '<img src="legend/geonodeferroviario_operativo_8_2.png" /> FFCC Roca',
                  opacity: 1.000000,
                  visible: false,
                  
                }),
                new ol.layer.Tile({
                  source: new ol.source.TileWMS(({
                    url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
                    params: {
                      "LAYERS": "geonode:ffcc_mitre",
                      "TILED": "true",
                      "VERSION": "1.3.0"},
                  })),
                  title: '<img src="legend/geonodeferroviario_operativo_8_1.png" /> FFCC Mitre',
                  opacity: 1.000000,
                  visible: false,
                  
                }),
                new ol.layer.Tile({
                  source: new ol.source.TileWMS(({
                    url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
                    params: {
                      "LAYERS": "geonode:ffcc_belgrano",
                      "TILED": "true",
                      "VERSION": "1.3.0"},
                  })),
                  title: '<img src="legend/geonodeferroviario_operativo_8_0.png" /> FFCC Belgrano',
                  opacity: 1.000000,
                  visible: false,
                  
                }),
                
                
               
                
               
            
          ]
        }),
          ]
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:puntos_de_transporte_ferroviario_AN070",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/e_f.png" /> Estaciones Ferroviarias',
          opacity: 1.000000,
          visible: false,
          
        }),
          ]
        }),
        new ol.layer.Group({
          title: 'Carretero',
          fold: 'close',
          layers: [ 
            
       
        new ol.layer.Group({
          title: 'Bitrenes',
          fold: 'close',
          layers: [
            new ol.layer.Group({
              title: 'Puentes Limitantes',
              fold: 'close',
              layers: [ 
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:bitrenes_puentes_limitados",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: 'Limitación<br />\
          <img src="legend/PL_10.png" /> 10 tn<br />\
          <img src="legend/PL_11.png" /> 11 tn<br />\
          <img src="legend/PL_12.png" /> 12 tn<br />\
          <img src="legend/PL_24.png" />  24 tn<br />\
          <img src="legend/PL_30.png" />  30 tn<br />\
          <img src="legend/PL_45.png" />  45 tn<br />\
          <img src="legend/PL_52.5.png" /> 52.5 tn<br />\
          <img src="legend/PL_55.5.png" /> 55.5 tn<br />\
          <img src="legend/PL_60.png" /> 60 tn<br />\
          <img src="legend/PL_75.png" /> 75 tn<br />',
          opacity: 1.000000,
          visible: false,
          
        }),
      ]
    }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:bitrenes_corredores",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/corredores_bitrenes.png" /> Corredores',
          opacity: 1.000000,
          visible: false,
          
        }),

      ]
    }),
    new ol.layer.Group({
      // A layer must have a title to appear in the layerswitcher
      title: 'TMDA 2017',
      // Adding a 'fold' property set to either 'open' or 'close' makes the group layer
      // collapsible
      fold: 'close',
      
      layers: [
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:TMDA_20173",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: 'Indice<br />\
<img src="legend/tmda_1000.png" /> < 1000<br />\
<img src="legend/tmda_2000.png" />  1000-2000<br />\
<img src="legend/tmda_5000.png" />  2000-5000<br />\
<img src="legend/tmda_a10000.png" />  5000-10000<br />\
<img src="legend/tmda_10000.png" /> > 10000<br />',
          visible: false,
})
        ]
    }),
    new ol.layer.Group({
      // A layer must have a title to appear in the layerswitcher
      title: 'Red Vial',
      // Adding a 'fold' property set to either 'open' or 'close' makes the group layer
      // collapsible
      fold: 'close',
      
      layers: [
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:rutas_terciarias",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/geonoderutas_terciarias_.png" /> Rutas Terciarias',
          opacity: 1.000000,
          visible: false,
          
          
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:rutas_provinciales",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/geonoderutas_provinciales_.png" /> Rutas Provinciales<br />',
          opacity: 1.000000,
          visible: false,
          
          
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:rutas_nacionales",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/geonoderutas_nacionales_4.png" /> Rutas Nacionales',
          opacity: 1.000000,
          visible: false,
          
          
        })
        ]
    }),
  ]
}),*/
       
        
        



        
        
        
            new ol.layer.Tile({
              source: new ol.source.TileWMS(({
                url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
                params: {
                  "LAYERS": "geonode:aeropuertos_NoCom",
                  "TILED": "true",
                  "VERSION": "1.3.0"},
              })),
              title: '<img src="legend/Aeropuertos_15_Nocom.png" /> Vuelos No Comerciales',
              opacity: 1.000000,
              
              
            }),
            new ol.layer.Tile({
              source: new ol.source.TileWMS(({
                url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
                params: {
                  "LAYERS": "geonode:aeropuertos0",
                  "TILED": "true",
                  "VERSION": "1.3.0"},
              })),
              title: '<img src="legend/Aeropuertos_15_com.png" /> Vuelos Comerciales',
              opacity: 1.000000,
              
              
            })
      
    /*
    new ol.layer.Group({
      title: 'Bases de Cartera 2023',
      fold: 'close',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:componente_ferroviario",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/Ferroviario.png" /> Ferroviario',
          opacity: 1.000000,
          visible: false,
          
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:componente_aereo",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/Aereo.png" /> Aereo',
          opacity: 1.000000,
          visible: false,
          
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:componente_fluvial",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/Fluvial.png" /> Fluvial',
          opacity: 1.000000,
          visible: false,
          
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:componente_multimodal",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/Multimodal.png" /> Multimodal',
          opacity: 1.000000,
          visible: false,
          
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:componente_pasos_de_frontera",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/Pasos de Frontera.png" /> Pasos de frontera',
          opacity: 1.000000,
          visible: false,
          
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:componente_carretero",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/Carretero.png" /> Carretero',
          opacity: 1.000000,
          visible: false,
          
        }),

    
      ]
    })
    */
  
],
view: new ol.View({
  center: ol.proj.fromLonLat([-67.29, -41.00]),
  zoom: 4.1,
}),
})
var map2 = new ol.Map({
  target: 'map',
  //controls: [],
  layers: [
    new ol.layer.Tile({
      source: new ol.source.TileWMS(({
        url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
        params: {
          "LAYERS": "geonode:bitrenes_puentes_limitados",
          "TILED": "true",
          "VERSION": "1.3.0"},
      })),
      title: 'Limitación<br />\
      <img src="legend/PL_10.png" /> 10 tn<br />\
      <img src="legend/PL_11.png" /> 11 tn<br />\
      <img src="legend/PL_12.png" /> 12 tn<br />\
      <img src="legend/PL_24.png" />  24 tn<br />\
      <img src="legend/PL_30.png" />  30 tn<br />\
      <img src="legend/PL_45.png" />  45 tn<br />\
      <img src="legend/PL_52.5.png" /> 52.5 tn<br />\
      <img src="legend/PL_55.5.png" /> 55.5 tn<br />\
      <img src="legend/PL_60.png" /> 60 tn<br />\
      <img src="legend/PL_75.png" /> 75 tn<br />',
      opacity: 1.000000,
      visible: false,
      
    }),
  

    new ol.layer.Tile({
      source: new ol.source.TileWMS(({
        url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
        params: {
          "LAYERS": "geonode:bitrenes_corredores",
          "TILED": "true",
          "VERSION": "1.3.0"},
      })),
      title: '<img src="legend/corredores_bitrenes.png" /> Corredores',
      opacity: 1.000000,
      visible: false,
      
    }),

  

new ol.layer.Group({
  // A layer must have a title to appear in the layerswitcher
  title: 'TMDA 2017',
  // Adding a 'fold' property set to either 'open' or 'close' makes the group layer
  // collapsible
  fold: 'open',
  
  layers: [
    new ol.layer.Tile({
      source: new ol.source.TileWMS(({
        url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
        params: {
          "LAYERS": "geonode:TMDA_20173",
          "TILED": "true",
          "VERSION": "1.3.0"},
      })),
      title: 'Indice<br />\
<img src="legend/tmda_1000.png" /> < 1000<br />\
<img src="legend/tmda_2000.png" />  1000-2000<br />\
<img src="legend/tmda_5000.png" />  2000-5000<br />\
<img src="legend/tmda_a10000.png" />  5000-10000<br />\
<img src="legend/tmda_10000.png" /> > 10000<br />',
      visible: false,
})
]
}),
    new ol.layer.Tile({
      source: new ol.source.TileWMS(({
        url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
        params: {
          "LAYERS": "geonode:rutas_terciarias",
          "TILED": "true",
          "VERSION": "1.3.0"},
      })),
      title: '<img src="legend/geonoderutas_terciarias_.png" /> Rutas Terciarias',
      opacity: 1.000000,
      visible: false,
      
      
    }),
    new ol.layer.Tile({
      source: new ol.source.TileWMS(({
        url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
        params: {
          "LAYERS": "geonode:rutas_provinciales",
          "TILED": "true",
          "VERSION": "1.3.0"},
      })),
      title: '<img src="legend/geonoderutas_provinciales_.png" /> Rutas Provinciales<br />',
      opacity: 1.000000,
      visible: false,
      
      
    }),
    new ol.layer.Tile({
      source: new ol.source.TileWMS(({
        url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
        params: {
          "LAYERS": "geonode:rutas_nacionales",
          "TILED": "true",
          "VERSION": "1.3.0"},
      })),
      title: '<img src="legend/geonoderutas_nacionales_4.png" /> Rutas Nacionales',
      opacity: 1.000000,
      visible: false,
      
      
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-67.29, -41.00]),
    zoom: 4.1,
  })
})



  

var map3 = new ol.Map({
  target: 'map',
  //controls: [],
  layers: [
    new ol.layer.Group({
      // A layer must have a title to appear in the layerswitcher
      title: 'Red Ferroviaria',
      // Adding a 'fold' property set to either 'open' or 'close' makes the group layer
      // collapsible
      fold: 'open',
      layers: [
    new ol.layer.Tile({
      source: new ol.source.TileWMS(({
        url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
        params: {
          "LAYERS": "geonode:ferroviario_no_operativo",
          "TILED": "true",
          "VERSION": "1.3.0"},
      })),
      title: '<img src="legend/FFCCNoOperativo_2.png" /> FFCC No Operativo',
      opacity: 1.000000,
      visible: false,
      
    }),
    new ol.layer.Group({
      title: 'FFCC Operativo',
      fold: 'open',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:ffcc_urquiza",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/geonodeferroviario_operativo_8_5.png" /> FFCC Urquiza',
          opacity: 1.000000,
          visible: false,
          
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:ffcc_sarmiento",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/geonodeferroviario_operativo_8_4.png" /> FFCC Sarmiento',
          opacity: 1.000000,
          visible: false,
          
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:ffcc_sanmartin",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/geonodeferroviario_operativo_8_5.png" /> FFCC San Martín',
          opacity: 1.000000,
          visible: false,
          
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:ffcc_roca",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/geonodeferroviario_operativo_8_2.png" /> FFCC Roca',
          opacity: 1.000000,
          visible: false,
          
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:ffcc_mitre",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/geonodeferroviario_operativo_8_1.png" /> FFCC Mitre',
          opacity: 1.000000,
          visible: false,
          
        }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
            params: {
              "LAYERS": "geonode:ffcc_belgrano",
              "TILED": "true",
              "VERSION": "1.3.0"},
          })),
          title: '<img src="legend/geonodeferroviario_operativo_8_0.png" /> FFCC Belgrano',
          opacity: 1.000000,
          visible: false,
          
        }),
      
      
    
  ]
}),
]
}),
],
view: new ol.View({
  center: ol.proj.fromLonLat([-67.29, -41.00]),
  zoom: 4.1,
})

})
var map4 = new ol.Map({
  target: 'map',
  //controls: [],
  layers: [
    new ol.layer.Tile({
      source: new ol.source.TileWMS(({
        url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
        params: {
          "LAYERS": "geonode:Puertos",
          "TILED": "true",
          "VERSION": "1.3.0"},
      })),
      title: '<img src="legend/Puertos_16.png" /> Puertos',
      opacity: 1.000000,
      visible: false,
      
      
    }),
      
      
    
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-67.29, -41.00]),
    zoom: 4.1,
  })
})

var map5 = new ol.Map({
  target: 'map',
  //controls: [],
  layers: [
    wmsSource = new ol.layer.Tile({
      source: new ol.source.TileWMS(({
        url: "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0",
attributions: ' ',
        params: {
          "LAYERS": "geonode:Pasos_de_Frontera",
          "TILED": "true",
          "VERSION": "1.3.0"},
      })),
      title: 'Tipo<br />\
      <img src="legend/geonodePasos_de_Frontera_10_0.png" /> Fluvial<br />\
      <img src="legend/geonodePasos_de_Frontera_10_1.png" /> Terrestre<br />',
      opacity: 1.000000,
      visible: false,
      
    }),
    
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-67.29, -41.00]),
    zoom: 4.1,
  })
})
      

var map6 = new ol.Map({
  target: 'map',
  //controls: [],
  layers: [
    new ol.layer.Tile({
      'title': 'Satelite',
      'type': 'base',
      'opacity': 1.000000,
      
      
      source: new ol.source.XYZ({
     attributions: ' ',
                  url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png'    
      }

      )
    
    }),
    new ol.layer.Tile({
      'title': 'ArgenMap Color',
      'type': 'base',
      'opacity': 1.000000,
      
      
      source: new ol.source.XYZ({
     attributions: ' ',
                  url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png'    
      }

      )
    
    }),
    new ol.layer.Tile({
      'title': 'ArgenMap (D.A. 797/2022-IGN)',
      'type': 'base',
      'opacity': 1.000000,
      
      
      source: new ol.source.XYZ({
     attributions: ' ',
                  url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG:3857@png/{z}/{x}/{-y}.png'    
      }

      )
    }),
    
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-67.29, -41.00]),
    zoom: 4.1,
  })
})
  
 





    
  

  // Get out-of-the-map div element with the ID "layers" and renders layers to it.
  // NOTE: If the layers are changed outside of the layer switcher then you
  // will need to call ol.control.LayerSwitcher.renderPanel again to refesh
  // the layer tree. Style the tree via CSS.

  //FUNCTIONS
//1
  var sidebar = new ol.control.Sidebar({
    element: 'sidebar',
    position: 'left'
  });
  var toc = document.getElementById('layers');
  ol.control.LayerSwitcher.renderPanel(map, toc, { reverse: true });
  map.addControl(sidebar);
//2
  var sidebar = new ol.control.Sidebar({
    element: 'sidebar',
    position: 'left'
  });
  var toc = document.getElementById('layers2');
  ol.control.LayerSwitcher.renderPanel(map2, toc, { reverse: true });
  map.addControl(sidebar);
  //3 
  var sidebar = new ol.control.Sidebar({
    element: 'sidebar',
    position: 'left'
  });
  var toc = document.getElementById('layers3');
  ol.control.LayerSwitcher.renderPanel(map3, toc, { reverse: true });
  map.addControl(sidebar);
  //4 
  var sidebar = new ol.control.Sidebar({
    element: 'sidebar',
    position: 'left'
  });
  var toc = document.getElementById('layers4');
  ol.control.LayerSwitcher.renderPanel(map4, toc, { reverse: true });
  map.addControl(sidebar);
  //5
  var sidebar = new ol.control.Sidebar({
    element: 'sidebar',
    position: 'left'
  });
  var toc = document.getElementById('layers5');
  ol.control.LayerSwitcher.renderPanel(map5, toc, { reverse: true });
  map.addControl(sidebar);
//6
  var sidebar = new ol.control.Sidebar({
    element: 'sidebar',
    position: 'left'
  });
  var toc = document.getElementById('layers6');
  ol.control.LayerSwitcher.renderPanel(map6, toc, { reverse: true });
  map.addControl(sidebar);


var MousePosition = new ol.control.MousePosition({
  className: 'mousePosition',
  projection: 'EPSG 3857',
  coordinateFormat: function(coordinate){return ol.coordinate.toStringHDMS(coordinate);} 

});
map.addControl(MousePosition);

var homeButton = document.createElement('button');
homeButton.innerHTML = '<img src= "legend/homebutton.png"</img>';
homeButton.className = 'myButton';

var homeElement = document.createElement('div');
homeElement.className = 'homeButtonDiv';
homeElement.appendChild(homeButton);

var homeControl = new ol.control.Control({
  element: homeElement
})
 homeButton.addEventListener("click", () => {
  location.href = "index.html";

 })

 map.addControl(homeControl);

 var fsButton = document.createElement('button');
 fsButton.innerHTML = '<img src="legend/fs.png">';
 fsButton.className =  'myButton';

 var fsElement = document.createElement('div');
 fsElement.className = 'fsButtonDiv';
 fsElement.appendChild(fsButton);

 var fsControl = new ol.control.Control({
     element: fsElement
 })

 fsButton.addEventListener("click",() => {
     var mapEle = document.getElementById("map");
     if (mapEle.requestFullscreen) {
         mapEle.requestFullscreen();
      } else if (mapEle.msRequestFullScreen) {
         mapEle.msRequestFullScreen();
      } else if (mapEle.mozRequestFullScreen) {
         mapEle.mozRequestFullScreen();
      } else if (mapEle.webkitRequestFullScreen) {
         mapEle.webkitRequestFullScreen();
      }
       
     
     
     })

 map.addControl(fsControl);

 var scale = new ol.control.ScaleLine({
  //units: 'metric',
  bar: true,
  steps: 2
 }
 
 );

    
 
map.addControl(scale);

/*var lengthButton = document.createElement('button');
 lengthButton.innerHTML = '';
 //lengthButton.className = 'lengthButton';
 lengthButton.id = 'lengthButton';

 var lengthElement = document.createElement('div');
 //lengthElement.className = 'lengthButtonDiv';
 lengthElement.appendChild(lengthButton);

 var lengthControl = new ol.control.Control({
  element: lengthElement
 })

 var lengthFlag = false;
 lengthButton.addEventListener('click', () => {
  // disableoOtherInteraction('lengthButton');
  lengthButton.classList.toggle('clicked');
  lengthFlag = !lengthFlag;
  document.getElementById("map").style.cursor = "default";
  if(lengthFlag){
    map.removeInteraction(draw);
    addInteraction('LineString');
  } else {
    map.removeInteraction(draw);
    source.clear();
    const elements = document.getElementsByClassName("ol-tooltip ol-tooltip-static");
    while (elements.length > 0) elements [0].remove();
  }
  }
 )

 map.addControl(lengthControl);

 var continueLineMsg = 'Click para continuar medición';

 var draw;

 var source = new ol.source.Vector();
 var vector = new ol.layer.Vector({
  source: source,
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(255,255,255,0.2)'
    }),
    stroke: new ol.style.Stroke({
      color: '#ffcc33',
      width: 2,
    }),
  }),
 });

map.addLayer(vector);

function addInteraction(intType) {

  draw = new ol.interaction.Draw({
    source: source,
    type: intType,
    style: new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(200, 200, 200, 0.6',
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(0 ,0 ,0 ,0.5',
        lineDash: [10 , 10],
        width: 2,
      }),
    }),
  })
};

map.addInteraction(draw);

createMeasureTooltip();
createHelpTooltip();

var listener;
  draw.on('drawstart',
      function(evt) {
        // set sketch
        sketch = evt.feature;

        /** @type {ol.Coordinate|undefined} */
       /* var tooltipCoord = evt.coordinate;

        listener = sketch.getGeometry().on('change', function(evt) {
          var geom = evt.target;
          var output;
          if (geom instanceof ol.geom.Polygon) {
            output = formatArea(/** @type {ol.geom.Polygon} */ /*(geom));
            tooltipCoord = geom.getInteriorPoint().getCoordinates();
          } else if (geom instanceof ol.geom.LineString) {
            output = formatLength( /** @type {ol.geom.LineString} */ /* (geom));
            tooltipCoord = geom.getLastCoordinate();
          }
          measureTooltipElement.innerHTML = output;
          measureTooltip.setPosition(tooltipCoord);
        });
      }, this);

  draw.on('drawend',
      function(evt) {
        measureTooltipElement.className = 'tooltip tooltip-static';
        measureTooltip.setOffset([0, -7]);
        // unset sketch
        sketch = null;
        // unset tooltip so that a new one can be created
        measureTooltipElement = null;
        createMeasureTooltip();
        ol.Observable.unByKey(listener);
      }, this);

      function createMeasureTooltip() {
        if (measureTooltipElement) {
          measureTooltipElement.parentNode.removeChild(measureTooltipElement);
        }
        measureTooltipElement = document.createElement('div');
        measureTooltipElement.className = 'tooltip tooltip-measure';
        measureTooltip = new ol.Overlay({
          element: measureTooltipElement,
          offset: [0, -15],
          positioning: 'bottom-center'
        });
        map.addOverlay(measureTooltip);
      }
*/

//METADATOS//
 var wmsSource = "https://geoportal.cfi.org.ar/geoserver/ows?version%3D1.3.0";
map.on('click', function (evt) {
  console.log(evt);
 var viewResolution = /**  @type {number} */ (map.getView().getResolution())
 var url = wmsSource.getFeatureInfoUrl(
  evt.coordinate,
  viewResolution,
  "EPSG:4326",
  { INFO_FORMAT: 'application/json' }
)
fetch(url)
.then(res => res.json())
.then(data => {
  console.log(data)
})
.catch(err => console.log(err))

})

//METADATOS//
})();
