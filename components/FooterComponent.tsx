import {PureComponent} from "react";

export default class FooterComponent extends PureComponent {
    render() {
        return (
            <footer className="h-10 flex items-center justify-center">
                <p className="text-title-lighter px-5">Site was made by Tofpu!</p>
            </footer>
        );
    }
}