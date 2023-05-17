import axios from "axios";

const Category = ({ blogs, category }) => {
  return (
    <div style={{ padding: "10px" }}>
      <h1>blogs with category: {category}</h1>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h2>title: {blog.title}</h2>
            <span>{blog.description}</span>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Category;

export async function getServerSideProps(context) {
  // params: => have value of dynamic page
  // query: => all query strings
  const { params, query } = context;
  // we can sent the (query) to backend then backend get all (query strings)
  // await axios.get(`http://localhost:4000/blogs?category=${query}`);

  const { data } = await axios.get(
    `http://localhost:4000/blogs?category=${params.category}`
  );

  return {
    props: {
      category: query.category,
      blogs: data,
    },
  };
}
