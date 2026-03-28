// diagrams.js — pptxgenjs shapes로 그리는 아키텍처 다이어그램 (v2 — 단순·가시성 개선)
'use strict';
const { TEXT, FONT } = require('../theme');

// ── 공통 헬퍼 ─────────────────────────────────────────
function rect(slide, prs, x, y, w, h, fill, border, round) {
  slide.addShape(prs.ShapeType.rect, {
    x, y, w, h,
    fill: { color: fill },
    line: { color: border, width: 1.2 },
    rounding: round !== false,
  });
}

function txt(slide, text, x, y, w, h, color, size, bold, align, valign) {
  slide.addText(text, {
    x, y, w, h,
    fontSize: size || 9,
    bold: bold || false,
    color: color || TEXT.muted,
    fontFace: FONT.main,
    align: align || 'center',
    valign: valign || 'middle',
    wrap: true,
    shrinkText: true,
  });
}

function arrow(slide, prs, x1, y1, x2, y2, color) {
  const dx = x2 - x1, dy = y2 - y1;
  slide.addShape(prs.ShapeType.line, {
    x: x1, y: y1, w: dx, h: dy,
    line: { color: color || '475569', width: 1.8, endArrowType: 'triangle' },
  });
}

function dashedRect(slide, prs, x, y, w, h, color) {
  slide.addShape(prs.ShapeType.rect, {
    x, y, w, h,
    fill: { color: '000000', transparency: 100 },
    line: { color, width: 0.9, dashType: 'dash', transparency: 35 },
    rounding: false,
  });
}

