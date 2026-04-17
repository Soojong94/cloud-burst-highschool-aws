# AWS 입문 강의 4시간 리뉴얼 계획서
> 작성일: 2026-04-17  
> 담당: 김수종 책임 / 으뜸정보기술

---

## 개요

| 항목 | 기존 | 변경 후 |
|------|------|---------|
| 강의 시간 | 2시간 | 4시간 |
| 페이지 수 | 50장 | 74장 |
| 대상 | 고등학생 | 클라우드 처음 접하는 모든 분 |
| 강조점 | 기술 서비스 나열 | 왜 클라우드인가 → 실제 사례 → 서비스 → 미래 |

---

## 변경 요약

| 구분 | 수량 |
|------|------|
| 유지 (내용 그대로) | 28페이지 |
| 수정 (내용 업데이트) | 4페이지 |
| 신규 작성 | 33페이지 |
| 삭제 | 9페이지 |
| **최종 합계** | **74페이지** |

---

## 삭제 목록 (9페이지)

| 파일 | 사유 |
|------|------|
| `Page03Detail1.tsx` | Amazon 타임라인 상세 → Page03AmazonTimeline 1장으로 압축 |
| `Page03Detail2.tsx` | 동일 |
| `Page03Detail3.tsx` | 동일 |
| `Page03Detail4.tsx` | 동일 |
| `Page03Detail5.tsx` | 동일 |
| `Page17Mobile.tsx` | 입문 과정에서 불필요 |
| `Page17MobileDetail.tsx` | 동일 |
| `Page18GameDev.tsx` | 입문 과정에서 불필요 |
| `Page18GameDevDetail.tsx` | 동일 |

---

## 수정 목록 (4페이지)

| 파일 | 변경 내용 |
|------|----------|
| `Page01Introduction.tsx` | 직함 "Solutions Architect" → "책임" |
| `Page03AmazonTimeline.tsx` | 5개 상세 페이지 내용을 1장에 압축 요약 |
| `Page20Future.tsx` | 포그 컴퓨팅, AI 컴퓨팅, 광주·전남 데이터센터 등 현실적 미래 내용으로 전면 개편 |
| `Page20FutureDetail.tsx` | 동일 방향으로 심화 내용 추가 |

---

## 최종 페이지 순서 (74장)

아래 번호는 Index.tsx `pages` 배열의 최종 순서입니다.

### [Module 0] 오프닝 (1~5장, 약 15분)

| # | 컴포넌트 | 제목 | 상태 |
|---|---------|------|------|
| 1 | `Page01Hero` | AWS 소개 | 유지 |
| 2 | `Page01Introduction` | 강사 소개 | **수정** |
| 3 | `PageCourseOverview` | 오늘 강의 개요 | **신규** |
| 4 | `PageCourseObjectives` | 학습 목표 | **신규** |
| 5 | `PageWhyCloud` | 왜 지금 클라우드인가 | **신규** |

### [Module 1] 클라우드 컴퓨팅 기초 (6~17장, 약 35분)

| # | 컴포넌트 | 제목 | 상태 |
|---|---------|------|------|
| 6 | `Page01CSPvsMSP` | CSP vs MSP | 유지 |
| 7 | `PageOnPremVsCloud` | 온프레미스 vs 클라우드 | **신규** |
| 8 | `Page02CloudIntro` | 클라우드 컴퓨팅이란? | 유지 |
| 9 | `Page02CloudModels` | 클라우드 서비스 모델 (IaaS/PaaS/SaaS) | 유지 |
| 10 | `PageCloudDeployment` | 클라우드 배포 모델 | **신규** |
| 11 | `PageCloudCharacteristics` | 클라우드 5대 특성 (NIST) | **신규** |
| 12 | `PageCloudBenefits` | 클라우드 도입 이점 | **신규** |
| 13 | `PageKoreanCases` | 한국 기업 클라우드 도입 사례 | **신규** |
| 14 | `PageCSPComparison` | 주요 CSP 비교 (AWS vs Azure vs GCP) | **신규** |
| 15 | `PageWhatCanYouDo` | 클라우드로 무엇을 할 수 있나 | **신규** |
| 16 | `PageIndustryUseCases` | 산업별 클라우드 활용 사례 | **신규** |
| 17 | `PageStartupToEnterprise` | 스타트업부터 대기업까지 | **신규** |

### [Module 2] AWS 소개 (18~24장, 약 20분)

