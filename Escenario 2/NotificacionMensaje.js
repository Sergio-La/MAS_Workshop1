import { Notificacion } from "./Notificacion";
export class NotificacionMensaje extends Notificacion {
    enviar() {
        const mensaje = "¡Nuevo mensaje! Tienes un nuevo mensaje en tu bandeja de entrada.";
        this.plataforma.enviarNotificacion(mensaje);
    }
}
