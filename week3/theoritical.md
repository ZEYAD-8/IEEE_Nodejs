Compare between the three types of quantifiers in regular expressions (?, +, *).
---
?: zero or one  
+: one or more  
*: zero or more


What are the characters that can be represented by \w and \b in a regular expression?
---
\w : capital and small letters and digits and underscore  
\b : any digit


Compare between the Map and WeakMap according to the way they save keys and values.
---
with map, keys and values can be any data type (primitives or objects or functions) and are not garbage collected unless the map is deleted.  
with WeakMap, keys and values must be objects or functions and they can be garbage collected if there's no other refrence to the key object.


Write an example of a string which matches the following pattern:
const regex = /^(0[1-9]|[12]\d|3[01])[-\/](0[1-9]|1[0-2])[-\/]\d{4}$/;
and write another string that violates the following pattern:
const regex = /^(?!.*\bieee\b).+$/i;
---
string one = 31-12-3333  
string two = ieee