| # | 컴포넌트 | 제목 | 상태 |
|---|---------|------|------|
| 18 | `Page03AmazonStory` | Amazon 스토리 | 유지 |
| 19 | `Page03AmazonTimeline` | Amazon→AWS 타임라인 (압축) | **수정** |
| 20 | `PageAWSGlobalInfra` | AWS 글로벌 인프라 (리전·AZ·엣지) | **신규** |
| 21 | `Page04AWSServices` | AWS 핵심 서비스 | 유지 |
| 22 | `Page04AWSCategories` | AWS 서비스 카테고리 | 유지 |
| 23 | `PageAWSConsole` | AWS Management Console | **신규** |
| 24 | `PageFreeLayer` | AWS Free Tier로 시작하기 | **신규** |

### [Module 3] 컴퓨팅 (25~36장, 약 35분)

| # | 컴포넌트 | 제목 | 상태 |
|---|---------|------|------|
| 25 | `Page05EC2` | EC2 | 유지 |
| 26 | `Page05EC2Detail1` | EC2 개요 | 유지 |
| 27 | `Page05EC2Detail2` | EC2 인스턴스 패밀리 | 유지 |
| 28 | `Page05EC2Detail3` | EC2 요금 모델 | 유지 |
| 29 | `PageAutoScaling` | Auto Scaling | **신규** |
| 30 | `PageELB` | Elastic Load Balancer | **신규** |
| 31 | `PageComputeScenario` | 컴퓨팅 활용 시나리오 | **신규** |
| 32 | `Page11Lambda` | Lambda (서버리스) | 유지 |
| 33 | `Page11LambdaDetail` | Lambda 활용 사례 | 유지 |
| 34 | `Page12ECS` | ECS/EKS (컨테이너) | 유지 |
| 35 | `Page12ECSDetail` | 컨테이너 서비스 가이드 | 유지 |
| 36 | `PageComputeGuide` | 컴퓨팅 서비스 선택 가이드 | **신규** |

### [Module 4] 스토리지 & 데이터베이스 (37~45장, 약 25분)

| # | 컴포넌트 | 제목 | 상태 |
|---|---------|------|------|
| 37 | `Page06S3` | S3 | 유지 |
| 38 | `Page06S3Detail` | S3 스토리지 클래스 | 유지 |
| 39 | `PageS3UseCases` | S3 활용 사례 | **신규** |
| 40 | `PageEBSEFS` | EBS & EFS (블록/파일 스토리지) | **신규** |
| 41 | `Page07Database` | 데이터베이스 | 유지 |
| 42 | `Page07DatabaseDetail` | 데이터베이스 선택 가이드 | 유지 |
| 43 | `PageRDSDetail` | RDS 상세 (Multi-AZ, Read Replica) | **신규** |
| 44 | `PageDynamoDBDetail` | DynamoDB 상세 | **신규** |
| 45 | `PageStorageGuide` | 스토리지 & DB 선택 가이드 | **신규** |

### [Module 5] 네트워킹 & 보안 (46~57장, 약 35분)

| # | 컴포넌트 | 제목 | 상태 |
|---|---------|------|------|
| 46 | `Page08Network` | 네트워킹 | 유지 |
| 47 | `Page08NetworkDetail` | VPC 아키텍처 | 유지 |
| 48 | `PageSubnet` | 서브넷 & 라우팅 테이블 | **신규** |
| 49 | `PageSGvsNACL` | 보안 그룹 vs NACL | **신규** |
| 50 | `PageCFRoute53` | CloudFront & Route 53 | **신규** |
| 51 | `Page09Security` | 보안 | 유지 |
| 52 | `Page09SecurityDetail` | IAM 상세 가이드 | 유지 |
| 53 | `PageSharedResponsibility` | 공동 책임 모델 | **신규** |
| 54 | `PageComplianceGovernance` | 컴플라이언스 & 거버넌스 | **신규** |
| 55 | `PageWellArchitected` | Well-Architected Framework | **신규** |
| 56 | `PageHighAvailability` | 고가용성 & 재해복구 설계 | **신규** |
| 57 | `Page3TierArch` | 실전 아키텍처: 3-Tier 웹앱 | **신규** |

### [Module 6] DevOps & 데이터 분석 (58~65장, 약 25분)

