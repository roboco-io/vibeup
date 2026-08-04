import { defineConfig } from "vitepress";

const chapters = [
  { text: "서문: 왜 지금 다시 Shape Up인가", link: "/0-intro" },
  { text: "1장: 구현 비용의 붕괴", link: "/1-collapse" },
  { text: "2장: 새로운 세 가지 병목", link: "/2-bottlenecks" },
  { text: "3장: 애피타이트의 재정의", link: "/3-appetite" },
  { text: "4장: 셰이핑은 여전히 사람의 일", link: "/4-shaping" },
  { text: "5장: 4일 빌드 + 1일 쿨다운", link: "/5-cycle" },
  { text: "6장: 베팅 테이블의 재구성", link: "/6-betting" },
  { text: "7장: 검증·완료의 기준", link: "/7-done" },
];

export default defineConfig({
  lang: "ko-KR",
  title: "Vibe Up",
  description:
    "바이브 코딩 시대의 Shape Up — 구현 비용이 0에 수렴할 때 셰이핑·애피타이트·사이클은 어떻게 다시 쓰이는가",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "시작하기", link: "/0-intro" },
      { text: "VDLC", link: "https://vdlc.roboco.io/ko/" },
      { text: "Shape Up 원서", link: "https://basecamp.com/shapeup" },
    ],
    sidebar: [
      { text: "1부: 무엇이 변했나", items: chapters.slice(0, 3) },
      { text: "2부: 변하지 않는 것", items: chapters.slice(3, 5) },
      { text: "3부: 새로운 사이클", items: chapters.slice(5, 8) },
    ],
    outline: { label: "이 페이지에서", level: [2, 3] },
    docFooter: { prev: "이전", next: "다음" },
    lastUpdated: { text: "마지막 수정" },
    socialLinks: [{ icon: "github", link: "https://github.com/roboco-io/vibeup" }],
    footer: {
      message:
        'Basecamp의 <a href="https://basecamp.com/shapeup">Shape Up</a>(Ryan Singer)을 바이브 코딩 시대에 맞춰 재구성한 가이드입니다.',
      copyright: "© 2026 ROBOCO",
    },
  },
});
