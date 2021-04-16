var WordExtractor = require("word-extractor");
var extractor = new WordExtractor();
var extracted = extractor.extract("app.doc");
extracted.then(function(doc) {
  console.log(doc.getBody());
});
console.log('hello world');