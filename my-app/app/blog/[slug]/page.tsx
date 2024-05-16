

import Markdown from "markdown-to-jsx";
import fs from 'fs'
import matter from "gray-matter";
import getPost from "../components/getPostMetadata";

const getPostContent = ( slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content)
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPost();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const postPage = ( props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <section>
            <h1> {post.data.title} </h1>
            <div>
                <Markdown>{post.content}</Markdown>
            </div>
        </section>
    )
};

export default postPage;