```javascript
// Correct usage of $inc operator in MongoDB update query
db.collection.updateOne({fieldName: "value"}, {$inc: {counter: 1}});
```