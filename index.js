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
import superhero from '@fakerjs/superhero';

class Faker {
    boolean() {
        return boolean();
    }

    integer(options) {
        return integer(options);
    }

    float(options) {
        return float(options);
    }

    age(options) {
        return age(options);
    }

    gender(options) {
        return gender(options);
    }

    ip() {
        return ip();
    }

    letter(options) {
        return letter(options);
    }

    string(options) {
        return string(options);
    }

    profession(options) {
        return profession(options);
    }

    animal(options) {
        return animal(options);
    }

    superhero() {
        return superhero();
    }
}

const faker = new Faker();
export default faker;
