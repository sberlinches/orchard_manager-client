export class Zone {

    public alias: string;
    public id?: number;
    public createdAt?: string;
    public updatedAt?: string;

    constructor(
        public userId: number
    ) {}
}