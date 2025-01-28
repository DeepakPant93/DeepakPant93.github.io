import { themes as prismThemes } from "prism-react-renderer";

const config = {
  title: "Deepak Pant",
  tagline: "AWS Certified | Lead Technical Architect | Certified Salesforce AI Associate",
  favicon: "img/logo.png",
  url: "https://deepakpant93.github.io/",
  baseUrl: "/",
  organizationName: "DeepakPant93",
  projectName: "DeepakPant93.github.io.git",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        gtag: {
          trackingID: "G-S7ZWLMWP9G",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/website-card.png",
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "About Me",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/DeepakPant93",
          position: "right",
          className: "header--github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About Me",
          items: [
            {
              label: "My Work",
              to: "docs/about_me/work_experience",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/deepak-pant-014787115/",
            },
            {
              label: "Twitter",
              href: "https://x.com/pant__93",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/DeepakPant93",
            },
            {
              label: "Dev.To",
              href: "https://dev.to/deepakpant93",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deepak Pant. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["latex"],
    },
  },
  stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
};

export default config;