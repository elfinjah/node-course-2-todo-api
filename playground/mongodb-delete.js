//const mongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Çonnected to MongoDB server');

    const db = client.db('TodoApp');

    // delete many
    // db.collection('Todos')
    //     .deleteMany({text: 'Eat Lunch'})
    //     .then((result) => {
    //         console.log(result);
    // });

    // delete one
    // db.collection('Todos')
    //     .deleteOne({text: 'Eat Lunch'})
    //     .then((result) => {
    //         console.log(result);
    // });

    // find One and Delete
    db.collection('Todos')
        .findOneAndDelete({complete: false})
        .then((result) => {
            console.log(result);
    });
    
    client.close();
});