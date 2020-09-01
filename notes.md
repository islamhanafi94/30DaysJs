### Day 01

- kpd HTML element
- window object includes the document and represent a browser's window

---
### <ins>Day 03</ins>

#### CSS variables
defining variable ---> `--varName`

using variable ---> `var(--varName)`

example:

```css
    :root {
      --spacing: 10px;
      --blur: 10px;
      --base: #ffc600;
    }

    img {
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));
    }

```
#### data Attributes HTML
```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```
**JS**
data attribute is accessible when selecting element `element.dataset`

**CSS**

 using the attr() function
 `attr(data-parent);`

#### nodelist vs array 
when selecting elements using queryselector the result is nodelist which is different than array (No map , filter ,etc)
to iterate over nodelist use `foreach`
#### input event
When using input of type color the `change` event fires only when color picker is dismissed.
for dynamic behavior we can use the `input` event instead.