import { Director } from "./Director";
import { ConstructorAutomovil } from "./ConstructorAutomovil";

const director = new Director();
const constructor = new ConstructorAutomovil();

director.construirAutoDeportivo(constructor);

const miAuto = constructor.construir();

console.log("Auto construido:", miAuto);