var MongoClient = require('mongodb');
var url="mongodb+srv://eyasina:c0W2slssudMIm5kd@cluster0.ecuhx2g.mongodb.net/?retryWrites=true&w=majority";
var config={useUnifiedTopology:true};
MongoClient.connect(url,config,function(err) {
    if (err){
 
      console.log("Connection Fail");

  } else{
      console.log("Connection Success")
  }
  }) 