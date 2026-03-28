// parse-tsx.js
// TSX 파일에서 텍스트 콘텐츠를 반자동으로 추출해 slides.json 초안을 생성
//
// 실행: node parse-tsx.js
// 출력: content/slides.json (수동 편집 예정)

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '../src/components/pages');
const OUTPUT_FILE = path.join(__dirname, 'content/slides.json');

// ── 슬라이드 순서 및 마스터 타입 정의 (Index.tsx 기반) ───
const SLIDE_MANIFEST = [
  { file: 'Page01Hero',           master: 'M1', section: 'hero',       title: 'AWS 완전정복' },
  { file: 'Page01Introduction',   master: 'M2', section: 'intro',      title: '강사 소개' },
  { file: 'Page01CSPvsMSP',       master: 'M3_compare', section: 'csp', title: 'CSP vs MSP' },
  { file: 'Page02CloudIntro',     master: 'M2', section: 'cloud',      title: '클라우드 컴퓨팅이란?' },
  { file: 'Page02CloudModels',    master: 'M3_columns', section: 'cloud', title: '클라우드 서비스 모델' },
  { file: 'Page03AmazonStory',    master: 'M2', section: 'amazon',     title: 'Amazon의 시작' },
  { file: 'Page03AmazonTimeline', master: 'M5', section: 'amazon',     title: 'Amazon 성장 타임라인' },
  { file: 'Page03Detail1',        master: 'M4', section: 'amazon',     title: 'Amazon 창업 이야기' },
  { file: 'Page03Detail2',        master: 'M4', section: 'amazon',     title: 'Amazon 초기 성장' },
  { file: 'Page03Detail3',        master: 'M4', section: 'amazon',     title: 'AWS 탄생' },
  { file: 'Page03Detail4',        master: 'M4', section: 'amazon',     title: 'AWS 글로벌 확장' },
  { file: 'Page03Detail5',        master: 'M4', section: 'amazon',     title: 'AWS 현재와 미래' },
  { file: 'Page04AWSServices',    master: 'M2', section: 'aws',        title: 'AWS 서비스 전체 개요' },
  { file: 'Page04AWSCategories',  master: 'M2', section: 'aws',        title: 'AWS 서비스 카테고리' },
  { file: 'Page05EC2',            master: 'M2', section: 'ec2',        title: 'Amazon EC2' },
  { file: 'Page05EC2Detail1',     master: 'M4', section: 'ec2',        title: 'Amazon EC2란?' },
  { file: 'Page05EC2Detail2',     master: 'M4', section: 'ec2',        title: 'EC2 인스턴스 유형' },
  { file: 'Page05EC2Detail3',     master: 'M4', section: 'ec2',        title: 'EC2 요금 모델' },
  { file: 'Page06S3',             master: 'M2', section: 's3',         title: 'Amazon S3' },
  { file: 'Page06S3Detail',       master: 'M4', section: 's3',         title: 'S3 스토리지 클래스' },
  { file: 'Page07Database',       master: 'M2', section: 'database',   title: 'AWS 데이터베이스 서비스' },
  { file: 'Page07DatabaseDetail', master: 'M4', section: 'database',   title: 'DB 선택 가이드' },
  { file: 'Page08Network',        master: 'M2', section: 'network',    title: 'AWS 네트워킹' },
  { file: 'Page08NetworkDetail',  master: 'M4', section: 'network',    title: 'VPC 아키텍처' },
  { file: 'Page09Security',       master: 'M2', section: 'security',   title: 'AWS 보안' },
  { file: 'Page09SecurityDetail', master: 'M4', section: 'security',   title: 'AWS 보안 심화' },
  { file: 'Page10AIML',           master: 'M2', section: 'aiml',       title: 'AWS AI/ML 서비스' },
  { file: 'Page10AIMLDetail',     master: 'M4', section: 'aiml',       title: 'AI/ML 서비스 가이드' },
  { file: 'Page11Lambda',         master: 'M2', section: 'lambda',     title: 'AWS Lambda' },
  { file: 'Page11LambdaDetail',   master: 'M4', section: 'lambda',     title: 'Lambda 활용 사례' },
  { file: 'Page12ECS',            master: 'M2', section: 'ecs',        title: 'AWS 컨테이너 서비스' },
  { file: 'Page12ECSDetail',      master: 'M3_compare', section: 'ecs', title: 'ECS vs EKS' },
  { file: 'Page13Serverless',     master: 'M2', section: 'serverless', title: '서버리스 아키텍처' },
  { file: 'Page13ServerlessDetail', master: 'M4', section: 'serverless', title: '서버리스 설계 패턴' },
  { file: 'Page14DevOps',         master: 'M2', section: 'devops',     title: 'AWS DevOps' },
  { file: 'Page14DevOpsDetail',   master: 'M4', section: 'devops',     title: 'DevOps 모범 사례' },
  { file: 'Page15Analytics',      master: 'M2', section: 'analytics',  title: 'AWS 분석 서비스' },
  { file: 'Page15AnalyticsDetail', master: 'M4', section: 'analytics', title: '데이터 분석 아키텍처' },
  { file: 'Page16IoT',            master: 'M2', section: 'iot',        title: 'AWS IoT' },
  { file: 'Page16IoTDetail',      master: 'M4', section: 'iot',        title: 'IoT 솔루션 구성' },
  { file: 'Page17Mobile',         master: 'M2', section: 'mobile',     title: 'AWS 모바일 개발' },
  { file: 'Page17MobileDetail',   master: 'M4', section: 'mobile',     title: '모바일 개발 가이드' },
  { file: 'Page18GameDev',        master: 'M2', section: 'gamedev',    title: 'AWS 게임 개발' },
  { file: 'Page18GameDevDetail',  master: 'M4', section: 'gamedev',    title: '게임 서버 아키텍처' },
  { file: 'Page19Careers',        master: 'M2', section: 'careers',    title: 'AWS 커리어 로드맵' },
  { file: 'Page19CareersDetail',  master: 'M4', section: 'careers',    title: 'AWS 자격증 가이드' },
  { file: 'Page20Future',         master: 'M1', section: 'future',     title: '클라우드의 미래' },
  { file: 'Page20FutureDetail',   master: 'M4', section: 'future',     title: '미래 기술 전망' },
  { file: 'Page21Resources',      master: 'M6', section: 'resources',  title: '학습 리소스 & 시작하기' },
];

