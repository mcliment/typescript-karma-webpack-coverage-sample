export default class Uncovered {
    private message = "";

    hasMessage() {
        return this.message && this.message.length > 0;
    }

    get getMessage() {
        return this.message;
    }

    set setMessage(value: string) {
        this.message = value;
    }
}