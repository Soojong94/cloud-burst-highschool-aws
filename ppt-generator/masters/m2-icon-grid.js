// masters/m2-icon-grid.js  — M2: Icon Grid Cards
const {
  SLIDE_W, SLIDE_H, BG, TEXT, FONT, SIZE, LAYOUT,
} = require('../theme');

function addM2Slide(prs, data) {
  const slide = prs.addSlide();
  const color = data.color;
  const M = LAYOUT.margin;

  // 배경
  slide.addShape(prs.ShapeType.rect, {
    x: 0, y: 0, w: SLIDE_W, h: SLIDE_H,
    fill: { color: BG.base }, line: { type: 'none' },
  });

  // 상단 액센트 바
  slide.addShape(prs.ShapeType.rect, {
    x: 0, y: 0, w: SLIDE_W, h: 0.06,
    fill: { color: color.main, transparency: 20 }, line: { type: 'none' },
  });

  // ── 헤더 ──────────────────────────────────────────────
  slide.addText(data.title, {
    x: M, y: 0.1, w: SLIDE_W - M * 2, h: 0.52,
    fontSize: SIZE.pageTitle, bold: true, color: color.main,
    fontFace: FONT.main, align: 'center',
  });

  let headerBottom = 0.62;
  if (data.subtitle) {
    slide.addShape(prs.ShapeType.rect, {
      x: M + 0.6, y: 0.64, w: SLIDE_W - M * 2 - 1.2, h: 0.3,
      fill: { color: '000000', transparency: 68 },
      line: { color: color.main, transparency: 60, width: 0.5 }, rounding: true,
    });
    slide.addText(data.subtitle, {
      x: M + 0.6, y: 0.65, w: SLIDE_W - M * 2 - 1.2, h: 0.28,
      fontSize: SIZE.pageSubtitle, color: TEXT.muted,
      fontFace: FONT.main, align: 'center',
    });
    headerBottom = 0.98;
  }

  // ── 카드 그리드 — 남은 공간 전부 사용 ─────────────────
  const gridY = headerBottom + 0.06;
  const gridH = SLIDE_H - gridY - M * 0.5;
  const cards = (data.cards || []).slice(0, 6);

  const cols = cards.length <= 4 ? Math.min(cards.length, 4) : 3;
  const rows = Math.ceil(cards.length / cols);
  const cardGap = LAYOUT.cardGap;
  const rowGap = rows > 1 ? 0.12 : 0;
  const cardW = (SLIDE_W - M * 2 - cardGap * (cols - 1)) / cols;
  const cardH = (gridH - rowGap * (rows - 1)) / rows;

  cards.forEach((card, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = M + col * (cardW + cardGap);
    const cy = gridY + row * (cardH + rowGap);
    _drawIconCard(slide, prs, { x: cx, y: cy, w: cardW, h: cardH, ...card, color });
  });

  return slide;
}

function _drawIconCard(slide, prs, { x, y, w, h, icon, label, title, body, color }) {
  const P = 0.18;

  slide.addShape(prs.ShapeType.rect, {
    x, y, w, h,
    fill: { color: BG.surface, transparency: 55 },
    line: { color: color.main, transparency: 45, width: 0.75 },
    rounding: true,
  });

  const iconSize = Math.min(0.56, h * 0.28);
  const iconX = x + (w - iconSize) / 2;
  const iconY = y + P;

  slide.addShape(prs.ShapeType.ellipse, {
    x: iconX, y: iconY, w: iconSize, h: iconSize,
    fill: { color: color.main, transparency: 75 },
    line: { color: color.main, transparency: 50, width: 0.75 },
  });
  slide.addText(icon || '●', {
    x: iconX, y: iconY + 0.02, w: iconSize, h: iconSize - 0.04,
    fontSize: Math.round(iconSize * 26), color: color.main,
    fontFace: 'Segoe UI Emoji', align: 'center', valign: 'middle',
  });

  let curY = iconY + iconSize + 0.1;

  if (label) {
    slide.addText(label, {
      x: x + P * 0.4, y: curY, w: w - P * 0.8, h: 0.18,
      fontSize: SIZE.label, color: color.main, fontFace: FONT.main, align: 'center',
    });
    curY += 0.19;
  }

  slide.addText(title || '', {
    x: x + P * 0.4, y: curY, w: w - P * 0.8, h: 0.3,
    fontSize: SIZE.cardTitle, bold: true, color: TEXT.white,
    fontFace: FONT.main, align: 'center', wrap: true,
  });
  curY += 0.32;

  if (body) {
    const bodyH = y + h - curY - P * 0.4;
    slide.addText(body, {
      x: x + P * 0.5, y: curY, w: w - P, h: bodyH,
      fontSize: SIZE.cardBody, color: TEXT.muted,
      fontFace: FONT.main, align: 'center', valign: 'top',
      wrap: true, lineSpacingMultiple: 1.2,
    });
  }
}

module.exports = { addM2Slide };
