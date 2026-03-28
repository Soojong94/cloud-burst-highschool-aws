// masters/m3-comparison.js  — M3: Comparison / Categorical
const {
  SLIDE_W, SLIDE_H, BG, TEXT, FONT, SIZE, LAYOUT,
} = require('../theme');

// 3A: 2열 대비형 (CSP vs MSP)
function addM3CompareSlide(prs, data) {
  const slide = prs.addSlide();
  const color = data.color;
  const M = LAYOUT.margin;
  const hasBottom = data.benefits && data.benefits.length > 0;

  slide.addShape(prs.ShapeType.rect, {
    x: 0, y: 0, w: SLIDE_W, h: SLIDE_H,
    fill: { color: BG.base }, line: { type: 'none' },
  });
  slide.addShape(prs.ShapeType.rect, {
    x: 0, y: 0, w: SLIDE_W, h: 0.06,
    fill: { color: color.main, transparency: 20 }, line: { type: 'none' },
  });

  // 헤더
  slide.addText(data.title, {
    x: M, y: 0.1, w: SLIDE_W - M * 2, h: 0.52,
    fontSize: SIZE.pageTitle, bold: true, color: color.main,
    fontFace: FONT.main, align: 'center',
  });

  const contentY = 0.68;
  const contentH = hasBottom
    ? SLIDE_H - contentY - M * 0.5 - 1.08
    : SLIDE_H - contentY - M * 0.5;
  const midX = SLIDE_W / 2;
  const colW = (SLIDE_W - M * 2 - 1.0) / 2;

  // 중앙 VS 뱃지
  slide.addShape(prs.ShapeType.ellipse, {
    x: midX - 0.24, y: contentY + contentH / 2 - 0.24, w: 0.48, h: 0.48,
    fill: { color: BG.surface, transparency: 20 },
    line: { color: TEXT.dim, transparency: 35, width: 0.75 },
  });
  slide.addText('VS', {
    x: midX - 0.24, y: contentY + contentH / 2 - 0.24, w: 0.48, h: 0.48,
    fontSize: 9, bold: true, color: TEXT.muted,
    fontFace: FONT.main, align: 'center', valign: 'middle',
  });

  // 좌/우 박스
  _drawCompareBox(slide, prs, { x: M, y: contentY, w: colW, h: contentH, ...data.left, color: data.left?.color || color });
  _drawCompareBox(slide, prs, { x: M + colW + 1.0, y: contentY, w: colW, h: contentH, ...data.right, color: data.right?.color || color });

  if (hasBottom) _drawBenefitGrid(slide, prs, data.benefits, color);

  return slide;
}

// 3B: 3열 균등형 (CloudModels)
function addM3ColumnsSlide(prs, data) {
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
      x: M + 1, y: 0.65, w: SLIDE_W - M * 2 - 2, h: 0.26,
      fontSize: SIZE.pageSubtitle, color: TEXT.muted,
      fontFace: FONT.main, align: 'center',
    });
    headerBottom = 0.94;
  }

  const cols = (data.columns || []).slice(0, 3);
  const contentY = headerBottom + 0.06;
  const colW = (SLIDE_W - M * 2 - LAYOUT.cardGap * 2) / 3;
  const cardH = SLIDE_H - contentY - M * 0.5;

  cols.forEach((col, i) => {
    const cx = M + i * (colW + LAYOUT.cardGap);
    const colColor = col.color || color;
    const P = 0.2;

    slide.addShape(prs.ShapeType.rect, {
      x: cx, y: contentY, w: colW, h: cardH,
      fill: { color: BG.surface, transparency: 55 },
      line: { color: colColor.main, transparency: 40, width: 0.75 }, rounding: true,
    });

    const iconSize = 0.52;
    slide.addShape(prs.ShapeType.ellipse, {
      x: cx + (colW - iconSize) / 2, y: contentY + P,
      w: iconSize, h: iconSize,
      fill: { color: colColor.main, transparency: 75 },
      line: { color: colColor.main, transparency: 50, width: 0.75 },
    });
    slide.addText(col.icon || '●', {
      x: cx + (colW - iconSize) / 2, y: contentY + P + 0.02,
      w: iconSize, h: iconSize - 0.04,
      fontSize: 17, color: colColor.main,
      fontFace: 'Segoe UI Emoji', align: 'center', valign: 'middle',
    });

    let curY = contentY + P + iconSize + 0.12;

    slide.addText(col.title || '', {
      x: cx + P * 0.5, y: curY, w: colW - P, h: 0.3,
      fontSize: SIZE.cardTitle, bold: true, color: colColor.main,
      fontFace: FONT.main, align: 'center',
    });
    curY += 0.32;

    if (col.subtitle) {
      slide.addText(col.subtitle, {
        x: cx + P * 0.5, y: curY, w: colW - P, h: 0.2,
        fontSize: SIZE.label, color: TEXT.dim, fontFace: FONT.main, align: 'center',
      });
      curY += 0.22;
    }

    slide.addShape(prs.ShapeType.line, {
      x: cx + P, y: curY + 0.04, w: colW - P * 2, h: 0,
      line: { color: colColor.main, width: 0.5, transparency: 55 },
    });
    curY += 0.16;

    if (col.body) {
      slide.addText(col.body, {
        x: cx + P, y: curY, w: colW - P * 2, h: 0.7,
        fontSize: SIZE.cardBody, color: TEXT.muted,
        fontFace: FONT.main, align: 'left', wrap: true, lineSpacingMultiple: 1.2,
      });
      curY += 0.75;
    }

    if (col.examples && col.examples.length > 0) {
      const exH = contentY + cardH - curY - P * 0.5;
      slide.addShape(prs.ShapeType.rect, {
        x: cx + P, y: curY, w: colW - P * 2, h: exH,
        fill: { color: '000000', transparency: 72 },
        line: { color: colColor.main, transparency: 62, width: 0.5 }, rounding: true,
      });
      slide.addText(col.examples.map(e => `• ${e}`).join('\n'), {
        x: cx + P + 0.1, y: curY + 0.08, w: colW - P * 2 - 0.2, h: exH - 0.16,
        fontSize: 9, color: TEXT.muted,
        fontFace: FONT.main, align: 'left', wrap: true, lineSpacingMultiple: 1.3,
      });
    }
  });

  return slide;
}

