import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { usePDFExport } from "@/hooks/usePDFExport";
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
  const { exportToPDF } = usePDFExport();

  return (
    <div className="min-h-screen">
      {/* PDF Export Button - 단일 버튼으로 간소화 */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
        <Button
          onClick={exportToPDF}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-500/80 hover:to-red-500/80 text-white shadow-lg pulse-glow"
          size="lg"
        >
          <Download className="w-4 h-4 mr-2" />
          고품질 PDF 다운로드
        </Button>

        {/* 개선된 정보 배지 */}
        <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-orange-500/30 text-white text-sm">
          <div className="flex items-center justify-center gap-2 mb-1">
            <FileText className="w-4 h-4 text-orange-400" />
            <span className="font-medium">완전판 가이드북</span>
          </div>
          <div className="text-xs text-center space-y-1">
            <div className="text-orange-300">• 20개 핵심 페이지</div>
            <div className="text-orange-300">• 상세 설명 포함</div>
            <div className="text-orange-300">• 가로형 고해상도</div>
          </div>
        </div>
      </div>

      {/* Quick Navigation - 개선된 네비게이션 */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30">
          <div className="flex items-center gap-3 text-white text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>20개 페이지 무료 열람</span>
            </div>
            <div className="w-px h-4 bg-primary/30"></div>
            <div className="text-primary/80">스크롤하여 탐색</div>
          </div>
        </div>
      </div>

      {/* 페이지 진행률 표시 (선택사항) */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-30">
        <div className="bg-black/20 backdrop-blur-sm p-2 rounded-full border border-primary/20">
          <div className="flex flex-col gap-1">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="w-1 h-3 bg-primary/30 rounded-full hover:bg-primary/60 transition-colors cursor-pointer"
                onClick={() => {
                  const sections = document.querySelectorAll('section');
                  if (sections[i]) {
                    sections[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                title={`페이지 ${i + 1}로 이동`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="aws-content">
        <Page01Hero />
        <Page02CloudIntro />
        <Page03AmazonStory />
        <Page04AWSServices />
        <Page05EC2 />
        <Page06S3 />
        <Page07Database />
        <Page08Network />
        <Page09Security />
        <Page10AIML />
        <Page11Lambda />
        <Page12ECS />
        <Page13Serverless />
        <Page14DevOps />
        <Page15Analytics />
        <Page16IoT />
        <Page17Mobile />
        <Page18GameDev />
        <Page19Careers />
        <Page20Future />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white/80 mb-4">
            <h3 className="text-lg font-semibold mb-2">AWS 완전정복 가이드북</h3>
            <p className="text-sm">클라우드 컴퓨팅의 모든 것을 한 번에 학습하세요</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-white/60">
            <span>📚 20개 핵심 주제</span>
            <span>•</span>
            <span>🎯 실무 중심 설명</span>
            <span>•</span>
            <span>📄 PDF 다운로드 지원</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;