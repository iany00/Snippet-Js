/**
	Design Patterns - The Module Pattern
    * Encapsulating; simple example
    * Closure -  makes it executes automatically
    * All the public members are returned
  */
  
  /**
  - dash is the namespace
  - page1,page2 are singletons
  
	* In JavaScript, an object acts much like an associative array, i.e., an array of key-value pairs. The key is a property or a method.
	* To create private members, we have to use Closures. Closures help to create a private space
	* What we have done is created a Closure that looks like a self executing anonymous function that returns the public methods we added earlier. The pair of parentheses at the end makes the code get executed automatically. 
	All the members returned by the return statement are public, while the ones that come before are private.
  */
var dash = {};
dash.page1 = (function() {
    // Private members
    var x = 1;
    var y = 2;
    var setVariables = function(x2,y2) {
        x = x2;
        y = y2;
    }

    var private_f1 = function () {
        var z = x + y;
        console.log('private x+y= ' + z);
    }

    return  {
        // Public members
        function1 : function() {
            // use function2
            this.function2(3);
        },
        function2 : function(a) {
            //do something
            //use private var
            console.log('public var a:' + a);
            console.log('private var x:' + x);
            console.log('private var y:' + y);
        },
        function3 : function (x,y) {
            // use private members
            setVariables(x,y);
            private_f1();
        },
        init : function(x,y) {
            // use public function1
            this.function1();

            console.log('var set --------------');
            // use public function3
            this.function3(x,y);

            // use function after setting the variables
            console.log('after var set --------------');
            this.function1();
        }
    }
})();
dash.page2 = (function() {
    // Private members
    
    return {
        // Public members
    }
})();

/** execute like this */
dash.page1.init(22,33);