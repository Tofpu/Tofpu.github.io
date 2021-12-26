import {PureComponent} from "react";

export default class ProjectComponent extends PureComponent {
    render() {
        return (
            <section className="w-screen flex flex-col p-5 space-y-2.5 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-title text-3xl hover:text-title-lighter"><b>Projects</b></div>
                    <div className="text-primary">
                        I have brought many plugin ideas to life that others have found useful.
                    </div>
                </div>

                <div className="space-y-2 flex flex-col items-center justify-center">
                    <div
                        className="px-5 border-2 rounded-md ring-2 border-primary ring-title text-title flex flex-col items-center justify-center">
                        <div className="flex px-5 flex-col justify-center items-center">
                            <div className="text-lg font-semibold hover:text-title-lighter">
                                <a href="https://www.spigotmc.org/resources/95918">SpeedBridge</a>
                            </div>
                            <div className="text-md">
                                Hop into an island, bridge from one island to another, and try to get the lowest
                                score possible!
                            </div>
                        </div>
                        <div className="flex flex-col px-5 justify-center items-center">
                            <div className="text-lg font-semibold hover:text-title-lighter">
                                <a href="https://www.spigotmc.org/resources/97614">Response</a>
                            </div>
                            <div className="">
                                Allows you to create prefixes for your common answers with ease!
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-lg font-semibold hover:text-title-lighter">
                                <a href="https://www.spigotmc.org/resources/84331">LockedDimension</a>
                            </div>
                            <div className="">
                                You could disable, lock dimensions behind permissions nodes, and much more!
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-lg font-semibold hover:text-title-lighter">
                                <a href="https://www.spigotmc.org/resources/84308">MobPreventer</a>
                            </div>
                            <div className="">
                                You'll be able to blacklist and whitelist mobs with per-world support!
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}