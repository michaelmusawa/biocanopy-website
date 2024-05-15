import Header from "@app/ui/hero";
import Link from "next/link";
import fs from 'fs'
import matter from "gray-matter";
import { PostMetaData } from "./components/PostMetaData";




const getPost = (): PostMetaData[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file

    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace('.md',''),
        }
    });
    return posts
};

const Blog = () => {
    const posts = getPost();
    const postPreview = posts.map((post) => {
        return (
            <div key={post.slug}>
                <Link href={`blog/${post.slug}`}>
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                    <p>{post.subtitle}</p>
                </Link>
            </div>
        )
    })
    return(
        <main>
            <Header 
                title="What's New"
                otherTitle='Blog' 
                image='/images/blog.jpg'
                >Keep with Biocanopy. What&apos;s new in the Biocanopy and Supply Community. Stay informed to not miss your opportunity.
            </Header>
            <section>
                <div>{postPreview}</div>
            </section>
        </main>
    )
};
export default Blog;