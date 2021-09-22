export class User {
    name: string
    surname: string

    constructor(partial: Partial<User>){
        Object.assign(this, partial);
    }
}
