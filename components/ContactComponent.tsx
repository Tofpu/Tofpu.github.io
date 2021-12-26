import {PureComponent} from "react";

export default class ContactComponent extends PureComponent {
    render() {
        return (
            <section className="flex flex-col p-5 items-center justify-center">
                <div className="text-title text-3xl hover:text-title-lighter"><b>Contact</b></div>
                <p className="text-title">You can get in touch with me on Discord at <b
                    className="hover:text-title-lighter">Tofpu#3224</b>! I'm excited to work with you!</p>
            </section>
        );
    }
}