function _drawCompareBox(slide, prs, { x, y, w, h, title, items, tags, color }) {
  const P = 0.2;

  slide.addShape(prs.ShapeType.rect, {
    x, y, w, h,
    fill: { color: BG.surface, transparency: 58 },
    line: { color: color.main, transparency: 40, width: 0.75 }, rounding: true,
  });

  slide.addText(title || '', {
    x: x + P, y: y + P * 0.8, w: w - P * 2, h: 0.34,
    fontSize: SIZE.sectionTitle, bold: true, color: color.main,
    fontFace: FONT.main, align: 'center',
  });
  slide.addShape(prs.ShapeType.line, {
    x: x + P, y: y + P * 0.8 + 0.37, w: w - P * 2, h: 0,
    line: { color: color.main, width: 0.5, transparency: 50 },
  });

  let curY = y + P * 0.8 + 0.46;
  const itemsArr = (items || []).slice(0, 5);
  const tagAreaH = tags && tags.length > 0 ? 0.35 : 0;
  const availH = h - (curY - y) - tagAreaH - P * 0.5;
  const itemH = itemsArr.length > 0 ? availH / itemsArr.length : availH;

  itemsArr.forEach((item) => {
    slide.addShape(prs.ShapeType.ellipse, {
      x: x + P, y: curY + 0.05, w: 0.16, h: 0.16,
      fill: { color: color.main, transparency: 32 }, line: { type: 'none' },
    });
    slide.addText('✓', {
      x: x + P, y: curY + 0.04, w: 0.16, h: 0.16,
      fontSize: 6, bold: true, color: BG.base,
      fontFace: FONT.main, align: 'center', valign: 'middle',
    });
    slide.addText(item, {
      x: x + P + 0.22, y: curY, w: w - P - 0.28, h: itemH,
      fontSize: SIZE.bulletSub + 1, color: TEXT.white,
      fontFace: FONT.main, align: 'left', valign: 'middle', wrap: true,
    });
    curY += itemH;
  });

  if (tags && tags.length > 0) {
    const tagY = y + h - P * 0.5 - 0.28;
    const tagW = (w - P * 2 - 0.08 * (tags.length - 1)) / tags.length;
    tags.slice(0, 4).forEach((tag, i) => {
      const tx = x + P + i * (tagW + 0.08);
      slide.addShape(prs.ShapeType.rect, {
        x: tx, y: tagY, w: tagW, h: 0.24,
        fill: { color: color.main, transparency: 78 },
        line: { color: color.main, transparency: 52, width: 0.5 }, rounding: true,
      });
      slide.addText(tag, {
        x: tx + 0.04, y: tagY + 0.02, w: tagW - 0.08, h: 0.2,
        fontSize: 8, color: color.main, fontFace: FONT.main, align: 'center',
      });
    });
  }
}

function _drawBenefitGrid(slide, prs, benefits, color) {
  const M = LAYOUT.margin;
  const gridY = SLIDE_H - M * 0.5 - 1.04;
  const items = benefits.slice(0, 4);
  const itemW = (SLIDE_W - M * 2 - LAYOUT.cardGap * 3) / 4;

  items.forEach((item, i) => {
    const ix = M + i * (itemW + LAYOUT.cardGap);
    slide.addShape(prs.ShapeType.rect, {
      x: ix, y: gridY, w: itemW, h: 1.0,
      fill: { color: BG.surface, transparency: 55 },
      line: { color: color.main, transparency: 55, width: 0.5 }, rounding: true,
    });
    slide.addText(item.icon || '✦', {
      x: ix + 0.1, y: gridY + 0.06, w: 0.3, h: 0.3,
      fontSize: 14, color: color.main, fontFace: 'Segoe UI Emoji', align: 'center',
    });
    slide.addText(item.title || '', {
      x: ix + 0.42, y: gridY + 0.08, w: itemW - 0.5, h: 0.24,
      fontSize: 10, bold: true, color: TEXT.white, fontFace: FONT.main, align: 'left',
    });
    if (item.body) {
      slide.addText(item.body, {
        x: ix + 0.1, y: gridY + 0.4, w: itemW - 0.2, h: 0.54,
        fontSize: 8.5, color: TEXT.muted, fontFace: FONT.main, align: 'left', wrap: true,
      });
    }
  });
}

module.exports = { addM3CompareSlide, addM3ColumnsSlide };
