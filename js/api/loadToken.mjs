// Support functions for loading data from localStorage
/**
* Gets data from localStorage.
* 
* Retrieves item from localStorage by key.
* Parses JSON string to object.
* Returns parsed data object.
*
* @function load
* @param {string} key - localStorage key
* @returns {Object} Parsed data object
*/
export function load(key) {

 const value = localStorage.getItem(key);

 return JSON.parse(value);

}

