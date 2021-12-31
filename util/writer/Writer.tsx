import WriterObject from "./WriterObject";

export default class Writer {
    private skip = false;
    private ready = true;
    private writers: WriterObject[] = [];
    private interval: NodeJS.Timer | undefined;
    private mainInterval: NodeJS.Timer | undefined;

    public static of() {
        return new Writer();
    }

    write(writer: WriterObject) {
        this.writers.push(writer);
        return this;
    }

    start(skip = false) {
        this.writers = this.writers.reverse()
        console.log(this.writers);

        if (skip) {
            this.skipAll();
        }

        this.mainInterval = setInterval(() => {
            console.log('interval!');
            if (!this.ready || this.skip) {
                return;
            } else {
                this.ready = false;
            }

            if (this.writers.length === 0) {
                clearInterval(this.mainInterval as NodeJS.Timeout);
                return;
            }

            // @ts-ignore
            const writer: WriterObject = this.writers.pop();

            setTimeout(() => {
                // @ts-ignore
                this.run(writer);
            }, writer.delay);
        }, 100);
    }

    skipAll() {
        if (this.skip) {
            return;
        }

        this.skip = true;
        if (this.interval !== undefined) {
            clearInterval(this.interval as NodeJS.Timeout);
        }

        if (this.mainInterval !== undefined) {
            clearInterval(this.mainInterval as NodeJS.Timeout);
        }

        for (const write of this.writers) {
            write.run(true, () => {
            });
        }
        return;
    }

    private run(writer: WriterObject) {
        writer.run(false, () => {
            this.ready = true;
            console.log(writer.content + ' is ready!');
        });
    }
}