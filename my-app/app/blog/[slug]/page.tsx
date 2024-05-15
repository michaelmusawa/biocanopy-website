

import Markdown from "markdown-to-jsx";
import fs from 'fs'

const getPostContent = ( slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    return content;
}

const postPage = ( props: any) => {
    const slug = props.params.slug;
    console.log(slug);
    const content = getPostContent(slug);
    return (
        <section>
            <h1> This is a post: {slug} </h1>
            <div>
                <Markdown>{content}</Markdown>
            </div>
        </section>
    )
};

export default postPage;