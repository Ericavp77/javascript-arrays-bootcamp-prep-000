var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,  element) {
   var y = [element, ...array]
        return y
    }
    
    function destructivelyAddElementToBeginningOfArray(array,  element) {
       array.unshift(element)
            return array
        }