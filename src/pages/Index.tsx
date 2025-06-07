
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { usePDFExport } from "@/hooks/usePDFExport";
import Page01Hero from "@/components/pages/Page01Hero";
import Page02CloudIntro from "@/components/pages/Page02CloudIntro";
import Page03AmazonStory from "@/components/pages/Page03AmazonStory";

const Index = () => {
  const { exportToPDF } = usePDFExport();

  return (
    <div className="min-h-screen">
      {/* PDF Export Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={exportToPDF}
          className="bg-primary hover:bg-primary/90 text-white shadow-lg"
          size="lg"
        >
          <Download className="w-4 h-4 mr-2" />
          PDF로 저장
        </Button>
      </div>

      {/* Main Content */}
      <div id="aws-content">
        <Page01Hero />
        <Page02CloudIntro />
        <Page03AmazonStory />
        
        {/* Placeholder for remaining pages - will be added in next iterations */}
        <div className="min-h-screen flex items-center justify-center bg-muted/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">더 많은 내용이 곧 추가됩니다</h2>
            <p className="text-muted-foreground">
              나머지 17개 페이지는 다음 단계에서 추가하겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
