const expect = chai.expect
describe('checks the index of the dice', function () {
  it('gives the correct index', function () {
    let {itemVal, itemNum} = calcNumber(['a','b','c','d','e','f'],3)
    expect(itemVal).to.deep.equal('d');
  })
})
describe('checks the status of green', function () {
  it('gives the status true after red plays', function () {
    let {red,green,yellow,blue} = greenStatus()
    expect(red).to.deep.equal(false);
    expect(green).to.deep.equal(true);
    expect(yellow).to.deep.equal(false);
    expect(blue).to.deep.equal(false);
  })
})
describe('checks the number of players in the game', function () {
  it('gives the total number of players', function () {
    length = itemInLocalStorage();
    expect(length).to.deep.equal(4);
  })
})
