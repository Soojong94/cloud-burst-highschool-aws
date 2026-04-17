import { motion } from "framer-motion";
import { Globe, Database, Brain, Gamepad2, Video, Cpu, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageWhatCanYouDo = () => {
  const usecases = [
    {
      icon: Globe,
      title: "웹 서비스 운영",
      description: "전 세계 수백만 명이 동시 접속해도 끄떡없는 웹사이트·앱 서버. 쿠팡·배민이 이 방식",
      example: "EC2 + Auto Scaling + CloudFront",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Database,
      title: "빅데이터 분석",
      description: "테라바이트급 로그·센서 데이터를 실시간 분석. 고객 행동 패턴 파악, 재고 예측",
      example: "S3 + Glue + Athena + QuickSight",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Brain,
      title: "AI 모델 학습·서빙",
      description: "GPU 서버 없이도 대규모 AI 모델 학습. Bedrock으로 생성형 AI API 바로 사용",
      example: "SageMaker + Bedrock + Lambda",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Video,
      title: "스트리밍 서비스",
      description: "넷플릭스처럼 전 세계에 HD 영상 스트리밍. 엣지 서버가 시청자 근처에서 전송",
      example: "S3 + CloudFront + MediaConvert",
      color: "text-red-400",
      cardStyle: "card-neon"
    },
    {
      icon: Cpu,
      title: "IoT 데이터 수집",
      description: "공장 센서·스마트홈·자동차에서 초당 수백만 건 데이터 수집·처리·저장",
      example: "IoT Core + Kinesis + DynamoDB",
      color: "text-cyan-400",
      cardStyle: "card-tech"
    },
    {
      icon: ShieldCheck,
      title: "재해복구(DR)",
      description: "본사 서버 장애 시 AWS가 자동으로 백업 인프라 구동. 수분 내 서비스 복구",
      example: "Backup + Route53 + RDS Multi-AZ",
      color: "text-orange-400",
      cardStyle: "card-data"
    },
    {
      icon: TrendingUp,
      title: "글로벌 서비스 확장",
      description: "한국에서 만든 앱을 미국·유럽에 클릭 몇 번으로 배포. 별도 해외 법인 서버 불필요",
      example: "34개 리전 + Global Accelerator",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Gamepad2,
      title: "게임 서버 인프라",
      description: "글로벌 멀티플레이어 게임 서버를 탄력적으로 운영. 신규 패치 때 트래픽 급증 자동 대응",
      example: "GameLift + EC2 + DynamoDB",
      color: "text-pink-400",
      cardStyle: "card-ai"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-pattern-grid relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main title-section">
              클라우드로 무엇을 할 수 있나
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
            1인 개발자도 대기업 수준의 인프라를 즉시 사용할 수 있습니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {usecases.map((uc, index) => (
            <motion.div
              key={uc.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${uc.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center pb-2">
                  <uc.icon className={`w-10 h-10 mx-auto ${uc.color} mb-3 drop-shadow-lg`} />
                  <CardTitle className="text-sm">{uc.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground text-xs text-center leading-relaxed">{uc.description}</p>
                  <div className="bg-black/20 rounded-lg p-2">
                    <p className={`text-xs text-center font-mono ${uc.color} opacity-80`}>{uc.example}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageWhatCanYouDo;
