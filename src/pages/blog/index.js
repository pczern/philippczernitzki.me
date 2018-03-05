import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import GatsbyLink from 'gatsby-link';

import {BlogContainer} from '../../components/Container';

import styled from 'styled-components';
import Post from '../../components/Post';


const Headline = styled.h3`
  font-size: 1.6em;
  font-weight: 500;
  line-height: 2;
`


const Date = styled.small`
  color: ${props => props.theme.primary};
`


const Text = styled.p`
  color: #666;
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 1em;
`


// const Article = (props) => (
//     <Post>
//       <Headline>
//         <Link to={props.link}>
//           {props.title}
//         </Link>
//       </Headline>
//       <Date>{props.date}</Date>
//       <Text dangerouslySetInnerHTML={{ __html: props.children }} />
//     </Post>
// )

const StyledPost = styled(Post)`
h2{
  font-size: 2.1em;
    font-weight: 500;

}
margin-top: 4em;
&:first-of-type{
  margin-top: 0em;
}
`


const InnerContainer = styled.div`
  max-width: 800px;
`

class APost {
  constructor(title, isPublished, date, slug, excerpt) {
    this.title = title;
    this.isPublished = isPublished;
    this.date = date;
    this.slug = slug;
    this.excerpt = excerpt;
  }
}

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const markdownPosts = get(this, 'props.data.allMarkdownRemark.edges')
    const jsPosts = get(this, 'props.data.allJsFrontmatter.edges')
    const posts = [];

    markdownPosts.map((post) => {
      if(post.node){
        const node = post.node;
      const title = get(node, 'frontmatter.title', node.fields.slug);
      const isPublished = get(node, 'frontmatter.published', false);
      const date = get(node, 'frontmatter.date');
      const slug = get(node, 'fields.slug');
      const excerpt = node.excerpt;
      posts.push(new APost(title, isPublished, date, slug, excerpt));
    }
    })

    jsPosts.map((post) => {
        if(post.node){
          const node = post.node;
      const title = get(node, 'data.title');
      const isPublished = get(node, 'data.published', false);
      const date = get(node, 'data.date');
      const slug = get(node, 'data.path');
      const excerpt = get(node, 'data.excerpt');
      posts.push(new APost(title, isPublished, date, slug, excerpt));
    }
    })

    posts.sort(function(a,b){
var c = new Date(a.date);
var d = new Date(b.date);
return c-d;
});



    return (
      <div>
        <Helmet title={siteTitle} />

        <BlogContainer>
          {posts.map((post) => {
            console.log(post);




            if(post.isPublished)
            return (

              <StyledPost key={post.slug}>
                <GatsbyLink to={post.slug}><h2>{post.title}</h2></GatsbyLink>
                <time>{post.date}</time>
                <p>{post.excerpt}</p>
              </StyledPost>
            )

          })}
        </BlogContainer>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            published
          }
        }
      }
    }
    allJsFrontmatter{
      edges {
        node {
          data {
            path
            title
            date(formatString: "DD MMMM, YYYY")
            excerpt
            published
          }
        }
      }
    }


  }
`
