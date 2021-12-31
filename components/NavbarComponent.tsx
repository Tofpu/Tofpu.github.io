import React from "react";
import Link from 'next/link';

export default class NavbarComponent extends React.Component<any, any> {
    private static readonly GITHUB_LINK = "https://github.com/Tofpu"
    private static readonly SPIGOT_LINK = "https://www.spigotmc.org/members/tofpu.585786/"

    constructor(props: any) {
        super(props);
    }

    render() {
        if (this.props.skip) {
            return null;
        }

        return (
            <div className="flex flex-row min-w-full shadow shadow-hover/25 p-10 py-1">
                <nav className="text-primary justify-between flex flex-row min-w-full">

                    <div className="flex sm:flex-1 items-center">
                        <Link href="/" passHref>
                            <div className="group flex gap-1 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="group-hover:stroke-hover svgColor h-7 w-7" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                                </svg>
                                <p className="group-hover:text-hover sm:text-lg text-primary tracking-wide">Tofpu</p>
                            </div>
                        </Link>
                    </div>

                    <div className="flex flex-row justify-end sm:justify-evenly sm:flex-1 cursor-pointer">
                        <div className="sm:hidden group relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <div className="sm:hidden group-hover:block hidden divide-y-2 divide-secondary/25 min-w-[100%] absolute shadow shadow-hover/50 rounded-xl text-sm text-primary">
                                <a rel="noreferrer" target="_blank" href={NavbarComponent.GITHUB_LINK} className="hover block py-1 p-3">GitHub</a>
                                <a rel="noreferrer" target="_blank" href={NavbarComponent.SPIGOT_LINK} className="hover block py-1 p-3">Spigot</a>
                            </div>
                        </div>

                        <a rel="noreferrer" target="_blank" href={NavbarComponent.GITHUB_LINK} className="hidden sm:block hover">GitHub</a>
                        <a rel="noreferrer" target="_blank" href={NavbarComponent.SPIGOT_LINK} className="hidden sm:block hover">Spigot</a>
                    </div>
                </nav>
            </div>
        );
    }
}