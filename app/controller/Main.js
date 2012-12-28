Ext.define('mapper.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            loginform: '#loginform'
        },

        // we use # like css selector by id
        // we use normal selectors by fieldid type
        control: {
            '#submit': {
                tap: 'showLogin'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    //http://maps.google.com/maps/api/staticmap?center=39.1450974,-84.4231434&markers=color:blue%7Clabel:You%7C39.1450974,-84.4231434&zoom=14&size=512x512&maptype=hybrid&sensor=false
    //https://maps.google.com/?q=39.1450974,-84.4231434
    launch: function(app) {
        Ext.device.Geolocation.getCurrentPosition({
            success: function(position) {
                console.log(position.coords);
            },
            failure: function() {
                console.log('something went wrong!');
            }
        });
    },

    showLogin: function() {
        //alert(JSON.stringify(this.getLoginform().getValues()));
    }
});