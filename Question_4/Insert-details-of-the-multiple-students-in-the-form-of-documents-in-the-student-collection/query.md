# Insert details of the multiple students in the form of documents in the student collection

## Creating a databse in MongoDB

To create a database in MongoDB using the MongoDB shell use the following command.

```bash
> use <database-name>
> db.createCollection(<collection-name>)
```

To insert many documents in a collection enter the following command.

```bash
    db.students.insertMany([{
        "first_name": "Janessa",
        "last_name": "Bouchier",
        "email": "jbouchier0@google.co.jp",
        "gender": "Female",
        "university": "Northwest Polytechnical University Xi'an"
    },
    {
        "first_name": "Becca",
        "last_name": "Basant",
        "email": "bbasant1@linkedin.com",
        "gender": "Female",
        "university": "Tianjin Polytechnic University"
    },
    {
        "first_name": "Shell",
        "last_name": "Middle",
        "email": "smiddle2@e-recht24.de",
        "gender": "Male",
        "university": "Jain University, Centre for Management Studies"
    },
    {
        "first_name": "Bari",
        "last_name": "Egdale",
        "email": "begdale3@spiegel.de",
        "gender": "Female",
        "university": "Management Development Institute of Singapore, Tashkent"
    },
    {
        "first_name": "Gabriel",
        "last_name": "Comello",
        "email": "gcomello4@people.com.cn",
        "gender": "Male",
        "university": "United Business Institute"
}])
```
