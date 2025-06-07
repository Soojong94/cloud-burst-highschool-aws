
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
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
        <Page04AWSServices />
        <Page05EC2 />
        <Page06S3 />
        <Page07Database />
        <Page08Network />
        <Page09Security />
        <Page10AIML />
        
        {/* Placeholder for remaining pages (11-20) - will be added in next iteration */}
        <div className="min-h-screen flex items-center justify-center bg-muted/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">나머지 10개 페이지가 곧 추가됩니다</h2>
            <p className="text-muted-foreground">
              Page 11-20은 다음 단계에서 추가하겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
