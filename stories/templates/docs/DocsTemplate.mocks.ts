import { IDocTemplate } from '../../../components/templates/doc/DocTemplate';

const defaultDocTemplate: IDocTemplate = {
  id: 'default-page',
  title: 'Default Page',
  content: `
# THE LAW OF COFFEE
## THE LAW OF COFFEE
### THE LAW OF COFFEE
#### THE LAW OF COFFEE
##### THE LAW OF COFFEE
###### THE LAW OF COFFEE


If you sit down to enjoy a hot cup of coffee,

then your boss will ask you to do something

that will last until the coffee is cold.

> Whoever said that the definition of insanity is doing the same thing over and over again and expecting different results has obviously never had to reboot a computer. — William Petersen

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello, World!";
  return 0;
}
\`\`\`
`,
  category: 'DOCUMENT',
  createdAt: '2023-01-29 18:00:35.665',
  updatedAt: '2023-01-29 18:00:35.665',
  published: true,
  authorId: 'cldhkd74n0000uf3htdgtvdck',
  author: {
    name: 'keepcoding',
    email: 'keepcoding@gmail.com',
  },
};

const emptyDocTemplate: IDocTemplate = {
  id: 'empty-page',
  title: 'Empty Page',
  content: '',
  category: 'DOCUMENT',
  createdAt: '2023-01-29 18:00:35.665',
  updatedAt: '2023-01-29 18:00:35.665',
  published: true,
  authorId: 'cldhkd74n0000uf3htdgtvdck',
  author: {
    name: 'keepcoding',
    email: 'keepcoding@gmail.com',
  },
};

export const mocksDocTemplateProps = { defaultDocTemplate, emptyDocTemplate };
