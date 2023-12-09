## Table of content

- [Constructors](#constructors)
- [4 Pillars of OOP](#4-pillars-of-oop)
  - [Encapsulation](#encapsulation)
  - [Abstraction](#abstraction)
    - [Classes](#classes)
    - [Objects](#objects)
    - [Abstract Classes](#abstract-classes)
  - [Inheritance](#inheritance)

## Constructors

### Rules

1. Constructor does not have return type.
2. Constructor has the same name as the class that it belongs to.
3. Constructor must be public.

```cpp

#include <iostream>

using namespace std;

class Employee {
    public:
        Employee(string name, string company, int age) {
            Name = name;
            Company = company;
            Age = age;
        }

        string Name;
        string Company;
        int Age;

        void introduceYourself() {
            cout << "Name - " << Name << endl;
            cout << "Company - " << Company << endl;
            cout << "Age - " << Age << endl;
        }

};

int main() {
    Employee emp1 = Employee("salu", "pepsi", 45);
    emp1.introduceYourself();

    return 0;
}

```

## 4 Pillars of OOP

- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

### Encapsulation

- Encapsulation is the bundling of data (attributes) and the methods (functions) that operate on the data into a single unit known as a class.
- This concept helps in hiding the internal implementation details of an object from the outside world and only exposing what is necessary.
- It provides a way to control access to the data, preventing direct modification or access from outside the class.
- This is often referred to as `data hiding`.

```cpp

#include <iostream>

using namespace std;

class Employee {

    private:
        string Name;
        string Company;
        int Age;

    public:
        Employee(string name, string company, int age) {
            Name = name;
            Company = company;
            Age = age;
        }

        // setter & getter
        void setName(string name) {
            Name = name;
        }
        string getName() {
            return Name;
        }

        void setCompany(string company) {
            Company = company;
        }
        string getCompany() {
            return Company;
        }

        void setAge(int age) {
            // you can add validation as well
            if(age >= 18) Age = age;
        }
        int getAge() {
            return Age;
        }

        void introduceYourself() {
            cout << "Name - " << Name << endl;
            cout << "Company - " << Company << endl;
            cout << "Age - " << Age << endl;
        }

};

int main() {
    Employee emp1 = Employee("salu", "pepsi", 45);
    emp1.introduceYourself();

    emp1.setAge(29);
    emp1.getName();

    return 0;
}

```

- Encapsulation helps in achieving data abstraction, modularity, and improves the maintainability and flexibility of the code. It also allows the class to change its internal implementation without affecting the code that uses the class, as long as the external interface remains the same

### Abstraction

- Abstraction involves focusing on the essential features of an object while ignoring the non-essential details.
- It allows you to represent the core aspects of an object in a simplified way, making it easier to understand and work with.
- In the context of OOP, abstraction is achieved through the use of classes and objects.

#### Classes

- A class is a blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) that the objects of the class will have.
- It acts as a template that encapsulates the data and methods related to a particular entity.

#### Objects

- Objects are instances of a class. They represent real-world entities and encapsulate both data and behavior.
- Objects are created based on the blueprint defined by the class.

#### Abstract Classes

- Abstract classes in C++ are classes that cannot be instantiated. They often serve as a base class for other classes and can contain pure virtual functions.
- Pure virtual functions have no implementation in the abstract class and must be overridden by derived classes.

```cpp

#include <iostream>

using namespace std;

// base class
class AbstractEmployee {
    virtual void askForPromotion() = 0;
};

// derived class
class Employee:AbstractEmployee {

    private:
        string Name;
        string Company;
        int Age;

    public:
        Employee(string name, string company, int age) {
            Name = name;
            Company = company;
            Age = age;
        }

        // setter & getter
        void setName(string name) {
            Name = name;
        }
        string getName() {
            return Name;
        }

        void setCompany(string company) {
            Company = company;
        }
        string getCompany() {
            return Company;
        }

        void setAge(int age) {
            // you can add validation as well
            if(age >= 18) Age = age;
        }
        int getAge() {
            return Age;
        }

        void introduceYourself() {
            cout << "Name - " << Name << endl;
            cout << "Company - " << Company << endl;
            cout << "Age - " << Age << endl;
        }

        void askForPromotion() {
            if(Age > 30) {
                cout << "Name - " << Name << "got  promoted!" << endl;
            }else {
                cout << "No promotion for this employee" << endl;
            }
        }

};

int main() {
    Employee emp1 = Employee("salu", "pepsi", 45);

    emp1.askForPromotion();

    return 0;
}

```

- Abstraction helps in managing the complexity of large software systems by allowing you to focus on relevant details while hiding unnecessary complexities. It promotes code reusability and modularity, as well as providing a clear separation between the interface and the implementation of a class.

### Inheritance

- Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a class (called the derived or child class) to inherit properties and behaviors from another class (called the base or parent class).

#### Base Class (Parent Class)

- The class whose members (attributes and methods) are inherited is called the base class or parent class.
- It serves as a template for derived classes.

```cpp
class Shape {
public:
    void draw() {
        // Implementation of drawing
    }
};

```

#### Derived Class (Child Class)

- The class that inherits members from another class is called the derived class or child class.
- It can have additional members or override existing ones.

```cpp
class Circle : public Shape {
public:
    void draw() {
        // Implementation of drawing a circle
    }

    void calculateArea() {
        // Additional method specific to Circle
    }
};

```

#### Access Specifiers

- C++ supports three access specifiers: public, protected, and private.
- The choice of access specifier determines the visibility of the inherited members in the derived class.

```cpp
class BaseClass {
public:
    int publicVar;

protected:
    int protectedVar;

private:
    int privateVar;
};

class DerivedClass : public BaseClass {
    // 'publicVar' is public in DerivedClass.
    // 'protectedVar' is protected in DerivedClass.
    // 'privateVar' is not accessible in DerivedClass.
};

```

#### Types of Inheritance

- C++ supports different types of inheritance, including public, protected, and private inheritance, as well as multiple inheritance.

```cpp
// Public Inheritance
class DerivedClass : public BaseClass {
    // Members of BaseClass are inherited with public access
};

// Protected Inheritance
class DerivedClass : protected BaseClass {
    // Members of BaseClass are inherited with protected access
};

// Private Inheritance
class DerivedClass : private BaseClass {
    // Members of BaseClass are inherited with private access
};

```

#### Benefits of Inheritance

- **Code Reusability:** Inherited members can be reused in the derived class without rewriting their implementation.

- **Polymorphism:** Inheritance supports polymorphism, allowing objects of the derived class to be treated as objects of the base class.
