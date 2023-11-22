class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    mostrarGeneracion() {
        if (this.edad >= 1994 && this.edad <= 2010) {
            return `Pertenece a la generacion Z y su rasgo caracteristico es la irreverencia`;
        }
        if (this.edad >= 1981 && this.edad <= 1993) {
            return `Pertenece a la generacion Y y su rasgo caracteristico es la frustracion`;
        }
        if (this.edad >= 1969 && this.edad <= 1980) {
            return `Pertenece a la generacion X y su rasgo caracteristico es la obsesion al exito`;
        }
        if (this.edad >= 1949 && this.edad <= 1968) {
            return `Pertenece a la generacion del Baby Boom y su rasgo caracteristico es la ambicion`;
        }
        if (this.edad >= 1930 && this.edad <= 1948) {
            return `Pertenece a la Silent Generation y su rasgo caracteristico es la austeridad`;
        }
        return "No pertenece a ninguna generacion de la tabla";
    }
    esMayorDeEdad() {
        return this.edad >= 18 ? "Es mayor" : "No es mayor";
    }
    mostrarDatos() {
        return `nombre: ${this.nombre}\nedad:${this.edad}\ndni:${
            this.dni
        }\nsexo:${this.sexo}\npeso:${this.peso}Kg\naltura:${
            this.altura
        }cm\nnacimiento:${
            this.nacimiento
        }\n${this.mostrarGeneracion()}\n${this.esMayorDeEdad()}`;
    }
}

const crearPersona = () => {
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const dni = parseInt(document.getElementById("dni").value);
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const peso = parseInt(document.getElementById("peso").value);
    const altura = parseInt(document.getElementById("altura").value);

    const persona = new Persona(nombre, edad, dni, sexo, peso, altura);

    alert(`${persona.nombre} creado con éxito`);
    return persona;
};

const info = document.getElementById("informacion");

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    const personaCreada = crearPersona();
    info.setAttribute("class", "d-block info p-4 mt-3");
    
});
