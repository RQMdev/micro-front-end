## Master

### fixes main navigation reloading app :

Add event listener on click to catch main navigation event

```javascript
// router.js
// connectedCallback()
this.addEventListener('click', event => {
  const href = this.getLinkHref(event.target)
  if (href) {
    const { pathname } = new URL(href, location.origin)
    this.resolveRoute(pathname, event)
  }
})
```

compare full current full path to new path

```javascript
// router.js
renderRoute(targetRoute, event, path) {
  // ...
  this.currentPath = path
    } else if (path === this.currentPath) {
      event.preventDefault()
  // ...
}

```

## Step 1
