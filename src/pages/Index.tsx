import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 기존 pages/ 컴포넌트
import Page01Hero from "@/components/pages/Page01Hero";
import Page01Introduction from "@/components/pages/Page01Introduction";
import Page01CSPvsMSP from "@/components/pages/Page01CSPvsMSP";
import Page02CloudIntro from "@/components/pages/Page02CloudIntro";
import Page02CloudModels from "@/components/pages/Page02CloudModels";
import Page03AmazonStory from "@/components/pages/Page03AmazonStory";
import Page03AmazonTimeline from "@/components/pages/Page03AmazonTimeline";
import Page04AWSServices from "@/components/pages/Page04AWSServices";
import Page04AWSCategories from "@/components/pages/Page04AWSCategories";
import Page05EC2 from "@/components/pages/Page05EC2";
import Page05EC2Detail1 from "@/components/pages/Page05EC2Detail1";
import Page05EC2Detail2 from "@/components/pages/Page05EC2Detail2";
import Page05EC2Detail3 from "@/components/pages/Page05EC2Detail3";
import Page06S3 from "@/components/pages/Page06S3";
import Page06S3Detail from "@/components/pages/Page06S3Detail";
import Page07Database from "@/components/pages/Page07Database";
import Page07DatabaseDetail from "@/components/pages/Page07DatabaseDetail";
import Page08Network from "@/components/pages/Page08Network";
import Page08NetworkDetail from "@/components/pages/Page08NetworkDetail";
import Page09Security from "@/components/pages/Page09Security";
import Page09SecurityDetail from "@/components/pages/Page09SecurityDetail";
import Page10AIML from "@/components/pages/Page10AIML";
import Page10AIMLDetail from "@/components/pages/Page10AIMLDetail";
import Page11Lambda from "@/components/pages/Page11Lambda";
import Page11LambdaDetail from "@/components/pages/Page11LambdaDetail";
import Page12ECS from "@/components/pages/Page12ECS";
import Page12ECSDetail from "@/components/pages/Page12ECSDetail";
import Page13Serverless from "@/components/pages/Page13Serverless";
import Page13ServerlessDetail from "@/components/pages/Page13ServerlessDetail";
import Page14DevOps from "@/components/pages/Page14DevOps";
import Page14DevOpsDetail from "@/components/pages/Page14DevOpsDetail";
import Page15Analytics from "@/components/pages/Page15Analytics";
import Page15AnalyticsDetail from "@/components/pages/Page15AnalyticsDetail";
import Page16IoT from "@/components/pages/Page16IoT";
import Page16IoTDetail from "@/components/pages/Page16IoTDetail";
import Page19Careers from "@/components/pages/Page19Careers";
import Page19CareersDetail from "@/components/pages/Page19CareersDetail";
import Page20Future from "@/components/pages/Page20Future";
import Page20FutureDetail from "@/components/pages/Page20FutureDetail";
import Page21Resources from "@/components/pages/Page21Resources";

