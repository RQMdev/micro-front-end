## Step 1
Fixes React :

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
