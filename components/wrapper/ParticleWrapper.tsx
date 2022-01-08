import React from "react";
import Particles from "react-tsparticles";
import {ISourceOptions} from "tsparticles";
import particleFile from "../../public/particlesjs-config.json";

export default class ParticleWrapper extends React.Component<any, any> {
    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        return false;
    }

    render() {
        // @ts-ignore
        const properties: ISourceOptions = particleFile;
        return (
            <Particles
                options={properties}
            />
        );
    }
}