// 신규 pages2/ 컴포넌트
import PageCourseOverview from "@/components/pages2/PageCourseOverview";
import PageCourseObjectives from "@/components/pages2/PageCourseObjectives";
import PageWhyCloud from "@/components/pages2/PageWhyCloud";
import PageOnPremVsCloud from "@/components/pages2/PageOnPremVsCloud";
import PageCloudDeployment from "@/components/pages2/PageCloudDeployment";
import PageCloudCharacteristics from "@/components/pages2/PageCloudCharacteristics";
import PageCloudBenefits from "@/components/pages2/PageCloudBenefits";
import PageKoreanCases from "@/components/pages2/PageKoreanCases";
import PageCSPComparison from "@/components/pages2/PageCSPComparison";
import PageWhatCanYouDo from "@/components/pages2/PageWhatCanYouDo";
import PageIndustryUseCases from "@/components/pages2/PageIndustryUseCases";
import PageStartupToEnterprise from "@/components/pages2/PageStartupToEnterprise";
import PageAWSGlobalInfra from "@/components/pages2/PageAWSGlobalInfra";
import PageAWSConsole from "@/components/pages2/PageAWSConsole";
import PageFreeLayer from "@/components/pages2/PageFreeLayer";
import PageAutoScaling from "@/components/pages2/PageAutoScaling";
import PageELB from "@/components/pages2/PageELB";
import PageComputeGuide from "@/components/pages2/PageComputeGuide";
import PageS3UseCases from "@/components/pages2/PageS3UseCases";
import PageEBSEFS from "@/components/pages2/PageEBSEFS";
import PageRDSDetail from "@/components/pages2/PageRDSDetail";
import PageDynamoDBDetail from "@/components/pages2/PageDynamoDBDetail";
import PageStorageGuide from "@/components/pages2/PageStorageGuide";
import PageSubnet from "@/components/pages2/PageSubnet";
import PageSGvsNACL from "@/components/pages2/PageSGvsNACL";
import PageCFRoute53 from "@/components/pages2/PageCFRoute53";
import PageSharedResponsibility from "@/components/pages2/PageSharedResponsibility";
import PageWellArchitected from "@/components/pages2/PageWellArchitected";
import PageHighAvailability from "@/components/pages2/PageHighAvailability";
import Page3TierArch from "@/components/pages2/Page3TierArch";
import PageCloudFormation from "@/components/pages2/PageCloudFormation";
import PageCloudWatch from "@/components/pages2/PageCloudWatch";
import PageDataLake from "@/components/pages2/PageDataLake";
import PageBedrock from "@/components/pages2/PageBedrock";
import PageCertRoadmap from "@/components/pages2/PageCertRoadmap";
import PageWrapUp from "@/components/pages2/PageWrapUp";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // ── Module 0: 오프닝 ──────────────────────────────────────
    { component: Page01Hero,           title: "AWS 소개" },
    { component: Page01Introduction,   title: "강사 소개" },
    { component: PageCourseOverview,   title: "오늘 강의 개요" },
    { component: PageCourseObjectives, title: "학습 목표" },
    { component: PageWhyCloud,         title: "왜 지금 클라우드인가" },

    // ── Module 1: 클라우드 컴퓨팅 기초 ───────────────────────
    { component: Page01CSPvsMSP,           title: "CSP vs MSP" },
    { component: PageOnPremVsCloud,        title: "온프레미스 vs 클라우드" },
    { component: Page02CloudIntro,         title: "클라우드 컴퓨팅이란?" },
    { component: Page02CloudModels,        title: "클라우드 서비스 모델" },
    { component: PageCloudDeployment,      title: "클라우드 배포 모델" },
    { component: PageCloudCharacteristics, title: "클라우드 5대 특성" },
    { component: PageCloudBenefits,        title: "클라우드 도입 이점" },
    { component: PageKoreanCases,          title: "한국 기업 클라우드 사례" },
    { component: PageCSPComparison,        title: "주요 CSP 비교" },
    { component: PageWhatCanYouDo,         title: "클라우드로 무엇을 할 수 있나" },
    { component: PageIndustryUseCases,     title: "산업별 클라우드 활용" },
    { component: PageStartupToEnterprise,  title: "스타트업부터 대기업까지" },

    // ── Module 2: AWS 소개 ───────────────────────────────────
    { component: Page03AmazonStory,    title: "Amazon 스토리" },
    { component: Page03AmazonTimeline, title: "Amazon→AWS 타임라인" },
    { component: PageAWSGlobalInfra,   title: "AWS 글로벌 인프라" },
    { component: Page04AWSServices,    title: "AWS 핵심 서비스" },
    { component: Page04AWSCategories,  title: "AWS 서비스 카테고리" },
    { component: PageAWSConsole,       title: "AWS Management Console" },
    { component: PageFreeLayer,        title: "AWS Free Tier" },

    // ── Module 3: 컴퓨팅 ─────────────────────────────────────
    { component: Page05EC2,          title: "EC2" },
    { component: Page05EC2Detail1,   title: "EC2 개요" },
    { component: Page05EC2Detail2,   title: "EC2 인스턴스 패밀리" },
    { component: Page05EC2Detail3,   title: "EC2 요금 모델" },
    { component: PageAutoScaling,    title: "Auto Scaling" },
    { component: PageELB,            title: "Elastic Load Balancer" },
    { component: Page11Lambda,       title: "Lambda" },
    { component: Page11LambdaDetail, title: "Lambda 활용 사례" },
    { component: Page12ECS,          title: "ECS/EKS" },
    { component: Page12ECSDetail,    title: "컨테이너 서비스 가이드" },
    { component: PageComputeGuide,   title: "컴퓨팅 서비스 선택 가이드" },

    // ── Module 4: 스토리지 & 데이터베이스 ───────────────────
    { component: Page06S3,            title: "S3" },
    { component: Page06S3Detail,      title: "S3 스토리지 클래스" },
    { component: PageS3UseCases,      title: "S3 활용 사례" },
    { component: PageEBSEFS,          title: "EBS & EFS" },
    { component: Page07Database,      title: "데이터베이스" },
    { component: Page07DatabaseDetail, title: "데이터베이스 선택 가이드" },
    { component: PageRDSDetail,        title: "RDS 상세" },
    { component: PageDynamoDBDetail,   title: "DynamoDB 상세" },
    { component: PageStorageGuide,     title: "스토리지 & DB 선택 가이드" },

    // ── Module 5: 네트워킹 & 보안 ───────────────────────────
    { component: Page08Network,           title: "네트워킹" },
    { component: Page08NetworkDetail,     title: "VPC 아키텍처" },
    { component: PageSubnet,              title: "서브넷 & 라우팅" },
    { component: PageSGvsNACL,            title: "보안 그룹 vs NACL" },
    { component: PageCFRoute53,           title: "CloudFront & Route 53" },
    { component: Page09Security,          title: "보안" },
    { component: Page09SecurityDetail,    title: "IAM 상세 가이드" },
    { component: PageSharedResponsibility, title: "공동 책임 모델" },
    { component: PageWellArchitected,     title: "Well-Architected Framework" },
    { component: PageHighAvailability,    title: "고가용성 & 재해복구" },
    { component: Page3TierArch,           title: "실전 아키텍처: 3-Tier 웹앱" },

    // ── Module 6: DevOps & 데이터 분석 ──────────────────────
    { component: Page14DevOps,         title: "DevOps" },
    { component: Page14DevOpsDetail,   title: "DevOps 모범 사례" },
    { component: PageCloudFormation,   title: "CloudFormation (IaC)" },
    { component: PageCloudWatch,       title: "CloudWatch 모니터링" },
    { component: Page15Analytics,      title: "데이터 분석" },
    { component: Page15AnalyticsDetail, title: "데이터 분석 아키텍처" },
    { component: PageDataLake,         title: "데이터 레이크" },
    { component: Page16IoT,            title: "IoT" },
    { component: Page16IoTDetail,      title: "IoT 솔루션 가이드" },

    // ── Module 7: AI & 미래 기술 ─────────────────────────────
    { component: Page10AIML,       title: "AI/ML 서비스" },
    { component: PageBedrock,      title: "Amazon Bedrock" },
    { component: Page10AIMLDetail, title: "AI/ML 활용 사례" },
    { component: Page13Serverless,       title: "서버리스 아키텍처" },
    { component: Page13ServerlessDetail, title: "서버리스 설계 패턴" },
    { component: Page20Future,       title: "클라우드의 다음 물결" },
    { component: Page20FutureDetail, title: "미래 기술 심층 분석" },

    // ── Module 8: 마무리 ─────────────────────────────────────
    { component: PageCertRoadmap,    title: "AWS 자격증 로드맵" },
    { component: Page19Careers,      title: "클라우드 직업" },
    { component: Page19CareersDetail, title: "커리어 로드맵" },
    { component: Page21Resources,    title: "바로 시작하기" },
    { component: PageWrapUp,         title: "오늘의 정리 & Q&A" },
  ];

  const CurrentPageComponent = pages[currentPage].component;

  const forceScrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    });
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const goToPage = (pageIndex: number) => setCurrentPage(pageIndex);

  useEffect(() => {
    forceScrollToTop();
    const timeoutId = setTimeout(forceScrollToTop, 100);
    return () => clearTimeout(timeoutId);
  }, [currentPage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextPage(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevPage(); }
      else if (e.key === 'Home') { e.preventDefault(); goToPage(0); }
      else if (e.key === 'End') { e.preventDefault(); goToPage(pages.length - 1); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, pages.length]);

  useEffect(() => {
    let startX = 0;
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY) return;
      const deltaX = startX - e.changedTouches[0].clientX;
      const deltaY = startY - e.changedTouches[0].clientY;
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) nextPage(); else prevPage();
      }
      startX = 0; startY = 0;
    };
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage]);

  return (
    <div className="w-full min-h-screen relative md:w-screen md:h-screen md:overflow-hidden">
      {/* 우측 상단 페이지 정보 */}
      <div className="fixed top-2 right-2 z-50 bg-black/30 backdrop-blur-md rounded-full px-3 py-1 border border-white/20 md:top-4 md:right-4 md:px-4 md:py-2">
        <div className="flex items-center gap-2 md:gap-3">
          <Button variant="ghost" size="sm" onClick={() => goToPage(0)} className="text-white/80 hover:text-white p-1 h-auto w-auto">
            <Home className="w-3 h-3 md:w-4 md:h-4" />
          </Button>
          <span className="text-white/90 text-xs md:text-sm font-medium">
            {currentPage + 1} / {pages.length}
          </span>
          <span className="text-white/70 text-xs max-w-32 md:max-w-48 truncate hidden sm:block">
            {pages[currentPage].title}
          </span>
        </div>
      </div>

      {/* 좌측 하단 네비게이션 */}
      <div className="fixed bottom-2 left-2 z-50 flex gap-1 md:bottom-4 md:left-4 md:gap-2">
        <Button variant="ghost" size="sm" onClick={prevPage} disabled={currentPage === 0}
          className="bg-black/30 backdrop-blur-md border border-white/20 text-white/80 hover:text-white disabled:opacity-50 h-8 w-8 p-0 md:h-auto md:w-auto md:p-2">
          <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={nextPage} disabled={currentPage === pages.length - 1}
          className="bg-black/30 backdrop-blur-md border border-white/20 text-white/80 hover:text-white disabled:opacity-50 h-8 w-8 p-0 md:h-auto md:w-auto md:p-2">
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
        </Button>
      </div>

      {/* 메인 콘텐츠 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full"
        >
          <CurrentPageComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
