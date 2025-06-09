import { motion } from "framer-motion";
import { Globe, Database, Image, Bell, Sparkles } from "lucide-react";

const Page13ServerlessDetail = () => {
  const patterns = [
    {
      icon: Globe,
      title: "웹 애플리케이션",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      architecture: ["CloudFront", "API Gateway", "Lambda", "DynamoDB"],
      benefits: ["무제한 확장", "글로벌 배포", "비용 최적화", "높은 가용성"],
      description: "정적 웹사이트 + 서버리스 백엔드"
    },
    {
      icon: Database,
      title: "데이터 처리",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      architecture: ["S3", "Lambda", "DynamoDB", "SNS"],
      benefits: ["이벤트 기반", "실시간 처리", "자동 확장", "오류 처리"],
      description: "파일 업로드 시 자동 데이터 처리"
    },
    {
      icon: Image,
      title: "이미지 처리",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      architecture: ["S3", "Lambda", "Rekognition", "CloudFront"],
      benefits: ["자동 처리", "AI 분석", "CDN 배포", "비용 효율"],
      description: "이미지 업로드 시 자동 변환 및 분석"
    },
    {
      icon: Bell,
      title: "실시간 알림",
      color: "text-orange-400",
      bgColor: "from-orange-900/20 to-orange-800/20",
      architecture: ["API Gateway", "Lambda", "SNS", "SQS"],
      benefits: ["실시간 처리", "확장성", "신뢰성", "다중 채널"],
      description: "이벤트 기반 푸시 알림 시스템"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-purple-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-purple title-main">
              서버리스 아키텍처 패턴
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {patterns.map((pattern, index) => (
            <motion.div
              key={pattern.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${pattern.bgColor} p-4 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <pattern.icon className={`w-12 h-12 ${pattern.color} mx-auto mb-3`} />
                <h3 className={`text-lg font-bold ${pattern.color} mb-2`}>{pattern.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {pattern.description}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">아키텍처</h4>
                  <div className="space-y-1">
                    {pattern.architecture.map((component, i) => (
                      <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                        <span className="text-white text-xs">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">주요 장점</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {pattern.benefits.map((benefit, i) => (
                      <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                        <span className="text-muted-foreground text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 서버리스 모범 사례 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-4 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-3 text-center text-gradient-purple">서버리스 모범 사례</h3>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <span className="text-purple-400 font-semibold">콜드 스타트</span>
              <p className="text-muted-foreground text-xs">최소화 전략</p>
            </div>
            <div className="text-center">
              <span className="text-blue-400 font-semibold">모니터링</span>
              <p className="text-muted-foreground text-xs">X-Ray 추적</p>
            </div>
            <div className="text-center">
              <span className="text-green-400 font-semibold">오류 처리</span>
              <p className="text-muted-foreground text-xs">DLQ 활용</p>
            </div>
            <div className="text-center">
              <span className="text-orange-400 font-semibold">보안</span>
              <p className="text-muted-foreground text-xs">IAM 최소 권한</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page13ServerlessDetail;