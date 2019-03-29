var Complex = /** @class */ (function () {
    function Complex(im, rem) {
        this.im = im;
        this.rem = rem;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.rem + obj.rem, this.im + obj.im);
    };
    Complex.prototype.sub = function (obj) {
        return new Complex(this.rem - obj.rem, this.im - obj.im);
    };
    Complex.prototype.modul = function (obj) {
        return new Complex(Math.sqrt(Math.pow(this.rem + obj.rem, 2)), Math.sqrt(Math.pow(this.im + obj.im, 2)));
    };
    Complex.prototype.toString = function () {
        console.log(this.rem + " " + this.im);
    };
    return Complex;
}());
var comp = new Complex(3, 2);
var com2 = new Complex(6, 2);
var dodawanie_wynik = comp.add(com2);
console.log(dodawanie_wynik);
