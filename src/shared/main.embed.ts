import { Colors, EmbedBuilder } from 'discord.js';
import { strings } from './strings';

export const MainEmbed = new EmbedBuilder()
	.setAuthor({ name: strings.menu.author, iconURL: strings.menu.author_image_url })
	.setFields([
		{
			name: '‎',
			value: strings.menu.field_1
		},
		{
			name: '‎',
			value: strings.menu.field_2
		},
		{
			name: '‎',
			value: strings.menu.field_3
		}
	])
	.setColor(Colors.Red);
