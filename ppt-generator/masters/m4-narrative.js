// masters/m4-narrative.js  — M4: Two-Column Narrative (Detail 페이지)
const {
  SLIDE_W, SLIDE_H, BG, TEXT, FONT, SIZE, LAYOUT,
} = require('../theme');

function addM4Slide(prs, data) {
  const slide = prs.addSlide();
  const color = data.color;
  const M = LAYOUT.margin;
  const GAP = LAYOUT.colGap;
  const hasBottom = data.bottomGrid && data.bottomGrid.length > 0;

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
      x: M + 0.5, y: 0.64, w: SLIDE_W - M * 2 - 1, h: 0.3,
      fill: { color: '000000', transparency: 68 },
      line: { color: color.main, transparency: 60, width: 0.5 }, rounding: true,
    });
    slide.addText(data.subtitle, {
      x: M + 0.5, y: 0.65, w: SLIDE_W - M * 2 - 1, h: 0.28,
      fontSize: SIZE.pageSubtitle, color: TEXT.muted,
      fontFace: FONT.main, align: 'center',
    });
    headerBottom = 0.98;
  }

  // ── 2열 박스 — 남은 공간 전부 사용 ────────────────────
  const contentY = headerBottom + 0.06;
  const colW = (SLIDE_W - M * 2 - GAP) / 2;
  const contentH = hasBottom
    ? SLIDE_H - contentY - M * 0.5 - 1.12
    : SLIDE_H - contentY - M * 0.5;

  _drawNarrativeBox(slide, prs, {
    x: M, y: contentY, w: colW, h: contentH,
    title: data.left?.title || '',
    bullets: data.left?.bullets || [],
    color, accentAlt: false,
  });

  _drawNarrativeBox(slide, prs, {
    x: M + colW + GAP, y: contentY, w: colW, h: contentH,
    title: data.right?.title || '',
    bullets: data.right?.bullets || [],
    color, accentAlt: true,
  });

  // ── 하단 4열 미니 그리드 ──────────────────────────────
  if (hasBottom) {
    const gridY = SLIDE_H - M * 0.5 - 1.08;
    const items = data.bottomGrid.slice(0, 4);
    const itemW = (SLIDE_W - M * 2 - LAYOUT.cardGap * 3) / 4;

    items.forEach((item, i) => {
      const ix = M + i * (itemW + LAYOUT.cardGap);
      slide.addShape(prs.ShapeType.rect, {
        x: ix, y: gridY, w: itemW, h: 1.04,
        fill: { color: BG.surface, transparency: 55 },
        line: { color: color.main, transparency: 50, width: 0.5 }, rounding: true,
      });
      slide.addText(item.title || '', {
        x: ix + 0.08, y: gridY + 0.06, w: itemW - 0.16, h: 0.26,
        fontSize: 10, bold: true, color: color.main,
        fontFace: FONT.main, align: 'center',
      });
      if (item.body) {
        slide.addText(item.body, {
          x: ix + 0.08, y: gridY + 0.34, w: itemW - 0.16, h: 0.64,
          fontSize: 9, color: TEXT.muted,
          fontFace: FONT.main, align: 'center', wrap: true,
        });
      }
    });
  }

  return slide;
}

function _drawNarrativeBox(slide, prs, { x, y, w, h, title, bullets, color, accentAlt }) {
  const lineColor = accentAlt ? color.dark || color.main : color.main;
  const P = 0.2;

  // 박스 배경
  slide.addShape(prs.ShapeType.rect, {
    x, y, w, h,
    fill: { color: BG.surface, transparency: 60 },
    line: { color: lineColor, transparency: 40, width: 0.75 }, rounding: true,
  });

  // 소제목
  slide.addText(title, {
    x: x + P, y: y + P * 0.7, w: w - P * 2, h: 0.32,
    fontSize: SIZE.sectionTitle, bold: true, color: color.main,
    fontFace: FONT.main, align: 'left',
  });

  // 구분선
  slide.addShape(prs.ShapeType.line, {
    x: x + P, y: y + P * 0.7 + 0.35,
    w: w - P * 2, h: 0,
    line: { color: lineColor, width: 0.5, transparency: 55 },
  });

  // bullet 아이템 — 박스 높이에 맞게 균등 분배
  const bulletStartY = y + P * 0.7 + 0.44;
  const availH = h - (P * 0.7 + 0.44) - P * 0.5;
  const bulletList = (bullets || []).slice(0, 5);
  const itemH = bulletList.length > 0 ? availH / bulletList.length : availH;

  bulletList.forEach((bullet, i) => {
    const by = bulletStartY + i * itemH;

    // 체크 원형 마커
    slide.addShape(prs.ShapeType.ellipse, {
      x: x + P, y: by + 0.05, w: 0.2, h: 0.2,
      fill: { color: color.main, transparency: 28 }, line: { type: 'none' },
    });
    slide.addText('✓', {
      x: x + P, y: by + 0.04, w: 0.2, h: 0.2,
      fontSize: 7, bold: true, color: BG.base,
      fontFace: FONT.main, align: 'center', valign: 'middle',
    });

    // bullet 제목
    const hasTitle = bullet.title && bullet.title.trim();
    const hasBody = bullet.body && bullet.body.trim();

    if (hasTitle) {
      slide.addText(bullet.title, {
        x: x + P + 0.26, y: by + 0.03, w: w - P - 0.32, h: 0.24,
        fontSize: SIZE.bullet, bold: true, color: TEXT.white,
        fontFace: FONT.main, align: 'left', shrinkText: true,
      });
    }
    if (hasBody) {
      slide.addText(bullet.body, {
        x: x + P + 0.26, y: by + (hasTitle ? 0.27 : 0.04), w: w - P - 0.32,
        h: itemH - (hasTitle ? 0.32 : 0.1),
        fontSize: SIZE.bulletSub, color: TEXT.muted,
        fontFace: FONT.main, align: 'left', wrap: true,
        lineSpacingMultiple: 1.15, shrinkText: true,
      });
    }
  });
}

module.exports = { addM4Slide };
