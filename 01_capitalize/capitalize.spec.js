import { capitalize } from "./capitalize.js"

test("The first capitalized letter in 'aAbcd' should be 'A'",()=>{
	expect(capitalize('aAbcd')).toBe('A');
});

test("There first capitalized letter in 'The Matrix' should be 'T' ",()=>{
	expect(capitalize('The Matrix')).toMatch(/T/);
});

test("There is a capitalized letter in 'The Matrix' ",()=>{
	expect(capitalize('The Matrix')).toMatch(/[A-Z]/);
});

test("There is no capitalized letter in 'the matrix' ",()=>{
	expect(capitalize('the matrix')).not.toMatch(/[A-Z]/);
});

test("The first capitalized letter in 'this_is_a_BigShort' should be B ",()=>{
	expect(capitalize('this_is_a_BigShort')).toMatch(/B/);
});
