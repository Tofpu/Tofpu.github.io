import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import {remark} from 'remark'
import html from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'projects');
const publicDirectory = process.env.NODE_ENV !== 'production' ? path.join(process.cwd(), 'public') : process.cwd();

export function getProjectsData() {
    const fileNames = fs.readdirSync(projectsDirectory);

    console.log(publicDirectory);
    console.log(process.cwd());
    console.log(path.join(process.cwd(), 'public'));
    console.log(__dirname);

    return fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        const fileImage = path.join(publicDirectory, fileName.replace("md", "png"));
        const imageExists = fs.existsSync(fileImage);

        // console.log(fileName);

        if (!imageExists) {
            return {
                id,
                ...matterResult.data
            }
        }

        return {
            id,
            imageExists,
            ...matterResult.data
        }
    });
}

export async function getProjectData(id: string) {
    const title: string = id.replace("-", " ");
    const fullPath = path.join(projectsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
        id,
        title,
        contentHtml,
        ...matterResult.data
    }
}

export function getAllProjectIds() {
    const fileNames = fs.readdirSync(projectsDirectory);

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            }
        }
    })
}
