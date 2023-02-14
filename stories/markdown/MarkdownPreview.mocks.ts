import { IMarkdownPreview } from '../../components/markdown/MarkdownPreview';

const preview: IMarkdownPreview = {
  children: `
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
};

export const mocksMarkdownPreviewProps = { preview };
