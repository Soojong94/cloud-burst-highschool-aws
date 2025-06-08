import { motion } from "framer-motion";
import { Brain, Zap, Leaf, Shield, Sparkles } from "lucide-react";

const Page20FutureDetail = () => {
  const futureAreas = [
    {
      icon: Brain,
      title: "AI-First 클라우드",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      innovations: ["Bedrock 확장", "AutoML 대중화", "AI 개발도구", "지능형 최적화"],
      impact: ["코딩 없는 AI", "자동 인사이트", "예측적 스케일링", "지능형 보안"],
      description: "모든 서비스에 AI가 기본 탑재되는 시대"
    },
    {
      icon: Zap,
      title: "완전 자동화",
      color: "text-yellow-400",
      bgColor: "from-yellow-900/20 to-yellow-800/20",
      innovations: ["Zero-Ops", "자율 복구", "예측적 확장", "자동 최적화"],
      impact: ["운영 부담 제로", "99.99% 가용성", "비용 자동 최적화", "성능 자동 튜닝"],
      description: "인프라 관리가 완전히 자동화된 환경"
    },
    {
      icon: Leaf,
      title: "지속가능한 클라우드",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      innovations: ["100% 재생에너지", "탄소 중립 DC", "그린 컴퓨팅", "효율성 극대화"],
      impact: ["환경 친화적", "ESG 목표 달성", "지속가능 발전", "사회적 책임"],
      description: "환경을 고려한 지속가능한 클라우드 서비스"
    },
    {
      icon: Shield,
      title: "양자 보안",
      color: "text-cyan-400",
      bgColor: "from-cyan-900/20 to-cyan-800/20",
      innovations: ["양자 암호화", "양자 컴퓨팅", "차세대 보안", "불가침 보안"],
      impact: ["절대적 보안", "양자 내성", "미래 대비", "혁신적 암호화"],
      description: "양자 컴퓨팅 시대의 차세대 보안"
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
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-purple title-main">
              클라우드의 미래
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {futureAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${area.bgColor} p-4 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <area.icon className={`w-12 h-12 ${area.color} mx-auto mb-3`} />
                <h3 className={`text-lg font-bold ${area.color} mb-2`}>{area.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">핵심 혁신</h4>
                  <div className="space-y-1">
                    {area.innovations.map((innovation, i) => (
                      <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                        <span className="text-white text-xs">{innovation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">기대 효과</h4>
                  <div className="space-y-1">
                    {area.impact.map((effect, i) => (
                      <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                        <span className="text-muted-foreground text-xs">{effect}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 미래 전망 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-6 rounded-2xl border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gradient-cyan">2030년 클라우드 전망</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-900/20 p-4 rounded-xl">
              <h4 className="text-purple-400 font-semibold mb-2">기술적 혁신</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                양자 컴퓨팅, 뉴로모픽 칩, 6G 네트워크가 클라우드와 융합되어
                현재로는 상상할 수 없는 새로운 가능성을 열어갈 것입니다.
              </p>
            </div>
            <div className="bg-cyan-900/20 p-4 rounded-xl">
              <h4 className="text-cyan-400 font-semibold mb-2">사회적 영향</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                클라우드는 교육, 의료, 환경 문제 해결의 핵심 플랫폼이 되어
                더 나은 세상을 만드는 데 기여할 것입니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page20FutureDetail;