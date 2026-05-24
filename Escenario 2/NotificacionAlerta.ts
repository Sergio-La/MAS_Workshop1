import { IPlataforma } from "./IPlataforma";
import { Notificacion } from "./Notificacion";

export class NotificacionAlerta extends Notificacion {
    enviar(): void {
        const mensaje = "¡Alerta! Se ha detectado una situación crítica.";
        this.plataforma.enviarNotificacion(mensaje);
    }
}