import {PureComponent} from "react";
import Widget from "../lib/Widget";

export default class ThemeComponent extends PureComponent {
    render() {
        return (
            <div id="themeButton"
                 className="fixed bottom-1 right-1 select-none border-2 rounded-full bg-primary w-8 h-8 widget"
                 onClick={() => Widget.onThemeSwitch()}>
                <div className="flex justify-center text-center">
                    <p className="place-self-end text-center">🌓</p>
                </div>
            </div>
        );
    }
}