| # | 컴포넌트 | 제목 | 상태 |
|---|---------|------|------|
| 58 | `Page14DevOps` | DevOps | 유지 |
| 59 | `Page14DevOpsDetail` | DevOps 모범 사례 | 유지 |
| 60 | `PageCloudFormation` | CloudFormation (IaC) | **신규** |
| 61 | `PageCloudWatch` | CloudWatch 모니터링 | **신규** |
| 62 | `Page15Analytics` | 데이터 분석 | 유지 |
| 63 | `Page15AnalyticsDetail` | 데이터 분석 아키텍처 | 유지 |
| 64 | `PageDataLake` | 데이터 레이크 (S3+Glue+Athena) | **신규** |
| 65 | `Page16IoT` | IoT | 유지 |

### [Module 7] AI & 미래 기술 (66~72장, 약 20분)

| # | 컴포넌트 | 제목 | 상태 |
|---|---------|------|------|
| 66 | `Page10AIML` | AI/ML 서비스 | 유지 |
| 67 | `PageBedrock` | Amazon Bedrock (생성형 AI) | **신규** |
| 68 | `Page10AIMLDetail` | AI/ML 활용 사례 | 유지 |
| 69 | `Page13Serverless` | 서버리스 아키텍처 | 유지 |
| 70 | `Page13ServerlessDetail` | 서버리스 설계 패턴 | 유지 |
| 71 | `Page20Future` | 클라우드의 미래 | **전면 수정** |
| 72 | `Page20FutureDetail` | 미래 기술 상세 | **전면 수정** |

### [Module 8] 마무리 (73~74장, 약 10분)

| # | 컴포넌트 | 제목 | 상태 |
|---|---------|------|------|
| 73 | `PageCertRoadmap` | AWS 자격증 & 커리어 로드맵 | **신규** |
| 74 | `Page19Careers` | 클라우드 직업 | 유지 |
| 75 | `Page19CareersDetail` | 커리어 로드맵 | 유지 |
| 76 | `Page21Resources` | 바로 시작하기 | 유지 |
| 77 | `PageWrapUp` | 오늘의 정리 & 다음 단계 | **신규** |

> **최종 합계: 77페이지** (약 3.9시간 / 페이지당 약 3분 기준)

---

## 신규 페이지 상세 스펙

각 신규 페이지 작성 시 아래 스펙을 참조합니다.

### PageCourseOverview — 오늘 강의 개요
- **레이아웃:** 타임라인 카드 (Module 0~8, 각 예상 시간 표시)
- **색상:** `text-gradient-blue`, `bg-gradient-to-br from-background via-slate-900 to-blue-900/30`
- **카드 수:** 8개 (모듈별)

### PageCourseObjectives — 학습 목표
- **레이아웃:** 체크리스트 스타일 (6~8개 항목)
- **내용:** "이 강의를 마치면 할 수 있어요" 형식
- **아이콘:** CheckCircle, Target, Star

### PageWhyCloud — 왜 지금 클라우드인가
- **레이아웃:** 2열 (문제 → 해결) 대비 카드
- **내용:** 서버실 직접 구축 비용·시간 문제 → 클라우드 해결책
- **숫자 강조:** "서버 1대 구축 = 평균 3개월, 클라우드 = 5분"

### PageOnPremVsCloud — 온프레미스 vs 클라우드
- **레이아웃:** 2열 비교표
- **비교 항목:** 초기비용, 확장성, 유지보수, 재해복구, 글로벌 배포
- **시각:** 각 항목에 승패 표시

### PageCloudDeployment — 클라우드 배포 모델
- **레이아웃:** 3열 카드
- **내용:** 퍼블릭(AWS)/프라이빗(자체)/하이브리드
- **한국 사례:** 금융권 하이브리드 사례

### PageCloudCharacteristics — 클라우드 5대 특성 (NIST)
- **레이아웃:** 5카드 그리드
- **내용:** 온디맨드 셀프서비스 / 광대역 네트워크 접근 / 리소스 풀링 / 신속한 탄력성 / 측정 가능한 서비스

### PageCloudBenefits — 클라우드 도입 이점
- **레이아웃:** 좌우 2열 (TCO 절감 숫자 강조)
- **내용:** CAPEX→OPEX, 규모의 경제, 속도·민첩성, 글로벌 확장

### PageKoreanCases — 한국 기업 클라우드 도입 사례
- **레이아웃:** 3~4개 사례 카드
- **사례 후보:**
  - 카카오: 카카오톡 백엔드 AWS 이전
  - 삼성전자: SmartThings 플랫폼 AWS
  - 배달의민족: 트래픽 폭증 대응 Auto Scaling
  - 신한은행: 하이브리드 클라우드 도입
- **포맷:** 회사명 + 문제 + 해결 + 효과

