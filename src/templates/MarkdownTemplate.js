import React from 'react';
import Helmet from 'react-helmet'
import graphql from 'graphql';

import './styles/markdown-template.scss';

export default function MarkdownTemplate({data}) {
  const {markdownRemark} = data; // data.markdownRemark holds our post data
  const {frontmatter, html} = markdownRemark;
  return (
    <div>
      <Helmet
        title={`Packary | ${frontmatter.title}`}
      />
      <div className="md-page container">
        <div
          className="md-page__content"
          dangerouslySetInnerHTML={{__html: html}}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query MarkdownByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;