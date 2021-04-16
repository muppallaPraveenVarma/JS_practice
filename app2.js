var WordExtractor = require("word-extractor");
var extractor = new WordExtractor();
var extracted = extractor.extract("file.doc");
extracted.then(function(doc) {
  console.log(doc.getBody());
});