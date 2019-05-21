# hexo-tag-scripture
A Hexo tag plugin to add margin notes to the right side of a document. Follows https://edwardtufte.github.io/tufte-css/

# Sidenotes: Footnotes and Marginal Notes

One of the most distinctive features of Tufte’s style is his extensive use of sidenotes.This is a sidenote.Sidenotes are like footnotes, except they don’t force the reader to jump their eye to the bottom of the page, but instead display off to the side in the margin. Perhaps you have noticed their use in this document already. You are very astute.

Sidenotes are a great example of the web not being like print. On sufficiently large viewports, Tufte CSS uses the margin for sidenotes, margin notes, and small figures. On smaller viewports, elements that would go in the margin are hidden until the user toggles them into view. The goal is to present related but not necessary information such as asides or citations  _as close as possible_  to the text that references them. At the same time, this secondary information should stay out of the way of the eye, not interfering with the progression of ideas in the main text.

## Installation

```
npm install --save hexo-tag-margin-note
```

## Docs, TL;DR-Style
**Scripture Blockquotes**

```markdown
{% margin %}
The **text**
{% endmargin %}
```

becomes

```html
??
```

## Documentation
N/A
you need the css which goes with it. Cf. https://github.com/edwardtufte/tufte-css

### Common Options
N/A 

## Example
N/A 

## License

[MIT](LICENSE)
