import React from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useState, useEffect } from "react";

const BlogList = (props) => {
  const [posts, setPosts] = useState([]);
  const apiURL = process.env.REACT_APP_URL

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${apiURL}/blogposts`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
  }, []);


  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
