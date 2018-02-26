import { BotCommunicationType } from "./BotCommunicationType"
import { AbstractBotCommunication } from "./AbstractBotCommunication.private"

export interface PlayerReadyStatusUpdateCommunication
	extends AbstractBotCommunication {
	readonly type: BotCommunicationType.PLAYER_READY_STATUS_UPDATE
	readonly matchId: number
	readonly playerSteamId: string
	readonly newPlayerStatus: string
}
