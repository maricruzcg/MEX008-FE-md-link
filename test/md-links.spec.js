const readFile = require('../mdlinks');


describe('readFile', () => {

  it('is a function', () => {
    expect(typeof readFile.readFile).toBe('function');
  });

});
