import axios from "axios";

// this page is for (SSR)
const BlogList = ({ blogs }) => {
  return (
    <div style={{padding: '10px'}}>
      <h1>blog list page</h1>
      {blogs.map((blog) => {
        return (
          <h3 key={blog.id}>
            blog: {blog.title} - category: {blog.category}
          </h3>
        );
      })}
    </div>
  );
};

export default BlogList;

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:4000/blogs");

  return {
    props: {
      blogs: data,
    },
  };
}
