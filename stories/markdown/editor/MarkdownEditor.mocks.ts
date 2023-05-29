import { SetStateAction } from 'react';
import { IMarkdownEditor } from '../../../components/markdown/editor/MarkdownEditor';

const defaultMarkdownEditor: IMarkdownEditor = {
  id: 'content',
  markdown: `
# header
## header
### header
#### header
##### header
###### header
*italic text*
**bold text**
\`\`\`js
  // this is some code
  function foo (a) {
    return a / 100;
  }

  console.log(123); // 1
\`\`\`
`,
  setMarkdown: function (_value: SetStateAction<string>): void {},
};

export const mocksMarkdownEditorProps = { defaultMarkdownEditor };
