import DisplayComponent from "../components/DisplayComponent";
import Widget from "../lib/Widget";
import {useEffect} from 'react'
import Head from "next/head"

export default function Home() {
    useEffect(() => {
        // loading the theme after 1 second (to avoid a quick flash)
        setTimeout(() => {
            Widget.loadTheme();
        }, 1000 * (1));
    });

    return <>
        <Head>
            <title>Home | Tofpu</title>
        </Head>
        <DisplayComponent/>
    </>
}