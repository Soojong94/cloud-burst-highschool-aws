import { motion } from "framer-motion";
import { Cloud, Brain, MapPin, Atom, Sparkles } from "lucide-react";

const Page20FutureDetail = () => {
  const futureAreas = [
    {
      icon: Cloud,
      title: "포그 vs 엣지 vs 클라우드",
      color: "text-cyan-400",
      bgColor: "from-cyan-900/20 to-cyan-800/20",
      innovations: ["클라우드: 중앙 집중 처리", "포그: 네트워크 중간 레이어", "엣지: 기기 현장 처리", "AWS Outposts·Local Zones"],
      impact: ["지연 시간 1ms 이하", "인터넷 끊겨도 동작", "의료·제조 현장 적용", "5G와 시너지"],
      description: "처리 위치를 최적화해 속도·비용·보안을 동시에 잡는 전략"
    },
    {
      icon: Brain,
      title: "AI 컴퓨팅 인프라 혁신",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      innovations: ["AWS Trainium·Inferentia 칩", "Amazon Bedrock API", "SageMaker HyperPod", "RAG·Fine-tuning 패턴"],
      impact: ["GPU 대비 40% 비용 절감", "기업 전용 LLM 구축", "RAG로 환각 최소화", "생산성 혁명"],
      description: "생성형 AI 시대, 클라우드 인프라가 AI 경쟁력의 핵심"
    },
    {
      icon: MapPin,
      title: "광주·전남 데이터센터 클러스터",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      innovations: ["광주 AI 집적단지 조성", "전남 나주 탄소중립 DC", "호남권 클라우드 허브", "공공·의료 데이터 주권"],
      impact: ["지역 IT 인재 수요 급증", "재생에너지 100% 구동", "수도권 집중 완화", "지역 스타트업 기회"],
      description: "데이터 주권과 탄소중립 두 마리 토끼를 잡는 지역 DC 전략"
    },
    {
      icon: Atom,
      title: "양자 컴퓨팅 & 클라우드 보안",
      color: "text-orange-400",
      bgColor: "from-orange-900/20 to-orange-800/20",
      innovations: ["Amazon Braket 플랫폼", "양자 내성 암호화(PQC)", "하이브리드 양자-클래식", "2030년대 상용화"],
      impact: ["신약 개발 시뮬레이션", "물류 최적화 혁신", "현재 암호화 위협 대비", "금융·국방 분야 적용"],
      description: "양자 컴퓨팅 상용화 전 지금부터 준비해야 하는 이유"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-purple-900/30 bg-mesh-gradient relative overflow-hidden"
    >
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
              미래 기술 심층 분석
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-purple-500/20">
            포그·엣지 AI·광주 DC·양자 컴퓨팅 — 지금 준비해야 할 4가지 흐름
          </p>
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
                <h3 className={`text-sm font-bold ${area.color} mb-2`}>{area.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{area.description}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">핵심 기술</h4>
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

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-6 rounded-2xl border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gradient-cyan">2030년 클라우드 전망</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-900/20 p-4 rounded-xl">
              <h4 className="text-purple-400 font-semibold mb-2 text-sm">시장 규모</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                글로벌 퍼블릭 클라우드 지출 2030년 <span className="text-white font-bold">$1.8조</span> 전망 (Gartner). 한국 클라우드 전환율 60% 돌파 예상.
              </p>
            </div>
            <div className="bg-green-900/20 p-4 rounded-xl">
              <h4 className="text-green-400 font-semibold mb-2 text-sm">국내 인프라</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                광주·전남·부산 데이터센터 클러스터 완성. 수도권 집중에서 <span className="text-white font-bold">분산형 국토 클라우드</span>로 전환.
              </p>
            </div>
            <div className="bg-cyan-900/20 p-4 rounded-xl">
              <h4 className="text-cyan-400 font-semibold mb-2 text-sm">직업 & 기회</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                클라우드·AI 엔지니어 수요 <span className="text-white font-bold">연 30% 성장</span>. 지금 배우는 AWS가 5년 후 커리어를 결정합니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page20FutureDetail;
