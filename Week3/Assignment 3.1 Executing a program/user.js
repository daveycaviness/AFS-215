class User{
    constructor(num1, num2, name = 'Davey', age = 35){
        this.num1 = num1;
        this.num2 = num2;
        this.name = name;
        this.age = age;
    }

greeting(){
return `Hello ${this.name}. Your current age is ${this.age}`;
    }

    add(){
        return this.num1 + this.num2;
    }

    sub(){
        return this.num1 - this.num2;
    }

    mult(){
        return this.num1 * this.num2;
    }

    div(){
        return this.num1 / this.num2;
    }

    add_str()
{
        return `${this.num1}${this.num2}`;
    }
}

module.exports = User;