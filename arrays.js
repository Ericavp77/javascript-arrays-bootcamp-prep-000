var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array,  element) {
   var y = [element, ...array]
        return y
    }

    function destructivelyAddElementToBeginningOfArray(array,  element) {
       array.unshift(element)
            return array
        }

        function addElementToEndOfArray(array,  element) {
           var y = [...array, element]
                return y
            }

            function destructivelyAddElementToEndOfArray(array,  element) {
               array.push(element)
                    return array
                }

                function accessElementInArray(array,  index) {
                  return array[index]
                    }

                    function destructivelyRemoveElementFromBeginningOfArray(array) {
                     array.shift()
                        return array
                          }

                          function removeElementFromBeginningOfArray(array) {
                            array.slice()
                            return array
                              }
