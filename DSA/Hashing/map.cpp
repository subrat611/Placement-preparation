#include <iostream>
#include <map>
#include <unordered_map>

using namespace std;

int main() {

    // <key, value>
    unordered_map<string, int> m;

    // Insertion

    // 1
    pair<string,int> p = make_pair("s", 10);
    m.insert(p);
    
    // 2
    pair<string,int> p2("k", 100);
    m.insert(p2);

    // 3
    m["a"] = 20;
    // m["s"] = 100; updation because s key present already
    // cout << m["unknowKey"] << endl; // a new key created if not available and print 0 (because of no value)

    
    
    // Search
    cout << m["s"] << endl; // 10
    cout << m.at("k") << endl; // 100

    cout << m.at("unknown") << endl; // out of range key not found
    cout << m["unknowKey"] << endl; // a new key created if not available and print 0 (because of no value)

    

    // Size
    cout << m.size() << endl;


    /**
     * To check the presence of key
     * if key present -> 1
     * else 0
    */
    cout << m.count("s") << endl; // 1



    // Erase
    m.erase("k");



    // Traversing
    for(auto i: m) {
        cout << i.first << " " << i.second << endl;
    }
    // using iterator 
    unordered_map<string, int> :: iterator it = m.begin(); // random order
    // map<string, int> :: iterator it = m.begin(); // order preserved

    while(it != m.end()) {
        cout << it->first << " " << it->second << endl;
        it++;
    }


    return 0;
}