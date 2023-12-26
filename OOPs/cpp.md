## Table of content

- [Constructors](#constructors)
- [4 Pillars of OOP](#4-pillars-of-oop)
  - [Encapsulation](#encapsulation)
  - [Abstraction](#abstraction)
    - [Classes](#classes)
    - [Objects](#objects)
    - [Abstract Classes](#abstract-classes)
  - [Inheritance](#inheritance)
  - [Polymorphism](#polymorphism)

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
- Using access specifiers, we can achieve encapsulation. Using this, we can, in turn, implement data abstraction. It’s not necessary that we only use private access.

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
- We just need to know about the methods of the objects that we need to call and the input parameters needed to trigger a specific operation, excluding the details of implementation and type of action performed to get the result.

> Real-life example: When you send an email to someone, you just click send, and you get the success message; what happens when you click send, how data is transmitted over the network to the recipient is hidden from you (because it is irrelevant to you).

- In the context of OOP, abstraction is achieved through the use of classes and objects.

> The class helps us to group data members and member functions using available access specifiers. A Class can decide which data members will be visible to the outside world and not. Access specifiers are the main pillar of implementing abstraction in C++.

##### Advantages Of Abstraction

- Only you can make changes to your data or function, and no one else can.
- It makes the application secure by not allowing anyone else to see the background details.
- Increases the reusability of the code.
- Avoids duplication of your code.

> Encapsulation and abstraction differ as binding and hiding respectively.

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
- When the inheritance is private, the private methods in the base class are inaccessible in the derived class.

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

- Single inheritance - In single inheritance, one class can extend the functionality of another class. There is only one parent class and one child class in single inheritances.

- Multilevel inheritance - When a class inherits from a derived class, and the derived class becomes the base class of the new class, it is called multilevel inheritance. In multilevel inheritance, there is more than one level.

- Multiple inheritance - In multiple inheritance, a class can inherit more than one class. This means that a single child class can have multiple parent classes in this type of inheritance.

> For using multiple inheritance, simply specify each base class (just like in single inheritance), separated by a comma.

- Hierarchical inheritance - In hierarchical inheritance, one class is a base class for more than one derived class.

- Hybrid inheritance - Hybrid inheritance is a combination of more than one type of inheritance. For example, A child and parent class relationship that follows multiple and hierarchical inheritances can be called hybrid inheritance.

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

### Polymorphism

- Polymorphism is a concept that allows you to perform a single action in different ways.
- Polymorphism is the combination of two Greek words. The poly means many, and morphs means forms.

> Real-life example: A person at the same time can have different characteristics. Like a man at the same time is a father, a husband, and an employee. So the same person possesses different behavior in different situations. This is called polymorphism.

#### Compile Time Polymorphism

- Compile-time polymorphism is also known as static polymorphism. This type of polymorphism can be achieved through function overloading or operator overloading.

##### Function overloading

- When there are multiple functions in a class with the same name but different parameters, these functions are overloaded.
- The main advantage of function overloading is that it increases the program’s readability.
- Functions can be overloaded by using different numbers of arguments or by using different types of arguments.

##### Operator Overloading

- C++ also provides options to overload operators. For example, we can make the operator (‘+’) for the string class to concatenate two strings.
- We know that this is the addition operator whose task is to add two operands.
- When placed between integer operands, a single operator, ‘+,’ adds them and concatenates them when placed between string operands.
- It can be used only for user-defined operators(objects, structures) but cannot be used for in-built operators(int, char, float, etc.).
- Operators = and & are already overloaded in C++ to avoid overloading them.
- The precedence and associativity of operators remain intact.

#### Runtime polymorphism

- Runtime polymorphism is also known as dynamic polymorphism. Method overriding is a way to implement runtime polymorphism.

##### Method overriding

- Method overriding is a feature that allows you to redefine the parent class method in the child class based on its requirement.
- In other words, whatever methods the parent class has by default are available in the child class. But, sometimes, a child class may not be satisfied with parent class method implementation. The child class is allowed to redefine that method based on its requirement. This process is called method overriding.

**Rules for method overriding:**

- The parent class method and the method of the child class must have the same name.
- The parent class method and the method of the child class must have the same parameters.
- It is possible through inheritance only.

> The destructor of a class cannot be overloaded in C++ programming. Increment operator, constructor, and new and delete can be overloaded.
