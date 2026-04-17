import { motion } from "framer-motion";
import { Building2, TrendingUp, Sparkles } from "lucide-react";

const PageKoreanCases = () => {
  const cases = [
    {
      company: "카카오",
      industry: "플랫폼·IT",
      problem: "카카오톡 트래픽 급증 시 자체 서버 한계",
      solution: "AWS 멀티 리전 아키텍처로 전환, 하이브리드 클라우드 운영",
      result: "서비스 안정성 99.9% 달성, 배포 속도 10배 향상",
      color: "text-yellow-400",
      bg: "from-yellow-900/20 to-yellow-800/20",
      border: "border-yellow-500/20",
      badge: "bg-yellow-500/20 text-yellow-300"
    },
    {
      company: "배달의민족",
      industry: "이커머스·O2O",
      problem: "점심·저녁 피크 시간 트래픽이 평시의 10배 폭증",
      solution: "Auto Scaling + SQS 메시지 큐로 탄력적 대응",
      result: "피크 타임 장애 제로, 서버 비용 40% 절감",
      color: "text-blue-400",
      bg: "from-blue-900/20 to-blue-800/20",
      border: "border-blue-500/20",
      badge: "bg-blue-500/20 text-blue-300"
    },
    {
      company: "삼성전자",
      industry: "제조·IoT",
      problem: "SmartThings 글로벌 IoT 기기 1억 대 연결 필요",
      solution: "AWS IoT Core + Lambda + DynamoDB 서버리스 아키텍처",
      result: "190개국 동시 서비스, 운영 비용 60% 절감",
      color: "text-cyan-400",
      bg: "from-cyan-900/20 to-cyan-800/20",
      border: "border-cyan-500/20",
      badge: "bg-cyan-500/20 text-cyan-300"
    },
    {
      company: "신한은행",
      industry: "금융",
      problem: "금융 규제로 전면 퍼블릭 클라우드 전환 불가",
      solution: "핵심 데이터는 온프레미스, 분석·AI는 AWS 하이브리드 구성",
      result: "신용 분석 AI 도입, 대출 심사 시간 50% 단축",
      color: "text-purple-400",
      bg: "from-purple-900/20 to-purple-800/20",
      border: "border-purple-500/20",
      badge: "bg-purple-500/20 text-purple-300"
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
      <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

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
              한국 기업 클라우드 사례
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
            우리가 매일 사용하는 서비스들이 이미 AWS 위에서 돌아가고 있습니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, index) => (
            <motion.div
              key={c.company}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${c.bg} p-6 rounded-2xl border ${c.border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Building2 className={`w-8 h-8 ${c.color}`} />
                  <div>
                    <h3 className={`text-xl font-bold ${c.color}`}>{c.company}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${c.badge}`}>{c.industry}</span>
                  </div>
                </div>
                <TrendingUp className={`w-6 h-6 ${c.color} opacity-60`} />
              </div>

              <div className="space-y-3">
                <div className="bg-black/20 rounded-xl p-3">
                  <p className="text-xs text-slate-400 mb-1 font-semibold">🔴 문제</p>
                  <p className="text-sm text-white">{c.problem}</p>
                </div>
                <div className="bg-black/20 rounded-xl p-3">
                  <p className="text-xs text-slate-400 mb-1 font-semibold">🔵 해결책</p>
                  <p className="text-sm text-white">{c.solution}</p>
                </div>
                <div className="bg-black/20 rounded-xl p-3">
                  <p className="text-xs text-slate-400 mb-1 font-semibold">🟢 결과</p>
                  <p className={`text-sm font-semibold ${c.color}`}>{c.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageKoreanCases;
