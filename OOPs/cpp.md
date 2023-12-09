## Table of content

- [Constructors](#constructors)

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
