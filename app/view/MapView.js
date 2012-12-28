Ext.define("mapper.view.MapView", {
    extend: "Ext.Map",
    xtype: 'mapview',
    config: {
        title: 'Map',
        iconCls: 'info',
        useCurrentLocation: true,
        listeners: {
            maprender : function(comp, map){
                new google.maps.Marker({
                    position: new google.maps.LatLng(this._geo.getLatitude(), this._geo.getLongitude()),
                    map: map
                });
            }
        }
    }
});