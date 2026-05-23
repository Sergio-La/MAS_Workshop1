import { IConstructorAutomovil } from "./IConstructorAutomovil";

export class Director {
    public construirAutoDeportivo(constructor: IConstructorAutomovil): void {
        constructor.setTipoMotor("Motor V8 Deportivo");
        constructor.setLlantas("Llantas de perfil bajo");
        constructor.setSistemaSonido("Sonido envolvente 5.1");
        constructor.setTechoSolar(true);
        constructor.setNavegacionGPS(true);
    }
}