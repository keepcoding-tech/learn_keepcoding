import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import style from './MarkdownPreview.module.css';

export interface IMarkdownPreview {
  children: any;
}

const MarkdownPreview: React.FC<IMarkdownPreview> = (markdown) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setTheme(String(storedTheme));
  }, []);

  return (
    <div className={style.preview}>
      <div className={style.preview__scroll}>
        <ReactMarkdown
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          components={{
            code({ node, className, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              const hasMeta = node?.data?.meta;

              return match ? (
                <SyntaxHighlighter
                  // @ts-ignore
                  style={theme === 'light' ? oneLight : oneDark}
                  language={match[1]}
                  PreTag="div"
                  className="codeStyle"
                  showLineNumbers={true}
                  wrapLines={hasMeta ? true : false}
                  useInlineStyles={true}
                  {...props}
                />
              ) : (
                <code className={className} {...props} />
              );
            },
          }}
        >
          {markdown.children}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreview;
