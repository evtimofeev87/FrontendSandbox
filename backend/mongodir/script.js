// db.myCol.insert([
//     {
//         firstName: 'Ivan',
//         lastName: 'Sidorov',
//         age: 22
//     },
//     {
//         firstName: 'Sergey',
//         lastName: 'Egorov',
//         age: 24
//     }
// ]);

db.myCol.updateOne(
    {firstName: "John"},
    {
        $set: {
                 "age": 46
        }
    }
)