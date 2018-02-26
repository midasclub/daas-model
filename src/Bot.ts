import { Entity } from "./Entity"
import { BotStatus } from "./BotStatus"

export class Bot extends Entity {
	public username: string
	public password: string
	public status: BotStatus = BotStatus.OFFLINE
	public disabledUntil: Date | null = null
	public sentryFile: Buffer | null = null

	constructor(
		id: number,
		username: string,
		password: string,
		sentryFile: Buffer | null
	) {
		super(id)

		this.username = username
		this.password = password
		this.sentryFile = sentryFile
	}

	public serialize() {
		return {
			id: this.id,
			username: this.username,
			password: this.password,
			steamGuardEnabled: !!this.sentryFile,
			status: BotStatus[this.status],
			disabledUntil: this.disabledUntil && this.disabledUntil.getTime()
		}
	}

	public static deserialize(data: any): Bot {
		const bot = new Bot(
			data.id,
			data.username,
			data.password,
			data.steamGuardEnabled ? new Buffer("") : null
		)

		bot.status = BotStatus[data.botStatus as keyof typeof BotStatus]
		bot.disabledUntil = data.disabledUntil && new Date(data.disabledUntil)

		return bot
	}
}
