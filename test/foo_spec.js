/*globals describe it expect*/
var foo = {};
describe("foo", function() {    
    it("exists", function() {
        expect(foo).toBeDefined();
    });
});