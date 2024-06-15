import { ApplyOptions } from '@sapphire/decorators';
import { ChatInputCommand, Command } from '@sapphire/framework';
import { strings } from '../../shared/strings';
import { MainEmbed } from '../../shared/main.embed';

@ApplyOptions<Command.Options>({
	name: strings.commands.menu.name,
	description: strings.commands.menu.description
})
export class SendMenuCommand extends Command {
	constructor(context: Command.LoaderContext, options: Command.Options) {
		super(context, {
			...options
		});
	}

	override registerApplicationCommands(registry: ChatInputCommand.Registry) {
		registry.registerChatInputCommand((builder) => builder.setName(this.name).setDescription(this.description));
	}

	override async chatInputRun(interaction: ChatInputCommand.Interaction) {
		return interaction.user.send({ embeds: [MainEmbed] }).then(async () => {
			return interaction.reply({ content: strings.commands.menu.reply });
		});
	}
}
