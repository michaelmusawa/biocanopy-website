import Link from "next/link"
import { PostMetaData } from "./PostMetaData"

const PostPreview = (props: PostMetaData) => {
  return (
    <div key={props.slug}>
        <Link href={`blog/${props.slug}`}>
            <h2>{props.title}</h2>
        </Link>
            <p>{props.date}</p>
            <p>{props.subtitle}</p>
                
    </div>
  )
}

export default PostPreview