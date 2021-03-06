import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet"

import Layout from "../components/layout";
import writingStyle from "./writing.module.scss";

export default function Writing() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Helmet>
        <title>Writing ✍🏼 | Saketh Pabolu</title>
      </Helmet>

      <h1>Blog</h1>

      <ol className={writingStyle.parent}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <Link to={`/writing/${edge.node.fields.slug}`}>
                <h2 className={writingStyle.title}>{edge.node.frontmatter.title}</h2>
                <p className={writingStyle.date}>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}
