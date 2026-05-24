import {IPlataforma} from "./IPlataforma";

export class PlataformaWeb implements IPlataforma {
    enviarNotificacion(mensaje: string): void {
        console.log(`Enviando notificación web: ${mensaje}`);
    }

}