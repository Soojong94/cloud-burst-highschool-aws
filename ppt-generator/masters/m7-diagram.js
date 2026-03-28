// masters/m7-diagram.js  — M7: Full-area Architecture Diagram Slide
'use strict';
const { SLIDE_W, SLIDE_H, BG, TEXT, FONT, SIZE, LAYOUT } = require('../theme');
const { drawVPCDiagram, drawArchDiagram, drawGlobalInfraDiagram } = require('./diagrams');

const DIAGRAM_BUILDERS = {
  vpc:          drawVPCDiagram,
  architecture: drawArchDiagram,
  global_infra: drawGlobalInfraDiagram,
};

function addM7Slide(prs, data) {
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

  // 제목
  slide.addText(data.title, {
    x: M, y: 0.1, w: SLIDE_W - M * 2, h: 0.46,
    fontSize: SIZE.pageTitle * 0.8, bold: true, color: color.main,
    fontFace: FONT.main, align: 'center',
  });

  let headerBottom = 0.56;
  if (data.subtitle) {
    slide.addText(data.subtitle, {
      x: M + 0.5, y: 0.58, w: SLIDE_W - M * 2 - 1.0, h: 0.22,
      fontSize: SIZE.pageSubtitle - 1, color: TEXT.muted,
      fontFace: FONT.main, align: 'center',
    });
    headerBottom = 0.82;
  }

  // 다이어그램 영역
  const diagX = M;
  const diagY = headerBottom + 0.04;
  const diagW = SLIDE_W - M * 2;
  const diagH = SLIDE_H - diagY - M * 0.4;

  const drawFn = DIAGRAM_BUILDERS[data.diagram];
  if (drawFn) {
    drawFn(slide, prs, diagX, diagY, diagW, diagH);
  } else {
    slide.addText(`[다이어그램 없음: ${data.diagram}]`, {
      x: diagX, y: diagY, w: diagW, h: diagH,
      fontSize: 12, color: TEXT.muted, fontFace: FONT.main, align: 'center', valign: 'middle',
    });
  }

  return slide;
}

module.exports = { addM7Slide };
