## Table of content

## What is Relational Model?

- The relational model is a database management system framework that organizes data into tables (each of which is assigned a unique name) with rows and columns, using keys to establish relationships between tables.
- It ensures data integrity, reduces redundancy, and provides a structured approach to data storage and retrieval.
- A **row in a table represents a relationship among a set of values**, and **table is collection of such relationships**.

### What is Tuple?

- A single row of the table representing a single data point / a unique record.

### What is Columns?

- Represents the attributes of the relation.
- Each attribute, there is a permitted value, called **domain of the attribute**. (it means that each column in a table has a specified set of valid values, The domain defines the data type and range of values that a particular attribute can take)
- For example, if you have an attribute representing ages, the domain might be integers between 0 and 120. This constraint helps maintain data consistency and integrity in the database.

### What is Relational Schema?

- It is basically the structure and design of the relation, containes name of relation, and all the common attribute/columns.

### What is Degree of table?

- The number of attributes or columns in a given relation/table.

### What is Cardinality?

- Total number of rows/tuples in a given relation/table.

### Common Relational Model DBMS

- Oracle, IBM, MySQL, MS Access.

## Properties of a Table or Relational model

- The name of relation is distinct among all other relation. (can't have same entity product and product)
- The values have to be atomic. Can’t be broken down further. (let suppose you create a column for name and value is **Robin hood** you can't break it further like **Robin** and **hood** )
- The name of each attribute/column must be unique.
- Each tuple must be unique in a table.
- The sequence of row and column has no significance. ( the below both table are same)

  STUDENT
  | name | roll_no | age |
  | ----- | ------- | --- |
  | robin | 100 | 20 |

  STUDENT
  | name | age | roll_no |
  | ----- | --- | ------- |
  | robin | 20 | 100 |

- Tables must follow integrity constraints - it helps to maintain data consistency across the tables.

## Keys in Relational model

### Super key (SK)

- A superkey is a set of one or more attributes (columns) that, taken collectively, can uniquely identify a tuple (row) in a table

  | EmployeeID | FirstName | LastName | Department  | contact_no_last_three_digit |
  | ---------- | --------- | -------- | ----------- | --------------------------- |
  | 1          | John      | Smith    | Engineering | 122                         |
  | 2          | Jane      | Doe      | Marketing   | 333                         |
  | 3          | Bob       | Johnson  | Engineering | 221                         |

- EmployeeID is unique and can identify a specific employee, a combination like (FirstName,LastName, contact_no_last_three_digit) could also be a superkey.

### Candidate key (CK)

- A candidate key is a minimal / minimum subset of superkey, meaning it is a set of attributes (columns) that uniquely identifies each tuple (row) in a table, and removing any attribute from the set would cause the uniqueness property to be lost.
- It contains no redundant attribute.

  | EmployeeID | FirstName | LastName | Department  |
  | ---------- | --------- | -------- | ----------- |
  | 1          | John      | Smith    | Engineering |
  | 2          | Jane      | Doe      | Marketing   |
  | 3          | Bob       | Johnson  | Engineering |

  Possible candidate keys could include:

  Candidate Key 1: (EmployeeID)

  Uniquely identifies each employee.

  Candidate Key 2: (FirstName, LastName)

  Also uniquely identifies each employee.

  Both of these sets of attributes are candidate keys because they uniquely identify each tuple in the table, and removing any attribute from the set would result in a loss of uniqueness.

  In this example, either EmployeeID or the combination of FirstName and LastName can serve as a candidate key for the Employees table.

- Candidate Key value shouldn’t be NULL.

### Primary key (PK)

- It the subset of candidate key, only have 1 key that Uniquely identify each tuple.

### Alternate key (AK)

- All Candidate key except Primary key.
- C.K - P.K = A.K

### Foreign key (FK)

- It creates relation between two tables.
- A relation, say r1, may include among its attributes the PK of an other relation, say r2. This attribute is called FK from r1 referencing r2.
- The relation r1 is aka Referencing (Child) relation of the FK dependency, and r2 is called Referenced (Parent) relation of the FK.
- FK helps to cross reference between two different relations.

  Customers Table:

  | CustomerID | CustomerName | Country |
  | ---------- | ------------ | ------- |
  | 1          | ABC Inc.     | USA     |
  | 2          | XYZ Ltd.     | Canada  |
  | 3          | MNO Corp.    | UK      |

  Orders Table:

  | OrderID | CustomerID | OrderDate  | TotalAmount |
  | ------- | ---------- | ---------- | ----------- |
  | 101     | 1          | 2023-01-15 | 500.00      |
  | 102     | 2          | 2023-01-16 | 750.00      |
  | 103     | 1          | 2023-01-17 | 200.00      |

  - In the Orders table, the CustomerID column is a foreign key that refers to the CustomerID column in the Customers table. This relationship indicates that each order is associated with a specific customer.

### Composite key

- Primary key formed using at least 2 attributes.

### Compound key

- Primary key which is formed using 2 Foreign key.

### Surrogate key

- Synthetic Primary key.
- Generated automatically by DB, usually an integer value.
- May be used as Primary key.

  ![image](https://github.com/subrat611/Core-Subject-Notes/assets/77252075/f2fdf75f-8015-4d47-a47a-6340cfea83d1)

