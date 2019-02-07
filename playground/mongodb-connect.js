const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Çonnected to MongoDB server');

    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Walk the dog',
        complete: true
        }, (err, result) => {
        if(err){
            return consolse.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // db.collection('Users').insertOne({
    //     _id: 234,
    //     name: 'Elfin Nodejs',
    //     age: 30,
    //     location: 'Jalan By Pass Ngurah Rai, Gang Mina Utama No 1, Bali 80223'
    //     }, (err, result) => {
    //     if(err){
    //         return consolse.log('Unable to insert user', err);
    //     }

    //     console.log(result.ops[0]._id);
    // });

    client.close();
});