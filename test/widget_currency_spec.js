/*globals describe it expect*/
var WidgetCurrency = function() {
    this.base = "foo";
    this.amt = 0;
};

describe("WidgetCurrency", function() {    
    it("exists", function() {
        expect(WidgetCurrency).toBeDefined();
    });

    describe("defaults", function() {    
        it("base is foo", function() {
            var currency = new WidgetCurrency();
            //console.log(currency);
            expect(currency.base).toEqual("foo");
        });
        it ("amt is 0", function() {
            var currency = new WidgetCurrency();
            expect(currency.amt).toEqual(0);
        });
    });    
    
    
});