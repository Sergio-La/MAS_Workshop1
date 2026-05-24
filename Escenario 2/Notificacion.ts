import { IPlataforma } from "./IPlataforma";

export abstract class Notificacion {
    constructor(protected plataforma: IPlataforma) {}

    abstract enviar(): void;
}