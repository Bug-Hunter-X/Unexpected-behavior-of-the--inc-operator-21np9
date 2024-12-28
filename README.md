# Unexpected behavior of the $inc operator in MongoDB
This repository demonstrates an uncommon error in MongoDB related to the `$inc` operator. When updating a document using the `$inc` operator, unexpected behavior might arise if the targeted field does not exist.

## Bug Description
The `$inc` operator is used to increment or decrement a numeric field in MongoDB. However, if the field does not exist, it is created with the specified increment value rather than being initialized to zero before incrementing. This can lead to unexpected results, particularly when decrementing a non-existent field. 

## Bug Solution
To avoid this issue, it is recommended to use the `$inc` operator in conjunction with other update operators, such as `$setOnInsert` to ensure that the field is initialized with a default value (e.g., 0) before incrementing or decrementing.
