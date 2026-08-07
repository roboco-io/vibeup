# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Vibe Up — Basecamp의 Shape Up을 바이브 코딩 시대에 맞춰 재해석한 가이드 문서 사이트. VitePress로 빌드되어 GitHub Pages(https://vibeup.roboco.io)로 배포된다. 코드가 아닌 **콘텐츠(마크다운) 중심 저장소**이며, 테스트/린트는 없다.

## Commands

```bash
npm install
npm run docs:dev       # 로컬 개발 서버 (http://localhost:5173)
npm run docs:build     # 프로덕션 빌드 → docs/.vitepress/dist
npm run docs:preview   # 빌드 결과 미리보기
```

배포는 `main` 푸시 시 `.github/workflows/deploy.yml`이 자동 수행 (Node 22, `npm ci` + `docs:build` → GitHub Pages). 수동 배포 작업은 불필요.

## Architecture

### 3개 언어 병렬 구조 — 항상 동기화 유지

- `docs/` (영어, 루트 로케일) · `docs/ko/` (한국어) · `docs/ja/` (일본어)
- 세 로케일 모두 **동일한 파일명(slug)** 을 사용: `index.md`, `0-intro.md` ~ `7-done.md` (서문 + 7개 장, 3부 구성)
- **콘텐츠를 수정하면 세 언어 버전을 모두 수정해야 한다.** 새 장을 추가하면 세 디렉토리에 같은 slug로 파일을 만들고 `config.ts`도 갱신해야 한다.

### 설정 단일 파일: `docs/.vitepress/config.ts`

- 장 slug 목록(`slugs` 배열)과 `sidebar()` 헬퍼가 사이드바를 생성 — 장 제목은 이 파일의 로케일별 `sidebar(...)` 호출에 있으므로, **장 제목 변경 시 마크다운 h1과 config.ts 양쪽을 수정**해야 한다.
- 사이드바 3부 분할은 `items.slice(0,3) / (3,5) / (5,8)` 하드코딩 — 장 개수가 바뀌면 이 슬라이스도 조정 필요.
- OG 메타 태그, `cleanUrls: true`, 로케일별 nav/footer 모두 이 파일에서 관리.

### 기타

- `docs/public/` — `CNAME`(커스텀 도메인, 삭제 금지), `logo.svg`, `og.png`(1200×630)
- 내부 링크는 `cleanUrls` 기준 확장자 없는 경로 사용 (예: `/ko/3-appetite`)
- 자매 사이트 VDLC(https://vdlc.roboco.io)와 상호 링크되어 있음

## Content Conventions

- 본문은 경어체 서술("~습니다"), 원서 Shape Up 개념은 한글 음차 + 필요 시 영문 병기 (셰이핑, 애피타이트, 베팅 테이블)
- 주장에는 출처 링크를 인라인 마크다운 링크로 병기
- 커밋 메시지는 한국어 + conventional commit 접두어 (`feat:`, `fix:` 등) 관례를 따른다
