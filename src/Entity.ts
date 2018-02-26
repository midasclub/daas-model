export abstract class Entity {
	public id: number

	constructor(id: number) {
		this.id = id
	}

	public abstract serialize(): Object
}
