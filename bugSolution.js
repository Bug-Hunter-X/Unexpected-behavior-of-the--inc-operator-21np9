```javascript
//Correct usage of $inc operator with $setOnInsert
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{"$inc":{"counter":-1},"$setOnInsert":{"counter":0}});
//Alternative using updateOne with upsert option
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{"$inc":{"counter":-1}},{upsert:true});
```