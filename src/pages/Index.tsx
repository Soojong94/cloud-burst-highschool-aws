// src/pages/Index.tsx 수정
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 모든 페이지 컴포넌트 import
import Page01Hero from "@/components/pages/Page01Hero";
import Page02CloudIntro from "@/components/pages/Page02CloudIntro";
import Page03AmazonStory from "@/components/pages/Page03AmazonStory";
import Page04AWSServices from "@/components/pages/Page04AWSServices";
import Page05EC2 from "@/components/pages/Page05EC2";
import Page06S3 from "@/components/pages/Page06S3";
import Page07Database from "@/components/pages/Page07Database";
import Page08Network from "@/components/pages/Page08Network";
import Page09Security from "@/components/pages/Page09Security";
import Page10AIML from "@/components/pages/Page10AIML";
import Page11Lambda from "@/components/pages/Page11Lambda";
import Page12ECS from "@/components/pages/Page12ECS";
import Page13Serverless from "@/components/pages/Page13Serverless";
import Page14DevOps from "@/components/pages/Page14DevOps";
import Page15Analytics from "@/components/pages/Page15Analytics";
import Page16IoT from "@/components/pages/Page16IoT";
import Page17Mobile from "@/components/pages/Page17Mobile";
import Page18GameDev from "@/components/pages/Page18GameDev";
import Page19Careers from "@/components/pages/Page19Careers";
import Page20Future from "@/components/pages/Page20Future";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { component: Page01Hero, title: "AWS 소개" },
    { component: Page02CloudIntro, title: "클라우드 컴퓨팅" },
    { component: Page03AmazonStory, title: "Amazon 스토리" },
    { component: Page04AWSServices, title: "AWS 서비스" },
    { component: Page05EC2, title: "EC2" },
    { component: Page06S3, title: "S3" },
    { component: Page07Database, title: "데이터베이스" },
    { component: Page08Network, title: "네트워킹" },
    { component: Page09Security, title: "보안" },
    { component: Page10AIML, title: "AI/ML" },
    { component: Page11Lambda, title: "Lambda" },
    { component: Page12ECS, title: "ECS/EKS" },
    { component: Page13Serverless, title: "서버리스" },
    { component: Page14DevOps, title: "DevOps" },
    { component: Page15Analytics, title: "분석" },
    { component: Page16IoT, title: "IoT" },
    { component: Page17Mobile, title: "모바일" },
    { component: Page18GameDev, title: "게임 개발" },
    { component: Page19Careers, title: "직업" },
    { component: Page20Future, title: "미래" }
  ];

  const CurrentPageComponent = pages[currentPage].component;

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 상단 네비게이션 */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => goToPage(0)}
            className="text-white/80 hover:text-white"
          >
            <Home className="w-4 h-4" />
          </Button>
          <span className="text-white/90 text-sm font-medium">
            {currentPage + 1} / {pages.length}
          </span>
          <span className="text-white/70 text-xs">
            {pages[currentPage].title}
          </span>
        </div>
      </div>

      {/* 좌측 페이지 인덱스 */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 bg-black/20 backdrop-blur-sm rounded-full p-3 border border-white/10">
        <div className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-2 h-8 rounded-full transition-all duration-300 ${index === currentPage
                  ? 'bg-primary shadow-lg shadow-primary/50'
                  : 'bg-white/20 hover:bg-white/40'
                }`}
              title={`${index + 1}. ${page.title}`}
            />
          ))}
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-screen"
        >
          <CurrentPageComponent />
        </motion.div>
      </AnimatePresence>

      {/* 하단 네비게이션 버튼 */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 bg-black/30 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            variant="ghost"
            size="sm"
            className="text-white/80 hover:text-white disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            이전
          </Button>

          <div className="w-px h-6 bg-white/20" />

          <Button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            variant="ghost"
            size="sm"
            className="text-white/80 hover:text-white disabled:opacity-30"
          >
            다음
            <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </div>

      {/* 키보드 네비게이션 */}
      <div className="fixed bottom-4 right-4 z-40 text-white/50 text-xs bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
        ← → 키로도 이동 가능
      </div>

      {/* 키보드 이벤트 리스너 */}
      <div
        className="fixed inset-0 z-0"
        onKeyDown={(e) => {
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
        }}
        tabIndex={0}
      />
    </div>
  );
};

export default Index;