// Add the non-enumerable method `mergeDeepRight()` to `Object.prototype`. This method extends the source object by copying properties from the object passed in the argument. This method copies only the value of the properties, but does not copy the attributes (descriptors).

// Only own properties are copied from the object in the argument (even those that are not available for enumeration).

// If there are properties that already exist in the source object, their values are replaced by the values from the object passed in the argument.

// If a property is object, it must also be copied along with nested data, nesting can be any.

Object.defineProperty(Object.prototype, "mergeDeepRight", {
    value: function(b) {
        let arr1 = object.getOwnPropertyName(b);
        for(let i in arr1){
            if(Array.isArray(this[i])){
                this[i] = b[i].concat(this[i]) 
            } else if(typeof this[i] === 'object') {
                this[i].mergeDeepRight(b[i])
            } else {
                this[i] = b[i]
            }
            
        }
    },
    enumerable: false
})