### PageCSPComparison — AWS vs Azure vs GCP
- **레이아웃:** 3열 비교
- **항목:** 시장점유율, 강점, 주요 고객사, 한국 리전
- **결론:** "AWS가 왜 1위인가"

### PageWhatCanYouDo — 클라우드로 무엇을 할 수 있나
- **레이아웃:** 아이콘 그리드 (6~8개)
- **내용:** 웹서비스 운영, 빅데이터 분석, AI 모델 학습, 게임 서버, 스트리밍, IoT 데이터 수집, 재해복구, 글로벌 서비스
- **강조:** 개인/스타트업도 대기업 인프라 수준 사용 가능

### PageIndustryUseCases — 산업별 클라우드 활용
- **레이아웃:** 4열 카드 (산업별)
- **내용:** 금융(핀테크) / 의료(디지털 헬스) / 제조(스마트 팩토리) / 유통(이커머스)
- **한국 사례 포함**

### PageStartupToEnterprise — 스타트업부터 대기업까지
- **레이아웃:** 단계별 성장 다이어그램
- **내용:** 1인 스타트업 → Series A → 대기업 각 단계에서 AWS 활용 방식

### PageAWSGlobalInfra — AWS 글로벌 인프라
- **레이아웃:** 숫자 강조 + 지도 개념
- **내용:** 리전 34개, AZ 108개, 엣지 로케이션 600+, 한국 리전(서울) 소개
- **설명:** 리전 = 지리적 위치, AZ = 물리적 데이터센터

### PageAWSConsole — AWS Management Console
- **레이아웃:** 주요 기능 소개 카드
- **내용:** 서비스 검색, 최근 방문, 비용 대시보드, CloudShell, 리전 전환
- **팁:** 즐겨찾기 설정 방법

### PageFreeLayer — AWS Free Tier
- **레이아웃:** 3단 (무료 항목 리스트)
- **내용:** 12개월 무료 (EC2 t2.micro, S3 5GB, RDS 750h) / 항상 무료 (Lambda 100만건) / 단기 체험

### PageAutoScaling — Auto Scaling
- **레이아웃:** 전후 비교 다이어그램
- **내용:** 트래픽 급증 → 자동 확장, 트래픽 감소 → 자동 축소
- **사례:** 쿠팡 블랙프라이데이, 배민 점심시간

### PageELB — Elastic Load Balancer
- **레이아웃:** 다이어그램 + 타입 비교
- **내용:** ALB (L7, HTTP) / NLB (L4, TCP) / CLB (레거시)
- **시나리오:** 10만 요청 → LB → EC2 분산

### PageComputeScenario — 컴퓨팅 활용 시나리오
- **레이아웃:** 시나리오 카드 3개
- **내용:** ① 쇼핑몰 플래시세일 (EC2+ASG) ② 이미지 처리 파이프라인 (Lambda) ③ 마이크로서비스 앱 (ECS)

### PageComputeGuide — 컴퓨팅 서비스 선택 가이드
- **레이아웃:** 의사결정 트리 스타일
- **내용:** 항시 실행? → EC2 / 이벤트 기반? → Lambda / 컨테이너? → ECS/EKS

### PageS3UseCases — S3 활용 사례
- **레이아웃:** 카드 6개
- **내용:** 정적 웹호스팅, 미디어 스트리밍, 백업/아카이브, 데이터 레이크, 로그 수집, CDN 원본

### PageEBSEFS — EBS & EFS
- **레이아웃:** 2열 비교
- **내용:** EBS = 블록 스토리지 (EC2 전용 하드디스크), EFS = 파일 시스템 (여러 EC2 공유)

### PageRDSDetail — RDS 상세
- **레이아웃:** 기능별 카드
- **내용:** Multi-AZ 자동 장애조치, Read Replica, 자동 백업, 지원 엔진 (MySQL, PostgreSQL, Aurora)

### PageDynamoDBDetail — DynamoDB 상세
- **레이아웃:** 특징 카드 + vs RDS 비교
- **내용:** 키-값 구조, 10ms 이하 지연, 자동 확장, 서버리스, 글로벌 테이블

### PageStorageGuide — 스토리지 & DB 선택 가이드
- **레이아웃:** 의사결정 카드
- **내용:** 파일 저장 → S3 / 정형 DB → RDS / 비정형 → DynamoDB / EC2 디스크 → EBS

