import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 모든 페이지 컴포넌트 import
import Page01Hero from "@/components/pages/Page01Hero";
import Page01Introduction from "@/components/pages/Page01Introduction";
import Page01CSPvsMSP from "@/components/pages/Page01CSPvsMSP";
import Page02CloudIntro from "@/components/pages/Page02CloudIntro";
import Page02CloudModels from "@/components/pages/Page02CloudModels";
import Page03AmazonStory from "@/components/pages/Page03AmazonStory";
import Page03AmazonTimeline from "@/components/pages/Page03AmazonTimeline";
import Page03Detail1 from "@/components/pages/Page03Detail1";
import Page03Detail2 from "@/components/pages/Page03Detail2";
import Page03Detail3 from "@/components/pages/Page03Detail3";
import Page03Detail4 from "@/components/pages/Page03Detail4";
import Page03Detail5 from "@/components/pages/Page03Detail5";
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
import Page17Mobile from "@/components/pages/Page17Mobile";
import Page17MobileDetail from "@/components/pages/Page17MobileDetail";
import Page18GameDev from "@/components/pages/Page18GameDev";
import Page18GameDevDetail from "@/components/pages/Page18GameDevDetail";
import Page19Careers from "@/components/pages/Page19Careers";
import Page19CareersDetail from "@/components/pages/Page19CareersDetail";
import Page20Future from "@/components/pages/Page20Future";
import Page20FutureDetail from "@/components/pages/Page20FutureDetail";
import Page21Resources from "@/components/pages/Page21Resources";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { component: Page01Hero, title: "AWS 소개" },
    { component: Page01Introduction, title: "강사 소개" },
    { component: Page01CSPvsMSP, title: "CSP vs MSP" },
    { component: Page02CloudIntro, title: "클라우드 컴퓨팅" },
    { component: Page02CloudModels, title: "클라우드 서비스 모델" },
    { component: Page03AmazonStory, title: "Amazon 스토리" },
    { component: Page03AmazonTimeline, title: "Amazon 타임라인" },
    { component: Page03Detail1, title: "1994-1997: 온라인 서점의 탄생" },
    { component: Page03Detail2, title: "1998-2002: 카테고리 확장과 도전" },
    { component: Page03Detail3, title: "2003-2006: AWS의 기반 구축" },
    { component: Page03Detail4, title: "2007-2015: 클라우드 혁명의 선도" },
    { component: Page03Detail5, title: "2016-현재: AI와 ML의 대중화" },
    { component: Page04AWSServices, title: "AWS 핵심 서비스" },
    { component: Page04AWSCategories, title: "AWS 서비스 카테고리" },
    { component: Page05EC2, title: "EC2" },
    { component: Page05EC2Detail1, title: "EC2 개요" },
    { component: Page05EC2Detail2, title: "EC2 인스턴스 패밀리" },
    { component: Page05EC2Detail3, title: "EC2 요금 모델" },
    { component: Page06S3, title: "S3" },
    { component: Page06S3Detail, title: "S3 스토리지 클래스" },
    { component: Page07Database, title: "데이터베이스" },
    { component: Page07DatabaseDetail, title: "데이터베이스 선택 가이드" },
    { component: Page08Network, title: "네트워킹" },
    { component: Page08NetworkDetail, title: "네트워킹 아키텍처" },
    { component: Page09Security, title: "보안" },
    { component: Page09SecurityDetail, title: "보안 상세 가이드" },
    { component: Page10AIML, title: "AI/ML" },
    { component: Page10AIMLDetail, title: "AI/ML 서비스 가이드" },
    { component: Page11Lambda, title: "Lambda" },
    { component: Page11LambdaDetail, title: "Lambda 활용 사례" },
    { component: Page12ECS, title: "ECS/EKS" },
    { component: Page12ECSDetail, title: "컨테이너 서비스 가이드" },
    { component: Page13Serverless, title: "서버리스" },
    { component: Page13ServerlessDetail, title: "서버리스 아키텍처" },
    { component: Page14DevOps, title: "DevOps" },
    { component: Page14DevOpsDetail, title: "DevOps 모범 사례" },
    { component: Page15Analytics, title: "분석" },
    { component: Page15AnalyticsDetail, title: "데이터 분석 아키텍처" },
    { component: Page16IoT, title: "IoT" },
    { component: Page16IoTDetail, title: "IoT 솔루션 가이드" },
    { component: Page17Mobile, title: "모바일" },
    { component: Page17MobileDetail, title: "모바일 앱 개발 가이드" },
    { component: Page18GameDev, title: "게임 개발" },
    { component: Page18GameDevDetail, title: "게임 개발 아키텍처" },
    { component: Page19Careers, title: "직업" },
    { component: Page19CareersDetail, title: "커리어 로드맵" },
    { component: Page20Future, title: "미래" },
    { component: Page20FutureDetail, title: "클라우드의 미래" },
    { component: Page21Resources, title: "바로 시작하기" }
  ];

  const CurrentPageComponent = pages[currentPage].component;

  // 모바일에서 페이지 변경시 맨 위로 스크롤
  const scrollToTop = () => {
    if (window.innerWidth <= 768) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    scrollToTop();
  };

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevPage();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToPage(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToPage(pages.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  // 터치 스와이프 처리 (모바일용)
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY) return;

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;

      const deltaX = startX - endX;
      const deltaY = startY - endY;

      // 수직 스크롤이 아닌 수평 스와이프인 경우에만 페이지 전환
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          nextPage(); // 왼쪽으로 스와이프 = 다음 페이지
        } else {
          prevPage(); // 오른쪽으로 스와이프 = 이전 페이지
        }
      }

      startX = 0;
      startY = 0;
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage]);

  // 페이지 변경 시 스크롤 위치 초기화
  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  return (
    <div className="w-full min-h-screen relative md:w-screen md:h-screen md:overflow-hidden">
      {/* 우측 상단 페이지 정보 */}
      <div className="fixed top-2 right-2 z-50 bg-black/30 backdrop-blur-md rounded-full px-3 py-1 border border-white/20 md:top-4 md:right-4 md:px-4 md:py-2">
        <div className="flex items-center gap-2 md:gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => goToPage(0)}
            className="text-white/80 hover:text-white p-1 h-auto w-auto"
          >
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

      {/* 좌측 하단 네비게이션 버튼들 */}
      <div className="fixed bottom-2 left-2 z-50 flex gap-1 md:bottom-4 md:left-4 md:gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevPage}
          disabled={currentPage === 0}
          className="bg-black/30 backdrop-blur-md border border-white/20 text-white/80 hover:text-white disabled:opacity-50 h-8 w-8 p-0 md:h-auto md:w-auto md:p-2"
        >
          <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="bg-black/30 backdrop-blur-md border border-white/20 text-white/80 hover:text-white disabled:opacity-50 h-8 w-8 p-0 md:h-auto md:w-auto md:p-2"
        >
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