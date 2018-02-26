import { Entity } from "./Entity"
import { Bot } from "./Bot"

export class Machine extends Entity {
	public startedAt: Date
	public bot: Bot
	public isTerminated: boolean

	constructor(id: number, startedAt: Date, bot: Bot, isTerminated: boolean) {
		super(id)
		this.startedAt = startedAt
		this.bot = bot
		this.isTerminated = isTerminated
	}

	public serialize() {
		return {
			id: this.id,
			startedAt: this.startedAt,
			bot: this.bot.serialize(),
			isTerminated: this.isTerminated
		}
	}
}
