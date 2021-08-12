var wms_layers = [];


        var lyr_F4Map2D_0 = new ol.layer.Tile({
            'title': 'Vue Plan',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile1.f4map.com/tiles/f4_2d/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Vue Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_calc_2 = new ol.format.GeoJSON();
var features_calc_2 = format_calc_2.readFeatures(json_calc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_calc_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_calc_2.addFeatures(features_calc_2);
var lyr_calc_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_calc_2, 
                style: style_calc_2,
                interactive: true,
                title: ''            });
var format_PLU_3 = new ol.format.GeoJSON();
var features_PLU_3 = format_PLU_3.readFeatures(json_PLU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLU_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLU_3.addFeatures(features_PLU_3);
var lyr_PLU_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLU_3, 
                style: style_PLU_3,
                interactive: true,
                title: '<img src="styles/legend/PLU_3.png" /> <B>Plan local d\'urbanisme</B>'
            });
var format_PPRL_4 = new ol.format.GeoJSON();
var features_PPRL_4 = format_PPRL_4.readFeatures(json_PPRL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPRL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPRL_4.addFeatures(features_PPRL_4);
var lyr_PPRL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PPRL_4, 
                style: style_PPRL_4,
                interactive: true,
    title: '<B><FONT size "3pt">Plan de prevention des risques littoraux</FONT></B><br />\
    <img src="styles/legend/PPRL_4_1.png" /> Zone bleue B1<br />\
    <img src="styles/legend/PPRL_4_2.png" /> Zone bleue B2<br />\
    <img src="styles/legend/PPRL_4_3.png" /> Zone jaune<br />\
    <img src="styles/legend/PPRL_4_4.png" /> Zone orange<br />\
    <img src="styles/legend/PPRL_4_5.png" /> Zone rouge (Rs)<br />\
    <img src="styles/legend/PPRL_4_6.png" /> Zone verte<br/>'
        });
var group_Fonddecarte = new ol.layer.Group({
                                layers: [lyr_F4Map2D_0,lyr_GoogleSatellite_1,lyr_calc_2,],
                                title: "<br/>Fond de carte"});

lyr_F4Map2D_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_calc_2.setVisible(true);lyr_PLU_3.setVisible(false);lyr_PPRL_4.setVisible(true);
var layersList = [group_Fonddecarte,lyr_PLU_3,lyr_PPRL_4];
lyr_calc_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_PLU_3.set('fieldAliases', {'fid': 'fid', 'IDZONE': 'ID', 'TYPEZONE': 'TYPEZONE', 'Acronyme des zones': 'Acronyme des zones', 'LIBELONG': 'Nom de la zone', 'ZONE_URBA copier_NOMFIC': 'ZONE_URBA copier_NOMFIC', 'Réglement de la zone': 'Réglement de la zone', 'DESTDOMI': 'DESTDOMI', 'LIBELLE': 'LIBELLE', 'plu': 'plu', });
lyr_PPRL_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'pprl': 'Zonage du PPRL', 'URL': 'Réglementation du PPRL', 'URL_serv': 'URL_serv', });
lyr_calc_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_PLU_3.set('fieldImages', {'fid': 'Hidden', 'IDZONE': 'Hidden', 'TYPEZONE': 'Hidden', 'Acronyme des zones': 'TextEdit', 'LIBELONG': 'TextEdit', 'ZONE_URBA copier_NOMFIC': 'Hidden', 'Réglement de la zone': 'TextEdit', 'DESTDOMI': 'Hidden', 'LIBELLE': 'Hidden', 'plu': 'Hidden', });
lyr_PPRL_4.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'pprl': 'TextEdit', 'URL': 'TextEdit', 'URL_serv': 'Hidden', });
lyr_calc_2.set('fieldLabels', {});
lyr_PLU_3.set('fieldLabels', {'Acronyme des zones': 'header label', 'LIBELONG': 'header label', 'Réglement de la zone': 'header label', });
lyr_PPRL_4.set('fieldLabels', {'pprl': 'header label', 'URL': 'header label', });
lyr_PPRL_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});