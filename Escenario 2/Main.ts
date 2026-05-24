import {NotificacionAlerta} from "./NotificacionAlerta.js";
import { NotificacionMensaje } from "./NotificacionMensaje.js";

import { PlataformaWeb } from "./PlataformaWeb.js";
import { PlataformaMovil } from "./PlataformaMovil.js";

// Crear instancias de plataformas
const plataformaWeb = new PlataformaWeb();
const plataformaMovil = new PlataformaMovil();

// Crear instancias de notificaciones
const notificacionAlertaWeb = new NotificacionAlerta(plataformaWeb);
const notificacionAlertaMovil = new NotificacionAlerta(plataformaMovil);

const notificacionMensajeWeb = new NotificacionMensaje(plataformaWeb);
const notificacionMensajeMovil = new NotificacionMensaje(plataformaMovil);

// Enviar notificaciones
notificacionAlertaWeb.enviar();
notificacionAlertaMovil.enviar();

notificacionMensajeWeb.enviar();
notificacionMensajeMovil.enviar();