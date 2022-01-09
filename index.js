import boolean from '@fakerjs/boolean';
import integer from '@fakerjs/integer';
import float from '@fakerjs/float';
import age from '@fakerjs/age';
import animal from '@fakerjs/animal';
import gender from '@fakerjs/gender';
import ip from '@fakerjs/ip';
import letter from '@fakerjs/letter';
import string from '@fakerjs/string';
import profession from '@fakerjs/profession';

class Faker {
    boolean() { return boolean(); }
    integer() { return integer(); }
    float() { return float(); }
    age() { return age(); }
    gender() { return gender(); }
    ip() { return ip(); }
    letter() { return letter(); }
    string() { return string(); }
    profession() { return profession(); }
    animal() { return animal(); }
}

let faker = new Faker();
export default faker;
