### Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.

#### Creating a database and collection

To create a database use the MongoDB Compass Client's GUI.

1. To create a new database, run the following command in the MongoDB shell, replacing `mydatabase` with the name you want to give to your new database

        use mydatabase

2. To create a new collection called restaurants within your new database, 
run the following command:

        db.createCollection("restaurants")

3. To insert data into the restaurants collection, you can use the `insertOne()` method to add a single document to the collection, or the `insertMany()` method to add multiple documents at once. 

Here's an example document to insert into the collection:

    db.restaurants.insertOne({
    "restaurant_id": "12345",
    "name": "Reggie's Pizza",
    "borough": "Manhattan",
    "cuisine": "Italian"
    })

4. To find restaurants containing the letters `'Reg'` as three letters somewhere in their names, run the following query:

    db.restaurants.find(
    { name: /Reg/ },
    { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
    );

