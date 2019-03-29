class Complex{

    private im:number;
    private rem:number;

    constructor(im:number, rem:number){
        this.im = im;
        this.rem = rem;
    }

    add(obj:Complex){
        return new Complex(this.rem+obj.rem,this.im+obj.im);
    }

    sub(obj:Complex){
        return new Complex(this.rem-obj.rem,this.im-obj.im);
    }

    modul(obj:Complex) {
        return new Complex(Math.sqrt(Math.pow(this.rem + obj.rem,2)),Math.sqrt(Math.pow(this.im + obj.im,2)));
    }

    toString(){
        console.log(this.rem + " " + this.im);
    }
}


let comp = new Complex(3,2);
let com2= new Complex(6,2);
let dodawanie_wynik = comp.add(com2);

console.log(dodawanie_wynik);

