import { motion } from "framer-motion";
import { Cloud, Brain, Zap, MapPin, Atom, Leaf, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page20Future = () => {
  const trends = [
    {
      icon: Cloud,
      title: "포그 컴퓨팅",
      description: "클라우드와 엣지 사이의 중간 레이어. 공장·병원·도시 현장에서 즉각 처리. AWS Outposts·Local Zones로 현장 배포",
      color: "text-cyan-400",
      cardStyle: "card-tech"
    },
    {
      icon: Brain,
      title: "엣지 AI 컴퓨팅",
      description: "클라우드 없이 기기에서 직접 AI 추론. 자율주행·스마트 CCTV·의료 영상 분석. AWS Panorama·Greengrass 활용",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Zap,
      title: "생성형 AI 인프라",
      description: "Amazon Bedrock으로 Claude·Titan 등 파운데이션 모델 API 제공. 기업 전용 LLM·RAG 아키텍처 급성장",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: MapPin,
      title: "광주·전남 데이터센터",
      description: "광주 AI 집적단지·전남 신재생에너지 DC 구축. 데이터 주권·탄소중립 클라우드. 지역 IT 인재 수요 급증",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Atom,
      title: "양자 컴퓨팅",
      description: "Amazon Braket으로 양자 알고리즘 실험. 신약 개발·물류 최적화·암호화 혁신. 2030년대 상용화 전망",
      color: "text-orange-400",
      cardStyle: "card-tech"
    },
    {
      icon: Leaf,
      title: "클라우드 주권 & 탄소중립",
      description: "AWS 2025년 100% 재생에너지 달성. Sovereign Cloud 확산. ESG 규제 대응 클라우드 전략 필수화",
      color: "text-emerald-400",
      cardStyle: "card-data"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-purple-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-32 left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-purple title-main title-section">
              클라우드의 다음 물결
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
            포그 컴퓨팅, 엣지 AI, 생성형 AI — 클라우드가 나아가는 6가지 방향
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trends.map((trend, index) => (
            <motion.div
              key={trend.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${trend.cardStyle} hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <trend.icon className={`w-12 h-12 mx-auto ${trend.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-lg">{trend.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">{trend.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page20Future;
