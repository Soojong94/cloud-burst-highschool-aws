// theme.js - PPT 전체 테마 상수
// 슬라이드 크기: 16:9 widescreen (pptxgenjs 기본값: 10" x 5.625")

const SLIDE_W = 10;
const SLIDE_H = 5.625;

// ── 배경색 ──────────────────────────────────────────────
const BG = {
  base: '0f172a',      // 메인 다크 배경
  surface: '1e293b',   // 카드/박스 배경
  surfaceLight: '263348', // 살짝 밝은 카드
};

// ── 텍스트 색상 ─────────────────────────────────────────
const TEXT = {
  white: 'f8fafc',
  muted: '94a3b8',
  dim: '64748b',
};

// ── 섹션별 액센트 색상 ───────────────────────────────────
const ACCENT = {
  blue:   { main: '60a5fa', dark: '1d4ed8', glow: '1e3a5f' },
  cyan:   { main: '22d3ee', dark: '0e7490', glow: '164e63' },
  green:  { main: '4ade80', dark: '15803d', glow: '14532d' },
  purple: { main: 'c084fc', dark: '7e22ce', glow: '3b0764' },
  orange: { main: 'fb923c', dark: 'c2410c', glow: '431407' },
  red:    { main: 'f87171', dark: 'b91c1c', glow: '450a0a' },
  yellow: { main: 'facc15', dark: 'a16207', glow: '422006' },
  pink:   { main: 'f472b6', dark: '9d174d', glow: '500724' },
};

// ── 섹션별 색상 매핑 (Index.tsx 순서 기준) ───────────────
const SECTION_COLOR = {
  hero:       ACCENT.blue,
  intro:      ACCENT.blue,
  csp:        ACCENT.green,
  cloud:      ACCENT.green,
  amazon:     ACCENT.orange,
  aws:        ACCENT.purple,
  ec2:        ACCENT.blue,
  s3:         ACCENT.orange,
  database:   ACCENT.cyan,
  network:    ACCENT.green,
  security:   ACCENT.red,
  aiml:       ACCENT.purple,
  lambda:     ACCENT.yellow,
  ecs:        ACCENT.blue,
  serverless: ACCENT.cyan,
  devops:     ACCENT.orange,
  analytics:  ACCENT.purple,
  iot:        ACCENT.green,
  mobile:     ACCENT.pink,
  gamedev:    ACCENT.purple,
  careers:    ACCENT.green,
  future:     ACCENT.blue,
  resources:  ACCENT.blue,
};

// ── 폰트 ────────────────────────────────────────────────
// Malgun Gothic: Windows 기본 내장 한글 폰트 → 어느 PC에서나 한글 정상 출력
const FONT = {
  main: 'Malgun Gothic',
  fallback: 'Malgun Gothic',
};

// ── 폰트 크기 (pt) ───────────────────────────────────────
const SIZE = {
  heroTitle:    54,
  heroSubtitle: 20,
  heroBody:     14,

  pageTitle:    36,
  pageSubtitle: 13,

  sectionTitle: 18,
  cardTitle:    14,
  cardBody:     11,
  bullet:       12,
  bulletSub:    10,
  label:        9,
};

// ── 레이아웃 여백/간격 ────────────────────────────────────
const LAYOUT = {
  margin:      0.35,   // 슬라이드 외곽 여백
  headerH:     1.1,    // 헤더 영역 높이
  colGap:      0.2,    // 2열 사이 간격
  cardGap:     0.18,   // 카드 간 간격
  innerPad:    0.22,   // 박스 내부 패딩 (텍스트 오프셋용)
};

// ── 자주 쓰는 도형 스타일 팩토리 ─────────────────────────

/** 반투명 다크 카드 박스 */
function cardFill(accentColor, transparency = 75) {
  return {
    fill: { color: BG.surface, transparency },
    line: { color: accentColor.main, width: 0.75, transparency: 50 },
  };
}

/** 그라디언트 배경 오버레이용 반투명 사각형 */
function glowCircle(color, x, y, size) {
  return {
    shape: 'ellipse',
    x, y,
    w: size, h: size,
    fill: { type: 'solid', color: color.glow, transparency: 40 },
    line: { type: 'none' },
  };
}

/** 헤더 제목 텍스트 옵션 */
function titleOpts(color) {
  return {
    fontSize: SIZE.pageTitle,
    bold: true,
    color: color.main,
    fontFace: FONT.main,
    align: 'center',
  };
}

/** 본문 뮤트 텍스트 옵션 */
function bodyOpts(size = SIZE.cardBody) {
  return {
    fontSize: size,
    color: TEXT.muted,
    fontFace: FONT.main,
    align: 'left',
  };
}

/** 섹션 소제목 옵션 */
function sectionTitleOpts(color) {
  return {
    fontSize: SIZE.sectionTitle,
    bold: true,
    color: color.main,
    fontFace: FONT.main,
    align: 'left',
  };
}

module.exports = {
  SLIDE_W, SLIDE_H,
  BG, TEXT, ACCENT, SECTION_COLOR, FONT, SIZE, LAYOUT,
  cardFill, glowCircle, titleOpts, bodyOpts, sectionTitleOpts,
};
