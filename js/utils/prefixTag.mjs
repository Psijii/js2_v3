/**
 * Prefixes words or phrases in a string with "#" symbol.
 * This is something I wanted to work more on, but I ran out of time,
 * and instead deciding to focus on other parts of the project.
 *
 * This function takes a string as input and modifies it so that any words or phrases
 * starting with "#" are prefixed with "#" if they aren't already. It splits the input
 * string into parts at "#" symbols, removes empty parts, and then adds "#" in front
 * of each word or phrase to ensure they all have "#" as a prefix.
 *
 * @param {string} string - The input string to process.
 * @returns {string} - The modified string with "#" prefixes.
 */
export function prefixTag(string) {
  return string
      .split("#")
      .filter(Boolean)
      .map((w) => "#" + w.trim());
}
