import { ConstructorAutomovil } from "./ConstructorAutomovil";

export class Automovil {
    private tipoMotor: string;
    private llantas: string;
    private sistemaSonido: string;
    private interior: string;
    private techoSolar: boolean;
    private navegacionGPS: boolean;

    constructor( constructorAutomovil: ConstructorAutomovil ) {
        this.tipoMotor = constructorAutomovil.tipoMotor;
        this.llantas = constructorAutomovil.llantas;
        this.sistemaSonido = constructorAutomovil.sistemaSonido;
        this.interior = constructorAutomovil.interior;
        this.techoSolar = constructorAutomovil.techoSolar;
        this.navegacionGPS = constructorAutomovil.navegacionGPS;
    }

    public getTipoMotor(): string {
        return this.tipoMotor;
    }
    public getLlantas(): string {
        return this.llantas;
    }
    public getSistemaSonido(): string {
        return this.sistemaSonido;
    }
    public getInterior(): string {
        return this.interior;
    }
    public hasTechoSolar(): boolean {
        return this.techoSolar;
    }
    public hasNavegacionGPS(): boolean {
        return this.navegacionGPS;
    }
}