// ════════════════════════════════════════════════════════
// 1. VPC 구성도 — 단순 수직 흐름
// ════════════════════════════════════════════════════════
/*
  [    Internet    ]
         ↕
  [Internet Gateway]
         ↕
  ┌── VPC 10.0.0.0/16 ──────────────────────────────────┐
  │                                                       │
  │  ┌──── Public Subnet (10.0.1.0/24) ──────────────┐   │
  │  │   [ALB]          [EC2 Web-1]    [EC2 Web-2]    │   │
  │  └───────────────────────────────────────────────┘   │
  │             ↓  NAT Gateway  ↓                         │
  │  ┌──── Private Subnet (10.0.2.0/24) ─────────────┐   │
  │  │   [App Server]   [RDS Primary]  [RDS Replica]  │   │
  │  └───────────────────────────────────────────────┘   │
  └──────────────────────────────────────────────────────┘
*/
function drawVPCDiagram(slide, prs, ax, ay, aw, ah) {
  const BLUE   = '38bdf8';
  const PURPLE = 'a78bfa';
  const GREEN  = '34d399';
  const CX = ax + aw / 2;
  const P = 0.2;

  // ── Internet (VPC 외부) ────────────────────────────────
  const iH = 0.38;
  rect(slide, prs, ax + aw * 0.28, ay, aw * 0.44, iH, '1e293b', '475569', true);
  txt(slide, '🌐  Internet', ax + aw * 0.28, ay, aw * 0.44, iH, '94a3b8', 11, true);
  arrow(slide, prs, CX, ay + iH, CX, ay + iH + 0.14);

  // ── VPC 외곽 (IGW 포함) ────────────────────────────────
  const vpcTop = ay + iH + 0.14;
  const vpcH = ah - (vpcTop - ay) - 0.04;
  rect(slide, prs, ax, vpcTop, aw, vpcH, '060f1e', BLUE, false);
  txt(slide, 'VPC  10.0.0.0/16', ax + 0.14, vpcTop + 0.06, 2.4, 0.2, BLUE, 8.5, true, 'left');

  // ── IGW — VPC 안, 서브넷 위 ────────────────────────────
  const igwY = vpcTop + 0.28;
  const igwH = 0.34;
  const igwW = aw * 0.55;
  rect(slide, prs, CX - igwW / 2, igwY, igwW, igwH, '1e3a5f', BLUE, true);
  txt(slide, 'Internet Gateway (IGW)', CX - igwW / 2, igwY, igwW, igwH, BLUE, 10.5, true);
  arrow(slide, prs, CX, igwY + igwH, CX, igwY + igwH + 0.12);

  // ── Public Subnet ─────────────────────────────────────
  const subW = aw - P * 2;
  const subX = ax + P;
  const subGap = 0.12;
  const remainH = vpcH - 0.28 - igwH - 0.12 - 0.08;  // VPC 내 남은 높이
  const pubSubH = (remainH - subGap) * 0.58;
  const prvSubH = (remainH - subGap) * 0.42;

  const pubY = igwY + igwH + 0.12;
  rect(slide, prs, subX, pubY, subW, pubSubH, '0a1e35', BLUE, false);
  txt(slide, 'Public Subnet  (10.0.1.0/24)', subX + 0.1, pubY + 0.05, 3.0, 0.2, BLUE, 8.5, true, 'left');

  // 서비스 박스 (ALB, EC2×2) — 상단
  const bPad = 0.16;
  const svcH = pubSubH * 0.58;
  const bH = svcH - 0.3;
  const bW = (subW - bPad * 4) / 3;
  const bY = pubY + 0.26;

  [
    { label: 'ALB\nLoad Balancer', c1: '0c3b5c', c2: BLUE },
    { label: 'EC2\nWeb Server ①', c1: '0c3b5c', c2: BLUE },
    { label: 'EC2\nWeb Server ②', c1: '0c3b5c', c2: BLUE },
  ].forEach((b, i) => {
    const bx = subX + bPad + i * (bW + bPad);
    rect(slide, prs, bx, bY, bW, bH, b.c1, b.c2, true);
    txt(slide, b.label, bx, bY, bW, bH, '7dd3fc', 10.5, true);
  });

  dashedRect(slide, prs, subX + bPad * 0.5, bY - 0.04, subW - bPad, bH + 0.08, BLUE);
  txt(slide, 'Security Group', subX + subW - 1.25, pubY + 0.05, 1.15, 0.2, BLUE, 7.5, false, 'right');

  // ── NAT Gateway — Public Subnet 하단 ──────────────────
  const natBoxY = pubY + svcH + 0.05;
  const natBoxH = pubSubH - svcH - 0.08;
  const natBoxW = 2.8;
  rect(slide, prs, CX - natBoxW / 2, natBoxY, natBoxW, natBoxH, '1a2e1a', GREEN, true);
  txt(slide, 'NAT Gateway\n(단방향 출구)', CX - natBoxW / 2, natBoxY, natBoxW, natBoxH, GREEN, 9.5, true);

  // Public → Private 화살표
  const prvY = pubY + pubSubH + subGap;
  arrow(slide, prs, CX, pubY + pubSubH, CX, prvY);

  // ── Private Subnet ────────────────────────────────────
  rect(slide, prs, subX, prvY, subW, prvSubH, '130a2e', PURPLE, false);
  txt(slide, 'Private Subnet  (10.0.2.0/24)', subX + 0.1, prvY + 0.05, 3.0, 0.22, PURPLE, 8.5, true, 'left');

  const pbH = prvSubH - 0.36;
  const pbW = (subW - bPad * 4) / 3;
  const pbY = prvY + 0.28;
  const prvBoxes = [
    { label: 'EC2\nApp Server', c1: '2e1065', c2: PURPLE },
    { label: 'RDS\nPrimary DB', c1: '2e1065', c2: PURPLE },
    { label: 'RDS\nReplica DB', c1: '2e1065', c2: PURPLE },
  ];
  prvBoxes.forEach((b, i) => {
    const bx = subX + bPad + i * (pbW + bPad);
    rect(slide, prs, bx, pbY, pbW, pbH, b.c1, b.c2, true);
    txt(slide, b.label, bx, pbY, pbW, pbH, 'c4b5fd', 10.5, true);
  });

  // RDS 복제 화살표
  const rdsLx = subX + bPad + pbW + bPad + pbW;
  const rdsRx = rdsLx + bPad;
  const rdsMy = pbY + pbH / 2;
  arrow(slide, prs, rdsLx, rdsMy, rdsRx, rdsMy, PURPLE);
  arrow(slide, prs, rdsRx, rdsMy, rdsLx, rdsMy, PURPLE);

  // Security Group 점선 (Private)
  dashedRect(slide, prs, subX + bPad * 0.5, pbY - 0.05, subW - bPad, pbH + 0.1, PURPLE);
  txt(slide, 'Security Group', subX + subW - 1.25, prvY + 0.05, 1.15, 0.2, PURPLE, 7.5, false, 'right');
}

