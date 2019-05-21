'use strict'
var scrip = require('./lib/margin')

/**
 * Hexo tag signature
 * @param {string[]} args Arguments passed to the tag
 * @param {string} content Content of the tag (ignored)
 * @return {string} The generated HTML
 */

// let ref = (args, content) => scrip.generateMarginNote(args)

/**
 * Function with string -> string signature that uses Hexo's markdown engine
 * @param {string} content The Markdown content to be rendered
 * @return {string} The parsed and rendered HTML
 */
function renderMarkdown(content) {
  return hexo.render.renderSync({ text: content, engine: 'markdown' })
}

/** Tag options for an inline tag with no end block */
var inlineTag = { async: true, ends: false }

/** Tag options for a block tag (tag / endtag pair) */
var blockTag = { async: true, ends: true }

// hexo.extend.tag.register('margin', ref, inlineTag)

hexo.extend.tag.register(
  'margin', function (args, content) {return scrip.generateMarginNote(args, content, renderMarkdown), blockTag}
)
