import {PureComponent} from "react";

export default class IntroductionComponent extends PureComponent {
    render() {
        return (
            <div className="py-16 px-16 w-screen flex justify-center">
                <div className="flex w-1/2 justify-center sm:justify-start">
                    <div className="leading-5 space-y-3">
                        <div>
                            <p className="text-4xl text-title-lighter font-semibold">HELLO! I'M <b
                                className="text-title tracking-widest font-bold hover:text-title-lighter">TOFPU</b>
                            </p>
                            <p className="text-xl text-primary font-semibold">I AM A <b
                                className="tracking-wider text-title-lighter hover:opacity-90">JAVA </b>DEVELOPER</p>
                        </div>
                        <div>
                            <div className="text-lg text-primary">I've been writing plugins for <b
                                className="hover:opacity-90">Minecraft</b> for over two years.
                            </div>
                            <div className="w-60 sm:w-96 text-primary">
                                I like to <u>write code that is well-organized, clear, and technically sound</u>. I
                                believe <u>writing
                                beautiful
                                code is one of the most beautiful of art forms.</u>
                            </div>
                        </div>
                        <div className="flex w-1/2 py-3 justify-center">
                            <button className="border-2 border-primary hover:bg-title-light bg-title shadow rounded-md py-1 px-5">
                                <p className="text-secondary">Learn more</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}