// ════════════════════════════════════════════════════════
// 2. AWS 글로벌 인프라 — 왼쪽 리전 목록 + 오른쪽 서울 리전 상세
// ════════════════════════════════════════════════════════
function drawGlobalInfraDiagram(slide, prs, ax, ay, aw, ah) {
  const ORANGE = 'fb923c';
  const BLUE   = '60a5fa';
  const GREEN  = '4ade80';

  // ── 왼쪽 패널: 리전 목록 ─────────────────────────────
  const LP = ax;
  const LW = 2.6;

  rect(slide, prs, LP, ay, LW, ah, '080e1c', '1e3a5f', false);
  txt(slide, 'AWS 34개 리전', LP, ay + 0.08, LW, 0.28, BLUE, 9.5, true);

  // 구분선
  slide.addShape(prs.ShapeType.line, {
    x: LP + 0.15, y: ay + 0.4, w: LW - 0.3, h: 0,
    line: { color: '1e3a5f', width: 0.8 },
  });

  const regions = [
    { code: 'ap-northeast-2', name: 'Seoul ★', star: true },
    { code: 'ap-northeast-1', name: 'Tokyo' },
    { code: 'ap-southeast-1', name: 'Singapore' },
    { code: 'us-east-1',      name: 'N. Virginia' },
    { code: 'eu-west-1',      name: 'Ireland' },
    { code: '',               name: '+ 29개 리전 더...' },
  ];

  regions.forEach((r, i) => {
    const ry = ay + 0.48 + i * 0.58;
    const isSeoul = r.star;
    if (isSeoul) {
      rect(slide, prs, LP + 0.1, ry - 0.04, LW - 0.2, 0.52, '2d1b00', ORANGE, true);
    }
    txt(slide, r.name, LP + 0.15, ry, LW - 0.3, 0.24, isSeoul ? ORANGE : BLUE, isSeoul ? 9.5 : 8.5, isSeoul);
    if (r.code) txt(slide, r.code, LP + 0.15, ry + 0.24, LW - 0.3, 0.2, '475569', 7.5, false);
  });

  // 엣지 로케이션
  const edgeY = ay + ah - 0.38;
  slide.addShape(prs.ShapeType.line, {
    x: LP + 0.15, y: edgeY - 0.06, w: LW - 0.3, h: 0,
    line: { color: '1e3a5f', width: 0.8 },
  });
  txt(slide, '⚡ Edge Location', LP, edgeY, LW, 0.2, '94a3b8', 7.5, false);
  txt(slide, '전 세계 600개+', LP, edgeY + 0.18, LW, 0.2, '475569', 7.5, false);

  // ── 연결 화살표 ────────────────────────────────────────
  const zoomX = LP + LW + 0.1;
  const zoomY = ay + ah / 2;
  arrow(slide, prs, zoomX, zoomY, zoomX + 0.28, zoomY, ORANGE);

  // ── 오른쪽 패널: 서울 리전 상세 ──────────────────────
  const RP = LP + LW + 0.42;
  const RW = aw - LW - 0.42;

  rect(slide, prs, RP, ay, RW, ah, '100800', ORANGE, false);
  txt(slide, '★  서울 리전 (ap-northeast-2)  — 4개 가용 영역', RP, ay + 0.08, RW, 0.28, ORANGE, 10, true);

  // 구분선
  slide.addShape(prs.ShapeType.line, {
    x: RP + 0.15, y: ay + 0.42, w: RW - 0.3, h: 0,
    line: { color: ORANGE, width: 0.8, transparency: 40 },
  });

  // AZ 4개 (2×2)
  const azGap = 0.18;
  const azW = (RW - azGap * 3) / 2;
  const azH = (ah - 0.5 - azGap * 3) / 2;
  const azDefs = [
    { id: 'AZ-a', color: GREEN,  dc: '데이터센터 독립 운영\n전력·냉방·네트워크 분리' },
    { id: 'AZ-b', color: GREEN,  dc: '데이터센터 독립 운영\n전력·냉방·네트워크 분리' },
    { id: 'AZ-c', color: BLUE,   dc: '데이터센터 독립 운영\n전력·냉방·네트워크 분리' },
    { id: 'AZ-d', color: BLUE,   dc: '데이터센터 독립 운영\n전력·냉방·네트워크 분리' },
  ];

  azDefs.forEach((az, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const azX = RP + azGap + col * (azW + azGap);
    const azY = ay + 0.52 + row * (azH + azGap);

    rect(slide, prs, azX, azY, azW, azH, '0a0e0a', az.color, false);

    // AZ 제목 배지
    rect(slide, prs, azX + 0.15, azY + 0.1, azW - 0.3, 0.34, az.color === GREEN ? '0d2b0d' : '0a1628', az.color, true);
    txt(slide, `가용 영역  ${az.id}`, azX + 0.15, azY + 0.1, azW - 0.3, 0.34, az.color, 10, true);

    // 설명 텍스트
    txt(slide, az.dc, azX + 0.15, azY + 0.52, azW - 0.3, 0.44, '94a3b8', 8.5, false);

    // 서버 랙 아이콘 (작은 사각형들)
    const rackY = azY + 1.04;
    const rackH = azH - 1.1 - 0.12;
    const rackW = (azW - 0.3 - 0.12) / 4;
    for (let r = 0; r < 4; r++) {
      const rx = azX + 0.15 + r * (rackW + 0.04);
      slide.addShape(prs.ShapeType.rect, {
        x: rx, y: rackY, w: rackW, h: rackH,
        fill: { color: az.color, transparency: 72 },
        line: { color: az.color, width: 0.6, transparency: 40 },
        rounding: false,
      });
    }
    txt(slide, '서버 클러스터', azX + 0.15, rackY + rackH + 0.04, azW - 0.3, 0.18, '475569', 7, false);
  });
}

