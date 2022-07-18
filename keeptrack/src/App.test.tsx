import { render} from '@testing-library/react';
import {App }from './App';

it('renders learn react link', () => {
  render(<App />);

});

/* Truthiness */
// In tests, you sometimes need to distinguish between undefined, null, and false, but you sometimes do not want to treat these differently.
//  Jest contains helpers that let you be explicit about what you want.

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false


/** numbers */
// Most ways of comparing numbers have matcher equivalents.

it('test 2 + 2', ()=>{
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
});

/** Strings */

it('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

/** You can check if an array or iterable contains
 *  a particular item using toContain:  */

const list = ['boy', 'girl', 'kate', 'jane'];
it('check if list contains girl', ()=>{
  expect(list).toContain('girl');
  expect(new Set(list)).toContain('girl')
});

/** Exceptions  */
// if you want to test whether a particular function throws an error when it's called, use toThrow.

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

/** Testing Asynchronous Code */
// Jest needs to know when the code it is testing has completed, before it can move on to another test. 
//Jest has several ways to handle this.

/**promise  */
//Return a promise from your test, and Jest will wait for that promise to resolve. 
//If the promise is rejected, the test will fail.
// For example, let's say that fetchData returns a promise that is supposed to resolve to the string 'peanut butter'.
// We could test it with:

/*it('returned data is peanut', ()=>{
  return fetchData().then(data=>{
    expect(data).toBe('Peanut')
  })
}) */

/**
 * ASync / Await
 * 
 * Alternatively, you can use async and await in your tests. 
 * To write an async test, use the async keyword in front of the function passed
 *  to test. For example, the same fetchData scenario can be tested with:
 */

// it('the data is Peanut', async()=>{
//   const data = await fetchData();
//   expect(data).toBe('Peanut');
// })

// you can use Async, await, resolve and reject at the same time 
// it('data tobe Peanut', async()=>{
//   await expect(fetchData()).resolves.toBe('Peanut');
// })

// it('the fetch to fail with an error', async()=>{
//   await expect(fetchData()).rejects.toMatch('error')
// })

/** resolves and rejects matchers can be used in the expect statement. 
 * use the return assertion  */

// it('data returned to be Peanut', ()=>{
//   return expect(fetchData()).resolves.toBe('Peanut')
// });
// it('data is Peanut', ()=>{
//   return expect(fetchData()).rejects.toMatch('error')
// });