import { motion } from "framer-motion";
import { Gamepad2, Users, BarChart3, Shield, Sparkles } from "lucide-react";

const Page18GameDevDetail = () => {
  const gameArchitectures = [
    {
      icon: Gamepad2,
      title: "멀티플레이어 게임",
      color: "text-red-400",
      bgColor: "from-red-900/20 to-red-800/20",
      components: ["GameLift", "DynamoDB", "ElastiCache", "CloudFront"],
      features: ["실시간 매칭", "저지연 통신", "자동 확장", "글로벌 배포"],
      description: "대규모 멀티플레이어 온라인 게임"
    },
    {
      icon: Users,
      title: "소셜 게임",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      components: ["Lambda", "API Gateway", "DynamoDB", "Cognito"],
      features: ["친구 시스템", "리더보드", "소셜 로그인", "푸시 알림"],
      description: "모바일 소셜 및 캐주얼 게임"
    },
    {
      icon: BarChart3,
      title: "게임 분석",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      components: ["Kinesis", "Redshift", "QuickSight", "S3"],
      features: ["플레이어 분석", "수익 분석", "A/B 테스트", "예측 모델"],
      description: "데이터 기반 게임 운영 최적화"
    },
    {
      icon: Shield,
      title: "게임 보안",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      components: ["WAF", "Shield", "Inspector", "GuardDuty"],
      features: ["DDoS 방어", "치팅 방지", "데이터 보호", "위협 탐지"],
      description: "게임 보안과 공정성 보장"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-yellow-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-red title-main">
              게임 개발 아키텍처
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gameArchitectures.map((arch, index) => (
            <motion.div
              key={arch.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${arch.bgColor} p-4 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <arch.icon className={`w-12 h-12 ${arch.color} mx-auto mb-3`} />
                <h3 className={`text-lg font-bold ${arch.color} mb-2`}>{arch.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {arch.description}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">핵심 서비스</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {arch.components.map((component, i) => (
                      <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                        <span className="text-white text-xs">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">주요 기능</h4>
                  <div className="space-y-1">
                    {arch.features.map((feature, i) => (
                      <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                        <span className="text-muted-foreground text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 게임 개발 트렌드 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-4 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-3 text-center text-gradient-red">게임 산업 트렌드</h3>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <span className="text-red-400 font-semibold">클라우드 게임</span>
              <p className="text-muted-foreground text-xs">스트리밍 게임</p>
            </div>
            <div className="text-center">
              <span className="text-blue-400 font-semibold">메타버스</span>
              <p className="text-muted-foreground text-xs">가상 세계</p>
            </div>
            <div className="text-center">
              <span className="text-green-400 font-semibold">NFT 게임</span>
              <p className="text-muted-foreground text-xs">블록체인 연동</p>
            </div>
            <div className="text-center">
              <span className="text-purple-400 font-semibold">AI NPC</span>
              <p className="text-muted-foreground text-xs">지능형 캐릭터</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page18GameDevDetail;