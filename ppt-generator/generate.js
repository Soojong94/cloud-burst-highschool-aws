// generate.js - 메인 PPT 생성 진입점
//
// 실행: node generate.js
// 출력: output/aws-cloud-burst.pptx

const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const { SECTION_COLOR, ACCENT } = require('./theme');
const { addM1Slide } = require('./masters/m1-hero');
const { addM2Slide } = require('./masters/m2-icon-grid');
const { addM3CompareSlide, addM3ColumnsSlide } = require('./masters/m3-comparison');
const { addM4Slide } = require('./masters/m4-narrative');
const { addM5Slide } = require('./masters/m5-timeline');
const { addM6Slide } = require('./masters/m6-resource');

const SLIDES_JSON = path.join(__dirname, 'content/slides.json');
const OUTPUT_DIR = path.join(__dirname, 'output');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'aws-cloud-burst.pptx');

// ── 섹션 → 색상 매핑 헬퍼 ─────────────────────────────────
function getColor(section) {
  return SECTION_COLOR[section] || ACCENT.blue;
}

// ── 마스터별 슬라이드 생성 ────────────────────────────────
function buildSlide(prs, data) {
  const color = data.color ? ACCENT[data.color] || getColor(data.section) : getColor(data.section);
  const slideData = { ...data, color };

  switch (data.master) {
    case 'M1':
      return addM1Slide(prs, slideData);

    case 'M2':
      return addM2Slide(prs, {
        ...slideData,
        cards: (data.cards || []).map(c => ({
          ...c,
          icon: c.icon || defaultIcon(data.section),
        })),
      });

    case 'M3_compare':
      return addM3CompareSlide(prs, {
        ...slideData,
        left: {
          ...data.left,
          color: data.left?.colorKey ? ACCENT[data.left.colorKey] : color,
        },
        right: {
          ...data.right,
          color: data.right?.colorKey ? ACCENT[data.right.colorKey] : ACCENT.green,
        },
      });

    case 'M3_columns':
      return addM3ColumnsSlide(prs, {
        ...slideData,
        columns: (data.columns || []).map((col, i) => ({
          ...col,
          color: col.colorKey ? ACCENT[col.colorKey] : [ACCENT.blue, ACCENT.green, ACCENT.purple][i % 3],
        })),
      });

    case 'M4':
      return addM4Slide(prs, slideData);

    case 'M5':
      return addM5Slide(prs, slideData);

    case 'M6':
      return addM6Slide(prs, {
        ...slideData,
        cards: (data.cards || []).map((c, i) => ({
          ...c,
          color: c.colorKey ? ACCENT[c.colorKey] : [ACCENT.orange, ACCENT.blue, ACCENT.green, ACCENT.purple][i % 4],
        })),
      });

    default:
      console.warn(`  ⚠️  알 수 없는 마스터: ${data.master} (${data.file})`);
      return addM4Slide(prs, { ...slideData, left: { title: data.title, bullets: [] }, right: { title: '', bullets: [] } });
  }
}

// 섹션별 기본 이모지 아이콘
function defaultIcon(section) {
  const iconMap = {
    hero: '☁', intro: '👤', csp: '🏢', cloud: '☁', amazon: '📦',
    aws: '⚡', ec2: '💻', s3: '🗄', database: '🗃', network: '🌐',
    security: '🔒', aiml: '🤖', lambda: '⚡', ecs: '📦', serverless: '⚡',
    devops: '🔄', analytics: '📊', iot: '🔌', mobile: '📱', gamedev: '🎮',
    careers: '🎯', future: '🚀', resources: '📚',
  };
  return iconMap[section] || '●';
}

// ── 메인 실행 ─────────────────────────────────────────────
async function main() {
  console.log('🚀 PPT 생성 시작...\n');

  if (!fs.existsSync(SLIDES_JSON)) {
    console.error('❌ slides.json이 없습니다. 먼저 node parse-tsx.js를 실행하세요.');
    process.exit(1);
  }

  const slides = JSON.parse(fs.readFileSync(SLIDES_JSON, 'utf-8'));

  // pptxgenjs 초기화
  const prs = new pptxgen();
  // 슬라이드 크기: 기본 16:9 (10" x 5.625") — theme.js의 SLIDE_W/H와 일치

  let successCount = 0;
  let errorCount = 0;

  slides.forEach((slideData, i) => {
    try {
      process.stdout.write(`  [${String(i + 1).padStart(2, '0')}/${slides.length}] ${slideData.file} (${slideData.master}) → `);
      buildSlide(prs, slideData);
      console.log('✓');
      successCount++;
    } catch (err) {
      console.log(`❌ ${err.message}`);
      errorCount++;
    }
  });

  // 저장
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  await prs.writeFile({ fileName: OUTPUT_FILE });

  console.log(`\n${'─'.repeat(50)}`);
  console.log(`✅ 완료: ${successCount}/${slides.length} 슬라이드 생성`);
  if (errorCount > 0) console.log(`⚠️  오류: ${errorCount}개`);
  console.log(`📁 출력: ${OUTPUT_FILE}`);
  console.log(`${'─'.repeat(50)}\n`);
}

main().catch(err => {
  console.error('\n❌ 생성 실패:', err.message);
  console.error(err.stack);
  process.exit(1);
});
