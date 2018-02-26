import { AbstractBotCommand } from "./AbstractBotCommand.private"
import { BotCommandType } from "./BotCommandType"

export interface CancelLobbyCommand extends AbstractBotCommand {
	type: BotCommandType.CANCEL_LOBBY
}
