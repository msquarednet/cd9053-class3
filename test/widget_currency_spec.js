/*globals describe it expect beforeEach*/
var WidgetCurrency = function(base,amt) {
    this.base = base || "foo";
    this.amt = amt || 0;
    // this.display = function() {
    //     return this.base + " | " + this.amt;
    // }
};
WidgetCurrency.prototype.display = function() {
        return this.base + " | " + this.amt;
}

describe("WidgetCurrency", function() {    
    it("exists", function() {
        expect(WidgetCurrency).toBeDefined();
    });
    //var currency = new WidgetCurrency();
    var currency;
    beforeEach(function() {
        currency = new WidgetCurrency();
    });
    describe("defaults", function() {    
        it("base is foo", function() {            
            console.log(currency);  //note that 'display' doesnt show up because it is in prototype
            expect(currency.base).toEqual("foo");
            currency.amt = 100; //to mess with next 'it'
        });
        it ("amt is 0", function() {
            expect(currency.amt).toEqual(0);
        });
    });    

    describe("setting values with constructor", function() {    
        var currency;
        beforeEach(function() {
            currency = new WidgetCurrency("bar", 10);
        });
        describe("base", function() {
            it("set base to return bar", function() {
                expect(currency.base).toEqual("bar");
            });
        });
        describe("amt", function() {
            it("set amt to return 10", function() {
                expect(currency.amt).toEqual(10);
            });
        });
    });    

    describe("display", function() {
        var currency;
        beforeEach(function() {
            currency = new WidgetCurrency("buzz", 100);
        });
        describe("base is 'fuzz' and amt is 100", function() {
            it("is 'buzz' | 10", function() {
                expect(currency.display()).toEqual('buzz | 100');
            });
        });
    });
    
});
// one expectation per 'it'