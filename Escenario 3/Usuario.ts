import { IMediador } from "./IMediador";

export class Usuario {
  private nombre: string;
  private mediador: IMediador;

  constructor(nombre: string, mediador: IMediador) {
    this.nombre = nombre;
    this.mediador = mediador;
  }

  enviarMensaje(mensaje: string): void {
    this.mediador.enviar(mensaje, this.nombre);
  }

  obtenerNombre(): string {
    return this.nombre;
  }

  recibirMensaje(mensaje: string, remitente: string): void {
    console.log(
      `${this.nombre} recibió un mensaje de ${remitente}: ${mensaje}`,
    );
  }
}
