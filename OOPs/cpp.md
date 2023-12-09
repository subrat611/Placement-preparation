## Table of content

- [Constructors](#constructors)
- [4 Pillars of OOP](#4-pillars-of-oop)
  - [Encapsulation](#encapsulation)

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
    Employee emp1 = new Employee("salu", "pepsi", 45);
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
    Employee emp1 = new Employee("salu", "pepsi", 45);
    emp1.introduceYourself();

    emp1.setAge(29);
    emp1.getName();

    return 0;
}

```

- Encapsulation helps in achieving data abstraction, modularity, and improves the maintainability and flexibility of the code. It also allows the class to change its internal implementation without affecting the code that uses the class, as long as the external interface remains the same
