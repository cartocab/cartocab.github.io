var size = 0;
var placement = 'point';

var style_PLU_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "11.700000000000001px \'Calibri\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Acronyme des zones") !== null) {
        labelText = String(feature.get("Acronyme des zones"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(148,148,148,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}),fill: new ol.style.Fill({color: 'rgba(255,255,255,0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
