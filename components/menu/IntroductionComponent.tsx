import React from "react";
import ContactComponent from "./contact/ContactComponent";

export default class IntroductionComponent extends React.Component<any, any> {
    render() {
        return (
            <section className="w-full gap-5 h-1/3 flex text-secondary flex-col sm:p-5">
                <div>
                    <header className="flex text-xl sm:text-3xl">
                        <h1 className="flex flex-wrap">
                            <a id="greeting-1" className="hover font-semibold text-primary"/>&nbsp;
                            <a id="greeting-2"/>&nbsp;
                            <a id="greeting-3" className="hover font-semibold text-primary"/>
                        </h1>
                    </header>
                    <section className="flex flex-row flex-wrap text-md sm:text-xl sm:gap-1.5">
                        <h2>
                            <a id="introduction-1"/>&nbsp;
                            <a id="introduction-2" className="hover font-semibold text-primary"/>&nbsp;
                            <a id="introduction-3"/>&nbsp;
                            <a id="introduction-4" className="hover font-semibold text-primary"/>
                        </h2>
                    </section>
                </div>

                <section className="flex items-start">
                    <ContactComponent startPlatform={this.props.startPlatform} showPlatforms={this.props.showPlatforms}/>
                </section>
            </section>
        );
    }
}