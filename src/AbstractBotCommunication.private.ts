import { BotCommunicationType } from "./BotCommunicationType"

export interface AbstractBotCommunication {
	readonly id: string
	readonly type: BotCommunicationType
}
