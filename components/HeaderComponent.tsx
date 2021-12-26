import {PureComponent} from "react";

export default class HeaderComponent extends PureComponent {
    render() {
        return (
            <header className="w-screen flex justify-center p-5">
                <menu
                    className="flex tracking-wider items-center justify-between w-screen px-2 sm:w-1/2 sm:px-16 text-primary border-2 border-primary rounded-full">
                    <div><a href="#">Home</a></div>
                    <div className="flex space-x-2">
                        <div><a href="https://github.com/Tofpu">GitHub</a></div>
                        <div><a href="https://www.spigotmc.org/members/tofpu.585786/">Spigot</a></div>
                    </div>
                </menu>
            </header>
        );
    }
}