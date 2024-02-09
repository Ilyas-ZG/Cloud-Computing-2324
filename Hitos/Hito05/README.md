## Hito 5: Diseño y test de un microservicio :

- [Justificación técnica del framework elegido para el microservicio ](#item1)
- [Diseño en general del API](#item2)
- [Tests](#item3)
- [Logs](#item4)


## Justificación técnica del framework elegido para el microservicio <a name="item1"></a>
The justification for the election of the framework can be found in a previous hito, to access click [here](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/Hitos/Hito02/README.md)  

## Diseño en general del API <a name="item2"></a>  
In our case, we used Express for the API design, featuring two main routes, "car" and "user," each providing specific functionalities. Below is the description of each route and its functionality:  

[carRoute](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/routes/carRoutes.js):  
- GET "/cars": Displays all available cars.
- POST "/cars": Adds a new car to the database.
- GET "/cars/:id": Retrieves information about a specific car using its identifier.
- PUT "/cars/:id": Updates information for a specific car using its identifier.
- DELETE "/cars/:id": Deletes a car from the database using its identifier.

These operations correspond to the functionalities required to address the user's request outlined in the user-story "[HU-1: Add and delete Car.](https://github.com/Ilyas-ZG/Cloud-Computing-2324/issues/3)"

[userRoute](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/routes/userRoutes.js):
- GET "/users": Displays all registered users.
- POST "/users": Adds a new user to the database.
- GET "/users/:id": Retrieves information about a specific user using its identifier.
- PUT "/users/:id": Updates information for a specific user using its identifier.
- DELETE "/users/:id": Deletes a user from the database using its identifier.

These operations cover the functionalities needed for account creation ("[HU-4: Create account](https://github.com/Ilyas-ZG/Cloud-Computing-2324/issues/6) ") and account modification ("[HU-5: Account editing](https://github.com/Ilyas-ZG/Cloud-Computing-2324/issues/7)").

## Tests <a name="item3"></a> 
Unit tests have been created for each endpoint of the API using the Chai framework. These tests verify JSON responses and status codes for different scenarios. For example, in the case of the GET test on the "[/cars](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/tests/car.test.js)" endpoint, a response with a status code of 200 indicates that the request was processed correctly.  
  
![image](https://github.com/Ilyas-ZG/Cloud-Computing-2324/assets/116302871/1e64e8a9-6dbf-4134-b150-b6f726b369e7)  

## Logs <a name="item4"></a>
Because our project doesn't require much, the Morgan framework can help by providing a minimalist, lightweight solution that offers only essential information, particularly related to HTTP requests. After installing Morgan with the following command in the terminal:  
```
npm install morgan
```  
We use the following line in our [index](https://github.com/Ilyas-ZG/Cloud-Computing-2324/blob/main/index.js).js  
```
app.use(morgan('combined'));
```
This provides real-time information about the visited routes and the status codes returned by the API.