// ── 텍스트 추출 헬퍼 ──────────────────────────────────────

/** JSX 문자열에서 한글/영문 텍스트 추출 */
function extractTexts(source) {
  const texts = [];

  // JSX 태그 사이 텍스트 (한글 포함)
  const jsxText = source.matchAll(/>([^<>{}\n]+)</g);
  for (const m of jsxText) {
    const t = m[1].trim();
    if (t.length > 1 && !/^\s*$/.test(t) && !/^[{}()[\].,;:!?=+\-*/|&^%$#@~`'"\\]+$/.test(t)) {
      texts.push(t);
    }
  }

  // 문자열 리터럴 (title: "...", description: "..." 등)
  const strLiterals = source.matchAll(/(?:title|description|body|text|label|subtitle|name):\s*["'`]([^"'`\n]{2,})["'`]/g);
  for (const m of strLiterals) {
    const t = m[1].trim();
    if (t.length > 1) texts.push(t);
  }

  return [...new Set(texts)]; // 중복 제거
}

/** 배열 리터럴에서 객체 배열 추출 시도 */
function extractItemArrays(source) {
  const items = [];

  // { title: "...", description: "..." } 패턴
  const pattern = /\{\s*(?:icon:\s*\w+,\s*)?title:\s*["'`]([^"'`]+)["'`],?\s*description:\s*["'`]([^"'`]+)["'`]/g;
  for (const m of source.matchAll(pattern)) {
    items.push({ title: m[1].trim(), body: m[2].trim() });
  }

  // { year: "...", title: "...", description: "..." } 패턴 (timeline)
  const timelinePattern = /year:\s*["'`]([^"'`]+)["'`],?\s*(?:event|title):\s*["'`]([^"'`]+)["'`],?\s*description:\s*["'`]([^"'`]+)["'`]/g;
  for (const m of source.matchAll(timelinePattern)) {
    items.push({ year: m[1].trim(), title: m[2].trim(), body: m[3].trim() });
  }

  return items;
}

// ── 메인 파싱 로직 ────────────────────────────────────────
function parsePage(manifest) {
  const filePath = path.join(PAGES_DIR, `${manifest.file}.tsx`);

  if (!fs.existsSync(filePath)) {
    console.warn(`  ⚠️  파일 없음: ${manifest.file}.tsx`);
    return buildEmptySlide(manifest);
  }

  const source = fs.readFileSync(filePath, 'utf-8');
  const texts = extractTexts(source);
  const items = extractItemArrays(source);

  return buildSlide(manifest, texts, items, source);
}

function buildSlide(manifest, texts, items, source) {
  const base = {
    file: manifest.file,
    master: manifest.master,
    section: manifest.section,
    title: manifest.title,
    // _raw_texts: 개발용 참고 (나중에 삭제 가능)
    _extracted_texts: texts.slice(0, 30),
    _extracted_items: items.slice(0, 10),
  };

  // 마스터별 데이터 구조 초안
  switch (manifest.master) {
    case 'M1':
      return {
        ...base,
        eyebrow: 'AMAZON WEB SERVICES',
        subtitle: texts.find(t => t.length > 10 && t !== manifest.title) || '',
        body: texts.filter(t => t.length > 30 && t !== manifest.title).slice(0, 2).join(' '),
      };

    case 'M2':
      return {
        ...base,
        subtitle: texts.find(t => t.length > 10 && t.length < 80 && t !== manifest.title) || '',
        cards: items.length > 0
          ? items.slice(0, 6).map(item => ({ icon: '●', label: '', title: item.title, body: item.body }))
          : texts.filter(t => t.length < 30 && t !== manifest.title).slice(0, 4).map(t => ({
              icon: '●', label: '', title: t, body: ''
            })),
      };

    case 'M3_compare':
      return {
        ...base,
        left: {
          title: texts[1] || '좌측',
          items: texts.filter(t => t.length < 50).slice(2, 6),
          tags: [],
        },
        right: {
          title: texts[texts.length > 3 ? 3 : 2] || '우측',
          items: texts.filter(t => t.length < 50).slice(6, 10),
          tags: [],
        },
        benefits: [],
      };

    case 'M3_columns':
      return {
        ...base,
        subtitle: texts.find(t => t.length > 10 && t !== manifest.title) || '',
        columns: items.length >= 3
          ? items.slice(0, 3).map(item => ({ icon: '●', title: item.title, body: item.body, examples: [] }))
          : [{icon:'●', title:'', body:'', examples:[]}, {icon:'●', title:'', body:'', examples:[]}, {icon:'●', title:'', body:'', examples:[]}],
      };

    case 'M4': {
      const h2matches = [...source.matchAll(/text-(?:\w+-)?400[^>]*>([^<]+)</g)].map(m => m[1].trim()).filter(Boolean);
      const bullets = items.length > 0 ? items : texts.filter(t => t.length > 3 && t.length < 60 && t !== manifest.title)
        .slice(0, 6).map(t => ({ title: t, body: '' }));

      return {
        ...base,
        subtitle: texts.find(t => t.length > 20 && t !== manifest.title) || '',
        left: {
          title: h2matches[0] || '핵심 개념',
          bullets: bullets.slice(0, 3).map(b => ({ title: b.title, body: b.body || '' })),
        },
        right: {
          title: h2matches[1] || '주요 이점',
          bullets: bullets.slice(3, 6).map(b => ({ title: b.title, body: b.body || '' })),
        },
        bottomGrid: [],
      };
    }

    case 'M5':
      return {
        ...base,
        subtitle: texts.find(t => t.length > 10 && t !== manifest.title) || '',
        events: items.filter(i => i.year).slice(0, 6),
      };

    case 'M6':
      return {
        ...base,
        subtitle: texts.find(t => t.length > 10 && t !== manifest.title) || '',
        cards: items.slice(0, 4).map(item => ({
          icon: '📌', title: item.title, body: item.body,
          highlight: '', features: [], url: '', color: null,
        })),
      };

    default:
      return base;
  }
}

function buildEmptySlide(manifest) {
  return {
    file: manifest.file,
    master: manifest.master,
    section: manifest.section,
    title: manifest.title,
    _note: '파일을 찾을 수 없어 수동 입력 필요',
  };
}

// ── 실행 ─────────────────────────────────────────────────
console.log('📄 TSX 파싱 시작...\n');

const slides = SLIDE_MANIFEST.map((manifest, i) => {
  process.stdout.write(`  [${String(i + 1).padStart(2, '0')}] ${manifest.file} → `);
  const slide = parsePage(manifest);
  console.log(`${manifest.master} ✓`);
  return slide;
});

fs.mkdirSync(path.join(__dirname, 'content'), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(slides, null, 2), 'utf-8');

console.log(`\n✅ 완료! ${slides.length}개 슬라이드 → ${OUTPUT_FILE}`);
console.log('📝 slides.json을 열어서 내용을 보충/수정하세요.\n');
