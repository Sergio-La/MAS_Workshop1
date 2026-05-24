import {NotificacionAlerta} from "./NotificacionAlerta";
import { NotificacionMensaje } from "./NotificacionMensaje";

import { PlataformaWeb } from "./PlataformaWeb";
import { PlataformaMovil } from "./PlataformaMovil";

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