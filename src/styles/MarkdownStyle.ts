import { css } from '@emotion/react';

const MarkdownStyle = css`
  time {
    color: #9b9b9b;
  }

  p {
    line-height: 1.5rem;
    margin: 1.5rem 0 0 0;
  }

  a {
    color: blue;
    text-decoration: underline;
  }

  h1 {
    font-size: 2rem;
    margin: 2.5rem 0 0 0;
  }

  h2,
  h3,
  h4,
  h5 {
    margin: 2rem 0 0 0;
    line-height: 1.25em;
  }

  h2::before {
    position: absolute;
    margin-left: -1em;
    font-weight: 300;
    font-size: 1.5rem;
    color: #9b9b9b;
    display: none;
    content: '#';
  }

  pre {
    display: block;
    background-color: rgba(27, 31, 35, 0.05);
    line-height: 1.25rem;
    padding: 1rem;
    overflow: auto;
    margin: 1.75rem 0 0 0;
  }

  pre code {
    background-color: transparent;
    font-size: 100%;
    padding: 0;
  }

  code {
    font-family: 'Ubuntu Mono', monospace;
    font-size: 85%;
    padding: 0.2em 0.4em;
    margin: 0;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
  }

  img {
    width: 100%;
  }

  table {
    max-width: 100%;
    border-spacing: 0;
    margin-top: 1.5rem;

    thead {
      background: #f7f7f7;
    }
    th {
      font-weight: 500;
    }

    th,
    td {
      padding: 0.5em 1em;
      border: 1px double #eee;
    }
  }

  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
  ul ul,
  ol ul {
    list-style-type: circle;
  }

  blockquote {
    border-left: 3px solid rgb(239, 240, 244);
    margin: 15px 0;
    padding-left: 16px;
  }

  blockquote p {
    margin-top: 0;
  }

  ol,
  ul {
    padding: 0 0 0 1.5rem;
    margin: 1.5rem 0 0 0;
    margin: 0;

    li {
      line-height: 1.5rem;
      margin: 0;
    }
  }

  .youtube-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    margin: 20px 0;
  }

  .youtube-container iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Syntax highlighting */
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.plain-text {
    color: #6a737d;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword,
  .token.operator {
    color: #d73a49;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #22863a;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #032f62;
  }

  .token.function,
  .token.class-name {
    color: #6f42c1;
  }

  /* language-specific */

  /* JSX */
  .language-jsx .token.punctuation,
  .language-jsx .token.tag .token.punctuation,
  .language-jsx .token.tag .token.script,
  .language-jsx .token.plain-text {
    color: #24292e;
  }

  .language-jsx .token.tag .token.attr-name {
    color: #6f42c1;
  }

  .language-jsx .token.tag .token.class-name {
    color: #005cc5;
  }

  .language-jsx .token.tag .token.script-punctuation,
  .language-jsx .token.attr-value .token.punctuation:first-of-type {
    color: #d73a49;
  }

  .language-jsx .token.attr-value {
    color: #032f62;
  }

  .language-jsx span[class='comment'] {
    color: pink;
  }

  /* HTML */
  .language-html .token.tag .token.punctuation {
    color: #24292e;
  }

  .language-html .token.tag .token.attr-name {
    color: #6f42c1;
  }

  .language-html .token.tag .token.attr-value,
  .language-html .token.tag .token.attr-value .token.punctuation:not(:first-of-type) {
    color: #032f62;
  }

  /* CSS */
  .language-css .token.selector {
    color: #6f42c1;
  }

  .language-css .token.property {
    color: #005cc5;
  }
`;

export default MarkdownStyle;
