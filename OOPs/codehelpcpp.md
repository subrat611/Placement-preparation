## Table of content

- [Definition](#definition)
- [Class](#class)
  - [Syntax](#syntax)
  - [Empty class](#empty-class)
- [Access modifiers](#access-modifiers)
- [Object](#object)
  - [Syntax](#syntax-1)
- [Why do we need object-oriented programming?](#why-do-we-need-object-oriented-programming)

## Definition

- Object-Oriented Programming is basically a programming style that we used to follow in modern programming.
- Object-Oriented programming or OOPs refers to the language that uses the concept of class and object in programming.
- The main objective of OOPs is to implement real-world entities such as polymorphism, inheritance, encapsulation, abstraction, etc.
- The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function.

## Class

- A class is a logical entity used to define a new data type.
- A class is a user-defined type that describes what a particular kind of object will look like. Thus, a class is a template or blueprint for an object.
- When a class is defined, no memory is allocated, but memory is allocated when it is instantiated (i.e., an object is created).

### Syntax

```cpp
class Class_name{
    //properties
    //methods
}; // class body
```

- class: class keyword is used to create a class in C++.

- Class_Name: The name of the class.

- class body: Curly braces surround the class body.

After closing curly braces, a semicolon(;) is used.

### Empty class

- A object `e1` of a `EmptyClass` have size of 1.

```cpp
#include <iostream>
using namespace std;

class EmptyClass {
    // no property
};

int main() {
    EmptyClass e1;

    cout << sizeof(e1); // 1
}
```

## Access modifiers

- C++ have 3 access modifiers: `public`, `private`, `protected`.
- The by default access modifier applied to the class is `private`.

## Object

- An object is an instance of a Class.
- It is an identifiable entity with some characteristics and behavior.
- When a class is defined, no memory is allocated, but memory is allocated when it is instantiated (i.e., an object is created).

## Syntax

```cpp

// creating object in c++
class_name objectName;

// creating an object dynamically in c++
class_name * objectName = new class_name();

// accessing properties/methods from dynamically allocated object

// de-referencing
(*objectName).property_name
(*objectName).method()

// arrow
objectName->property_name
objectName->method()

```

- The class’s default constructor is called, and it dynamically allocates memory for one object of the class.
- The address of the memory allocated is assigned to the pointer, i.e., objectName.

## Why do we need object-oriented programming?

- To make the development and maintenance of projects more effortless.
- To provide the feature of data hiding that is good for security concerns.
- We can solve real-world problems if we are using object-oriented programming.
- It ensures code reusability.

## Example of OOPs in the Industry

![image](https://github.com/subrat611/Placement-preparation/assets/77252075/d0d05c3f-f364-4b47-acb9-aba0ce8ad68e)

![image](https://github.com/subrat611/Placement-preparation/assets/77252075/a6cb7ac8-1178-4a34-b79b-38690586b310)

## Constructors

### Copy Constructor

### Shallow copy

### Deep copy

## Destructor

## Static keyword in properties & methods

## HW

- Pedding & greedy alignment (in class & object)
