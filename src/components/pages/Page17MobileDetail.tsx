import { motion } from "framer-motion";
import { Smartphone, Cloud, Bell, Shield, Sparkles } from "lucide-react";

const Page17MobileDetail = () => {
  const mobileFeatures = [
    {
      icon: Smartphone,
      title: "크로스 플랫폼",
      color: "text-pink-400",
      bgColor: "from-pink-900/20 to-pink-800/20",
      frameworks: ["React Native", "Flutter", "Ionic", "Xamarin"],
      features: ["단일 코드베이스", "네이티브 성능", "빠른 개발", "비용 효율"],
      description: "iOS와 Android를 동시에 개발"
    },
    {
      icon: Cloud,
      title: "백엔드 서비스",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      services: ["AppSync", "Lambda", "DynamoDB", "S3"],
      features: ["GraphQL API", "실시간 동기화", "오프라인 지원", "자동 확장"],
      description: "서버리스 모바일 백엔드"
    },
    {
      icon: Bell,
      title: "사용자 참여",
      color: "text-yellow-400",
      bgColor: "from-yellow-900/20 to-yellow-800/20",
      tools: ["Pinpoint", "SNS", "SES", "Analytics"],
      features: ["푸시 알림", "이메일 캠페인", "사용자 분석", "A/B 테스트"],
      description: "사용자 참여도 향상을 위한 도구"
    },
    {
      icon: Shield,
      title: "보안 & 인증",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      security: ["Cognito", "IAM", "WAF", "Certificate Manager"],
      features: ["소셜 로그인", "MFA", "JWT 토큰", "보안 API"],
      description: "안전한 사용자 인증 및 권한 관리"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-pink-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-pink title-main">
              모바일 앱 개발 가이드
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-pink-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mobileFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${feature.bgColor} p-4 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-3`} />
                <h3 className={`text-lg font-bold ${feature.color} mb-2`}>{feature.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">
                    {feature.frameworks ? "프레임워크" :
                      feature.services ? "서비스" :
                        feature.tools ? "도구" : "보안"}
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {(feature.frameworks || feature.services || feature.tools || feature.security).map((item, i) => (
                      <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                        <span className="text-white text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">주요 기능</h4>
                  <div className="space-y-1">
                    {feature.features.map((feat, i) => (
                      <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                        <span className="text-muted-foreground text-xs">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 모바일 개발 트렌드 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-4 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-3 text-center text-gradient-pink">모바일 개발 트렌드</h3>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <span className="text-pink-400 font-semibold">PWA</span>
              <p className="text-muted-foreground text-xs">프로그레시브 웹앱</p>
            </div>
            <div className="text-center">
              <span className="text-blue-400 font-semibold">5G</span>
              <p className="text-muted-foreground text-xs">초고속 통신</p>
            </div>
            <div className="text-center">
              <span className="text-yellow-400 font-semibold">AR/VR</span>
              <p className="text-muted-foreground text-xs">몰입형 경험</p>
            </div>
            <div className="text-center">
              <span className="text-green-400 font-semibold">AI 통합</span>
              <p className="text-muted-foreground text-xs">지능형 앱</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page17MobileDetail;