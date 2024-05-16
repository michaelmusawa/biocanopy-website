import Header from "@app/ui/hero";
import Link from "next/link";
import getPost from "./components/getPostMetadata";
import PostPreview from "./components/PostPreview";


const Blog = () => {
    const posts = getPost();
    const postPreview = posts.map((post) => {
        return (
            <>
            <PostPreview key={post.slug} {...post} />
            </>
            
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