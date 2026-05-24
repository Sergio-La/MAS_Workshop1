import {IPlataforma} from "./IPlataforma";

export class PlataformaMovil implements IPlataforma {
    enviarNotificacion(mensaje: string): void {
        console.log(`Enviando notificación móvil: ${mensaje}`);
    }

}   