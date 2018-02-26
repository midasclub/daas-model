import { ApiAccessLevel } from "./ApiAccessLevel"

export interface ApiPermissions {
	bots: ApiAccessLevel
	lobbies: ApiAccessLevel
	apiKeys: ApiAccessLevel
}
