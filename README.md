# Vibe Up — 바이브 코딩 시대의 Shape Up

Basecamp의 [Shape Up](https://basecamp.com/shapeup)(Ryan Singer)을 바이브 코딩 시대에 맞춰 재구성한 한국어 가이드입니다.

**웹사이트: https://vibeup.roboco.io**

## 개요

구현 비용이 0에 수렴해도 병목은 사라지지 않고 이동합니다. 이 가이드는 새 병목(검증·리뷰, 주의력·집중, 복잡도 부채)을 짚고, 애피타이트·셰이핑이라는 원작의 원리가 예산 단위만 바꿔 살아남는 과정을 따라간 뒤, [VDLC](https://vdlc.roboco.io)의 주간 사이클(4일 빌드 + 1일 쿨다운)로 수렴합니다.

- 1부: 무엇이 변했나 — 구현 비용의 붕괴, 새로운 세 가지 병목
- 2부: 변하지 않는 것 — 애피타이트의 재정의, 셰이핑은 여전히 사람의 일
- 3부: 새로운 사이클 — 4일 빌드 + 1일 쿨다운, 베팅 테이블의 재구성, 검증·완료의 기준

## 개발

```bash
npm install
npm run docs:dev     # 로컬 미리보기
npm run docs:build   # 빌드
```

`main` 브랜치에 푸시하면 GitHub Actions가 자동으로 빌드해 GitHub Pages로 배포합니다.
