export class Sensor {

    constructor(
        public userId:          number,
        public serial:          string,
        public id?:             number,
        public createdAt?:      string,
        public updatedAt?:      string,
        public deletedAt?:      string
    ) {}
}