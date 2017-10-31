const expect = chai.expect
describe('checks the status', function () {
  it('is a boolean', function () {
    expect(status(true)).to.deep.equal(true);
  })
})
