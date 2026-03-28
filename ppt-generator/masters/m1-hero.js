// masters/m1-hero.js  — M1: Hero/Title 슬라이드
const {
  SLIDE_W, SLIDE_H, BG, TEXT, FONT, SIZE, LAYOUT,
} = require('../theme');

function addM1Slide(prs, data) {
  const slide = prs.addSlide();
  const color = data.color;
  const M = LAYOUT.margin;

  // 배경
  slide.addShape(prs.ShapeType.rect, {
    x: 0, y: 0, w: SLIDE_W, h: SLIDE_H,
    fill: { color: BG.base }, line: { type: 'none' },
  });

  // 상단 액센트 바 (얇은 수평선)
  slide.addShape(prs.ShapeType.rect, {
    x: 0, y: 0, w: SLIDE_W, h: 0.06,
    fill: { color: color.main, transparency: 20 }, line: { type: 'none' },
  });

  // 아이콘 원형 (중앙)
  const iconSize = 0.8;
  const iconX = (SLIDE_W - iconSize) / 2;
  const iconY = 0.55;

  slide.addShape(prs.ShapeType.ellipse, {
    x: iconX, y: iconY, w: iconSize, h: iconSize,
    fill: { color: color.main, transparency: 80 },
    line: { color: color.main, width: 1.5, transparency: 35 },
  });
  slide.addText('☁', {
    x: iconX, y: iconY + 0.06, w: iconSize, h: iconSize - 0.1,
    fontSize: 28, color: color.main,
    fontFace: 'Segoe UI Emoji', align: 'center', valign: 'middle',
  });

  // eyebrow
  const eyebrowY = iconY + iconSize + 0.14;
  if (data.eyebrow) {
    slide.addText(data.eyebrow, {
      x: M, y: eyebrowY, w: SLIDE_W - M * 2, h: 0.24,
      fontSize: SIZE.label + 1, bold: true, color: color.main,
      fontFace: FONT.main, align: 'center',
    });
  }

  // 메인 제목
  const titleY = eyebrowY + (data.eyebrow ? 0.26 : 0);
  slide.addText(data.title, {
    x: M, y: titleY, w: SLIDE_W - M * 2, h: 0.9,
    fontSize: SIZE.heroTitle, bold: true, color: color.main,
    fontFace: FONT.main, align: 'center',
  });

  // 구분 라인
  const lineY = titleY + 0.94;
  slide.addShape(prs.ShapeType.rect, {
    x: (SLIDE_W - 2.2) / 2, y: lineY, w: 2.2, h: 0.04,
    fill: { color: color.main, transparency: 25 }, line: { type: 'none' },
  });

  // 부제목
  const subtitleY = lineY + 0.1;
  if (data.subtitle) {
    slide.addText(data.subtitle, {
      x: M, y: subtitleY, w: SLIDE_W - M * 2, h: 0.38,
      fontSize: SIZE.heroSubtitle, color: TEXT.white,
      fontFace: FONT.main, align: 'center',
    });
  }

  // 본문 설명 박스 — 나머지 공간 전부 사용
  if (data.body) {
    const bodyY = subtitleY + (data.subtitle ? 0.42 : 0.1);
    const bodyH = SLIDE_H - bodyY - M * 0.5;
    const bodyW = SLIDE_W - M * 2 - 0.6;

    slide.addShape(prs.ShapeType.rect, {
      x: (SLIDE_W - bodyW) / 2, y: bodyY, w: bodyW, h: bodyH,
      fill: { color: '000000', transparency: 68 },
      line: { color: color.main, transparency: 55, width: 0.75 },
      rounding: true,
    });
    slide.addText(data.body, {
      x: (SLIDE_W - bodyW) / 2 + 0.3, y: bodyY + 0.14,
      w: bodyW - 0.6, h: bodyH - 0.28,
      fontSize: SIZE.heroBody + 1, color: TEXT.muted,
      fontFace: FONT.main, align: 'center', valign: 'middle',
      wrap: true, lineSpacingMultiple: 1.4,
    });
  }

  return slide;
}

module.exports = { addM1Slide };
