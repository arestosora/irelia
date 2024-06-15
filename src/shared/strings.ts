import { Emojis } from './emoji';

export const strings = {
	menu: {
		author: '¿Cómo comprar con nosotros? ¡Sigue los siguientes pasos!',
		author_image_url: 'https://cdn3.emoji.gg/emojis/67828-bloodmoon-twemoji.png',
		field_1: `Si deseas realizar un pedido, simplemente haz clic en el botón de abajo y estaré encantada de atenderte. ${Emojis.Verified} ¡Gracias por elegirnos y esperamos brindarte una excelente experiencia de compra! ${Emojis.Love}`,
		field_2: `Si tienes alguna pregunta o necesitas asistencia, no dudes en mencionar a uno de nuestros moderadores o enviar un mensaje en el canal de soporte. ${Emojis.Love} Estamos aquí para garantizar que tu experiencia de compra sea lo más placentera posible.`,
		field_3: `¡Esperamos con ansias servirte y proporcionarte los mejores productos y servicios! ¡Haz clic en el botón y comencemos! ${Emojis.Notification}`
	},
	commands: {
		menu: {
			name: 'menu',
			description: 'Envia el menu de precios y articulos disponibles a tus mensajes privados!',
			reply: `Por favor revisa tus mensajes privados. ${Emojis.Success}`
		}
	}
};
