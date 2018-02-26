import { BotCommandType } from "./BotCommandType"

export interface AbstractBotCommand {
	readonly id: string
	readonly type: BotCommandType
}
