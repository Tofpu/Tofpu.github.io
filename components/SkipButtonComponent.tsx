import React from "react";

export default class SkipButtonComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        if (this.props.skip && !this.props.isSkippable) {
            return <button onClick={() => {
                const onSkip: Function = this.props.onSkip;
                onSkip();
            }} className="button">SKIP</button>;
        }
        return null;
    }
}