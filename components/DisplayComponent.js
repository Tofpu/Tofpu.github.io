import {PureComponent} from "react";
import HeaderComponent from "./HeaderComponent";
import BorderComponent from "./BorderComponent";
import IntroductionComponent from "./IntroductionComonent";
import ProjectComponent from "./ProjectComponent";
import ContactComponent from "./ContactComponent";
import FooterComponent from "./FooterComponent";
import ThemeComponent from "./ThemeComponent";

export default class DisplayComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="flex flex-col h-screen justify-between">
                <HeaderComponent/>
                <BorderComponent/>

                <IntroductionComponent/>
                <BorderComponent center="true"/>

                <ProjectComponent/>
                <BorderComponent center="true" parentClass="p-5"/>

                <ContactComponent/>
                <FooterComponent/>

                <ThemeComponent/>
            </section>
        );
    }
}