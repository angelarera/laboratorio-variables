// Interface
interface GrupoMusical {
    nombre: string;
    añoFundacion: number;
    activo: boolean;
    genero: string;
};

// Estilos de música
const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

// Estilos de texto
const estiloNombre = "font-weight: 900; font-size: 18px; background-color: green;"

// Grupos musicales
const grupoMusical1 :  GrupoMusical = {
    nombre: "The Beatles",
    añoFundacion: 1960,
    activo: true,
    genero: popRock,
}

const grupoMusical2 :  GrupoMusical = {
    nombre: "Queen",
    añoFundacion: 1970,
    activo: false,
    genero: rock,
}

const grupoMusical3 :  GrupoMusical = {
    nombre: "AC DC",
    añoFundacion: 1973,
    activo: true,
    genero: hardRock,
}

const grupoMusical4 :  GrupoMusical = {
    nombre: "Ludwig van Beethoven",
    añoFundacion: 1770,
    activo: false,
    genero: clasica,
}

const grupoMusical5 :  GrupoMusical = {
    nombre: "The Rolling Stones",
    añoFundacion: 1962,
    activo: true,
    genero: rock,
}

console.log(`%c${grupoMusical1.nombre}`, estiloNombre);
console.log(`${grupoMusical1.añoFundacion}, ${grupoMusical1.activo}, ${grupoMusical1.genero}`);

console.log(`%c${grupoMusical2.nombre}`, estiloNombre);
console.log(`${grupoMusical2.añoFundacion}, ${grupoMusical2.activo}, ${grupoMusical2.genero}`);

console.log(`%c${grupoMusical3.nombre}`, estiloNombre);
console.log(`${grupoMusical3.añoFundacion}, ${grupoMusical3.activo}, ${grupoMusical3.genero}`);

console.log(`%c${grupoMusical4.nombre}`, estiloNombre);
console.log(`${grupoMusical4.añoFundacion}, ${grupoMusical4.activo}, ${grupoMusical4.genero}`);

console.log(`%c${grupoMusical5.nombre}`, estiloNombre);
console.log(`${grupoMusical5.añoFundacion}, ${grupoMusical5.activo}, ${grupoMusical5.genero}`);