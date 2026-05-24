import {IPlataforma} from "./IPlataforma";

export class PlataformaEscritorio implements IPlataforma {
    enviarNotificacion(mensaje: string): void {
        console.log(`Enviando notificación de escritorio: ${mensaje}`);
    }
}