export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator = (function() {
    return {
        add : function (x, y) {
            // Do something
            return x + y
        },
    
        substract : function (x, y) {
            // Do something else
            return x - y
        },

        divide : function (x, y) {
            // Do something
            return x / y
        },

        multiply : function (x, y) {
        // Do something
            return x * y
        },

      
    };
  })();

// export default {capitalize, reverseString}
module.exports = {capitalize: capitalize,
     reverseString: reverseString,
    calculator: calculator,}