import React from "react";
import SubProjectComponent from "./SubProjectComponent";

export default class ProjectComponent extends React.Component<any, any> {
    private static readonly PATH = "";

    constructor(props: any) {
        super(props);
    }

    render() {
        const startProject = this.props.startProject;
        const totalProjects: Object[] = this.props.projects;

        console.log(totalProjects);

        let projectsElement;
        if (this.props.showProjects) {
            const projects = totalProjects.map((object) => {
                if (object === undefined) {
                    return;
                }
                // @ts-ignore
                const id = object.id;
                // @ts-ignore
                // eslint-disable-next-line @next/next/no-img-element
                let image = object.imageExists;

                if (!image) {
                    image = <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-hover svgColor max-h-[96px] max-w-[96px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>;
                } else {
                    image = <img className="max-h-[96px] max-w-[96px]" src={ProjectComponent.PATH + id.toLowerCase() + ".png"} alt={id}/>
                }

                // @ts-ignore
                return <li key={id}>
                    <SubProjectComponent name={id} image={image}/>
                </li>
            })

            projectsElement = (
                <ul id="projects"
                    className="svgColor shadow shadow-hover/10 py-5 gap-5 w-full min-w-full flex flex-wrap justify-center items-center">
                    {projects}
                </ul>
            );
        }

        return (
            <section className="w-full flex flex-col text-secondary sm:p-5">
                <div className="flex justify-start sm:justify-center items-start sm:items-center gap-1">
                    {startProject ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="svgColor h-6 w-6" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                        </svg>
                    ) : ""}
                    <p id="project" className="sm:text-lg"/>
                </div>

                <div>
                    {projectsElement}
                </div>
            </section>
        );
    }
}