import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "yhchen.org",
  tagline: "site for study and knowledge sharing",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true,
  },

  // Set the production url of your site here
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'

  /**
   * https://isonerd.github.io
   * https://blog.yhchen.org
   */
  url: "https://isonerd.github.io",
  baseUrl: "/",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "isoNerd", // Usually your GitHub org/user name.
  projectName: "isonerd.github.io", // Usually your repo name.
  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant", "en"],
    localeConfigs: {
      "zh-Hant": {
        label: "繁體中文",
        direction: "ltr",
        htmlLang: "zh-TW",
        translate: false,
      },
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        //   remarkPlugins: [remarkMath],
        //   rehypePlugins: [rehypeKatex],
        // },
        pages: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "首頁",
      hideOnScroll: false,
      logo: {
        alt: "i$o/lEC Nerd",
        src: "img/favicon.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          type: "dropdown",
          label: "教學與工具 / Foundations",
          position: "left",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com",
            },
          ],
        },
        {
          type: "dropdown",
          label: "深入研究 / Deep Dive",
          position: "left",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com",
            },
          ],
        },
        // { to: "/blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
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
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} yhchen.org. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: [
        "java",
        "go",
        "rust",
        "kotlin",
        "scala",
        "bash",
        "latex",
        "cpp",
        "javascript",
      ],
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "hl-next",
        },
        {
          className: "code-block-error-line",
          line: "error-next",
          block: { start: "highlight-start", end: "highlight-end" },
        },
      ],
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
};

export default config;
