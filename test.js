import test from 'ava';
import faker from './index.js';

test('faker return type to be object', t => {
    t.is(typeof faker(), 'object');
});

test('faker boolean return type to be boolean', t => {
    t.is(typeof faker().boolean(), 'boolean');
});

test('faker string return type to be string', t => {
    t.is(typeof faker().string(), 'string');
});

test('faker age return type to be number', t => {
    t.is(typeof faker().age(), 'number');
});

test('faker animal return type to be string', t => {
    t.is(typeof faker().animal(), 'string');
});

test('faker integer return type to be number', t => {
    t.is(typeof faker().integer(), 'number');
});

test('faker float return type to be number', t => {
    t.is(typeof faker().float(), 'number');
});

test('faker gende return type to be string', t => {
    t.is(typeof faker().gender(), 'string');
});

test('faker superhero return type to be string', t => {
    t.is(typeof faker().superhero(), 'string');
});

test('faker profession return type to be string', t => {
    t.is(typeof faker().profession(), 'string');
});

test('faker ip return type to be string', t => {
    t.is(typeof faker().ip(), 'string');
});

test('faker letter return type to be string', t => {
    t.is(typeof faker().letter(), 'string');
});

test('faker word return type to be string', t => {
    t.is(typeof faker().word(), 'string');
});

test('faker sentence return type to be string', t => {
    t.is(typeof faker().sentence(), 'string');
});

test('faker paragraph return type to be string', t => {
    t.is(typeof faker().paragraph(), 'string');
});

test('faker domain return type to be string', t => {
    t.is(typeof faker().domain(), 'string');
});

test('faker email return type to be string', t => {
    t.is(typeof faker().email(), 'string');
});

test('faker firstName return type to be string', t => {
    t.is(typeof faker().firstName(), 'string');
});

test('faker lastName return type to be string', t => {
    t.is(typeof faker().lastName(), 'string');
});

test('faker url return type to be string', t => {
    t.is(typeof faker().url(), 'string');
});

test('faker tld return type to be string', t => {
    t.is(typeof faker().tld(), 'string');
});

test('faker browser return type to be string', t => {
    t.is(typeof faker().browser(), 'string');
});

test('faker game return type to be string', t => {
    t.is(typeof faker().game().title(), 'string');
});
