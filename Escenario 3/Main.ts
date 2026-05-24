import { SalaChat } from "./SalaChat";
import { Usuario } from "./Usuario";

const salaChat = new SalaChat();

const usuario1 = new Usuario("Alice", salaChat);
const usuario2 = new Usuario("Bob", salaChat);
const usuario3 = new Usuario("Charlie", salaChat);

salaChat.agregarUsuario(usuario1);
salaChat.agregarUsuario(usuario2);
salaChat.agregarUsuario(usuario3);

usuario1.enviarMensaje("Hola a todos!");
usuario2.enviarMensaje("¡Hola Alice!");