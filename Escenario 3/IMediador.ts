export interface IMediador {
    enviar(mensaje: string, remitente: string): void;
}