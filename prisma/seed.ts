import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

async function main() {
  // create an admin and normal user
  const password = await bcrypt.hash('password', 10);
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: password,
      role: 'ADMIN',
    },
  });

  const normal = await prisma.user.create({
    data: {
      name: 'Normal User',
      email: 'normal@example.com',
      password: password,
      role: 'USER',
    },
  });

  // display the user
  console.log({ admin, normal });

  // create the terms and privacy documents
  await prisma.document.create({
    data: {
      id: 'terms',
      title: 'Terms',
      content: `
> Welcome to our open-source C library documentation website! We're thrilled to have you here. By accessing or using the website, you agree to the following terms and conditions. If you have any questions or need clarification, please don't hesitate to reach out. Let's dive in!

#### Licensing

**a. Content**: All textual content, including documentation, guides, and explanations, on this website, is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/). You are free to use, distribute, and adapt the content, provided you give appropriate credit to the original authors.

**b. Code Samples**: The code samples provided on this website are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). You are free to use and modify the code samples in accordance with the terms of this license.

**c. C Library**: The open-source C library itself, along with its source code, is licensed under the [MIT License](https://choosealicense.com/licenses/mit/). This means you are free to use, modify, and distribute the library, both for personal and commercial purposes, subject to the conditions of the MIT License.

#### Disclaimer of Warranty

While we strive to provide accurate and up-to-date information, please note that the content and code samples on this website are provided "as is" without any warranty or guarantee of any kind, expressed or implied. We cannot be held liable for any errors, omissions, or consequences arising from the use of the information or code provided.

#### Limitation of Liability

In no event shall we, the authors, or contributors be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or misuse of the C library, content, or code samples on this website.

#### Modifications and Termination

We reserve the right to modify, update, or terminate the website and its content at any time without prior notice. We may also revise these terms and conditions periodically. By continuing to use the website after any modifications, you accept the updated terms.

#### Governing Law

These terms and your use of the C library documentation website shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any legal disputes shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].

**Contact Us**

If you have any questions, suggestions, or feedback regarding these terms or any aspect of the C library or documentation website, please don't hesitate to reach out. We value your input and are here to assist you.
`,
      author: {
        connect: {
          email: 'admin@example.com',
        },
      },
    },
  });

  await prisma.document.create({
    data: {
      id: 'privacy',
      title: 'Privacy',
      content: `
> Welcome to our C library documentation website! Your privacy is important to us, and we want to be transparent about how we collect, use, and protect your personal information. This Privacy Policy outlines the practices we follow when handling your data. Please take a moment to read through this policy. If you have any questions or concerns, feel free to contact us.

#### Information We Collect

**a. Personal Information**: When you interact with our website, we may collect certain personally identifiable information, such as your name, email address, and any information voluntarily provided by you through contact forms or communication channels.

**b. Usage Data**: We may collect non-personally identifiable information about how you use and navigate our website. This may include your IP address, browser type, operating system, referring pages, and timestamps. We use this information to analyze trends, administer the website, and gather demographic information.

#### Use of Information

**a.** We use the personal information you provide to respond to your inquiries, provide support, and improve our services and website.

**b.** We may use the usage data to analyze website usage patterns, monitor and enhance the website's performance and security, and personalize your experience.

#### Data Sharing and Third Parties

**a.** We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to fulfill the purpose for which the information was provided.

**b.** We may engage third-party service providers to assist with website analytics, hosting, or other necessary functions. These providers have access to the information as needed to perform their services and are obligated to maintain its confidentiality.

#### Data Security

We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is completely secure.

#### Cookies and Tracking Technologies

Our website may use cookies and similar tracking technologies to enhance your browsing experience. You have the option to disable cookies through your browser settings, but please note that certain features of the website may not function properly without them.

#### External Links

Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and are not responsible for their privacy policies or practices.

#### Children's Privacy

Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us, and we will promptly delete it.

#### Changes to this Privacy Policy

We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically for any updates.

#### Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us using the provided contact information.
`,
      author: {
        connect: {
          email: 'admin@example.com',
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
