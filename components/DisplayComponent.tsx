import React from "react";
import MenuComponent from "./menu/MenuComponent";
import SkipButtonComponent from "./SkipButtonComponent";
import LayoutComponent from "./LayoutComponent";

export default class DisplayComponent extends React.Component<any, any> {
    render() {
        return <>
            <LayoutComponent skip={this.props.skip}/>

            <main className="h-full w-full space-y-5 flex justify-center select-none">
                <section className="w-3/4 md:w-1/2 h-full flex flex-col text-primary p">
                    <section className="flex justify-center p-0">
                        <SkipButtonComponent onSkip={this.props.onSkip} isSkippable={this.props.isSkippable}
                                             skip={this.props.skip}/>
                    </section>

                    <MenuComponent startPlatform={this.props.startPlatform} showPlatforms={this.props.showPlatforms}
                                   startProject={this.props.startProject} showProjects={this.props.showProjects}
                                   projects={this.props.projects}/>
                </section>
            </main>
        </>
    }
}