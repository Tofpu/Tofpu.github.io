import {PureComponent} from "react";

export default class BorderComponent extends PureComponent {
    private static readonly PARENT_CLASS = "w-screen flex justify-center"
    private static readonly BORDER_CLASS = "border-2 border-primary shadow-md w-screen"
    private static readonly CENTER_BORDER_CLASS = BorderComponent.BORDER_CLASS.replace("w-screen", "self center w-1/2");

    constructor(props) {
        super(props);
    }

    render() {
        // @ts-ignore
        const center: boolean = this.props.center ?? false;
        // @ts-ignore
        const extraParentClass = this.props.parentClass ?? "";

        if (center) {
            return (
                <section className={extraParentClass + " " + BorderComponent.PARENT_CLASS}>
                    <div className={BorderComponent.CENTER_BORDER_CLASS}/>
                </section>
            )
        } else {
            return (
                <section className={BorderComponent.BORDER_CLASS}/>
            )
        }
    }
}