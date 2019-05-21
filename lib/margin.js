'use strict'

module.exports = {
  /**
   * Generate a margin note (per tufte.css) from the given arguments
   * @param {string[]} args The arguments to the tag, the way they are passed to the tag
   * @param {string} content The content representing the text of the passage
   * @param {function(string): string} renderFunc Function to apply to the text (typically Markdown rendering)
   * @return {string} The margin note with the CSS class.
   * cf. https://edwardtufte.github.io/tufte-css/
   */
  generateMarginNote: function (args, content, renderFunc) {
  return '<label for="mn-demo" class="margin-toggle">⊕</label><input type="checkbox" id="mn-demo"' +
    ' class="margin-toggle"/><span class="marginnote">' + renderFunc(content) + '</span>'
  }
}