### PageSubnet — 서브넷 & 라우팅
- **레이아웃:** VPC 구조 다이어그램 (텍스트 기반)
- **내용:** 퍼블릭 서브넷 (인터넷 가능) vs 프라이빗 서브넷 (내부 전용), Internet Gateway, NAT Gateway

### PageSGvsNACL — 보안 그룹 vs NACL
- **레이아웃:** 2열 비교표
- **내용:** 보안그룹 (인스턴스 레벨, Stateful) vs NACL (서브넷 레벨, Stateless)

### PageCFRoute53 — CloudFront & Route 53
- **레이아웃:** 2카드
- **내용:** CloudFront = 전 세계 600+ 엣지 통한 CDN, Route53 = DNS + 헬스체크 + 라우팅 정책

### PageSharedResponsibility — 공동 책임 모델
- **레이아웃:** 상하 분리 다이어그램
- **내용:** AWS 책임 (물리 인프라, 하이퍼바이저) vs 고객 책임 (OS, 앱, 데이터, IAM)

### PageComplianceGovernance — 컴플라이언스 & 거버넌스
- **레이아웃:** 카드 4개
- **내용:** CloudTrail (감사 로그), AWS Config (규정 준수 평가), AWS Organizations, 한국 ISMS-P 관련 내용

### PageWellArchitected — Well-Architected Framework
- **레이아웃:** 6기둥 카드
- **내용:** 운영 우수성 / 보안 / 안정성 / 성능 효율성 / 비용 최적화 / 지속 가능성

### PageHighAvailability — 고가용성 & 재해복구
- **레이아웃:** 단계별 카드
- **내용:** 단일 AZ → 다중 AZ → 다중 리전, RTO/RPO 개념, 한국 DR 사례

### Page3TierArch — 실전 아키텍처: 3-Tier 웹앱
- **레이아웃:** 아키텍처 다이어그램 (텍스트+아이콘)
- **내용:** Route53 → CloudFront → ALB → EC2 ASG → RDS Multi-AZ / S3 / ElastiCache

### PageCloudFormation — CloudFormation (IaC)
- **레이아웃:** 비교 카드 + 순서도
- **내용:** 수동 설정 문제 → IaC 해결, YAML 템플릿 → 인프라 자동 생성, 버전 관리 가능

### PageCloudWatch — CloudWatch 모니터링
- **레이아웃:** 기능별 카드
- **내용:** 메트릭, 로그, 알람, 대시보드, EC2 CPU 알람 예시

### PageDataLake — 데이터 레이크
- **레이아웃:** 파이프라인 흐름도
- **내용:** 데이터 수집 (Kinesis) → 저장 (S3) → 카탈로그 (Glue) → 분석 (Athena) → 시각화 (QuickSight)

### PageBedrock — Amazon Bedrock (생성형 AI)
- **레이아웃:** 기능 카드 + 사용 사례
- **내용:** Claude, Titan, Stable Diffusion 등 파운데이션 모델 API, RAG 패턴, 기업 챗봇 사례

### PageCertRoadmap — AWS 자격증 & 커리어
- **레이아웃:** 단계별 로드맵 (하단→상단 피라미드)
- **내용:** CLF-C02 (Cloud Practitioner) → SAA-C03 (Solutions Architect) → 전문 자격증

### PageWrapUp — 오늘의 정리 & 다음 단계
- **레이아웃:** 요약 카드 + 행동 촉구
- **내용:** 오늘 배운 8가지 핵심, Free Tier 가입 안내, 추천 학습 자료

---

## Page20Future 전면 개편 스펙

**제목:** "클라우드의 다음 물결"

**카드 내용 (6개):**

1. **포그 컴퓨팅 (Fog Computing)**
   - 클라우드와 엣지 사이의 중간 레이어
   - 공장·병원·도시 현장에서 즉각 처리
   - AWS Outposts, Local Zones 연동

2. **엣지 AI 컴퓨팅**
   - 클라우드 없이 기기에서 직접 AI 추론
   - AWS Panorama (엣지 컴퓨터 비전)
   - 자율주행, 스마트 CCTV, 의료 영상

3. **생성형 AI 인프라**
   - Amazon Bedrock, SageMaker HyperPod
   - 기업 전용 LLM 구축 → RAG, Fine-tuning
   - AI 네이티브 아키텍처의 부상

4. **광주·전남 데이터센터 (한국 사례)**
   - 2024~2026년 국내 하이퍼스케일 DC 급증
   - 광주 AI 집적단지, 전남 신재생에너지 DC
   - 데이터 주권·탄소중립 클라우드 트렌드

