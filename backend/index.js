const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'test';
const collectionName = 'myCol';

const main = async () => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({
        // age: {
        //     // $lt: 30
        //     // $nin: [46,22]
        //
        // }
        // $expr: {
        //     $function: {
        //         body: "function(lastName, firstName) { return lastName === 'Doe' && firstName === 'John'  }",
        //         args: ['$lastName','$firstName'],
        //         lang: 'js'
        //     }
        // }
        // $where: "this.age < 25 && this.lastName.includes('E')"
        lastName: {
            $regex: /do/,
            $options: 'i'
        }
    });

    const ar = await result.toArray();

    return ar.map( o => `${o.firstName} ${o.lastName}`);
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close() )