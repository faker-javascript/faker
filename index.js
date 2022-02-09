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
import game from '@fakerjs/game';
import house from '@fakerjs/house';
import sport from '@fakerjs/sport';
import blood from '@fakerjs/blood';
import computer from '@fakerjs/computer';
import camera from '@fakerjs/camera';

class Faker {
    _options = {};

    constructor(options) {
        this._options = options || {};
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
        return gender({locale: this._options.locale || 'en_US', ...options});
    }

    ip() {
        return ip();
    }

    letter(options) {
        return letter({locale: this._options.locale || 'en_US', ...options});
    }

    string(options) {
        return string(options);
    }

    profession(options) {
        return profession({locale: this._options.locale || 'en_US', ...options});
    }

    animal(options) {
        return animal({locale: this._options.locale || 'en_US', ...options});
    }

    game(options) {
        return game({locale: this._options.locale || 'en_US', ...options});
    }

    house(options) {
        return house({locale: this._options.locale || 'en_US', ...options});
    }

    sport(options) {
        return sport({locale: this._options.locale || 'en_US', ...options});
    }

    superhero() {
        return superhero();
    }

    blood() {
        return blood();
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
        return firstName({locale: this._options.locale || 'en_US', ...options});
    }

    lastName(options) {
        return lastName({locale: this._options.locale || 'en_US', ...options});
    }

    computer(options) {
        return computer({locale: this._options.locale || 'en_US', ...options});
    }

    camera(options) {
        return camera({locale: this._options.locale || 'en_US', ...options});
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
