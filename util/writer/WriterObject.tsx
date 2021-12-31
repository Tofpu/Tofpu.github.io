export default class WriterObject {
    private readonly _id: string[];
    private readonly _content: string[];
    private readonly _duration: number;
    private readonly _delay: number;
    private readonly _whenStart: Function | undefined;
    private readonly _whenComplete: Function | undefined;

    constructor(id: string[], content: string[], duration: number, delay = 1000, whenStart = () => {
    }, whenComplete = () => {
    }) {
        this._id = id;
        this._content = content;
        this._duration = duration;
        this._delay = delay;
        this._whenStart = whenStart;
        this._whenComplete = whenComplete;
    }

    get id(): string[] {
        return this._id;
    }

    get content(): string[] {
        return this._content;
    }

    get duration(): number {
        return this._duration;
    }

    get delay(): number {
        return this._delay;
    }

    get whenStart(): Function | undefined {
        return this._whenStart;
    }

    get whenComplete(): Function {
        return this._whenComplete as Function;
    }

    public static of(id: string[], content: string[], duration: number, delay = 1000, whenStart = () => {
    }, whenComplete = () => {
    }) {
        return new WriterObject(id, content, duration, delay, whenStart, whenComplete);
    }

    run(skip = false, whenComplete: Function) {
        if (this.whenStart !== undefined) {
            this.whenStart();
        }

        let modifiedDuration = this.duration;
        let index = 0;

        for (let i = 0; i < this.id.length; i++) {
            const id = this.id[i];
            let content = this.content[i];

            const element = document.getElementById(id);
            if (element == null) {
                continue;
            }

            if (skip) {
                element.textContent = !content.includes('|')
                    ? content
                    : content.split("|").pop() as string;
                continue;
            }

            if (content.includes("|")) {
                const animation = content.split("|");
                for (let j = 0; j < animation.length; j++) {
                    const subContent = animation[j];

                    setTimeout((element, content) => {
                        element.textContent = content;
                    }, (this.duration * (index / 2)) * 2, element, subContent)

                    index += 0.116 * 10;
                    modifiedDuration += this.duration * 0.096 * 10;
                }
                continue;
            }

            for (const letter of content) {
                setTimeout((element, letter) => {
                    element.textContent += letter;
                }, this.duration * index, element, letter);

                index += 0.116;
                modifiedDuration += this.duration * 0.096;
            }
        }

        setTimeout(() => {
            if (this.whenComplete !== undefined) {
                this.whenComplete();
            }

            if (whenComplete !== undefined) {
                whenComplete();
            }
        }, modifiedDuration);
    }
}