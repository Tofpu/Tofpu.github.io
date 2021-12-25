import Widget from './widget/Widget.tsx'
import HeaderComponent from "../components/HeaderComponent";
import BorderComponent from "../components/BorderComponent";
import IntroductionComponent from "../components/IntroductionComonent";
import ProjectComponent from "../components/ProjectComponent";
import ContactComponent from "../components/ContactComponent";
import FooterComponent from "../components/FooterComponent";

export default function Home() {
    return (
        <>
            <div className="flex flex-col h-screen justify-between">
                <HeaderComponent/>
                <BorderComponent/>

                <IntroductionComponent/>
                <BorderComponent center="true"/>

                <ProjectComponent/>
                <BorderComponent center="true" parentClass="p-5"/>

                <ContactComponent/>

                <FooterComponent/>

                <div id="themeButton"
                     className="fixed bottom-1 right-1 select-none border-2 rounded-full bg-primary w-8 h-8 widget"
                     onClick={() => Widget.onThemeSwitch()}>
                    <div className="flex justify-center text-center">
                        <p className="place-self-end text-center">🌓</p>
                    </div>
                </div>
            </div>
        </>
    )
}