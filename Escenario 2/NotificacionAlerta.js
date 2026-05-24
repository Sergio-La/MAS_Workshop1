import { Notificacion } from "./Notificacion";
export class NotificacionAlerta extends Notificacion {
    enviar() {
        const mensaje = "¡Alerta! Se ha detectado una situación crítica.";
        this.plataforma.enviarNotificacion(mensaje);
    }
}
