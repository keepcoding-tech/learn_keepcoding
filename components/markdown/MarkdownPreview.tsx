import Container from '@mui/material/Container';
import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';
import oneLight from 'react-syntax-highlighter/dist/cjs/styles/prism/one-light';
import remarkGfm from 'remark-gfm';
import ToggleThemeState from '../theme/toggle/ToggleThemeState';
import { styles } from './MarkdownPreviewStyles';

export interface IMarkdownPreview {
  children: any;
}

const MarkdownPreview: React.FC<IMarkdownPreview> = (param) => {
  const { themeState } = useContext(ToggleThemeState);

  return (
    <Container>
      <ReactMarkdown
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        components={{
          code({ node, className, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const hasMeta = node?.data?.meta;

            return match ? (
              <SyntaxHighlighter
                // @ts-ignore
                style={themeState === 'light' ? oneLight : oneDark}
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
              <code style={styles.baseCode} {...props} />
            );
          },
        }}
      >
        {param.children}
      </ReactMarkdown>
    </Container>
  );
};

export default MarkdownPreview;
