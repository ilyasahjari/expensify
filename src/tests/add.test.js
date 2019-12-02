const add = (a, b) => a + b;
const generateGreeting = (name='Anonymous') => `Hello ${name}!`

test('should add two numbers', ()=>{
    const result = add(3,4);
    expect(result).toBe(7)
})

test('should read the name', ()=>{
    const result = generateGreeting("ilyas");
    expect(result).toBe("Hello ilyas!")
})

test('should read the name', ()=>{
    const result = generateGreeting();
    expect(result).toBe("Hello Anonymous!")
})