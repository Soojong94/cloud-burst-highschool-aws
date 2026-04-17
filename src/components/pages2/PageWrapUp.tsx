import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const PageWrapUp = () => {
  const keyTakeaways = [
    { text: "클라우드는 '인터넷으로 빌려 쓰는 IT 인프라' — CAPEX 없이 OPEX로 전환", color: "text-blue-400" },
    { text: "AWS는 34개 리전·200+ 서비스로 글로벌 클라우드 시장 31%를 점유", color: "text-orange-400" },
    { text: "EC2(서버)·S3(저장)·RDS(DB)·Lambda(서버리스)가 AWS의 핵심 4대 서비스", color: "text-green-400" },
    { text: "VPC로 네트워크 격리, IAM으로 최소 권한 보안, Multi-AZ로 고가용성 확보", color: "text-purple-400" },
    { text: "Bedrock으로 Claude·Titan 등 생성형 AI를 API 하나로 바로 사용 가능", color: "text-pink-400" },
    { text: "포그 컴퓨팅·엣지 AI·광주전남 DC — 클라우드는 더 가깝고, 더 지역화된다", color: "text-cyan-400" },
    { text: "AWS Free Tier로 지금 당장 시작 — CLF-C02 자격증이 첫 번째 목표", color: "text-yellow-400" },
  ];

  const nextSteps = [
    { step: "1", action: "AWS 계정 생성 & Free Tier 시작", link: "aws.amazon.com/free", color: "text-green-400", bg: "from-green-900/20 to-green-800/20", border: "border-green-500/20" },
    { step: "2", action: "AWS Skill Builder 무료 학습", link: "skillbuilder.aws", color: "text-blue-400", bg: "from-blue-900/20 to-blue-800/20", border: "border-blue-500/20" },
    { step: "3", action: "CLF-C02 Cloud Practitioner 취득", link: "목표: 2~4주 학습", color: "text-orange-400", bg: "from-orange-900/20 to-orange-800/20", border: "border-orange-500/20" },
    { step: "4", action: "SAA-C03 Solutions Architect 도전", link: "취업·커리어 전환", color: "text-purple-400", bg: "from-purple-900/20 to-purple-800/20", border: "border-purple-500/20" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">
              오늘의 정리 & 다음 단계
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 핵심 정리 */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-400" />오늘 배운 7가지 핵심
            </h3>
            <div className="space-y-3">
              {keyTakeaways.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-black/20 p-3 rounded-xl border border-white/5"
                >
                  <CheckCircle className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                  <p className="text-white text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 다음 단계 */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-blue-400" />지금 바로 시작하세요
            </h3>
            <div className="space-y-4">
              {nextSteps.map((ns, index) => (
                <motion.div
                  key={ns.step}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${ns.bg} border ${ns.border} p-4 rounded-2xl hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-bold ${ns.color} w-8 text-center flex-shrink-0`}>{ns.step}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{ns.action}</p>
                      <p className={`text-xs ${ns.color} font-mono`}>{ns.link}</p>
                    </div>
                    <ArrowRight className={`w-5 h-5 ${ns.color} ml-auto`} />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-6 bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-blue-500/20 text-center"
            >
              <p className="text-2xl font-bold text-gradient-blue mb-2">Q & A</p>
              <p className="text-muted-foreground text-sm">궁금한 점이 있으시면 편하게 질문해 주세요</p>
              <p className="text-blue-400 text-sm mt-2 font-mono">으뜸정보기술 · 김수종 책임</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PageWrapUp;
