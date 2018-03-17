import { Age } from './../src/galactic-age.js';

describe('Age', function(){
  it('should calculate years ti days', function(){
    let years = new Age(10);
    expect(years.intoDays()).toEqual(3650);
  });
});
