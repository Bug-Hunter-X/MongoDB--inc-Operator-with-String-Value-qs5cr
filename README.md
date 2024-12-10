# MongoDB $inc Operator with String Value

This example demonstrates an uncommon error when using the `$inc` operator in MongoDB update queries.  The `$inc` operator is used to increment a numeric field by a specified value.  However, if a string value is provided instead of a number, the update operation may fail silently or produce unexpected results.

## Bug
The bug lies in the incorrect usage of the `$inc` operator.  The value provided to `$inc` should be a number, not a string.

## Solution
The solution is to provide a numeric value to the `$inc` operator.

## How to reproduce
1. Create a MongoDB collection.
2. Insert a document with a numeric field.
3. Attempt to update the numeric field using `$inc` with a string value.
4. Observe the unexpected behavior.