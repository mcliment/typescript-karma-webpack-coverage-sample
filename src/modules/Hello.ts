export default class Hello {
    constructor(private elem: HTMLElement) {

    }

    public fill() {
        this.elem.innerHTML = "<h1>Hello world!</h1>";
    }
}