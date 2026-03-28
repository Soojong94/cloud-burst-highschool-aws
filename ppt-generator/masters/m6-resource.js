// masters/m6-resource.js  — M6: Resource / CTA
const {
  SLIDE_W, SLIDE_H, BG, TEXT, FONT, SIZE, LAYOUT,
} = require('../theme');
const { getIconDataUrl } = require('../icons');

function addM6Slide(prs, data) {
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

  const cards = (data.cards || []).slice(0, 4);
  const contentY = headerBottom + 0.06;
  const cardGap = LAYOUT.cardGap;
  const cardW = (SLIDE_W - M * 2 - cardGap * (cards.length - 1)) / Math.max(cards.length, 1);
  const cardH = SLIDE_H - contentY - M * 0.5;

  cards.forEach((card, i) => {
    const cx = M + i * (cardW + cardGap);
    const cardColor = card.color || color;
    const P = 0.18;

    slide.addShape(prs.ShapeType.rect, {
      x: cx, y: contentY, w: cardW, h: cardH,
      fill: { color: BG.surface, transparency: 55 },
      line: { color: cardColor.main, transparency: 40, width: 0.75 }, rounding: true,
    });

    const iconSize = 0.58;
    const iconX = cx + (cardW - iconSize) / 2;
    const iconY = contentY + P;
    slide.addShape(prs.ShapeType.ellipse, {
      x: iconX, y: iconY, w: iconSize, h: iconSize,
      fill: { color: cardColor.main, transparency: 72 },
      line: { color: cardColor.main, transparency: 50, width: 0.75 },
    });
    const cardIconUrl = getIconDataUrl(card.icon, cardColor.main);
    if (cardIconUrl) {
      const pad = iconSize * 0.2;
      slide.addImage({ data: cardIconUrl, x: iconX + pad, y: iconY + pad, w: iconSize - pad * 2, h: iconSize - pad * 2 });
    } else {
      slide.addText(card.icon || '📌', {
        x: iconX, y: iconY + 0.02, w: iconSize, h: iconSize - 0.04,
        fontSize: 20, fontFace: 'Segoe UI Emoji', align: 'center', valign: 'middle',
      });
    }

    let curY = iconY + iconSize + 0.1;

    slide.addText(card.title || '', {
      x: cx + P * 0.4, y: curY, w: cardW - P * 0.8, h: 0.3,
      fontSize: SIZE.cardTitle, bold: true, color: cardColor.main,
      fontFace: FONT.main, align: 'center',
    });
    curY += 0.33;

    if (card.body) {
      slide.addText(card.body, {
        x: cx + P * 0.5, y: curY, w: cardW - P, h: 0.48,
        fontSize: SIZE.cardBody, color: TEXT.muted,
        fontFace: FONT.main, align: 'center', wrap: true, lineSpacingMultiple: 1.15,
      });
      curY += 0.5;
    }

    if (card.highlight) {
      const hlH = 0.3;
      slide.addShape(prs.ShapeType.rect, {
        x: cx + P, y: curY, w: cardW - P * 2, h: hlH,
        fill: { color: cardColor.main, transparency: 78 },
        line: { color: cardColor.main, transparency: 52, width: 0.5 }, rounding: true,
      });
      slide.addText(card.highlight, {
        x: cx + P + 0.08, y: curY + 0.04, w: cardW - P * 2 - 0.16, h: hlH - 0.08,
        fontSize: 9, bold: true, color: cardColor.main,
        fontFace: FONT.main, align: 'center',
      });
      curY += hlH + 0.1;
    }

    if (card.features && card.features.length > 0) {
      card.features.slice(0, 4).forEach(feat => {
        slide.addShape(prs.ShapeType.ellipse, {
          x: cx + P, y: curY + 0.05, w: 0.1, h: 0.1,
          fill: { color: cardColor.main, transparency: 28 }, line: { type: 'none' },
        });
        slide.addText(feat, {
          x: cx + P + 0.15, y: curY + 0.01, w: cardW - P - 0.2, h: 0.2,
          fontSize: 9, color: TEXT.muted, fontFace: FONT.main, align: 'left',
        });
        curY += 0.22;
      });
    }

    if (card.url) {
      const btnY = contentY + cardH - P - 0.26;
      slide.addShape(prs.ShapeType.rect, {
        x: cx + P, y: btnY, w: cardW - P * 2, h: 0.24,
        fill: { color: '000000', transparency: 78 },
        line: { color: cardColor.main, transparency: 48, width: 0.5 }, rounding: true,
      });
      slide.addText(card.url, {
        x: cx + P + 0.06, y: btnY + 0.03, w: cardW - P * 2 - 0.12, h: 0.18,
        fontSize: 8, color: cardColor.main, fontFace: FONT.main, align: 'center',
        hyperlink: { url: card.url.startsWith('http') ? card.url : `https://${card.url}` },
      });
    }
  });

  return slide;
}

module.exports = { addM6Slide };
