import React from "react";
import Head from 'next/head';
import {getAllProjectIds, getProjectData} from '../../lib/projects'
import LayoutComponent from "../../components/LayoutComponent";

// @ts-ignore
export default function Post({postData}) {
    return <>
        <LayoutComponent/>

        <Head>
            <title>{"Project | " + postData.title}</title>
        </Head>

        <menu className="flex flex-col justify-center items-center text-primary">
            <div className="w-3/4 md:w-1/2 h-full flex flex-col flex-wrap items-start gap-5 p-5 text-primary">
                <h1 className="text-xl md:text-4xl font-bold capitalize">{"PROJECT: " + postData.title}</h1>
                <div className="markdown max-w-full" dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </div>
        </menu>
    </>
}


// @ts-ignore
export async function getStaticProps({params}) {
    const postData = await getProjectData(params.id);
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllProjectIds().sort((a, b) => a.params.id.localeCompare(b.params.id));
    return {
        paths,
        fallback: false
    }
}