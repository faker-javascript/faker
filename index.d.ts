interface OptionsInteger {
    min?: number;
    max?: number;
}
interface OptionsFloat {
    min?: number;
    max?: number;
    fixed?: number;
}
interface OptionsAge {
    type?: string;
}
interface OptionsAnimal {
    type?: string;
    locale?: string;
}
interface OptionsGender {
    locale?: string;
    extra?: string[];
}
interface OptionsLetter {
    casing?: string;
    locale?: string;
}
interface OptionsString {
    length?: number;
    keyspace?: string;
}
interface OptionsProfession {
    rank?: boolean;
    locale?: string;
}
declare class Faker {
    boolean(): boolean;
    integer(options?: OptionsInteger): number;
    float(options?: OptionsFloat): number;
    age(options?: OptionsAge): number;
    animal(options?: OptionsAnimal): string;
    gender(options?: OptionsGender): string;
    ip(): string;
    letter(options?: OptionsLetter): string;
    string(options?: OptionsString): string;
    profession(options?: OptionsProfession): string;
    superhero(): string;
}
declare const faker: Faker;
export default faker;
