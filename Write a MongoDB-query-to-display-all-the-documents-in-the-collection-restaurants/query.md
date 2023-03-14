# Write a MongoDB query to display all the documents in the collection restaurants

## Creating a database and collection

To create a database use the MongoDB Compass Client's GUI (also create a collection within the database) and then follow the steps below.

1. Add dummy data to the database

   ```bash
   db.restaruants.insertMany(
       [
           {
               name:"Jhon Hotel",
               rating: 3.5,
               average_order_value: 200,
               location:"Not Mumbai"
           },
           {
               name:"Doe Hotel",
               rating:4.7,
               average_order_value:390,
               location:"Teri Sakinaka"}])
   ```

2. Fetching all the data from the collection.
   ```bash
   db.restaurants.find({})
   ```
