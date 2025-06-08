import { motion } from "framer-motion";
import { Brain, Camera, FileText, Code, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page10AIML = () => {
  const services = [
    {
      icon: Brain,
      title: "SageMaker",
      description: "기계 학습 플랫폼",
      detail: "모델 구축, 훈련, 배포의 전체 ML 워크플로우",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Camera,
      title: "Rekognition",
      description: "이미지 및 비디오 분석",
      detail: "얼굴 인식, 객체 탐지, 텍스트 추출",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: FileText,
      title: "Comprehend",
      description: "자연어 처리",
      detail: "감정 분석, 키워드 추출, 언어 감지",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Code,
      title: "CodeWhisperer",
      description: "AI 코드 어시스턴트",
      detail: "실시간 코드 제안 및 보안 스캔",
      color: "text-orange-400",
      cardStyle: "card-neon"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-purple-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-purple title-main title-section">
              AWS AI/ML 서비스
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
            인공지능과 머신러닝을 누구나 쉽게 활용할 수 있는 다양한 서비스
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${service.cardStyle} hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <service.icon className={`w-12 h-12 mx-auto ${service.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-2">{service.description}</p>
                  <p className="text-sm text-muted-foreground text-center">{service.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page10AIML;