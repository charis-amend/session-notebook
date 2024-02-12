# databases

#### server:

- a program running 24/7 that is designed to provide services to other computers or devices
- it can host a variety of services, such as a web server, an email server, a file server, or a database server
- we have used Next.js API routes as a server to serve data (from a data.js file in the same project).

#### database:

- program to host and manage a database
- manages the data stored in the database
- available to users and applications that need to access it.
- data storage in a database is persistent!

## non SQL databases

for example: mongo DB

1. Database
   1. Collections
      1. Documents
         1. Field
            1. (key // value)

### Database:

A MongoDB database is a collection of data

### Collection:

- A collection is a grouping of MongoDB entries called documents.
- A collection is a equivalent of a table in a relational database system.
- A collection exists within a single database.

### Document:

- A MongoDB document is a JSON-like data structure that consists of key-value pairs.
- Documents can have different fields.

### Field:

- In MongoDB, a field is a key-value pair that is stored in a document.
- The field key is a string that identifies the field, and the field value is the data stored in the field.

## SQL databases

== "relational databases"

- mySQL
- Postgres sql
- sql lite (small database)

## advantage with noSQL

- if i want to add a column for emails in for example the users table in a sql database, then this gets really complicated, if i already have existing data and all the existing users wont have an email there is an empty field.
- in noSQL i just add it to "documents"

#### structure of database:

1. database
   1. table1
      1. data === USERS
         1. id=1, user=exampleName
         2. id=2, user=anotherPerson
   2. table2
      1. data === ORDERS
         1. id=1, order=something, users=2
         2. id=2, order=other stuff, users=999

> can create references betwteen tables
> done with id
> order#1 is done by user#2 because column in orders contains a reference column with users and its IDs.

# Database Relationships

#### 1 : n

- one user can have multiple orders
- 1 user : n orders
- or:
- n user : 1

#### 1 : 1 "one to one"

- 1 : 1
- one-to-one relationship in MongoDB exists when one document in one collection is related to exactly one document in another collection.
- This can be implemented by storing a reference to the related document in any of the two collections. The direction does not matter in this case. One-to-one relationships only make sense in certain special cases. For simplicity sake, think about adding the fields of one collection into the other instead.

#### n : m "many to many"

- n = authors table
- m = books
  - if:
  - author1 wrote book2 && author1 and author2 wrote together book3
  - then:
  - create a intermediate table:
  - author // book
  - author1 = book2
  - author1 = book3
  - author2 = book3

# example

data platform --- mongoDB
cloud database --- atlas // compass

- searching in filter in data services in documents:
  use always object:
  {joke: "joke 5"}
