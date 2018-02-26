import { PlayerReadyStatusUpdateCommunication } from "./PlayerReadyStatusUpdateCommunication"
import { LobbyChatMessageCommunication } from "./LobbyChatMessageCommunication"

export type BotCommunication =
	| PlayerReadyStatusUpdateCommunication
	| LobbyChatMessageCommunication