5. **양자 컴퓨팅 (Amazon Braket)**
   - 클래식 컴퓨터로 불가능한 최적화 문제
   - 신약 개발, 암호화, 물류 최적화 가능성
   - 2030년대 상용화 예상

6. **클라우드 주권 & 탄소중립**
   - AWS GovCloud, Sovereign Cloud 확산
   - 2025년 AWS 100% 재생에너지 달성
   - ESG 규제 대응 클라우드 전략

---

## Page20FutureDetail 전면 개편 스펙

**제목:** "미래 기술 심층 분석"

**섹션:**
1. **포그 vs 엣지 vs 클라우드 연속성** — 어디서 처리할지 결정하는 기준
2. **AI 컴퓨팅 비용 혁신** — GPU 클라우드, Inferentia 칩, 비용 최적화
3. **지역 데이터센터 트렌드** — 광주·전남·나주 클러스터, 일자리 창출
4. **클라우드 2030 로드맵** — Gartner 예측, 퍼블릭 클라우드 지출 전망

---

## 구현 방식

### 파일 위치
```
src/components/pages/
├── (기존 파일 유지)
├── PageCourseOverview.tsx    ← 신규
├── PageCourseObjectives.tsx  ← 신규
├── PageWhyCloud.tsx          ← 신규
...
```

### 컴포넌트 템플릿

모든 신규 컴포넌트는 기존 스타일을 그대로 따릅니다:

```tsx
import { motion } from "framer-motion";
import { IconName, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageXxx = () => {
  const items = [
    { icon: IconName, title: "...", description: "...", color: "text-blue-400", cardStyle: "card-tech" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 블러 요소 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />

      <div className="container mx-auto px-8 relative z-10">
        {/* 헤더 */}
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">제목</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">부제</p>
        </motion.div>

        {/* 콘텐츠 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-N gap-8">
          {items.map((item, index) => (
            <motion.div key={item.title} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1, duration: 0.6 }} viewport={{ once: true }}>
              <Card className={`h-full ${item.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center">
                  <item.icon className={`w-12 h-12 mx-auto ${item.color} mb-4`} />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageXxx;
```

### 색상 그라디언트 팔레트
| 모듈 | 배경 그라디언트 | 강조 색상 | 텍스트 클래스 |
|------|--------------|---------|------------|
| Module 0 (오프닝) | `to-blue-900/30` | blue-400 | `text-gradient-blue` |
| Module 1 (클라우드 기초) | `to-green-900/30` | green-400 | `text-gradient-green` |
| Module 2 (AWS 소개) | `to-orange-900/30` | orange-400 | `text-gradient-orange` |
| Module 3 (컴퓨팅) | `to-cyan-900/30` | cyan-400 | `text-gradient-blue` |
| Module 4 (스토리지) | `to-emerald-900/30` | emerald-400 | `text-gradient-green` |
| Module 5 (네트워크/보안) | `to-red-900/30` | red-400 | `text-gradient-purple` |
| Module 6 (DevOps) | `to-indigo-900/30` | indigo-400 | `text-gradient-blue` |
| Module 7 (AI/미래) | `to-purple-900/30` | purple-400 | `text-gradient-purple` |
| Module 8 (마무리) | `to-blue-900/30` | blue-400 | `text-gradient-blue` |

### cardStyle 선택 기준
| cardStyle | 용도 |
|-----------|------|
| `card-tech` | 기술·인프라·컴퓨팅 |
| `card-neon` | 혁신·비용·성능 강조 |
| `card-data` | 데이터·분석·저장 |
| `card-ai` | AI·ML·미래 기술 |
| `card-security` | 보안·거버넌스·컴플라이언스 |

---

## Index.tsx 수정 사항

1. 상단 import 블록: Mobile, GameDev 2쌍 제거, 신규 33개 파일 import 추가
2. `pages` 배열: 위 순서대로 77개 항목 재구성

---

## 작업 순서 (권장)

1. **수정 먼저** — `Page01Introduction`, `Page03AmazonTimeline`, `Page20Future`, `Page20FutureDetail`
2. **Module 0~2 신규** — 오프닝, 클라우드 기초, AWS 소개 관련 페이지
3. **Module 3~5 신규** — 컴퓨팅, 스토리지, 네트워크 심화
4. **Module 6~8 신규** — DevOps, AI/미래, 마무리
5. **Index.tsx 최종 통합** — import + pages 배열 업데이트
6. **빌드 검증** — `npm run build` 오류 없는지 확인
