/*globals describe it expect*/
var WidgetCurrency = function(base,amt) {
    this.base = base || "foo";
    this.amt = amt || 0;
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

    describe("setting values with constructor", function() {    
        describe("base", function() {
            it("set base to return bar", function() {
                var currency = new WidgetCurrency("bar");
                expect(currency.base).toEqual("bar");
            });
        });
        describe("amt", function() {
            it("set amt to return 10", function() {
                var currency = new WidgetCurrency(null,10);
                expect(currency.amt).toEqual(10);
            });
        });
    });    

    
    
});