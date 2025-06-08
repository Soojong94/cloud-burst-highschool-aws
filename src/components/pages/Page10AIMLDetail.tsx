import { motion } from "framer-motion";
import { Brain, Eye, MessageSquare, Sparkles, Lightbulb } from "lucide-react";

const Page10AIMLDetail = () => {
  const aiCategories = [
    {
      icon: Brain,
      title: "머신러닝 플랫폼",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      services: ["SageMaker", "Bedrock", "Textract", "Forecast"],
      description: "완전 관리형 ML 개발 환경",
      useCases: ["예측 모델링", "이상 탐지", "추천 시스템", "수요 예측"]
    },
    {
      icon: Eye,
      title: "컴퓨터 비전",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      services: ["Rekognition", "Lookout for Vision", "Panorama"],
      description: "이미지 및 비디오 분석",
      useCases: ["얼굴 인식", "객체 탐지", "품질 검사", "보안 시스템"]
    },
    {
      icon: MessageSquare,
      title: "자연어 처리",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      services: ["Comprehend", "Translate", "Polly", "Transcribe"],
      description: "텍스트 및 음성 처리",
      useCases: ["감정 분석", "번역", "음성 변환", "채팅봇"]
    },
    {
      icon: Lightbulb,
      title: "생성형 AI",
      color: "text-orange-400",
      bgColor: "from-orange-900/20 to-orange-800/20",
      services: ["Bedrock", "Q", "CodeWhisperer", "Titan"],
      description: "대화형 AI 및 콘텐츠 생성",
      useCases: ["코드 생성", "문서 작성", "이미지 생성", "질의응답"]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-purple-900/30 bg-mesh-gradient relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-purple title-main">
              AI/ML 서비스 카테고리
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-orange-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${category.bgColor} p-4 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <category.icon className={`w-12 h-12 ${category.color} mx-auto mb-3`} />
                <h3 className={`text-lg font-bold ${category.color} mb-2`}>{category.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">주요 서비스</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {category.services.map((service, i) => (
                      <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                        <span className="text-white text-xs">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">활용 사례</h4>
                  <div className="space-y-1">
                    {category.useCases.map((useCase, i) => (
                      <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                        <span className="text-muted-foreground text-xs">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 AI 동향 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-4 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-3 text-center text-gradient-orange">AI 기술 트렌드</h3>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <span className="text-purple-400 font-semibold">AutoML</span>
              <p className="text-muted-foreground text-xs">자동화된 모델 개발</p>
            </div>
            <div className="text-center">
              <span className="text-blue-400 font-semibold">멀티모달</span>
              <p className="text-muted-foreground text-xs">이미지+텍스트 통합</p>
            </div>
            <div className="text-center">
              <span className="text-green-400 font-semibold">실시간 AI</span>
              <p className="text-muted-foreground text-xs">엣지 컴퓨팅 AI</p>
            </div>
            <div className="text-center">
              <span className="text-orange-400 font-semibold">생성형 AI</span>
              <p className="text-muted-foreground text-xs">창작 및 코딩 지원</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page10AIMLDetail;