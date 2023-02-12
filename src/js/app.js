export default class Validator {
    constructor(name) {
        this.name = name;
    }

    validatorUsername() {
        const digitsMax = new RegExp('\\d{4}', 'g').test(this.name);
        const validName = /^(?!\d|-|_)[a-z0-9_-]+(?<!\d|-|_)$/igm.test(this.name);
        return validName && !digitsMax;
    }
}
