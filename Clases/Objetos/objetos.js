/* OBJ. LITERAL/ No se puede sacar una copia, 
tiene que hacer objeto nuevo*/

const dog = {
    //key:value
    raza: 'quiltro',
    pero: 15,
    nombre: 'Suave Lomito',
    color: 'negro',
}

Object.entries(dog)//generar un arreglo de la info que contiene object

/*OBJ. CONSTRUCTOR*/

class Person {
    constructor(name, lastName) { //properties
        this.name = name,
            this.lastName = lastName
    }
    greeting() {
        console.log(`Hola a todas! mi nombre es ${this.name} ${this.lastName} `); //template string
    }
}

let miranda = new Person('Miranda', 'naranjo') //Instancia

class Coach extends Person {
    constructor(name, lastName) {
        super(name, lastName); //reserved word
        this.track = 'Front End';
    }
}


miranda.__proto__// Padre de la instancia del objeto
miranda.__proto__.__proto__//Padre del objeto constructor Person

miranda.age = 28; // add a property

miranda.hasOwnProperty('age');// True... tiene la propiedad que yo quiero consultar? devuelve boolean
miranda.hasOwnProperty('gender')// False

miranda.hasOwnProperty('greeting');//False, because this method is inherited from his father

miranda.__proto__ === fabian.__proto__; // Are they from the same father?

