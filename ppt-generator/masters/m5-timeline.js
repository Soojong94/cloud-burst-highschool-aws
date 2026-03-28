// masters/m5-timeline.js  — M5: Timeline
const {
  SLIDE_W, SLIDE_H, BG, TEXT, FONT, SIZE, LAYOUT,
} = require('../theme');

function addM5Slide(prs, data) {
  const slide = prs.addSlide();
  const color = data.color;
  const M = LAYOUT.margin;

  slide.addShape(prs.ShapeType.rect, {
    x: 0, y: 0, w: SLIDE_W, h: SLIDE_H,
    fill: { color: BG.base }, line: { type: 'none' },
  });
  slide.addShape(prs.ShapeType.rect, {
    x: 0, y: 0, w: SLIDE_W, h: 0.06,
    fill: { color: color.main, transparency: 20 }, line: { type: 'none' },
  });

  slide.addText(data.title, {
    x: M, y: 0.1, w: SLIDE_W - M * 2, h: 0.52,
    fontSize: SIZE.pageTitle, bold: true, color: color.main,
    fontFace: FONT.main, align: 'center',
  });

  let headerBottom = 0.62;
  if (data.subtitle) {
    slide.addText(data.subtitle, {
      x: M + 1, y: 0.65, w: SLIDE_W - M * 2 - 2, h: 0.24,
      fontSize: SIZE.pageSubtitle, color: TEXT.muted,
      fontFace: FONT.main, align: 'center',
    });
    headerBottom = 0.92;
  }

  const events = (data.events || []).slice(0, 6);
  const contentY = headerBottom + 0.06;
  const contentH = SLIDE_H - contentY - M * 0.5;

  let cols, rows;
  if (events.length <= 3) { cols = events.length || 1; rows = 1; }
  else if (events.length <= 4) { cols = 2; rows = 2; }
  else { cols = 3; rows = 2; }

  const cardGap = LAYOUT.cardGap;
  const rowGap = 0.12;
  const cardW = (SLIDE_W - M * 2 - cardGap * (cols - 1)) / cols;
  const cardH = (contentH - rowGap * (rows - 1)) / rows;

  events.forEach((event, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = M + col * (cardW + cardGap);
    const cy = contentY + row * (cardH + rowGap);
    const P = 0.18;

    slide.addShape(prs.ShapeType.rect, {
      x: cx, y: cy, w: cardW, h: cardH,
      fill: { color: BG.surface, transparency: 55 },
      line: { color: color.main, transparency: 45, width: 0.75 }, rounding: true,
    });

    // 연도 배지
    const badgeW = 0.9;
    const badgeH = 0.27;
    slide.addShape(prs.ShapeType.rect, {
      x: cx + P, y: cy + P * 0.8, w: badgeW, h: badgeH,
      fill: { color: color.main, transparency: 70 },
      line: { color: color.main, transparency: 48, width: 0.5 }, rounding: true,
    });
    slide.addText(event.year || '', {
      x: cx + P, y: cy + P * 0.8, w: badgeW, h: badgeH,
      fontSize: 10, bold: true, color: color.main,
      fontFace: FONT.main, align: 'center', valign: 'middle',
    });
    slide.addText('📅', {
      x: cx + cardW - P - 0.32, y: cy + P * 0.7, w: 0.32, h: 0.32,
      fontSize: 13, fontFace: 'Segoe UI Emoji', align: 'center',
    });

    const titleY = cy + P * 0.8 + badgeH + 0.1;
    slide.addText(event.title || '', {
      x: cx + P, y: titleY, w: cardW - P * 2, h: 0.3,
      fontSize: SIZE.cardTitle, bold: true, color: TEXT.white,
      fontFace: FONT.main, align: 'left', wrap: true,
    });

    const lineY = titleY + 0.33;
    slide.addShape(prs.ShapeType.line, {
      x: cx + P, y: lineY, w: cardW - P * 2, h: 0,
      line: { color: color.main, width: 0.5, transparency: 55 },
    });

    if (event.body) {
      const bodyH = cy + cardH - (lineY + 0.1) - P * 0.5;
      slide.addText(event.body, {
        x: cx + P, y: lineY + 0.1, w: cardW - P * 2, h: bodyH,
        fontSize: SIZE.cardBody, color: TEXT.muted,
        fontFace: FONT.main, align: 'left', wrap: true, lineSpacingMultiple: 1.2,
      });
    }
  });

  return slide;
}

module.exports = { addM5Slide };
