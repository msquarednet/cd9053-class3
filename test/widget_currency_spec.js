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
WidgetCurrency.prototype.convert = function(toBase, rates) {
       var ratio = rates[this.base]/rates[toBase];
       this.amt = this.amt*ratio;
       this.base= toBase;
}
WidgetCurrency.prototype.convert2 = function(toBase,exchangeRateFinder, cb){
    var that = this;
    exchangeRateFinder.getRates(function(exchangeRates){
        console.log(that);
        var ratio = exchangeRates[that.base]/exchangeRates[toBase]; 
        that.amount = that.amount*ratio;
        that.base = toBase;
        cb();
    });
}
WidgetCurrency.prototype.callApi = function(cb) {   //pass in callback function
    var mesage = this.base.toUpperCase();
    setTimeout(function() {
        cb("howdy world");
    }, 1000);
}


describe("WidgetCurrency", function() {    
    describe("call api", function(){
       var result;
       beforeEach(function(done){   //(done)
           var currency = new WidgetCurrency();
           currency.callApi(function(msg){
               console.log(msg);
               result = msg;
               done();
           });
       });
        it("result is howdy world", function() {
        expect(result).toEqual('howdy world');
        });
    });   
    
    
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
    
    describe("convert", function() {
        var currency;
        beforeEach(function() {
            var exchangeRates = {
                foo: 5,
                bar: 10,
                buzz: 100
            }
            currency = new WidgetCurrency("foo", 20);
            currency.convert("bar", exchangeRates);
        });
        describe("converting 20 foo", function() {
            it("base should be bar", function() {
                expect(currency.base).toEqual("bar");
            });
            it("amt should be 10", function() {
                expect(currency.amt).toEqual(10);
            });
        });
    });


    describe("convert2", function() {
        var currency;
        beforeEach(function(done) {
            var exchangeRates = {
                foo: 5,
                bar: 10,
                buzz: 100
            }
            var exchangeFinder = {
                getRates: function(cb){
                    cb(exchangeRates);
                }
            }
            currency = new WidgetCurrency("foo", 20);
            currency.convert2("bar", exchangeFinder, function() {
                done();
            });
        });
        describe("converting 20 foo", function() {
            it("base should be bar", function() {
                expect(currency.base).toEqual("bar");
            });
            it("amt should be 10", function() {
                expect(currency.amt).toEqual(20);
            });
        });
    });



    
});
// one expectation per 'it'

//also possible good...
//WidgetCurrency.prototype = {
//     display: function(){
//         return [this.base, "|", this.amount].join(" ");
//     }, 
//     convert : function(toBase,exchangeRates){
//         var ratio = exchangeRates[this.base]/exchangeRates[toBase]; 
//         this.amount = this.amount*ratio;
//         this.base = toBase;
//     }
// };