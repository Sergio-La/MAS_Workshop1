import { Usuario } from "./Usuario";
import { IMediador } from "./IMediador";

export class SalaChat implements IMediador {
    private usuarios: Usuario[] = [];

    agregarUsuario(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    enviar(mensaje: string, remitente: string): void {
        this.usuarios.forEach(usuario => {
            if (usuario.obtenerNombre() !== remitente) {
                usuario.recibirMensaje(mensaje, remitente);
            }
        });
    }
}