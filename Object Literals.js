 /**
	Design Pattern - Object Literals (A module pattern variation)
	If we're opting for this technique, we may be equally as interested in the Module pattern. It still uses object literals but only as the return value from a scoping function.
 */
 
 var myModule = {

    myProperty: "someValue",

    // object literals can contain properties and methods.
    // e.g we can define a further object for module configuration:
    myConfig: {
        useCaching: true,
        language: "en"
    },

    showProperty: function () {
        console.log(this.myProperty);
    },

    // a very basic method
    saySomething: function () {
        console.log( "Where in the world is Paul Irish today?" );
    },

    // output a value based on the current configuration
    reportMyConfig: function () {
        console.log( "Caching is: " + ( this.myConfig.useCaching  ? "enabled" : "disabled") );
    },

    // override the current configuration
    updateMyConfig: function( newConfig ) {

        if ( typeof newConfig === "object" ) {
            this.myConfig = newConfig;
            console.log( this.myConfig.language );
        }
    }
};

// Execute like this
	// Outputs: old property
	myModule.showProperty(); 
    myModule.myProperty = 'New property';
	// Outputs: the new property
    myModule.showProperty(); 

    // Outputs: Where in the world is Paul Irish today?
    myModule.saySomething();
    // Outputs: Caching is: enabled
    myModule.reportMyConfig();
    // Outputs: fr
    myModule.updateMyConfig({
                                language: "fr",
                                useCaching: false
                            });
    // Outputs: Caching is: disabled
    myModule.reportMyConfig();
