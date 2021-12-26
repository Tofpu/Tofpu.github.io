import DisplayComponent from "../components/DisplayComponent";
import Widget from "../lib/Widget";
import {useEffect} from 'react'

export default function Home() {
    useEffect(() => {
        // loading the theme after 1 second (to avoid a quick flash)
        setTimeout(() => {
            Widget.loadTheme();
        }, 1000 * (1));
    });

    return <DisplayComponent/>
}