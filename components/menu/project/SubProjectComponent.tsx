import React from "react";
import Link from 'next/link';

export default class SubProjectComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Link href={"/projects/" + this.props.name} passHref>
                <div className="group w-fit border cursor-pointer">
                    <div className="flex justify-center group-hover:opacity-90">
                        {this.props.image}
                    </div>
                    <p className="min-w-[126px] text-wrap group-hover:hover text-center capitalize">{this.props.name.replace("-", " ") ?? "placeholder text"}</p>
                </div>
            </Link>
        );
    }
}