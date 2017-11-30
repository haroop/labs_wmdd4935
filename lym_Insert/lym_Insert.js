let mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if(err) 
        console.log(err);
    let database = db.collection('users');
    //console.log(database);
    let data;
    data = {firstName: process.argv[2], lastName: process.argv[3]};
    //console.log(data);
    database.insert(data);
    console.log(JSON.stringify(data));
    db.close();
});