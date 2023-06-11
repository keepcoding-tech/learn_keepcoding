import { SetStateAction } from 'react';
import { IEditorMarkdown } from '../../../components/markdown/editor/EditorMarkdown';

const defaultEditorMarkdown: IEditorMarkdown = {
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

export const mocksEditorMarkdownProps = { defaultEditorMarkdown };
