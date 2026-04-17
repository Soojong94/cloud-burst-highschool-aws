import { motion } from "framer-motion";
import { Brain, MessageSquare, Image, FileSearch, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageBedrock = () => {
  const capabilities = [
    {
      icon: MessageSquare,
      title: "텍스트 생성",
      description: "Claude·Titan Text로 고객 지원 챗봇, 문서 요약, 코드 생성, 번역 등 다양한 텍스트 작업 자동화",
      model: "Claude 3.5 Sonnet, Titan Text",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Image,
      title: "이미지 생성",
      description: "Stable Diffusion·Titan Image로 마케팅 이미지, 제품 사진, 디자인 시안을 텍스트 설명만으로 생성",
      model: "Stable Diffusion XL, Titan Image",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: FileSearch,
      title: "RAG (지식 검색)",
      description: "기업 내부 문서·DB를 연결해 환각 없이 정확한 답변. 사내 지식 검색, 법률·의료 문서 Q&A에 활용",
      model: "Bedrock Knowledge Bases",
      color: "text-cyan-400",
      cardStyle: "card-data"
    },
    {
      icon: Brain,
      title: "Fine-tuning",
      description: "자사 데이터로 파운데이션 모델을 커스터마이즈. 브랜드 톤 학습, 특화 도메인 정확도 향상",
      model: "Titan, Llama 2 지원",
      color: "text-orange-400",
      cardStyle: "card-neon"
    },
  ];

  const models = [
    { name: "Claude 3.5 Sonnet", maker: "Anthropic", strength: "추론·분석·코딩" },
    { name: "Titan Text / Image", maker: "Amazon", strength: "범용·비용 효율" },
    { name: "Llama 3", maker: "Meta", strength: "오픈소스 유연성" },
    { name: "Stable Diffusion XL", maker: "Stability AI", strength: "고품질 이미지" },
    { name: "Mistral", maker: "Mistral AI", strength: "유럽어·다국어" },
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
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

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
              Amazon Bedrock
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
            Claude·Titan·Llama 등 최고의 AI 모델을 API 하나로 — GPU 없이 생성형 AI 서비스 구축
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${cap.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center">
                  <cap.icon className={`w-12 h-12 mx-auto ${cap.color} mb-4`} />
                  <CardTitle className="text-lg">{cap.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-xs text-center leading-relaxed">{cap.description}</p>
                  <div className="bg-black/20 rounded-xl p-2">
                    <p className={`text-xs text-center font-mono ${cap.color}`}>{cap.model}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-purple-500/20"
        >
          <h3 className="text-purple-400 font-bold mb-4 text-center">Bedrock에서 사용 가능한 모델</h3>
          <div className="grid md:grid-cols-5 gap-3">
            {models.map(m => (
              <div key={m.name} className="bg-purple-900/10 rounded-xl p-3 text-center">
                <p className="text-purple-400 text-xs font-bold mb-1">{m.name}</p>
                <p className="text-slate-400 text-xs mb-1">{m.maker}</p>
                <p className="text-white text-xs">{m.strength}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            API 한 줄 변경으로 모델 교체 가능 — 벤더 종속 없음
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageBedrock;
