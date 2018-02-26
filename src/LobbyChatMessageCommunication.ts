import { BotCommunicationType } from "./BotCommunicationType"
import { AbstractBotCommunication } from "./AbstractBotCommunication.private"

export interface LobbyChatMessageCommunication
	extends AbstractBotCommunication {
	readonly type: BotCommunicationType.LOBBY_CHAT_MESSAGE
	readonly senderSteamId: string
	readonly message: string
}
