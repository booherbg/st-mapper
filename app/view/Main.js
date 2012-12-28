Ext.define('mapper.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.device.Geolocation',
        'Ext.Map'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [   
            {
                xtype: 'mapview'
            }
        ]
    }
});
