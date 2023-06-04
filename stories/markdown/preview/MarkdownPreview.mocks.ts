import { IMarkdownPreview } from '../../../components/markdown/preview/MarkdownPreview';

const defaultMarkdownPreview: IMarkdownPreview = {
  children: `
# header 1

## header 2

### header 3

#### header 4

##### header 5

###### header 6

*italic text*

**bold text**

> blockquote

1. write
1. a
1. numbered
1. list

- or
- simply
- use
- bullet
- points

\`\`\`js
// this is some code
function foo (a) {
  return a / 100;
}

console.log(123); // 1
\`\`\`
`,
};

export const mocksMarkdownPreviewProps = { defaultMarkdownPreview };
