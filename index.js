import fakeBoolean from '@fakerjs/boolean';
import fakeInteger from '@fakerjs/integer';
import fakeFloat from '@fakerjs/float';
import fakeAge from '@fakerjs/age';
import fakeAnimal from '@fakerjs/animal';
import fakeGender from '@fakerjs/gender';
import fakeIP from '@fakerjs/ip';
import fakeLetter from '@fakerjs/letter';
import fakeString from '@fakerjs/string';
import fakeProfession from '@fakerjs/profession';

class Faker {
    fakeBoolean() {
        return fakeBoolean();
    }
    fakeInteger() {
        return fakeInteger();
    }
    fakeFloat() {
        return fakeFloat();
    }
    fakeAge() {
        return fakeAge();
    }
    fakeGender() {
        return fakeGender();
    }
    fakeIP() {
        return fakeIP();
    }
    fakeLetter() {
        return fakeLetter();
    }
    fakeString() {
        return fakeString();
    }
    fakeProfession() {
        return fakeProfession();
    }
    fakeAnimal() {
        return fakeAnimal();
    }
}

let faker = new Faker();
export default faker;
