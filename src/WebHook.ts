import { Entity } from "./Entity"
import { WebHookEventType } from "./WebHookEventType"

export class WebHook extends Entity {
	public eventType: WebHookEventType
	public url: string
	public secret: string

	constructor(id: number, eventType: WebHookEventType, url: string, secret: string) {
		super(id)
		this.eventType = eventType
		this.url = url
		this.secret = secret
	}

	public serialize() {
		return {
			id: this.id,
			eventType: WebHookEventType[this.eventType],
			url: this.url,
			secret: this.secret
		}
	}

	public static deserialize(data: any): WebHook {
		return new WebHook(
			data.id,
			WebHookEventType[data.eventType as keyof typeof WebHookEventType],
			data.url,
			data.secret
		)
	}
}