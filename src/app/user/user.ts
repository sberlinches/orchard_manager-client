export class User {

    constructor(
        public username:        string,
        public email:           string,
        public password:        string,
        public id?:             number,
        public roleId?:         number,
        public firstName?:      string,
        public lastName?:       string,
        public countryId?:      number,
        public stateId?:        number,
        public cityId?:         number,
        public birthAt?:        string,
        public createdAt?:      string,
        public updatedAt?:      string,
        public deletedAt?:      string
    ) {}
}