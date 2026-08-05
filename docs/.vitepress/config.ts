import { defineConfig, type DefaultTheme } from "vitepress";

const slugs = [
  "0-intro",
  "1-collapse",
  "2-bottlenecks",
  "3-appetite",
  "4-shaping",
  "5-cycle",
  "6-betting",
  "7-done",
];

function sidebar(
  base: string,
  titles: string[],
  parts: [string, string, string],
): DefaultTheme.Sidebar {
  const items = titles.map((text, i) => ({ text, link: `${base}/${slugs[i]}` }));
  return [
    { text: parts[0], items: items.slice(0, 3) },
    { text: parts[1], items: items.slice(3, 5) },
    { text: parts[2], items: items.slice(5, 8) },
  ];
}

export default defineConfig({
  title: "Vibe Up",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Vibe Up" }],
    ["meta", { property: "og:title", content: "Vibe Up — Shape Up for the Vibe-Coding Era" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "How shaping, appetite, and cycles get rewritten when the cost of implementation approaches zero. English · 한국어 · 日本語",
      },
    ],
    ["meta", { property: "og:image", content: "https://vibeup.roboco.io/og.png" }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ],
  cleanUrls: true,
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/roboco-io/vibeup" }],
  },
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      description:
        "Shape Up for the vibe-coding era — how shaping, appetite, and cycles get rewritten when the cost of implementation approaches zero",
      themeConfig: {
        nav: [
          { text: "Get Started", link: "/0-intro" },
          { text: "VDLC", link: "https://vdlc.roboco.io/" },
          { text: "Shape Up (book)", link: "https://basecamp.com/shapeup" },
        ],
        sidebar: sidebar(
          "",
          [
            "Introduction: Why Shape Up Again, Now",
            "1. The Collapse of Implementation Cost",
            "2. The Three New Bottlenecks",
            "3. Redefining Appetite",
            "4. Shaping Is Still Human Work",
            "5. 4-Day Build + 1-Day Cool-down",
            "6. Rebuilding the Betting Table",
            "7. Verification and the Definition of Done",
          ],
          ["Part 1: What Changed", "Part 2: What Doesn't Change", "Part 3: The New Cycle"],
        ),
        outline: { label: "On this page", level: [2, 3] },
        footer: {
          message:
            'A guide that reinterprets Basecamp\'s <a href="https://basecamp.com/shapeup">Shape Up</a> (Ryan Singer) for the vibe-coding era.',
          copyright: "© 2026 ROBOCO",
        },
      },
    },
    ko: {
      label: "한국어",
      lang: "ko-KR",
      description:
        "바이브 코딩 시대의 Shape Up — 구현 비용이 0에 수렴할 때 셰이핑·애피타이트·사이클은 어떻게 다시 쓰이는가",
      themeConfig: {
        nav: [
          { text: "시작하기", link: "/ko/0-intro" },
          { text: "VDLC", link: "https://vdlc.roboco.io/ko/" },
          { text: "Shape Up 원서", link: "https://basecamp.com/shapeup" },
        ],
        sidebar: sidebar(
          "/ko",
          [
            "서문: 왜 지금 다시 Shape Up인가",
            "1장: 구현 비용의 붕괴",
            "2장: 새로운 세 가지 병목",
            "3장: 애피타이트의 재정의",
            "4장: 셰이핑은 여전히 사람의 일",
            "5장: 4일 빌드 + 1일 쿨다운",
            "6장: 베팅 테이블의 재구성",
            "7장: 검증·완료의 기준",
          ],
          ["1부: 무엇이 변했나", "2부: 변하지 않는 것", "3부: 새로운 사이클"],
        ),
        outline: { label: "이 페이지에서", level: [2, 3] },
        docFooter: { prev: "이전", next: "다음" },
        lastUpdated: { text: "마지막 수정" },
        footer: {
          message:
            'Basecamp의 <a href="https://basecamp.com/shapeup">Shape Up</a>(Ryan Singer)을 바이브 코딩 시대에 맞춰 재구성한 가이드입니다.',
          copyright: "© 2026 ROBOCO",
        },
      },
    },
    ja: {
      label: "日本語",
      lang: "ja",
      description:
        "バイブコーディング時代のShape Up — 実装コストがゼロに収束するとき、シェイピング・アペタイト・サイクルはどう書き換えられるのか",
      themeConfig: {
        nav: [
          { text: "はじめに", link: "/ja/0-intro" },
          { text: "VDLC", link: "https://vdlc.roboco.io/ja/" },
          { text: "Shape Up 原書", link: "https://basecamp.com/shapeup" },
        ],
        sidebar: sidebar(
          "/ja",
          [
            "序文: なぜ今、再びShape Upなのか",
            "1章: 実装コストの崩壊",
            "2章: 新たな3つのボトルネック",
            "3章: アペタイトの再定義",
            "4章: シェイピングは依然として人間の仕事",
            "5章: 4日ビルド + 1日クールダウン",
            "6章: ベッティングテーブルの再構築",
            "7章: 検証と完了の基準",
          ],
          ["第1部: 何が変わったか", "第2部: 変わらないもの", "第3部: 新しいサイクル"],
        ),
        outline: { label: "このページの内容", level: [2, 3] },
        docFooter: { prev: "前へ", next: "次へ" },
        lastUpdated: { text: "最終更新" },
        footer: {
          message:
            'Basecampの<a href="https://basecamp.com/shapeup">Shape Up</a>(Ryan Singer)をバイブコーディング時代に合わせて再構成したガイドです。',
          copyright: "© 2026 ROBOCO",
        },
      },
    },
  },
});
