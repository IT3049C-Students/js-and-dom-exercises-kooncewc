class StringFunctions {
    /**
     * @param {string} input
     * @returns {string}
     * @example
     * capitalize('hello world') // 'Hello world'
     * capitalize('HELLO WORLD') // 'Hello world'
     */
    capitalize(input) { 
      var input = document.getElementById("text").value;
    const strToArr = input.split('');
    const UpArr = strToArr.map(word => word[0].toUpperCase() + word.substring(1));
    input = UpArr.join("");
      return input; 
    }
    /**
     * Returns a reversed string. Example: "abc" => "cba"
     * @param {string} input - the string input to be processed 
     * @returns  {string} - the reversed string
     * @example
     * reverse('abc') // 'cba'
     */
    reverse(input) { 
     var input = document.getElementById("text").value;
      input = input.split("").reverse().join("");
      return input;
    }
    /**
     * Returns an array of the words in a string
     * @param {string} input - the string input to be processed
     * @returns {string[]} - an array of words in the string
     * @example
     * words('hello world') // ['hello', 'world']
     */
    split(input) { 
      var input = document.getElementById("text").value;
      const arr = input.split(' ');
      return arr;

    }
}
