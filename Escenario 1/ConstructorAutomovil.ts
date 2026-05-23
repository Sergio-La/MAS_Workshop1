import { Automovil } from "./Automovil";
import { IConstructorAutomovil } from "./IConstructorAutomovil"; // 1. Importa la interfaz

// 2. Añade "implements IConstructorAutomovil"
export class ConstructorAutomovil implements IConstructorAutomovil {
    public tipoMotor: string;
    public llantas: string;
    public sistemaSonido: string;
    public interior: string;
    public techoSolar: boolean;
    public navegacionGPS: boolean;

    constructor() {
        this.tipoMotor = "";
        this.llantas = "";
        this.sistemaSonido = "";
        this.interior = "";
        this.techoSolar = false;
        this.navegacionGPS = false;
    }

    public setTipoMotor(tipoMotor: string): IConstructorAutomovil {
        this.tipoMotor = tipoMotor;
        return this;
    }
    public setLlantas(llantas: string): IConstructorAutomovil {
        this.llantas = llantas;
        return this;
    }
    public setSistemaSonido(sistemaSonido: string): IConstructorAutomovil {
        this.sistemaSonido = sistemaSonido;
        return this;
    }
    public setInterior(interior: string): IConstructorAutomovil {
        this.interior = interior;
        return this;
    }
    public setTechoSolar(techoSolar: boolean): IConstructorAutomovil {
        this.techoSolar = techoSolar;
        return this;
    }
    public setNavegacionGPS(navegacionGPS: boolean): IConstructorAutomovil {
        this.navegacionGPS = navegacionGPS;
        return this;
    }

    public construir(): Automovil {
        return new Automovil(this);
    }
}