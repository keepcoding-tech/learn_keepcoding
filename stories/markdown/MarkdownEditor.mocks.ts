import { SetStateAction } from 'react';
import { IMarkdownEditor } from '../../components/markdown/MarkdownEditor';

const markdownContent = `
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
`;

const editor: IMarkdownEditor = {
  id: 'content',
  markdown: markdownContent,
  setMarkdown: function (_value: SetStateAction<string>): void {
    throw new Error('Function not implemented.');
  },
};

export const mocksMarkdownEditorProps = { editor };
