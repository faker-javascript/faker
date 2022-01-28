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
import url from '@fakerjs/url';
import tld from '@fakerjs/tld';
import browser from '@fakerjs/browser';
import email from '@fakerjs/email';
import firstName from '@fakerjs/firstname';
import lastName from '@fakerjs/lastname';

class Faker {
    options = {};

    constructor(options) {
        this.options = options || {};
    }

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
        return gender({locale: this.options.locale || 'en_US', ...options});
    }

    ip() {
        return ip();
    }

    letter(options) {
        return letter({locale: this.options.locale || 'en_US', ...options});
    }

    string(options) {
        return string(options);
    }

    profession(options) {
        return profession({locale: this.options.locale || 'en_US', ...options});
    }

    animal(options) {
        return animal({locale: this.options.locale || 'en_US', ...options});
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
        return firstName({locale: this.options.locale || 'en_US', ...options});
    }

    lastName(options) {
        return lastName({locale: this.options.locale || 'en_US', ...options});
    }

    browser() {
        return browser();
    }

    url(options) {
        return url(options);
    }

    tld() {
        return tld();
    }
}

export default function faker(options) {
    return new Faker(options);
}
