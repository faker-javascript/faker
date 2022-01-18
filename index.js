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
import word from '@fakerjs/word';
import sentence from '@fakerjs/sentence';
import paragraph from '@fakerjs/paragraph';
import domain from '@fakerjs/domain';
import email from '@fakerjs/email';
import firstName from '@fakerjs/firstname';
import lastName from '@fakerjs/lastname';

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

    word(options) {
        return word(options);
    }

    sentence(options) {
        return sentence(options);
    }

    paragraph(options) {
        return paragraph(options);
    }
    
    domain(options) {
        return domain(options);
    }

    email(options) {
        return email(options);
    }

    firstName(options) {
        return firstName(options);
    }

    lastName(options) {
        return lastName(options);
    }
}

const faker = new Faker();
export default faker;
