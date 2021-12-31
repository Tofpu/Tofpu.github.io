import React from "react";
import IntroductionComponent from "./IntroductionComponent";
import ProjectComponent from "./project/ProjectComponent";

export default class MenuComponent extends React.Component<any, any> {
    render() {
        return (
            <section className="w-full h-full flex flex-col text-primary gap-2.5 sm:gap-0">
                <IntroductionComponent startPlatform={this.props.startPlatform}
                                       showPlatforms={this.props.showPlatforms}/>

                <ProjectComponent startProject={this.props.startProject}
                                  showProjects={this.props.showProjects}
                                  projects={this.props.projects}/>
            </section>
        );
    }
}