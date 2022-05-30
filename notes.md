použití proměnné v klíči JSON dat

```javascript
const i = 3

JSON.stringify({
    ["course." + i + ".completed"]: false
})   

// {"course.3.completed":false}
```

