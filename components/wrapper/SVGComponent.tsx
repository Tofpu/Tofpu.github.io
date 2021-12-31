import React from "react";

export default class SVGComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.setState({
            copied: false
        });
    }

    Copied(props: any) {
        return <p>Copied!</p>;
    }

    render() {
        const className = this.props.className + " " ?? "";
        const width = this.props.width ?? 25;
        const height = this.props.height ?? 25;

        const showText = this.props.showText ?? false;
        const copyText = this.props.copyText;
        const copied = this.state?.copied ?? false;

        const link: string | undefined = this.props.link;
        const newTab = this.props.newTab ?? false;

        return <div>
            {copied && showText ? <this.Copied/> : (
                <svg id={this.props.title} onClick={() => {
                    // if the link is defined, open a link
                    if (link !== undefined) {
                        open(link, newTab ? "_blank" : "");
                        return;
                    }

                    // if the text is defined, write the text to user's clipboard
                    if (copyText !== undefined) {
                        navigator.clipboard.writeText(copyText).then();
                    }

                    this.setState({
                        copied: true
                    })

                    setTimeout(() => {
                        // setting the copied state to false after 2 seconds
                        this.setState({
                            copied: false
                        })
                    }, 2000);

                }} className={className + "hover svgColorFill"} width={width} height={height} role="img"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>{this.props.title}</title>
                    <path d={this.props.path}/>
                </svg>
            )}
        </div>
    }
}