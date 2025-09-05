var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AE_16_1 = new ol.format.GeoJSON();
var features_AE_16_1 = format_AE_16_1.readFeatures(json_AE_16_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_16_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_16_1.addFeatures(features_AE_16_1);
var lyr_AE_16_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_16_1, 
                style: style_AE_16_1,
                popuplayertitle: 'AE_16',
                interactive: false,
    title: 'AE_16<br />\
    <img src="styles/legend/AE_16_1_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_16_1_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_15_2 = new ol.format.GeoJSON();
var features_AE_15_2 = format_AE_15_2.readFeatures(json_AE_15_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_15_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_15_2.addFeatures(features_AE_15_2);
var lyr_AE_15_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_15_2, 
                style: style_AE_15_2,
                popuplayertitle: 'AE_15',
                interactive: false,
    title: 'AE_15<br />\
    <img src="styles/legend/AE_15_2_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_15_2_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_14_3 = new ol.format.GeoJSON();
var features_AE_14_3 = format_AE_14_3.readFeatures(json_AE_14_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_14_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_14_3.addFeatures(features_AE_14_3);
var lyr_AE_14_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_14_3, 
                style: style_AE_14_3,
                popuplayertitle: 'AE_14',
                interactive: false,
    title: 'AE_14<br />\
    <img src="styles/legend/AE_14_3_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_14_3_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_13_4 = new ol.format.GeoJSON();
var features_AE_13_4 = format_AE_13_4.readFeatures(json_AE_13_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_13_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_13_4.addFeatures(features_AE_13_4);
var lyr_AE_13_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_13_4, 
                style: style_AE_13_4,
                popuplayertitle: 'AE_13',
                interactive: false,
    title: 'AE_13<br />\
    <img src="styles/legend/AE_13_4_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_13_4_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_12_5 = new ol.format.GeoJSON();
var features_AE_12_5 = format_AE_12_5.readFeatures(json_AE_12_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_12_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_12_5.addFeatures(features_AE_12_5);
var lyr_AE_12_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_12_5, 
                style: style_AE_12_5,
                popuplayertitle: 'AE_12',
                interactive: false,
    title: 'AE_12<br />\
    <img src="styles/legend/AE_12_5_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_12_5_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_11_6 = new ol.format.GeoJSON();
var features_AE_11_6 = format_AE_11_6.readFeatures(json_AE_11_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_11_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_11_6.addFeatures(features_AE_11_6);
var lyr_AE_11_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_11_6, 
                style: style_AE_11_6,
                popuplayertitle: 'AE_11',
                interactive: false,
    title: 'AE_11<br />\
    <img src="styles/legend/AE_11_6_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_11_6_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_10_7 = new ol.format.GeoJSON();
var features_AE_10_7 = format_AE_10_7.readFeatures(json_AE_10_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_10_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_10_7.addFeatures(features_AE_10_7);
var lyr_AE_10_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_10_7, 
                style: style_AE_10_7,
                popuplayertitle: 'AE_10',
                interactive: false,
    title: 'AE_10<br />\
    <img src="styles/legend/AE_10_7_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_10_7_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_09_8 = new ol.format.GeoJSON();
var features_AE_09_8 = format_AE_09_8.readFeatures(json_AE_09_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_09_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_09_8.addFeatures(features_AE_09_8);
var lyr_AE_09_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_09_8, 
                style: style_AE_09_8,
                popuplayertitle: 'AE_09',
                interactive: false,
    title: 'AE_09<br />\
    <img src="styles/legend/AE_09_8_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_09_8_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_08_9 = new ol.format.GeoJSON();
var features_AE_08_9 = format_AE_08_9.readFeatures(json_AE_08_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_08_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_08_9.addFeatures(features_AE_08_9);
var lyr_AE_08_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_08_9, 
                style: style_AE_08_9,
                popuplayertitle: 'AE_08',
                interactive: false,
    title: 'AE_08<br />\
    <img src="styles/legend/AE_08_9_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_08_9_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_07_10 = new ol.format.GeoJSON();
var features_AE_07_10 = format_AE_07_10.readFeatures(json_AE_07_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_07_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_07_10.addFeatures(features_AE_07_10);
var lyr_AE_07_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_07_10, 
                style: style_AE_07_10,
                popuplayertitle: 'AE_07',
                interactive: false,
    title: 'AE_07<br />\
    <img src="styles/legend/AE_07_10_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_07_10_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_06_11 = new ol.format.GeoJSON();
var features_AE_06_11 = format_AE_06_11.readFeatures(json_AE_06_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_06_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_06_11.addFeatures(features_AE_06_11);
var lyr_AE_06_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_06_11, 
                style: style_AE_06_11,
                popuplayertitle: 'AE_06',
                interactive: false,
    title: 'AE_06<br />\
    <img src="styles/legend/AE_06_11_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_06_11_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_05_12 = new ol.format.GeoJSON();
var features_AE_05_12 = format_AE_05_12.readFeatures(json_AE_05_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_05_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_05_12.addFeatures(features_AE_05_12);
var lyr_AE_05_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_05_12, 
                style: style_AE_05_12,
                popuplayertitle: 'AE_05',
                interactive: false,
    title: 'AE_05<br />\
    <img src="styles/legend/AE_05_12_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_05_12_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_04_13 = new ol.format.GeoJSON();
var features_AE_04_13 = format_AE_04_13.readFeatures(json_AE_04_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_04_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_04_13.addFeatures(features_AE_04_13);
var lyr_AE_04_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_04_13, 
                style: style_AE_04_13,
                popuplayertitle: 'AE_04',
                interactive: false,
    title: 'AE_04<br />\
    <img src="styles/legend/AE_04_13_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_04_13_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_03_14 = new ol.format.GeoJSON();
var features_AE_03_14 = format_AE_03_14.readFeatures(json_AE_03_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_03_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_03_14.addFeatures(features_AE_03_14);
var lyr_AE_03_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_03_14, 
                style: style_AE_03_14,
                popuplayertitle: 'AE_03',
                interactive: false,
    title: 'AE_03<br />\
    <img src="styles/legend/AE_03_14_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_03_14_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_02_15 = new ol.format.GeoJSON();
var features_AE_02_15 = format_AE_02_15.readFeatures(json_AE_02_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_02_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_02_15.addFeatures(features_AE_02_15);
var lyr_AE_02_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_02_15, 
                style: style_AE_02_15,
                popuplayertitle: 'AE_02',
                interactive: false,
    title: 'AE_02<br />\
    <img src="styles/legend/AE_02_15_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_02_15_1.png" /> AREA NO CULTIVADA<br />' });
var format_AE_01_16 = new ol.format.GeoJSON();
var features_AE_01_16 = format_AE_01_16.readFeatures(json_AE_01_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AE_01_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_01_16.addFeatures(features_AE_01_16);
var lyr_AE_01_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AE_01_16, 
                style: style_AE_01_16,
                popuplayertitle: 'AE_01',
                interactive: false,
    title: 'AE_01<br />\
    <img src="styles/legend/AE_01_16_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/AE_01_16_1.png" /> AREA NO CULTIVADA<br />' });
var format_COMUNIDADES_17 = new ol.format.GeoJSON();
var features_COMUNIDADES_17 = format_COMUNIDADES_17.readFeatures(json_COMUNIDADES_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMUNIDADES_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNIDADES_17.addFeatures(features_COMUNIDADES_17);
var lyr_COMUNIDADES_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMUNIDADES_17, 
                style: style_COMUNIDADES_17,
                popuplayertitle: 'COMUNIDADES',
                interactive: false,
                title: '<img src="styles/legend/COMUNIDADES_17.png" /> COMUNIDADES'
            });
var format_PERIMETROSAEs_18 = new ol.format.GeoJSON();
var features_PERIMETROSAEs_18 = format_PERIMETROSAEs_18.readFeatures(json_PERIMETROSAEs_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIMETROSAEs_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIMETROSAEs_18.addFeatures(features_PERIMETROSAEs_18);
var lyr_PERIMETROSAEs_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIMETROSAEs_18, 
                style: style_PERIMETROSAEs_18,
                popuplayertitle: 'PERIMETROS AEs',
                interactive: false,
                title: '<img src="styles/legend/PERIMETROSAEs_18.png" /> PERIMETROS AEs'
            });
var format_CENTROSPOBLADOS_19 = new ol.format.GeoJSON();
var features_CENTROSPOBLADOS_19 = format_CENTROSPOBLADOS_19.readFeatures(json_CENTROSPOBLADOS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSPOBLADOS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSPOBLADOS_19.addFeatures(features_CENTROSPOBLADOS_19);
var lyr_CENTROSPOBLADOS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSPOBLADOS_19, 
                style: style_CENTROSPOBLADOS_19,
                popuplayertitle: 'CENTROS POBLADOS',
                interactive: false,
                title: '<img src="styles/legend/CENTROSPOBLADOS_19.png" /> CENTROS POBLADOS'
            });
var group_AE = new ol.layer.Group({
                                layers: [lyr_AE_16_1,lyr_AE_15_2,lyr_AE_14_3,lyr_AE_13_4,lyr_AE_12_5,lyr_AE_11_6,lyr_AE_10_7,lyr_AE_09_8,lyr_AE_08_9,lyr_AE_07_10,lyr_AE_06_11,lyr_AE_05_12,lyr_AE_04_13,lyr_AE_03_14,lyr_AE_02_15,lyr_AE_01_16,],
                                fold: 'close',
                                title: 'AE '});

lyr_GoogleSatellite_0.setVisible(true);lyr_AE_16_1.setVisible(true);lyr_AE_15_2.setVisible(true);lyr_AE_14_3.setVisible(true);lyr_AE_13_4.setVisible(true);lyr_AE_12_5.setVisible(true);lyr_AE_11_6.setVisible(true);lyr_AE_10_7.setVisible(true);lyr_AE_09_8.setVisible(true);lyr_AE_08_9.setVisible(true);lyr_AE_07_10.setVisible(true);lyr_AE_06_11.setVisible(true);lyr_AE_05_12.setVisible(true);lyr_AE_04_13.setVisible(true);lyr_AE_03_14.setVisible(true);lyr_AE_02_15.setVisible(true);lyr_AE_01_16.setVisible(true);lyr_COMUNIDADES_17.setVisible(true);lyr_PERIMETROSAEs_18.setVisible(true);lyr_CENTROSPOBLADOS_19.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_AE,lyr_COMUNIDADES_17,lyr_PERIMETROSAEs_18,lyr_CENTROSPOBLADOS_19];
lyr_AE_16_1.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_15_2.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_14_3.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_13_4.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_12_5.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_11_6.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_10_7.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_09_8.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_08_9.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_07_10.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_06_11.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_05_12.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_04_13.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_03_14.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_02_15.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', 'clas': 'clas', 'tcod_cd_co': 'tcod_cd_co', 'tciu_com': 'tciu_com', 'tid_ciu_co': 'tid_ciu_co', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'n_pre_ace': 'n_pre_ace', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', });
lyr_AE_01_16.set('fieldAliases', {'cod_clas': 'cod_clas', 'NO SUPER': 'NO SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'layer': 'layer', 'path': 'path', });
lyr_COMUNIDADES_17.set('fieldAliases', {'id_0': 'id_0', 'id': 'id', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'con_area': 'con_area', 'sector': 'sector', 'con_sec': 'con_sec', 'segmento': 'segmento', 'con_seg': 'con_seg', 'id_com': 'id_com', 't_hombres': 't_hombres', 't_mujeres': 't_mujeres', 'total_pob': 'total_pob', 't_viv_ocu': 't_viv_ocu', 't_viv_des': 't_viv_des', 't_viv_col': 't_viv_col', 't_viv_tem': 't_viv_tem', 'total_viv': 'total_viv', 'areacensal': 'areacensal', 'ra_58': 'ra_58', 'ds_5050': 'ds_5050', 'total_pob2': 'total_pob2', 'sec_unico': 'sec_unico', 'seg_unico': 'seg_unico', });
lyr_PERIMETROSAEs_18.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'upa_13_ae': 'upa_13_ae', 'sup13ha_ae': 'sup13ha_ae', 'pre_ace_ae': 'pre_ace_ae', 'n_aba_ae': 'n_aba_ae', 'n_com_ae': 'n_com_ae', 'n_est_ae': 'n_est_ae', 'n_tco_ae': 'n_tco_ae', 'viv_12_ae': 'viv_12_ae', 'viv_ac_ae': 'viv_ac_ae', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'observ': 'observ', 'upa_fin': 'upa_fin', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'n_cuest': 'n_cuest', 'n_empadro': 'n_empadro', 'codigompio': 'codigompio', });
lyr_CENTROSPOBLADOS_19.set('fieldAliases', {'id': 'id', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'area_cpv': 'area_cpv', 'con_area': 'con_area', 'tipo_area': 'tipo_area', 'extension': 'extension', 'tipo': 'tipo', 'con_peri': 'con_peri', 'usr_act': 'usr_act', 'estado1': 'estado1', 'usr_rev': 'usr_rev', 'estado2': 'estado2', 'estado3': 'estado3', 'areacpv_pl': 'areacpv_pl', 'a_cpv': 'a_cpv', 'a_zona': 'a_zona', 'a_sector': 'a_sector', 'a_segmento': 'a_segmento', 'areacensal': 'areacensal', 'geom_key': 'geom_key', 'id_f1': 'id_f1', 'id_f2oc': 'id_f2oc', 'total_pob': 'total_pob', 'total_pob2': 'total_pob2', 'tipo_ciuda': 'tipo_ciuda', });
lyr_AE_16_1.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_15_2.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_14_3.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_13_4.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_12_5.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_11_6.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_10_7.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_09_8.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_08_9.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_07_10.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_06_11.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_05_12.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_04_13.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_03_14.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_02_15.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'clas': 'TextEdit', 'tcod_cd_co': 'TextEdit', 'tciu_com': 'TextEdit', 'tid_ciu_co': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'n_pre_ace': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', });
lyr_AE_01_16.set('fieldImages', {'cod_clas': 'TextEdit', 'NO SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_COMUNIDADES_17.set('fieldImages', {'id_0': 'TextEdit', 'id': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'con_area': 'TextEdit', 'sector': 'TextEdit', 'con_sec': 'TextEdit', 'segmento': 'TextEdit', 'con_seg': 'TextEdit', 'id_com': 'TextEdit', 't_hombres': 'TextEdit', 't_mujeres': 'TextEdit', 'total_pob': 'TextEdit', 't_viv_ocu': 'TextEdit', 't_viv_des': 'TextEdit', 't_viv_col': 'TextEdit', 't_viv_tem': 'TextEdit', 'total_viv': 'TextEdit', 'areacensal': 'TextEdit', 'ra_58': 'TextEdit', 'ds_5050': 'TextEdit', 'total_pob2': 'TextEdit', 'sec_unico': 'TextEdit', 'seg_unico': 'TextEdit', });
lyr_PERIMETROSAEs_18.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'upa_13_ae': 'TextEdit', 'sup13ha_ae': 'TextEdit', 'pre_ace_ae': 'TextEdit', 'n_aba_ae': 'TextEdit', 'n_com_ae': 'TextEdit', 'n_est_ae': 'TextEdit', 'n_tco_ae': 'TextEdit', 'viv_12_ae': 'TextEdit', 'viv_ac_ae': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'observ': 'TextEdit', 'upa_fin': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'n_cuest': 'TextEdit', 'n_empadro': 'TextEdit', 'codigompio': 'TextEdit', });
lyr_CENTROSPOBLADOS_19.set('fieldImages', {'id': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'area_cpv': 'TextEdit', 'con_area': 'TextEdit', 'tipo_area': 'TextEdit', 'extension': 'TextEdit', 'tipo': 'TextEdit', 'con_peri': 'TextEdit', 'usr_act': 'TextEdit', 'estado1': 'TextEdit', 'usr_rev': 'TextEdit', 'estado2': 'TextEdit', 'estado3': 'TextEdit', 'areacpv_pl': 'TextEdit', 'a_cpv': 'TextEdit', 'a_zona': 'TextEdit', 'a_sector': 'TextEdit', 'a_segmento': 'TextEdit', 'areacensal': 'TextEdit', 'geom_key': 'TextEdit', 'id_f1': 'TextEdit', 'id_f2oc': 'TextEdit', 'total_pob': 'TextEdit', 'total_pob2': 'TextEdit', 'tipo_ciuda': 'TextEdit', });
lyr_AE_16_1.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_15_2.set('fieldLabels', {'cod_clas': 'inline label - visible with data', 'NO SUPER': 'inline label - always visible', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_14_3.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'inline label - visible with data', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_13_4.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'inline label - visible with data', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_12_5.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_11_6.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_10_7.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_09_8.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'inline label - always visible', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_08_9.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_07_10.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'inline label - always visible', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_06_11.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_05_12.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_04_13.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_03_14.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_02_15.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', 'clas': 'no label', 'tcod_cd_co': 'no label', 'tciu_com': 'no label', 'tid_ciu_co': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'n_pre_ace': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', });
lyr_AE_01_16.set('fieldLabels', {'cod_clas': 'no label', 'NO SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_COMUNIDADES_17.set('fieldLabels', {'id_0': 'no label', 'id': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'con_area': 'no label', 'sector': 'no label', 'con_sec': 'no label', 'segmento': 'no label', 'con_seg': 'no label', 'id_com': 'no label', 't_hombres': 'no label', 't_mujeres': 'no label', 'total_pob': 'no label', 't_viv_ocu': 'no label', 't_viv_des': 'no label', 't_viv_col': 'no label', 't_viv_tem': 'no label', 'total_viv': 'no label', 'areacensal': 'no label', 'ra_58': 'no label', 'ds_5050': 'no label', 'total_pob2': 'no label', 'sec_unico': 'no label', 'seg_unico': 'no label', });
lyr_PERIMETROSAEs_18.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'upa_13_ae': 'no label', 'sup13ha_ae': 'no label', 'pre_ace_ae': 'no label', 'n_aba_ae': 'no label', 'n_com_ae': 'no label', 'n_est_ae': 'no label', 'n_tco_ae': 'no label', 'viv_12_ae': 'no label', 'viv_ac_ae': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'observ': 'no label', 'upa_fin': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'n_cuest': 'no label', 'n_empadro': 'no label', 'codigompio': 'no label', });
lyr_CENTROSPOBLADOS_19.set('fieldLabels', {'id': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'area_cpv': 'no label', 'con_area': 'no label', 'tipo_area': 'no label', 'extension': 'no label', 'tipo': 'no label', 'con_peri': 'no label', 'usr_act': 'no label', 'estado1': 'no label', 'usr_rev': 'no label', 'estado2': 'no label', 'estado3': 'no label', 'areacpv_pl': 'no label', 'a_cpv': 'no label', 'a_zona': 'no label', 'a_sector': 'no label', 'a_segmento': 'no label', 'areacensal': 'no label', 'geom_key': 'no label', 'id_f1': 'no label', 'id_f2oc': 'no label', 'total_pob': 'no label', 'total_pob2': 'no label', 'tipo_ciuda': 'no label', });
lyr_CENTROSPOBLADOS_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});