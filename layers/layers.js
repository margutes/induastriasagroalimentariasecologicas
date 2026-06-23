var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_municipios_extremadura_1 = new ol.format.GeoJSON();
var features_municipios_extremadura_1 = format_municipios_extremadura_1.readFeatures(json_municipios_extremadura_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_extremadura_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_extremadura_1.addFeatures(features_municipios_extremadura_1);
var lyr_municipios_extremadura_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipios_extremadura_1, 
                style: style_municipios_extremadura_1,
                popuplayertitle: 'municipios_extremadura',
                interactive: false,
                title: '<img src="styles/legend/municipios_extremadura_1.png" /> municipios_extremadura'
            });
var format_industrias_qgis_2 = new ol.format.GeoJSON();
var features_industrias_qgis_2 = format_industrias_qgis_2.readFeatures(json_industrias_qgis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_industrias_qgis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_industrias_qgis_2.addFeatures(features_industrias_qgis_2);
var lyr_industrias_qgis_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_industrias_qgis_2, 
                style: style_industrias_qgis_2,
                popuplayertitle: 'industrias_qgis',
                interactive: true,
    title: 'industrias_qgis<br />\
    <img src="styles/legend/industrias_qgis_2_0.png" /> Aceites vegetales y grasas vegetales comestibles<br />\
    <img src="styles/legend/industrias_qgis_2_1.png" /> Aceites vegetales y grasas vegetales comestibles / Bebidas alcoholicas<br />\
    <img src="styles/legend/industrias_qgis_2_2.png" /> Aceites vegetales y grasas vegetales comestibles / Manipulacion, transformacion y envasado de productos hortofruticolas (hortalizas, tuberculos, legumbres, frutas, setas y derivados)<br />\
    <img src="styles/legend/industrias_qgis_2_3.png" /> Aceites vegetales y grasas vegetales comestibles / Productos ecologicos<br />\
    <img src="styles/legend/industrias_qgis_2_4.png" /> Alimentos estimulantes, especies vegetales para infusiones y sus derivados<br />\
    <img src="styles/legend/industrias_qgis_2_5.png" /> Almacenamiento y conservacion de productos ecologicos<br />\
    <img src="styles/legend/industrias_qgis_2_6.png" /> Azucares, derivados y similares / Manipulacion, transformacion y envasado de productos hortofruticolas (hortalizas, tuberculos, legumbres, frutas, setas y derivados)<br />\
    <img src="styles/legend/industrias_qgis_2_7.png" /> Bebidas alcoholicas<br />\
    <img src="styles/legend/industrias_qgis_2_8.png" /> Bebidas no alcoholicas<br />\
    <img src="styles/legend/industrias_qgis_2_9.png" /> Carnes y derivados<br />\
    <img src="styles/legend/industrias_qgis_2_10.png" /> Carnes y derivados / Productos ecologicos<br />\
    <img src="styles/legend/industrias_qgis_2_11.png" /> Cereales, harinas y derivados / Productos ecologicos<br />\
    <img src="styles/legend/industrias_qgis_2_12.png" /> Comidas preparadas y alimentacion especial<br />\
    <img src="styles/legend/industrias_qgis_2_13.png" /> Comidas preparadas y alimentacion especial  7 Manipulacion, transformacion y envasado de productos hortofruticolas (hortalizas, tuberculos, legumbres, frutas, setas y derivados)<br />\
    <img src="styles/legend/industrias_qgis_2_14.png" /> Comidas preparadas y alimentacion especial / Manipulacion, transformacion y envasado de productos hortofruticolas (hortalizas, tuberculos, legumbres, frutas, setas y derivados)<br />\
    <img src="styles/legend/industrias_qgis_2_15.png" /> Condimentos y especias<br />\
    <img src="styles/legend/industrias_qgis_2_16.png" /> Condimentos y especias / Alimentos estimulantes, especies vegetales para infusiones y sus derivados<br />\
    <img src="styles/legend/industrias_qgis_2_17.png" /> Condimentos y especias / Productos ecologicos<br />\
    <img src="styles/legend/industrias_qgis_2_18.png" /> Huevos y derivados<br />\
    <img src="styles/legend/industrias_qgis_2_19.png" /> Leche y derivados<br />\
    <img src="styles/legend/industrias_qgis_2_20.png" /> Manipulacion, transformacion y envasado de frutos secos / Manipulacion, transformacion y envasado de productos hortofruticolas (hortalizas, tuberculos, legumbres, frutas, setas y derivados)<br />\
    <img src="styles/legend/industrias_qgis_2_21.png" /> Manipulacion, transformacion y envasado de productos hortofruticolas (hortalizas, tuberculos, legumbres, frutas, setas y derivados)<br />\
    <img src="styles/legend/industrias_qgis_2_22.png" /> Manipulacion, transformacion y envasado de productos hortofruticolas (hortalizas, tuberculos, legumbres, frutas, setas y derivados) / Comidas preparadas y alimentacion especial<br />\
    <img src="styles/legend/industrias_qgis_2_23.png" /> Otros productos de la industria agroalimentaria n.c.o.<br />\
    <img src="styles/legend/industrias_qgis_2_24.png" /> Piensos<br />\
    <img src="styles/legend/industrias_qgis_2_25.png" /> Piensos / Productos ecologicos<br />\
    <img src="styles/legend/industrias_qgis_2_26.png" /> Productos ecologicos<br />\
    <img src="styles/legend/industrias_qgis_2_27.png" /> Productos obtenidos de la apicultura<br />\
    <img src="styles/legend/industrias_qgis_2_28.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_municipios_extremadura_1.setVisible(true);lyr_industrias_qgis_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_municipios_extremadura_1,lyr_industrias_qgis_2];
lyr_municipios_extremadura_1.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', });
lyr_industrias_qgis_2.set('fieldAliases', {'Name': 'Name', 'Id': 'Id', 'TIPO': 'TIPO', 'PROVINCIA': 'PROVINCIA', 'CoDIGO_POS': 'CoDIGO_POS', 'LOCALIDAD': 'LOCALIDAD', 'DIRECCIoN': 'DIRECCIoN', 'WEB': 'WEB', 'CLASIFICAC': 'CLASIFICAC', });
lyr_municipios_extremadura_1.set('fieldImages', {'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'TextEdit', 'CODNUT2': 'TextEdit', 'CODNUT3': 'TextEdit', });
lyr_industrias_qgis_2.set('fieldImages', {'Name': 'TextEdit', 'Id': 'TextEdit', 'TIPO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CoDIGO_POS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'DIRECCIoN': 'TextEdit', 'WEB': 'TextEdit', 'CLASIFICAC': 'TextEdit', });
lyr_municipios_extremadura_1.set('fieldLabels', {'INSPIREID': 'no label', 'COUNTRY': 'no label', 'NATLEV': 'no label', 'NATLEVNAME': 'no label', 'NATCODE': 'no label', 'NAMEUNIT': 'no label', 'CODNUT1': 'no label', 'CODNUT2': 'no label', 'CODNUT3': 'no label', });
lyr_industrias_qgis_2.set('fieldLabels', {'Name': 'header label - always visible', 'Id': 'no label', 'TIPO': 'no label', 'PROVINCIA': 'no label', 'CoDIGO_POS': 'no label', 'LOCALIDAD': 'inline label - visible with data', 'DIRECCIoN': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'CLASIFICAC': 'inline label - visible with data', });
lyr_industrias_qgis_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});