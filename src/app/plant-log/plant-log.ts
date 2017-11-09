export class PlantLog {

    constructor(
        public id?:             number,
        public airTemp?:        number,
        public soilTemp?:       number,
        public light?:          number,
        public airHum?:         number,
        public soilMoist?:      number,
        public ph?:             number,
        public isGerminated?:   boolean,
        public isMature?:       boolean,
        public createdAt?:      string
    ) {}
}