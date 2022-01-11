import type {NextPage} from 'next'
import React, {useEffect, useState} from "react";
import Writer from "../util/writer/Writer";
import DisplayComponent from "../components/DisplayComponent";
import WriterObject from "../util/writer/WriterObject";
import {getProjectsData} from '../lib/projects';
import Head from "next/head";
import LayoutComponent from "../components/LayoutComponent";
import {NextSeo} from "next-seo";

// @ts-ignore
export default function Home ({allPostsData}) {
    const [startPlatform, setStartPlatform] = useState(false);
    const [showPlatforms, setPlatform] = useState(false);

    const [startProject, setStartProject] = useState(false);
    const [showProjects, setProject] = useState(false);
    const [skipWriting, setSkip] = useState(true);

    const writer = Writer.of();
    useEffect(() => {
        if (startPlatform || showPlatforms || showProjects) {
            return;
        }

        writer.write(WriterObject.of(["greeting-1", "greeting-2", "greeting-3"], ["Hello", "there! I'm", "Tofpu!"], 1000, 0))
            .write(WriterObject.of(["introduction-1", "introduction-2", "introduction-3", "introduction-4"], ["I'm a", "Web Developer|Bird Lover|Java Developer", "whose specializes in", "Bukkit Development."], 1000, 0))
            .write(WriterObject.of(["platform"], ["I'm available at the following platforms:"], 1000, 1000, () => {
                setStartPlatform(true);
            }, () => {
                setPlatform(true);
            }))
            .write(WriterObject.of(["project"], ["I have worked on the following projects:"], 1000, 1000, () => {
                setStartProject(true);
            }, () => {
                setProject(true);
                setSkip(false);
            }))
            .start(false);
    }, [showPlatforms, showProjects, startPlatform, writer]);

    console.log(allPostsData);

    return <>
        <NextSeo
            title="Home | tofpu.me"
            description="A portfolio site for Tofpu"
        />

        <DisplayComponent
            onSkip={() => {
                writer.skipAll();
            }}
            isSkippable={startProject}
            skip={skipWriting}

            startPlatform={startPlatform}
            showPlatforms={showPlatforms}

            startProject={startProject}
            showProjects={showProjects}
            projects={allPostsData}
        />
    </>
}

export async function getStaticProps() {
    const allPostsData = getProjectsData();
    return {
        props: {
            allPostsData
        }
    }
}
