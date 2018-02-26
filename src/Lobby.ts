import { Entity } from "./Entity"
import { Server } from "./Server"
import { GameMode } from "./GameMode"
import { LobbyStatus } from "./LobbyStatus"
import { Player } from "./Player"
import { MatchResult } from "./MatchResult"
import { Machine } from "./Machine"

export class Lobby extends Entity {
	public name: string
	public password: string
	public server: Server
	public gameMode: GameMode
	public radiantHasFirstPick: boolean
	public status: LobbyStatus = LobbyStatus.CREATION_PENDING
	public machine: Machine | null = null
	public matchId: string | null = null
	public matchResult: MatchResult | null = null
	public players: Array<Player> = []

	constructor(
		id: number,
		name: string,
		password: string,
		server: Server,
		gameMode: GameMode,
		radiantHasFirstPick: boolean
	) {
		super(id)

		this.name = name
		this.password = password
		this.server = server
		this.gameMode = gameMode
		this.radiantHasFirstPick = radiantHasFirstPick
	}

	public serialize() {
		return {
			id: this.id,
			name: this.name,
			password: this.password,
			server: Server[this.server],
			gameMode: GameMode[this.gameMode],
			radiantHasFirstPick: this.radiantHasFirstPick,
			status: LobbyStatus[this.status],
			matchId: this.matchId,
			matchResult: this.matchResult ? MatchResult[this.matchResult] : null,
			players: this.players
		}
	}

	public static deserialize(data: any): Lobby {
		const lobby = new Lobby(
			data.id,
			data.name,
			data.password,
			Server[data.server as keyof typeof Server],
			GameMode[data.gameMode as keyof typeof GameMode],
			data.radiantHasFirstPick
		)

		lobby.status = LobbyStatus[data.status as keyof typeof LobbyStatus]
		lobby.players = data.players
		lobby.matchId = data.matchId
		lobby.matchResult = data.matchResult
			? MatchResult[data.matchResult as keyof typeof MatchResult]
			: null

		return lobby
	}
}
