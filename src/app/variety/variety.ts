export class Variety {

    public name: string;
    public id?: number;
    public createdAt?: string;
    public updatedAt?: string;

    constructor(
        public plantId: string
    ) {}
}