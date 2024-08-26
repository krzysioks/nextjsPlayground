import Link from "next/link";

const BlogPostPage = props => {
    const { params } = props;

    return (
        <main>
           <h1>The Blog Post {params.slug}</h1>
        </main>
    );
};

export default BlogPostPage;