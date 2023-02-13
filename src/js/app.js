export default class Validator {
    constructor(name) {
        this.name = name;
    }

    validatorUsername() {
        const digitsMax = new RegExp('\\d{4}', 'g').test(this.name);
        const digits = new RegExp('\\d', 'g').test(this.name);
        const validName = /^(?!\d|-|_)[\w-]+(?<!\d|-|_)$/igm.test(this.name);
        return validName && !digitsMax && digits;
    }
}
