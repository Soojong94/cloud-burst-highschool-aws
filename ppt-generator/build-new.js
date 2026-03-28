// build-new.js — 클라우드/AWS 인프라 입문 슬라이드 (25장)
'use strict';
const fs = require('fs');
const path = require('path');

const slides = [

  // ══════════════════════════════════════════════════════
  // SECTION 1: 도입
  // ══════════════════════════════════════════════════════
  {
    file: 'S01Hero',
    master: 'M1',
    section: 'hero',
    title: 'AWS Cloud 입문',
    eyebrow: 'AMAZON WEB SERVICES',
    subtitle: '클라우드 인프라의 기초부터 실전 활용까지',
    body: 'Amazon Web Services는 전 세계에서 가장 널리 사용되는 클라우드 플랫폼입니다. 서버, 네트워크, 스토리지를 직접 구매하지 않고 인터넷을 통해 필요한 만큼 빌려 사용하는 방식으로 IT 인프라의 패러다임을 바꾸었습니다.'
  },

  {
    file: 'S02OnpremVsCloud',
    master: 'M3_compare',
    section: 'cloud',
    title: '온프레미스 vs 클라우드',
    left: {
      colorKey: 'purple',
      title: '온프레미스 (기존 방식)',
      items: [
        '서버를 직접 구매하고 설치',
        '데이터센터 공간, 전기, 냉방 비용',
        '트래픽 급증 대비 미리 과잉 구매',
        '장애 발생 시 직접 하드웨어 교체',
        '수개월 걸리는 인프라 도입 기간'
      ],
      tags: ['CapEx 모델', '긴 도입 기간', '유연성 낮음']
    },
    right: {
      colorKey: 'blue',
      title: '클라우드 (AWS)',
      items: [
        '서버를 빌려서 사용, 소유 불필요',
        '사용한 시간, 용량만큼만 비용 지불',
        '트래픽 급증 시 수 분 내 자동 확장',
        '장애 발생 시 자동 복구 설계 가능',
        '즉시 시작, 언제든 종료 가능'
      ],
      tags: ['OpEx 모델', '즉시 시작', '무한 확장']
    },
    benefits: [
      { icon: 'bolt', title: '속도', body: '수 분 내 인프라 구성' },
      { icon: 'chart', title: '확장성', body: '트래픽에 따라 자동 조정' },
      { icon: 'money', title: '비용', body: '쓴 만큼만 지불' },
      { icon: 'globe', title: '글로벌', body: '전 세계 즉시 배포' }
    ]
  },

  // ══════════════════════════════════════════════════════
  // SECTION 2: 클라우드 기초
  // ══════════════════════════════════════════════════════
  {
    file: 'S03CloudConcept',
    master: 'M2',
    section: 'cloud',
    title: '클라우드 컴퓨팅이란?',
    subtitle: '인터넷을 통해 컴퓨팅 자원을 서비스로 제공하는 방식. NIST가 정의한 5가지 핵심 특성으로 이해할 수 있습니다.',
    cards: [
      { icon: 'globe', label: '특성 1', title: '온디맨드 셀프서비스', body: '담당자에게 요청하지 않고 사용자가 직접 서버, 스토리지를 즉시 프로비저닝. 콘솔이나 API로 바로 생성.' },
      { icon: 'link', label: '특성 2', title: '광대역 네트워크 접근', body: '인터넷만 있으면 PC, 모바일, 태블릿 어디서든 접근 가능. 위치와 기기에 제한 없음.' },
      { icon: 'layers', label: '특성 3', title: '자원 풀링', body: '여러 고객이 물리 자원을 공유(멀티테넌시). 각 고객은 완전히 격리된 가상 환경에서 사용.' },
      { icon: 'scaling', label: '특성 4', title: '빠른 탄력성', body: '수요에 따라 자원을 자동으로 늘리거나 줄임. 급격한 트래픽 증가에도 즉각 대응.' },
      { icon: 'meter', label: '특성 5', title: '측정 가능한 서비스', body: '사용량을 자동으로 측정, 모니터링, 리포트. 사용자와 제공자 모두 투명하게 파악. 사용한 만큼 정확히 과금.' }
    ]
  },

  {
    file: 'S04CloudBenefits',
    master: 'M4',
    section: 'cloud',
    title: '클라우드가 바꾼 것들',
    subtitle: '클라우드 이전과 이후, 실제 기업들이 경험한 변화',
    left: {
      title: '스타트업의 변화',
      bullets: [
        { title: '서버 구매 없이 서비스 런칭', body: '과거에는 수억 원 서버 투자가 먼저. 지금은 신용카드 하나로 당일 서비스 출시 가능.' },
        { title: '글로벌 진출 장벽 제거', body: '해외 데이터센터 계약 없이 AWS 리전만 선택하면 어느 나라에서든 낮은 지연으로 서비스.' },
        { title: '인프라 팀 없이도 운영', body: '서버 관리, 패치, 백업을 AWS가 처리. 소수의 개발자가 수백만 사용자 서비스를 운영.' }
      ]
    },
    right: {
      title: '대기업의 변화',
      bullets: [
        { title: '비용 구조 전환 (CapEx → OpEx)', body: '초기 대규모 투자 없이 사용량 기반 운영 비용으로 전환. 재무적 유연성 확보.' },
        { title: '출시 속도 10배 향상', body: '인프라 준비에 수개월 걸리던 것이 수 분으로. 새 서비스를 훨씬 빠르게 시장에 투입.' },
        { title: '피크 트래픽 대응 자동화', body: '블랙프라이데이, 수능 원서 접수처럼 일시적 폭증에도 자동 확장. 서버 증설 인력 불필요.' }
      ]
    },
    bottomGrid: [
      { title: '🛒 쿠팡', body: '새벽배송 폭주해도 자동 확장, 끝나면 자동 축소' },
      { title: '🎬 넷플릭스', body: '서버 없이 전 세계 1억명 동시 스트리밍' },
      { title: '🍔 배달의민족', body: '점심·저녁 피크 타임에만 서버 자동 증가' },
      { title: '💬 카카오톡', body: '수능 합격 발표날 폭발적 트래픽도 무중단' },
    ]
  },

  {
    file: 'S05ServiceModels',
    master: 'M3_columns',
    section: 'cloud',
    title: '클라우드 서비스 모델',
    subtitle: '얼마나 직접 관리할 것인가에 따라 세 가지로 나뉩니다',
    columns: [
      {
        colorKey: 'blue',
        icon: 'layers',
        title: 'IaaS',
        subtitle: 'Infrastructure as a Service',
        body: '가상 서버, 네트워크, 스토리지를 제공. 운영체제부터 앱까지 직접 관리. 가장 많은 제어권.',
        examples: ['Amazon EC2', 'Amazon VPC', 'Amazon EBS', 'Amazon S3']
      },
      {
        colorKey: 'green',
        icon: 'tool',
        title: 'PaaS',
        subtitle: 'Platform as a Service',
        body: '인프라 관리는 AWS가 담당. 개발자는 코드 작성에만 집중. 배포 플랫폼을 서비스로 제공.',
        examples: ['Elastic Beanstalk', 'AWS Lambda', 'Amazon RDS', 'AWS Amplify']
      },
      {
        colorKey: 'purple',
        icon: 'cloud',
        title: 'SaaS',
        subtitle: 'Software as a Service',
        body: '완성된 소프트웨어를 서비스로 사용. 설치, 유지보수 없이 바로 사용. 최소한의 관리.',
        examples: ['Amazon WorkSpaces', 'Amazon Chime', 'AWS WorkMail', 'Amazon Connect']
      }
    ]
  },

  {
    file: 'S06CSPComparison',
    master: 'M2',
    section: 'cloud',
    title: '3대 클라우드 서비스 제공자',
    subtitle: '전 세계 클라우드 시장은 AWS, Azure, GCP 세 곳이 약 65%를 점유합니다',
    cards: [
      { icon: 'trophy', label: '1위', title: 'Amazon AWS', body: '시장 점유율 약 31%. 2006년 출시, 가장 오래된 클라우드 플랫폼. 서비스 수 200개 이상. 스타트업부터 정부기관까지 가장 폭넓게 사용.' },
      { icon: 'server', label: '2위', title: 'Microsoft Azure', body: '시장 점유율 약 25%. 기업용 Windows, Office365와 연계 강점. 기존 마이크로소프트 제품을 사용하는 대기업에 적합.' },
      { icon: 'chart', label: '3위', title: 'Google Cloud (GCP)', body: '시장 점유율 약 11%. 빅데이터, 머신러닝 분야 강점. BigQuery, TensorFlow 등 데이터 분석 특화. 기술 혁신 빠름.' },
      { icon: 'globe', label: '기타', title: '국내 클라우드', body: 'Naver Cloud, KT Cloud, NHN Cloud 등 국내 사업자도 활발. 공공기관 데이터 규제 대응, 국내 기술 지원 강점.' }
    ]
  },

  // ══════════════════════════════════════════════════════
  // SECTION 3: AWS 소개
  // ══════════════════════════════════════════════════════
  {
    file: 'S07AWSIntro',
    master: 'M2',
    section: 'aws',
    title: 'AWS — 클라우드 1위',
    subtitle: '2006년 출시 이후 한 번도 1위를 내준 적 없는 클라우드 플랫폼. 전 세계 240만 개 이상 기업이 사용',
    cards: [
      { icon: 'calendar', label: '역사', title: '2006년 출시', body: 'Amazon이 내부 인프라를 서비스화. S3, EC2로 시작. 클라우드 시장 자체를 개척. 경쟁사 대비 4~5년 앞선 출발.' },
      { icon: 'settings', label: '규모', title: '200개 이상 서비스', body: '컴퓨팅, 스토리지, DB, 네트워크, 보안, AI/ML, IoT, 게임 등 IT 전 분야 서비스 제공.' },
      { icon: 'globe', label: '인프라', title: '34개 리전 운영', body: '전 세계 34개 리전, 108개 가용 영역. 서울 포함. 경쟁사 대비 가장 넓은 글로벌 커버리지.' },
      { icon: 'building', label: '생태계', title: '파트너 수천 곳', body: 'Netflix, Airbnb, 삼성, 카카오, 쿠팡 등 사용. AWS 전문 파트너사(MSP) 수천 곳. 방대한 생태계.' }
    ]
  },

  {
    file: 'S08GlobalInfra',
    master: 'M4',
    section: 'aws',
    title: 'AWS 글로벌 인프라',
    subtitle: '물리적인 데이터센터가 어떻게 구성되어 있는지 이해하면 장애 없는 서비스를 설계할 수 있습니다',
    left: {
      title: '인프라 구성 단위',
      bullets: [
        { title: '리전 (Region)', body: '지리적으로 독립된 데이터센터 클러스터. 사용자와 가까운 리전 선택 시 응답 속도 향상. 데이터 주권(현지 법규) 충족.' },
        { title: '가용 영역 (Availability Zone)', body: '리전 안에 2~6개의 물리적으로 분리된 데이터센터. 전력, 네트워크, 냉방이 완전 독립. 하나가 장애 나도 다른 AZ에서 서비스 유지.' },
        { title: '엣지 로케이션 (Edge Location)', body: '전 세계 600개 이상의 캐시 서버. CloudFront CDN이 사용. 사용자 가까이에서 응답하여 지연 최소화.' }
      ]
    },
    right: {
      title: '서울 리전 (ap-northeast-2)',
      bullets: [
        { title: '2016년 개설, 4개 가용 영역', body: '국내에서 가장 낮은 지연 시간. 국내 기업, 공공기관 대부분이 서울 리전 사용.' },
        { title: '멀티 AZ 설계의 중요성', body: '서비스를 2개 이상의 AZ에 분산 배치하면 데이터센터 하나가 다운돼도 서비스 지속. 고가용성의 기본.' },
        { title: '리전 선택 기준', body: '사용자 위치(지연), 법적 규제(데이터 현지화), 서비스 가용 여부, 비용(리전마다 가격 상이).' }
      ]
    },
    bottomGrid: [
      { title: '🗺 리전 = 도시', body: '서울, 도쿄처럼 지리적으로 떨어진 독립 데이터센터 클러스터' },
      { title: '🏢 AZ = 건물', body: '같은 도시 안 서로 다른 건물. 하나 정전돼도 옆 건물은 정상' },
      { title: '🏪 엣지 = 편의점', body: '전국 600곳에 캐시 서버. 가장 가까운 곳에서 즉시 응답' },
      { title: '🇰🇷 서울 리전', body: '카카오, 쿠팡, 네이버, 토스 모두 서울 리전(ap-northeast-2) 사용' },
    ]
  },

  // ── 글로벌 인프라 다이어그램 ────────────────────────────
  {
    file: 'S08bGlobalInfraDiagram',
    master: 'M7',
    section: 'aws',
    color: 'orange',
    title: 'AWS 글로벌 인프라 구성도',
    subtitle: '리전 → 가용 영역 → 데이터센터의 물리적 계층 구조',
    diagram: 'global_infra',
  },

  // ══════════════════════════════════════════════════════
  // SECTION 4: 네트워크 — VPC
  // ══════════════════════════════════════════════════════
  {
    file: 'S09VPC',
    master: 'M2',
    section: 'network',
    title: 'VPC — 나만의 사설 네트워크',
    subtitle: 'VPC(Virtual Private Cloud)는 AWS 안에 만드는 격리된 네트워크 공간. 아파트 단지처럼 외부와 분리된 내 구역',
    cards: [
      { icon: 'network', label: '격리', title: '사설 네트워크', body: '다른 AWS 고객과 완전히 분리된 가상 네트워크. IP 대역을 직접 정의 (예: 10.0.0.0/16). 기본 VPC는 계정 생성 시 자동 제공.' },
      { icon: 'arrows', label: '서브넷', title: 'Public / Private 서브넷', body: '인터넷에 직접 연결되는 퍼블릭 서브넷과 외부 차단된 프라이빗 서브넷으로 구역을 나눔. 목적에 따라 리소스 배치.' },
      { icon: 'key', label: 'IGW', title: '인터넷 게이트웨이', body: 'VPC를 인터넷에 연결하는 문. 없으면 외부 통신 완전 불가. 퍼블릭 서브넷에 연결하여 외부 접근 허용.' },
      { icon: 'shield', label: '방화벽', title: '보안 그룹', body: 'EC2 인스턴스 앞에 붙는 방화벽. 허용 규칙만 설정 (기본 전체 차단). 포트, IP 단위로 접근 제어.' }
    ]
  },

  {
    file: 'S10VPCDetail',
    master: 'M4',
    section: 'network',
    title: 'VPC 구성요소 상세',
    subtitle: '안전하고 체계적인 네트워크 설계를 위한 핵심 구성요소',
    left: {
      title: '트래픽 경로 제어',
      bullets: [
        { title: '라우팅 테이블', body: '패킷이 어디로 갈지 결정하는 지도. 서브넷마다 별도 설정. 인터넷 게이트웨이 또는 NAT 게이트웨이로 경로 지정.' },
        { title: 'NAT 게이트웨이', body: '프라이빗 서브넷의 서버가 인터넷으로 나갈 수 있게 해주는 번역기. 외부에서는 접근 불가 — 단방향 출구. 소프트웨어 업데이트 등에 활용.' },
        { title: 'VPC Peering', body: '두 VPC를 직접 연결하는 사설 채널. 다른 계정이나 다른 리전의 VPC도 연결 가능. 내부 트래픽은 인터넷을 거치지 않음.' }
      ]
    },
    right: {
      title: '보안 계층',
      bullets: [
        { title: '보안 그룹 (Security Group)', body: '인스턴스 단위 방화벽. Stateful — 허용된 요청의 응답은 자동 통과. 어떤 포트를, 누구에게 열지 설정.' },
        { title: 'Network ACL', body: '서브넷 단위 방화벽. Stateless — 인바운드, 아웃바운드 규칙 각각 설정. 추가적인 방어선 역할.' },
        { title: '일반적인 배치 패턴', body: '웹서버는 퍼블릭 서브넷, 앱서버와 DB는 프라이빗 서브넷. 외부에서 DB에 직접 접근 불가 구조.' }
      ]
    },
    bottomGrid: [
      { title: '🗺 라우팅 = 도로 표지판', body: '패킷이 어디로 갈지 알려주는 지도. 인터넷행, 내부행 경로를 지정' },
      { title: '🚪 NAT = 대표번호', body: '내부에서 외부로만 연결. 외부에서는 내부 서버 주소를 알 수 없음' },
      { title: '👮 보안 그룹 = 경비원', body: '허가된 포트만 통과. 80(웹), 443(HTTPS), 22(SSH) 외 전부 차단' },
      { title: '🔐 ACL = 아파트 입구', body: '서브넷 전체에 적용되는 관문. 보안 그룹 앞단의 추가 방어선' },
    ]
  },

  // ── VPC 구성도 (다이어그램) ─────────────────────────────
  {
    file: 'S10bVPCDiagram',
    master: 'M7',
    section: 'network',
    color: 'blue',
    title: 'VPC 구성도',
    subtitle: '퍼블릭/프라이빗 서브넷 · 보안 그룹 · NAT 게이트웨이의 실제 배치',
    diagram: 'vpc',
  },

  // ══════════════════════════════════════════════════════
  // SECTION 5: 컴퓨팅 — EC2
  // ══════════════════════════════════════════════════════
  {
    file: 'S11EC2',
    master: 'M2',
    section: 'ec2',
    title: 'EC2 — 클라우드 가상 서버',
    subtitle: 'Elastic Compute Cloud. 원하는 사양의 서버를 수 분 내에 시작하고, 필요 없으면 언제든 종료',
    cards: [
      { icon: 'server', label: '개념', title: '가상 서버', body: '물리 서버를 가상화한 컴퓨팅 단위. CPU, 메모리, 스토리지 조합을 목적에 맞게 선택. 운영체제도 직접 선택 (Linux, Windows).' },
      { icon: 'box', label: '인스턴스 유형', title: '목적별 선택', body: 't-계열 (범용/저렴), m-계열 (균형), c-계열 (컴퓨팅), r-계열 (메모리 집약), g-계열 (GPU). 수십 가지 타입 중 선택.' },
      { icon: 'refresh', label: '확장', title: 'Auto Scaling', body: '트래픽 증가 시 자동으로 인스턴스 추가, 감소 시 자동 제거. 비용 낭비 없이 성능 유지. 최소, 최대, 희망 수량 설정.' },
      { icon: 'scaling', label: '분산', title: 'Load Balancer', body: '여러 EC2에 트래픽을 자동 분산. 하나의 서버에 장애가 나도 나머지가 계속 처리. ALB, NLB, CLB 세 종류 제공.' }
    ]
  },

  {
    file: 'S12EC2Detail',
    master: 'M4',
    section: 'ec2',
    title: 'EC2 인스턴스 유형과 요금',
    subtitle: '어떤 인스턴스를 선택하느냐에 따라 성능과 비용이 크게 달라집니다',
    left: {
      title: '주요 인스턴스 패밀리',
      bullets: [
        { title: 't3/t4g — 범용 버스트 (가장 저렴)', body: '평소엔 낮은 성능, 필요 시 순간 성능 향상. 개발, 테스트, 소규모 웹서버에 적합. 프리 티어로 t2.micro 무료.' },
        { title: 'm6i/m7g — 범용 균형형', body: 'CPU, 메모리, 네트워크 균형. 웹앱, 중소규모 DB, 게임 서버 등 가장 일반적인 워크로드에 사용.' },
        { title: 'c7g — 컴퓨팅 최적화', body: 'CPU 집약적 작업에 특화. 동영상 인코딩, 배치 처리, 고성능 웹서버에 적합.' }
      ]
    },
    right: {
      title: '요금 모델',
      bullets: [
        { title: '온디맨드', body: '시간(초) 단위 과금. 약정 없음. 예측 불가능한 트래픽이나 테스트 환경. 가장 유연하나 가장 비쌈.' },
        { title: '예약 인스턴스 (RI)', body: '1년 또는 3년 약정 시 최대 72% 할인. 안정적으로 24시간 운영되는 서비스에 적합. 비용 예측 가능.' },
        { title: '스팟 인스턴스', body: 'AWS 여유 자원 활용, 최대 90% 저렴. 언제든 중단될 수 있어 배치 작업, 데이터 처리에 적합. 중단 허용 아키텍처 필요.' }
      ]
    },
    bottomGrid: [
      { title: '💻 t3 = 일반 노트북', body: '가볍고 저렴. 블로그, 소규모 API, 개발 환경에 적합' },
      { title: '🖥 m6i = 사무용 데스크탑', body: 'CPU·메모리 균형. 일반적인 웹서비스, 중소 DB에 가장 많이 사용' },
      { title: '🎬 c7g = 편집용 워크스테이션', body: 'CPU 특화. 동영상 인코딩, 대량 계산, 고성능 API 서버에 적합' },
      { title: '🧠 r계열 = 대용량 RAM PC', body: '메모리 집약적 작업. 인메모리 DB, 빅데이터 처리에 사용' },
    ]
  },

  // ══════════════════════════════════════════════════════
  // SECTION 6: 스토리지 — S3
  // ══════════════════════════════════════════════════════
  {
    file: 'S13S3',
    master: 'M2',
    section: 's3',
    title: 'S3 — 무제한 객체 스토리지',
    subtitle: 'Simple Storage Service. 파일을 저장하는 가장 기본적인 AWS 서비스. 이미지, 동영상, 백업, 로그 등 모든 파일',
    cards: [
      { icon: 'database', label: '구조', title: '버킷과 객체', body: '버킷(Bucket) = 최상위 폴더. 객체(Object) = 파일. 버킷 이름은 전 세계 고유해야 함. 파일 하나당 최대 5TB.' },
      { icon: 'shield', label: '내구성', title: '99.999999999%', body: '이른바 11 nine 내구성. 데이터를 3개 이상의 AZ에 자동 복제. 사실상 데이터 손실이 없는 수준의 안정성.' },
      { icon: 'globe', label: '활용', title: '정적 웹사이트 호스팅', body: 'HTML, CSS, JS 파일을 S3에 업로드하면 바로 웹사이트로 서비스 가능. 서버 없이 정적 사이트 운영 가능.' },
      { icon: 'money', label: '비용', title: '스토리지 클래스', body: 'Standard(자주 접근), IA(가끔 접근), Glacier(장기 아카이브) 등. 접근 빈도에 따라 클래스를 선택해 비용 최적화.' }
    ]
  },

  {
    file: 'S14S3Detail',
    master: 'M4',
    section: 's3',
    title: 'S3 활용 패턴',
    subtitle: 'S3는 단순한 파일 저장소가 아닙니다 — AWS 서비스 전반에서 중심 역할을 합니다',
    left: {
      title: '주요 활용 사례',
      bullets: [
        { title: '정적 자산 서빙 + CloudFront', body: '이미지, 동영상, CSS, JS 등을 S3에 저장하고 CloudFront CDN과 연결. 전 세계 사용자에게 빠르게 전달.' },
        { title: '백업 및 아카이브', body: 'EC2 스냅샷, DB 백업, 로그 파일을 S3에 자동 저장. Glacier로 이동하면 장기 보관 비용 대폭 절감.' },
        { title: '데이터 레이크', body: '정형, 비정형 데이터를 S3에 집중 저장. Athena, Redshift 등으로 바로 분석. 별도 데이터 이동 불필요.' }
      ]
    },
    right: {
      title: '핵심 기능',
      bullets: [
        { title: '버전 관리 (Versioning)', body: '파일을 덮어써도 이전 버전 보존. 실수로 삭제하거나 잘못 덮어쓴 파일 복원 가능. 규정 준수에도 활용.' },
        { title: '수명 주기 정책', body: '일정 기간 후 자동으로 스토리지 클래스 변경 또는 삭제. 예: 90일 후 IA, 1년 후 Glacier 이동.' },
        { title: '버킷 정책 및 ACL', body: '특정 IP, 계정, 서비스에만 접근 허용. 퍼블릭 공개 여부 제어. IAM 정책과 결합하여 세밀한 권한 관리.' }
      ]
    },
    bottomGrid: [
      { title: '☁️ S3 = 구글 드라이브', body: '파일을 업로드해두면 어디서든 링크로 접근. 단, 용량 제한 없음' },
      { title: '📦 Glacier = 창고', body: '자주 안 꺼내는 물건은 창고로. 비용 대폭 절감, 꺼내는 데 수 분~수 시간' },
      { title: '🔄 버전관리 = 구글 Docs 기록', body: '덮어써도 이전 버전 복원 가능. "어제 파일로 돌려줘"가 그냥 됨' },
      { title: '🌐 정적 호스팅 = 파일로 운영하는 웹사이트', body: '서버 없이 HTML 파일만 올려도 전 세계에서 접속 가능' },
    ]
  },

  // ══════════════════════════════════════════════════════
  // SECTION 7: 데이터베이스
  // ══════════════════════════════════════════════════════
  {
    file: 'S15Database',
    master: 'M3_compare',
    section: 'database',
    title: 'AWS 데이터베이스 선택',
    left: {
      colorKey: 'blue',
      title: 'RDS — 관계형 DB',
      items: [
        '표 형태(행, 열)로 데이터 저장',
        'MySQL, PostgreSQL, Oracle 등 지원',
        '복잡한 JOIN 쿼리, 트랜잭션에 강함',
        '멀티 AZ 자동 복제로 고가용성',
        '백업, 패치, 장애복구 AWS가 관리'
      ],
      tags: ['회원 정보', '주문, 결제', '게시판']
    },
    right: {
      colorKey: 'green',
      title: 'DynamoDB — NoSQL DB',
      items: [
        'Key-Value, Document 형태 저장',
        '스키마 없이 자유로운 데이터 구조',
        '초당 수백만 요청 밀리초 이내 응답',
        '서버리스 — 용량 관리 불필요',
        '빠른 쓰기, 단순 조회에 최적화'
      ],
      tags: ['게임 데이터', '세션 저장', 'IoT']
    },
    benefits: [
      { icon: 'refresh', title: 'ElastiCache', body: 'Redis 기반 인메모리 캐시. DB 부하 감소.' },
      { icon: 'star', title: 'Aurora', body: 'MySQL 호환, 최대 5배 빠른 AWS 자체 DB.' },
      { icon: 'chart', title: 'Redshift', body: '페타바이트급 대용량 데이터 분석 전용.' },
      { icon: 'folder', title: 'DocumentDB', body: 'MongoDB 호환 문서형 DB.' }
    ]
  },

  {
    file: 'S16DatabaseDetail',
    master: 'M4',
    section: 'database',
    title: 'RDS 핵심 기능',
    subtitle: 'RDS는 직접 DB를 설치, 운영하는 번거로움 없이 관리형으로 사용하는 관계형 데이터베이스 서비스',
    left: {
      title: '관리형의 장점',
      bullets: [
        { title: '자동 백업', body: '매일 자동 스냅샷 생성. 최대 35일 보관. 특정 시점으로 복원(Point-in-Time Recovery) 지원. 데이터 손실 위험 최소화.' },
        { title: '멀티 AZ 배포', body: '주 DB와 대기 DB를 서로 다른 AZ에 배치. 주 DB에 장애 발생 시 수초 내 자동 페일오버. 서비스 중단 없이 전환.' },
        { title: '읽기 전용 복제본 (Read Replica)', body: '동일 데이터를 가진 읽기 전용 인스턴스 추가. 읽기 트래픽을 분산하여 주 DB 부하 감소. 최대 5개까지 생성 가능.' }
      ]
    },
    right: {
      title: 'DB 선택 가이드',
      bullets: [
        { title: 'MySQL, PostgreSQL → 범용 웹서비스', body: '회원, 게시판, 쇼핑몰처럼 관계형 데이터가 필요한 일반적인 웹 애플리케이션에 적합.' },
        { title: 'Aurora → 고성능 필요 시', body: 'RDS MySQL 대비 최대 5배 빠른 성능. 자동 스케일링 스토리지. 고트래픽 서비스에 적합하나 비용 높음.' },
        { title: 'DynamoDB → 단순 빠른 조회', body: '게임 랭킹, 세션, IoT 센서 데이터처럼 단순 구조에 빠른 읽기, 쓰기가 필요할 때 선택.' }
      ]
    },
    bottomGrid: [
      { title: '💾 자동 백업 = 폰 자동 백업', body: '스마트폰이 매일 밤 알아서 백업하듯 RDS도 매일 자동 스냅샷 생성' },
      { title: '🏢 멀티 AZ = 중요 서류 복사 보관', body: '중요 서류를 두 군데 보관. 한 곳에 불이 나도 다른 곳 서류는 안전' },
      { title: '📖 Read Replica = 복사본 도서관', body: '원본 훼손 방지를 위해 복사본만 대출. 조회 트래픽을 복사본이 처리' },
      { title: '⚡ Aurora = 고성능 엔진', body: '같은 MySQL 문법인데 속도가 최대 5배. 고트래픽 서비스에 최적화' },
    ]
  },

  // ══════════════════════════════════════════════════════
  // SECTION 8: 보안 — IAM
  // ══════════════════════════════════════════════════════
  {
    file: 'S17IAM',
    master: 'M2',
    section: 'security',
    title: 'IAM — 권한 관리의 기본',
    subtitle: '"누가, 어떤 리소스에, 무엇을 할 수 있는가"를 정의. AWS의 모든 액세스는 IAM을 통해 제어됩니다',
    cards: [
      { icon: 'user', label: 'User', title: 'IAM 사용자', body: '사람 또는 애플리케이션을 위한 계정. 콘솔 로그인용 비밀번호와 API 호출용 액세스 키를 별도로 발급.' },
      { icon: 'users', label: 'Group', title: 'IAM 그룹', body: '여러 사용자를 묶어 권한 일괄 부여. 개발팀, 운영팀처럼 팀 단위로 정책을 적용하면 관리가 편리.' },
      { icon: 'key', label: 'Role', title: 'IAM 역할', body: 'EC2, Lambda 같은 AWS 서비스가 다른 서비스에 접근할 때 사용. 임시 자격증명 자동 발급. 키를 코드에 하드코딩할 필요 없음.' },
      { icon: 'code', label: 'Policy', title: 'IAM 정책', body: 'JSON 문서로 정의하는 권한 규칙. 어떤 서비스의 어떤 동작을, 어떤 리소스에 허용 또는 거부할지 세밀하게 제어.' }
    ]
  },

  {
    file: 'S18IAMDetail',
    master: 'M4',
    section: 'security',
    title: 'IAM 실전 원칙',
    subtitle: 'IAM을 잘못 설정하면 보안 사고의 직접적인 원인이 됩니다 — 올바른 사용 습관이 중요합니다',
    left: {
      title: '필수 보안 원칙',
      bullets: [
        { title: '최소 권한 원칙 (Least Privilege)', body: '필요한 권한만 부여. 처음부터 관리자 권한 부여 금지. 작게 시작해서 필요할 때만 추가. 실수와 침해 피해 최소화.' },
        { title: '루트 계정 잠금', body: '계정 최초 생성 시 만들어지는 루트 계정은 MFA 설정 후 일상 사용 금지. 청구 관리 등 꼭 필요한 경우에만 사용.' },
        { title: 'MFA (다중 인증) 필수', body: '비밀번호가 유출돼도 OTP 등 2차 인증이 없으면 로그인 불가. 모든 사람 계정에 반드시 적용. 특히 권한 높은 계정.' }
      ]
    },
    right: {
      title: '역할(Role) 활용',
      bullets: [
        { title: 'EC2에 역할 부여', body: 'EC2가 S3, RDS에 접근해야 할 때 액세스 키를 코드에 넣지 말고 EC2에 IAM 역할 부여. 임시 자격증명이 자동 갱신.' },
        { title: 'Lambda에 역할 부여', body: 'Lambda 함수가 DynamoDB, SES 등을 호출할 때 실행 역할 설정. 최소한의 권한만 포함된 정책을 역할에 연결.' },
        { title: 'CloudTrail로 감사', body: '모든 API 호출을 로그로 기록. 누가, 언제, 무엇을 했는지 추적 가능. 보안 사고 발생 시 원인 분석의 핵심.' }
      ]
    },
    bottomGrid: [
      { title: '🪪 IAM = 회사 출입증', body: '직급마다 다른 출입 권한. 인턴은 사무실만, 팀장은 서버실도 출입 가능' },
      { title: '🔑 루트 계정 = 마스터키', body: '마스터키는 금고에 잠궈 보관. 일상에서는 절대 꺼내 쓰지 않음' },
      { title: '📱 MFA = 은행 OTP', body: '비밀번호가 유출돼도 OTP 없이는 로그인 불가. 2단계 인증 필수' },
      { title: '🤖 역할 = 업무별 권한 카드', body: 'EC2가 S3 접근 필요 시 역할 부여. 키를 코드에 하드코딩할 필요 없음' },
    ]
  },

  // ══════════════════════════════════════════════════════
  // SECTION 9: 서버리스 — Lambda
  // ══════════════════════════════════════════════════════
  {
    file: 'S19Lambda',
    master: 'M4',
    section: 'serverless',
    title: 'Lambda — 서버 없이 코드 실행',
    subtitle: '서버를 만들지 않고 코드만 올리면 AWS가 알아서 실행. 실행 횟수와 시간만큼만 비용 지불',
    left: {
      title: '서버리스의 개념',
      bullets: [
        { title: '서버가 없다는 의미', body: '물리 서버가 없는 것이 아니라 서버 관리를 AWS가 대신함. 개발자는 코드 로직에만 집중. OS, 패치, 확장 모두 자동.' },
        { title: '이벤트 기반 실행', body: 'S3 파일 업로드, API Gateway 요청, 타이머(Cron), DynamoDB 변경 등 다양한 이벤트로 자동 실행. 놀고 있으면 비용 0원.' },
        { title: '자동 스케일링', body: '요청이 1건이든 100만 건이든 자동으로 처리. 트래픽 급증에도 수동 개입 불필요. 유휴 상태에서는 과금 없음.' }
      ]
    },
    right: {
      title: '실전 활용 사례',
      bullets: [
        { title: '이미지 처리', body: 'S3에 이미지 업로드 시 Lambda가 자동 실행 → 썸네일 생성, 리사이징, 포맷 변환 후 결과물을 다시 S3에 저장.' },
        { title: 'API 백엔드', body: 'API Gateway + Lambda 조합으로 서버 없는 REST API 구축. EC2 없이 API 서버 운영. 트래픽에 따라 자동 확장.' },
        { title: '정기 배치 작업', body: 'EventBridge(Cron) 트리거로 매일 새벽 DB 정리, 리포트 생성, 알림 발송 등 반복 작업 자동화.' }
      ]
    },
    bottomGrid: [
      { title: '🎰 자판기 = 이벤트 기반', body: '동전 넣을 때만 작동. Lambda도 요청 왔을 때만 실행, 대기 비용 없음' },
      { title: '🚖 대리기사 = 필요할 때만 호출', body: '항상 대기하는 직원이 아니라 콜 오면 달려오는 방식. 비용 효율 극대화' },
      { title: '🤖 로봇청소기 = 정기 배치', body: '매일 새벽 자동 실행. EventBridge로 Cron 설정하면 사람 없이 동작' },
      { title: '📸 썸네일 자동 생성', body: '이미지 업로드 → Lambda 자동 실행 → 리사이징 → S3 저장. 코드만 작성' },
    ]
  },

  // ══════════════════════════════════════════════════════
  // SECTION 10: 아키텍처
  // ══════════════════════════════════════════════════════
  {
    file: 'S20Architecture',
    master: 'M3_columns',
    section: 'aws',
    title: '3-Tier 아키텍처 패턴',
    subtitle: '웹 서비스를 설계할 때 가장 많이 사용하는 구조 — 계층 분리로 보안과 확장성을 동시에 확보',
    columns: [
      {
        colorKey: 'blue',
        icon: 'globe',
        title: 'Web Tier',
        subtitle: '프레젠테이션 계층 (Public)',
        body: '사용자가 직접 접속. 인터넷에 공개. 로드밸런서로 트래픽 분산. 정적 콘텐츠는 CloudFront, S3로 분리.',
        examples: ['ALB (로드밸런서)', 'EC2 웹서버', 'CloudFront', 'S3 정적 파일']
      },
      {
        colorKey: 'green',
        icon: 'settings',
        title: 'App Tier',
        subtitle: '비즈니스 로직 계층 (Private)',
        body: '실제 처리 담당. 외부 직접 접근 차단. 웹 티어에서만 접속 가능. Auto Scaling으로 탄력적 운영.',
        examples: ['EC2 앱서버', 'Lambda', 'ECS 컨테이너', 'Auto Scaling']
      },
      {
        colorKey: 'purple',
        icon: 'database',
        title: 'Data Tier',
        subtitle: '데이터 저장 계층 (Private)',
        body: '데이터 안전 보관. 가장 엄격하게 격리. 앱 티어에서만 접근 가능. 멀티 AZ 복제로 데이터 보호.',
        examples: ['RDS (관계형DB)', 'DynamoDB', 'ElastiCache', 'S3 (파일)']
      }
    ]
  },

  // ── 3-Tier 아키텍처 다이어그램 ──────────────────────────
  {
    file: 'S20bArchDiagram',
    master: 'M7',
    section: 'aws',
    color: 'green',
    title: '3-Tier 아키텍처 구성도',
    subtitle: 'Web → App → Data 계층의 실제 서비스 흐름과 AWS 서비스 배치',
    diagram: 'architecture',
  },

  {
    file: 'S21RealWorld',
    master: 'M4',
    section: 'aws',
    title: '실제 웹 서비스 구성 예시',
    subtitle: '일반적인 쇼핑몰, 커뮤니티 사이트를 AWS로 구성하는 방법',
    left: {
      title: '요청 흐름',
      bullets: [
        { title: '1. 사용자 → Route 53 (DNS)', body: '도메인 주소를 입력하면 Route 53이 IP 주소로 변환하여 로드밸런서로 연결. AWS에서 도메인도 구매, 관리 가능.' },
        { title: '2. → ALB (로드밸런서)', body: '여러 웹서버에 트래픽을 균등하게 분산. 건강한 서버에만 요청 전달(헬스체크). HTTPS 인증서도 ALB에서 처리.' },
        { title: '3. → EC2 앱서버 → RDS', body: '프라이빗 서브넷의 앱서버에서 비즈니스 로직 처리 후 RDS에 데이터 저장. ElastiCache로 DB 부하 감소.' }
      ]
    },
    right: {
      title: '부가 구성',
      bullets: [
        { title: 'S3 + CloudFront', body: '이미지, 동영상, CSS, JS 등 정적 파일은 S3에 저장하고 CloudFront CDN으로 전 세계에 빠르게 배포. 서버 부하 감소.' },
        { title: 'CloudWatch 모니터링', body: 'CPU, 메모리, 응답시간 실시간 모니터링. 이상 감지 시 자동 알림(SNS). Auto Scaling 트리거로도 활용.' },
        { title: 'WAF (웹 방화벽)', body: 'SQL 인젝션, XSS 등 웹 공격 자동 차단. ALB 앞에 붙여 모든 요청 필터링. DDoS 방어는 AWS Shield가 담당.' }
      ]
    },
    bottomGrid: [
      { title: '🪧 Route 53 = 간판', body: '"쿠팡.com" 입력하면 실제 서버 IP로 안내. 도메인 구매도 AWS에서 가능' },
      { title: '🎪 ALB = 줄 서기 안내원', body: '손님(요청)을 여러 계산대(서버)로 균등 배분. 바쁜 서버엔 덜 보냄' },
      { title: '🗄 ElastiCache = 책상 위 메모', body: '자주 쓰는 정보를 DB 대신 메모리에서 즉시 꺼냄. 응답 속도 10~100배' },
      { title: '🛡 WAF = 보안 검색대', body: '악성 요청 자동 차단. SQL 인젝션, XSS 등 해킹 시도 걸러냄' },
    ]
  },

  // ══════════════════════════════════════════════════════
  // SECTION 11: 마무리
  // ══════════════════════════════════════════════════════
  {
    file: 'S22WellArchitected',
    master: 'M2',
    section: 'aws',
    title: 'Well-Architected Framework',
    subtitle: 'AWS가 수천 개 고객 아키텍처를 검토하며 정리한 설계 원칙 — 좋은 클라우드 아키텍처의 기준',
    cards: [
      { icon: 'lock', label: '원칙 1', title: '보안', body: 'IAM 최소 권한 원칙. 데이터 암호화. 네트워크 방어 다층화. 모든 API 호출을 CloudTrail로 감사.' },
      { icon: 'chart', label: '원칙 2', title: '신뢰성', body: '멀티 AZ 배포. 자동 장애 복구 설계. 정기 백업. 단일 장애점(SPOF) 없애기. 장애를 가정하고 설계.' },
      { icon: 'bolt', label: '원칙 3', title: '성능 효율', body: '워크로드에 맞는 인스턴스 선택. ElastiCache 캐싱. CloudFront 글로벌 분산. 필요 없는 리소스 정리.' },
      { icon: 'money', label: '원칙 4', title: '비용 최적화', body: '사용량 모니터링. 미사용 리소스 삭제. 예약 인스턴스, Savings Plan 활용. 비용 알람 설정.' }
    ]
  },

  {
    file: 'S23Cost',
    master: 'M2',
    section: 'aws',
    title: 'AWS 비용 — 쓴 만큼만 낸다',
    subtitle: '서버를 구매하는 것이 아니라 빌리는 것. 필요할 때 켜고, 필요 없으면 끄면 됩니다',
    cards: [
      { icon: 'meter', label: '온디맨드', title: '사용 시간만큼 지불', body: '초 단위 과금. 약정 없음. 언제든 시작, 종료. 테스트, 개발 환경에 적합. 가장 유연.' },
      { icon: 'calendar', label: '예약', title: '약정으로 최대 72% 할인', body: '1년 또는 3년 약정. 24시간 안정적으로 운영되는 서비스에 적합. 비용 예측 가능.' },
      { icon: 'target', label: '스팟', title: '여유 자원 최대 90% 절감', body: 'AWS 남은 자원 활용. 중단 가능성 있어 배치 작업에 적합. 중단 허용 아키텍처 필요.' },
      { icon: 'star', label: '프리 티어', title: '지금 무료로 시작', body: '신규 계정 12개월 무료. EC2 t2.micro 750시간, S3 5GB, RDS 750시간, Lambda 100만 호출/월 포함.' }
    ]
  },

  {
    file: 'S24Careers',
    master: 'M2',
    section: 'careers',
    title: 'AWS 관련 직업과 자격증',
    subtitle: '클라우드는 IT 전 분야의 기본 소양이 되었습니다 — 어떤 분야로 가든 클라우드 역량은 경쟁력',
    cards: [
      { icon: 'layers', label: '직군', title: '클라우드 아키텍트', body: '클라우드 인프라 전체 설계 담당. AWS Solutions Architect 자격증이 대표적. IT 직군 중 가장 높은 연봉 수준.' },
      { icon: 'tool', label: '직군', title: 'DevOps 엔지니어', body: '개발과 운영을 자동화. CI/CD 파이프라인 구축, 인프라 코드화(IaC). AWS DevOps Professional 자격증.' },
      { icon: 'shield', label: '직군', title: '클라우드 보안 전문가', body: '클라우드 보안 설계, 운영. AWS Security Specialty 자격증. 사이버 위협 증가로 수요 빠르게 증가.' },
      { icon: 'graduation', label: '자격증', title: '자격증 로드맵', body: 'Cloud Practitioner (입문, 90분) → Solutions Architect Associate → Professional. 단계적으로 취득.' }
    ]
  },

  {
    file: 'S25Resources',
    master: 'M6',
    section: 'resources',
    title: '지금 바로 시작하기',
    subtitle: '무료로 시작하고, 직접 만들어보면서 배우는 것이 가장 빠릅니다',
    cards: [
      {
        icon: 'star',
        title: 'AWS 프리 티어',
        body: '신규 계정 12개월 무료 서비스 제공',
        highlight: '신용카드 등록 후 즉시 시작',
        features: ['EC2 t2.micro 750시간/월', 'S3 5GB 스토리지', 'RDS 750시간/월', 'Lambda 100만 호출/월'],
        url: 'aws.amazon.com/free'
      },
      {
        icon: 'book',
        title: 'AWS 공식 교육',
        body: '무료 온라인 강의와 핸즈온 랩 제공',
        highlight: '한국어 콘텐츠 제공',
        features: ['AWS Skill Builder', 'AWS Training', 'AWS Workshops', 'Well-Architected Labs'],
        url: 'skillbuilder.aws'
      },
      {
        icon: 'tool',
        title: '핸즈온 실습',
        body: '단계별 따라하기 가이드로 직접 구성',
        highlight: '무료 튜토리얼 제공',
        features: ['VPC 직접 생성', 'EC2 웹서버 구성', 'S3 정적 웹사이트', 'RDS 연동 실습'],
        url: 'aws.amazon.com/getting-started'
      },
      {
        icon: 'trophy',
        title: 'AWS 자격증',
        body: '글로벌 인증으로 역량 증명',
        highlight: 'Cloud Practitioner 부터 시작',
        features: ['Cloud Practitioner 입문', 'Solutions Architect 실무', '공식 시험 가이드 무료', '연습 문제 제공'],
        url: 'aws.amazon.com/certification'
      }
    ]
  }

];

const OUT = require('path').join(__dirname, 'content/slides.json');
require('fs').writeFileSync(OUT, JSON.stringify(slides, null, 2), 'utf-8');
console.log('완료:', slides.length, '슬라이드');
slides.forEach((sl, i) => console.log(`${String(i + 1).padStart(2, '0')} ${sl.file} [${sl.master}] — ${sl.title}`));
