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
      {/* PDF Export Button */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={exportToPDF}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-500/80 hover:to-red-500/80 text-white shadow-lg pulse-glow"
          size="lg"
        >
          <Download className="w-4 h-4 mr-2" />
          PDF로 저장 (상세내용 포함)
        </Button>
        <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg border border-orange-500/20 text-white text-sm">
          <FileText className="w-4 h-4 inline mr-1" />
          20페이지
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
    </div>
  );
};

export default Index;