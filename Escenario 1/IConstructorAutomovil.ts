import { Automovil } from "./Automovil";

export interface IConstructorAutomovil {
    setTipoMotor(tipoMotor: string): IConstructorAutomovil;
    setLlantas(llantas: string): IConstructorAutomovil;
    setSistemaSonido(sistemaSonido: string): IConstructorAutomovil;
    setInterior(interior: string): IConstructorAutomovil;
    setTechoSolar(techoSolar: boolean): IConstructorAutomovil;
    setNavegacionGPS(navegacionGPS: boolean): IConstructorAutomovil;
    construir(): Automovil;
}