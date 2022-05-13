var expect = chai.expect

describe("MyFunction", function(){
    describe('#freshDeck', function(){
    it("Should create a card using a suit and card value", function(){
        var x = combineCard("Hearts", "King")
        expect(x).to.equal("King of Hearts");
        })
    })
})