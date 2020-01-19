# Online Locket Reservation
Online ticket reservations are made to make it easier for customers to order tickets for events, making it easier for confirmation and of course will be very helpful so that customers can easily buy tickets without having to come to the counter directly. In this project only displays the API (backend) and does not display the frontend.




## Installing

to install this Application

### 1. Clone This Project

```
$ git clone https://github.com/nuriindayani/Online_Locket_Reservation.git
```

### 2. Install This Project

use npm

```
$ npm install
```

or use yarn

```
$ yarn add
```

### 3. Run This Project

```
$ node index.js
```

## Using This Project
This project can be tested in Postman, by importing the db_gorry.sql database, after importing it then run the xampp control panel.
### 1. to create event

Method : POST

```
localhost:4444/api/v1/event
```

### 2. to create location

Method : POST

```
localhost:4444/api/v1/location
```

### 3. to create ticket

Method : POST

```
localhost:4444/api/v1/ticket
```

### 4. to get info about event

Method : GET

```
localhost:4444/api/v1/get_info
```



### 5. to create transaction 

Method : POST

```
localhost:4444/api/v1/purchase
```

### 6. to get info about transactions

to get all transaction

Method : GET

```
localhost:4444/api/v1/get_purchases
```


to get transaction by id

```
localhost:4444/api/v1/get_purchase/:id
```

example:
```
localhost:4444/api/v1/get_purchase/21
```

