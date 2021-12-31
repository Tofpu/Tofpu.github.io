import React from "react";
import NavbarComponent from "./NavbarComponent";
import ParticleWrapper from "./wrapper/ParticleWrapper";

export default class LayoutComponent extends React.Component<any, any> {
    render() {
        return <>
            <div className="flex justify-center items-center">
                <div className="w-3/4 md:w-1/2 h-full flex flex-col items-center p-5 text-primary">
                    <NavbarComponent skip={this.props.skip}/>
                    <ParticleWrapper/>
                </div>
            </div>
        </>
    }
}