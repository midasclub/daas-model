import { Entity } from "./Entity"
import { ApiPermissions } from "./ApiPermissions"
import { ApiAccessLevel } from "./ApiAccessLevel"

export class ApiKey extends Entity {
	public label: string
	public value: string
	public fragment: string
	public permissions: ApiPermissions
	public lastUsed: Date

	constructor(
		id: number,
		label: string,
		value: string,
		fragment: string,
		permissions: ApiPermissions,
		lastUsed: Date
	) {
		super(id)
		this.label = label
		this.value = value
		this.fragment = fragment
		this.permissions = permissions
		this.lastUsed = lastUsed
	}

	public serialize() {
		return {
			label: this.label,
			fragment: this.fragment,
			lastUsed: this.lastUsed.getTime(),
			permissions: {
				apiKeys: ApiAccessLevel[this.permissions.apiKeys],
				bots: ApiAccessLevel[this.permissions.bots],
				lobbies: ApiAccessLevel[this.permissions.lobbies]
			}
		}
	}
}