// ════════════════════════════════════════════════════════
// 3. 3-Tier 아키텍처 — 가로 레이어 (기존 유지)
// ════════════════════════════════════════════════════════
function drawArchDiagram(slide, prs, ax, ay, aw, ah) {
  const BLUE   = '60a5fa';
  const GREEN  = '4ade80';
  const PURPLE = 'a78bfa';
  const ORANGE = 'fb923c';
  const cx = ax + aw / 2;

  const layerH = (ah - 0.05) / 4;

  const layers = [
    { label: 'Internet', color: '1e293b', border: '475569', y: ay },
    { label: 'Web Tier  (Public Subnet)', color: '0c1c2e', border: BLUE, y: ay + layerH },
    { label: 'App Tier  (Private Subnet)', color: '0c1a14', border: GREEN, y: ay + layerH * 2 },
    { label: 'Data Tier  (Private Subnet)', color: '1a0d2e', border: PURPLE, y: ay + layerH * 3 },
  ];

  layers.forEach(l => {
    slide.addShape(prs.ShapeType.rect, {
      x: ax, y: l.y, w: aw, h: layerH,
      fill: { color: l.color }, line: { color: l.border, width: 0.75, transparency: 45 },
      rounding: false,
    });
    txt(slide, l.label, ax + 0.12, l.y + 0.07, 2.8, 0.2, l.border, 7.5, true, 'left');
  });

  const bH = layerH * 0.52;
  const bY = (li) => layers[li].y + (layerH - bH) / 2;
  const bW = 1.7;

  // Internet layer
  rect(slide, prs, ax + 0.5, bY(0), bW, bH, '1e293b', '475569');
  txt(slide, 'Users\n(Browser)', ax + 0.5, bY(0), bW, bH, '94a3b8', 8.5, true);
  arrow(slide, prs, ax + 0.5 + bW, bY(0) + bH / 2, cx - 2.1, bY(0) + bH / 2, '475569');

  rect(slide, prs, cx - 2.1, bY(0), bW, bH, '1e293b', ORANGE);
  txt(slide, 'Route 53\n(DNS)', cx - 2.1, bY(0), bW, bH, ORANGE, 8.5, true);
  rect(slide, prs, cx + 0.4, bY(0), bW, bH, '1e293b', ORANGE);
  txt(slide, 'CloudFront\n+ S3 (CDN)', cx + 0.4, bY(0), bW, bH, ORANGE, 8.5, true);
  arrow(slide, prs, cx - 2.1 + bW, bY(0) + bH / 2, cx + 0.4, bY(0) + bH / 2, ORANGE);

  const r53MidX = cx - 2.1 + bW / 2;
  arrow(slide, prs, r53MidX, bY(0) + bH, r53MidX, bY(1) - 0.02);

  // Web Tier
  rect(slide, prs, cx - bW / 2, bY(1), bW, bH, '0c3b5c', BLUE);
  txt(slide, 'ALB\nLoad Balancer', cx - bW / 2, bY(1), bW, bH, '7dd3fc', 8.5, true);
  const ec2Lx = cx - bW / 2 - bW - 0.3;
  const ec2Rx = cx + bW / 2 + 0.3;
  rect(slide, prs, ec2Lx, bY(1), bW, bH, '0c3b5c', BLUE);
  txt(slide, 'EC2 Web\nServer ①', ec2Lx, bY(1), bW, bH, '7dd3fc', 8.5, true);
  rect(slide, prs, ec2Rx, bY(1), bW, bH, '0c3b5c', BLUE);
  txt(slide, 'EC2 Web\nServer ②', ec2Rx, bY(1), bW, bH, '7dd3fc', 8.5, true);
  arrow(slide, prs, cx - bW / 2, bY(1) + bH / 2, ec2Lx + bW, bY(1) + bH / 2, BLUE);
  arrow(slide, prs, cx + bW / 2, bY(1) + bH / 2, ec2Rx, bY(1) + bH / 2, BLUE);
  arrow(slide, prs, cx, bY(1) + bH, cx, bY(2) - 0.02);

  // App Tier
  const appBW = bW * 1.3;
  rect(slide, prs, cx - appBW / 2, bY(2), appBW, bH, '0d2b1a', GREEN);
  txt(slide, 'EC2 App Server\n(Business Logic)', cx - appBW / 2, bY(2), appBW, bH, '86efac', 8.5, true);
  rect(slide, prs, cx + appBW / 2 + 0.3, bY(2), bW, bH, '0d2b1a', GREEN);
  txt(slide, 'Lambda\n(Serverless)', cx + appBW / 2 + 0.3, bY(2), bW, bH, '86efac', 8.5, true);
  arrow(slide, prs, cx + appBW / 2, bY(2) + bH / 2, cx + appBW / 2 + 0.3, bY(2) + bH / 2, GREEN);
  arrow(slide, prs, cx, bY(2) + bH, cx, bY(3) - 0.02);

  // Data Tier
  const rdsW = bW * 1.1;
  rect(slide, prs, cx - rdsW - 0.3, bY(3), rdsW, bH, '2e1065', PURPLE);
  txt(slide, 'RDS\nMySQL / Aurora', cx - rdsW - 0.3, bY(3), rdsW, bH, 'c4b5fd', 8.5, true);
  rect(slide, prs, cx + 0.3, bY(3), rdsW, bH, '2e1065', PURPLE);
  txt(slide, 'ElastiCache\n(Redis)', cx + 0.3, bY(3), rdsW, bH, 'c4b5fd', 8.5, true);
  arrow(slide, prs, cx - 0.3, bY(3) + bH / 2, cx + 0.3, bY(3) + bH / 2, PURPLE);
  rect(slide, prs, ax + aw - bW - 0.2, bY(3), bW, bH, '2e1065', ORANGE);
  txt(slide, 'S3\n(Object Storage)', ax + aw - bW - 0.2, bY(3), bW, bH, ORANGE, 8.5, true);
}

module.exports = { drawVPCDiagram, drawArchDiagram, drawGlobalInfraDiagram };
