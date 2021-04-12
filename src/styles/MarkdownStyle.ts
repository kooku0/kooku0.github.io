import { css } from '@emotion/react';

const MarkdownStyle = css`
  time {
    color: #9b9b9b;
  }

  p {
    line-height: 1.5rem;
    margin: 1rem 0 0 0;
  }

  a {
    font-size: 1rem;
    color: #6f7580;
    text-decoration: none;
    font-weight: 550;
  }

  h1 {
    font-size: 2rem;
    margin: 2.5rem 0 0 0;
  }

  h2,
  h3,
  h4,
  h5 {
    margin: 1.5rem 0 0.5rem 0;
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

  p > code {
    padding: 0.1rem 0.3rem;
    border-radius: 4px;
    background-color: #f2f5fc;
    color: #275fc8;
    font-size: 1rem;
    font-weight: bold;
  }

  pre {
    padding: 1.2em;
    margin: 1.5em 0;
    overflow: auto;
    border-radius: 0.6em;
    color: #e0e0e0;
    background: #212121;
    font-family: 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.6;
    font-size: 13px;

    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    -ms-overflow-style: none; // IE 10+
    overflow: -moz-scrollbars-none; // Firefox
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #e0e0e0;
    background: none;
    font-family: 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.6;
    font-size: 13px;

    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    -ms-overflow-style: none; // IE 10+
    overflow: -moz-scrollbars-none; // Firefox
  }

  pre[class*='language-']::-webkit-scrollbar {
    display: none; // Safari and Chrome
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1.2em;
    margin: 1.5em 0;
    overflow: auto;
    border-radius: 0.6em;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #212121;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em 0.6em;
    border-radius: 0.2em;
    white-space: normal;
    background: $inline-dimmed-color;
    color: $inline-text-color;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #868282;
  }

  .token.punctuation {
    color: #e0e0e0;
  }

  pre[class*='language-'] .tag {
    color: #358cd6;
  }
  .token.attr-name {
    color: #6196cc;
  }
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean {
    color: #358cd6;
  }
  .token.number {
    color: #b5ce98;
  }
  .token.function {
    color: #dcdcaa;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #4ec9b2;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #c586c0;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #ce9178;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`;

export default MarkdownStyle;
