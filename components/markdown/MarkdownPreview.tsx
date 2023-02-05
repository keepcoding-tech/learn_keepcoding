import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';
import oneLight from 'react-syntax-highlighter/dist/cjs/styles/prism/one-light';
import remarkGfm from 'remark-gfm';

export interface IMarkdownPreview {
  children: any;
}

const MarkdownPreview: React.FC<IMarkdownPreview> = (props) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setTheme(String(storedTheme));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div
        style={{
          padding: '24px',
          flexGrow: 1,
        }}
      >
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
                  sx={{ marginLeft: '-48px' }}
                  {...props}
                />
              ) : (
                <>
                  <code
                    {...props}
                    style={{
                      backgroundColor: 'var(--code-background-color)',
                      fontFamily:
                        'Fira Code, Fira Mono, Menlo, Consolas, DejaVu Sans Mono, monospace',
                      color: 'var(--primary-font-color)',
                      padding: '6px',
                      borderRadius: '0.3em',
                      lineHeight: '40px',
                    }}
                  />
                </>
              );
            },
          }}
        >
          {props.children}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreview;
