var size = 0;
var placement = 'point';
function categories_PPRL_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Autre':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,255,0.4392156862745098)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zone bleue B1':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 	'rgba(0,51,153,0.5215686274509804)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zone bleue B2':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(49,140,231,0.4117647058823529)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zone jaune':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,227,44,0.4980392156862745)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zone orange':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(226,151,64,0.4980392156862745)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zone rouge (Rs)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(218,85,72,0.4980392156862745)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zone verte':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(148,222,122,0.4745098039215686)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PPRL_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("pprl");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_PPRL_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
