## Table of content

- [Definition](#definition)
- [Class](#class)
  - [Syntax](#syntax)
  - [Empty class](#empty-class)
- [Access modifiers](#access-modifiers)
- [Object](#object)
  - [Syntax](#syntax-1)
- [Why do we need object-oriented programming?](#why-do-we-need-object-oriented-programming)
- [Example of OOPs in the Industry](#example-of-oops-in-the-industry)
- [Constructors](#constructors)
  - [Types of Constructors](#types-of-constructors)
- [Constructor Overloading](#constructor-overloading)
- [Destructor](#destructor)

## Definition

- Object-Oriented Programming is basically a programming style that we used to follow in modern programming.
- Object-Oriented programming or OOPs refers to the language that uses the concept of class and object in programming.
- The main objective of OOPs is to implement real-world entities such as polymorphism, inheritance, encapsulation, abstraction, etc.
- The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function.

## Class

- A class is a logical entity used to define a new data type.
- A class is a user-defined type that describes what a particular kind of object will look like. Thus, a class is a template or blueprint for an object.
- Data encapsulation is supported with “class”.
- The class consists of both `data` and `functions`.
  - The data in a class is called a `member`.
  - Functions in the class are called `methods`.
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
- By default, in C++, all class members are `private` if you don't specify an access specifier.
- It sets some restrictions on the class members from accessing the outside functions directly.

- **Public:** All the class members with a public modifier can be accessed from anywhere(inside and outside the class).
- **Private:** All the class members with a private modifier can only be accessed by the member function inside the class.
- **Protected:** The access level of a protected modifier is within the class and outside the class through child class (or subclass). If you do not make the child class, it cannot be accessed outside the class.

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

- Constructors are special class functions that perform the initialization of every object.
- In C++, the constructor is automatically called when an object is created.
- It is a special method of the class because it does not have any return type.
- It has the same name as the class itself.
- A constructor initializes the class data members with garbage value if we don’t put any value to it explicitly.
- The constructor must be placed in the public section of the class because we want the class to be instantiated anywhere.
- For every object in its lifetime constructor is called only once at the time of creation.

### Types of Constructors

- Default constructor
- Parameterized Constructor
- Copy Constructor

#### Default constructor

- A constructor that doesn't take any argument or has no parameters is known as a default constructor. In the example above, class_name() is a default constructor.

```cpp
class class_name{
  int data_member1;
  string data_member2;
  //default constructor
  public:
    class_name(){
      // initializing data members with their default values
      data_member1 = 69;
      data_member2 = "Coding Ninjas";
    }
};
```

- NOTE: If we have not defined a constructor in our class, the C++ compiler will automatically create a default constructor with an empty code and no parameters, which will initialize data members with garbage values.

#### Parameterized Constructor

- The parameterized constructor takes its arguments provided by the programmer. These arguments help initialize an object when it is created.

```cpp
class class_name{
  int data_member1;
  string data_member2;
  //parameterized constructor
  public:
    class_name(int num, string str){
      // initializing data members with values provided
      data_member1 = num;
      data_member2 = str;
    }
};
```

#### Copy Constructor

- These are a particular type of constructor that takes an object as an argument and copies values of one object’s data members into another object.
- As the name suggests, you Copy means to copy the values of one Object into another Object of Class. This is used for Copying the values of a class object into another object of a class, so we call them Copy constructor and for copying the values.
- We have to pass the object’s name whose values we want to copy, and when we are using or passing an object to a constructor, we must use the `&` ampersand or address operator.
- If we don’t define our own copy constructor, the C++ compiler creates a default copy constructor for each class which does a memberwise copy between objects.

```cpp
class class_name{
  int data_member1;
  string data_member2;
  public:
    // & other-wise is take as an call by value which goes into a loop of constructor calling.
    class_name(class_name &obj){
      // copies data of the obj parameter
      data_member1 = obj.data_member1;
      data_member2 = obj.data_member2;
    }
};
```

## Constructor Overloading

- Constructor overloading can be defined as the concept of having more than one constructor with different parameters so that every constructor can perform a different task.
- The criteria to overload a constructor is to differ the number of arguments or the type of arguments. The corresponding constructor is called depending on the number and type of arguments passed.

```cpp
class smartphone{

//Data Members(Properties)
string model;
int year_of_manufacture;
bool _5g_supported;

public:
  //constructor with 0 parameter
  smartphone(){
    model = "unknown";
    year_of_manufacture = 0;
    _5g_supported = false;
  }

  //constructor with 2 parameter
  smartphone(string model_string, bool _5g_){
    model = model_string;
    _5g_supported = _5g_;
  }

  //constructor with 3 parameter
  smartphone(string model_string, int manufacture, bool _5g_){
    //initialising data members
    model = model_string;
    year_of_manufacture = manufacture;
    _5g_supported = _5g_;
  }

};

int main(){
//creating objects of smartphone class
// using constructor with 0 parameter
smartphone unknown;
//using constructor with 2 parameter
smartphone redmi("Note 7 Pro", false);
// using constructor with 3 parameter
smartphone iphone("iphone 11", 2019, false );
}
```

## Destructor

- A destructor is a special member function that works just opposite to a constructor; unlike constructors that are used for initializing an object, destructors destroy (or delete) the object.
- The purpose of the destructor is to free the resources that the object may have acquired during its lifetime.
- The thing is to be noted here, if the object is created by using new or the constructor uses new to allocate memory that resides in the heap memory or the free store, the destructor should use `delete` to free the memory.

```cpp
~class_name(){
  //Some code
}
```

### When is a destructor called

A destructor function is called automatically when:

- The object goes out of scope.
- The program ends.
- A scope (the { } parenthesis) containing local variable ends.
- A delete operator is called.

### Destructor rules

- The name should begin with a tilde sign(~) and match the class name.
- There cannot be more than one destructor in a class.
- Unlike constructors that can have parameters, destructors do not allow any parameter.
- They do not have any return type, not even void. I
- A destructor should be declared in the public section of the class.
- The programmer cannot access the address of the destructor.
- It has no return type, not even void.
- When you do not specify any destructor in a class, the compiler generates a default destructor and inserts it into your code.

### Shallow copy

### Deep copy

## Destructor

## Static keyword in properties & methods

## HW

- Pedding & greedy alignment (in class & object)
