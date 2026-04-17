import { motion } from "framer-motion";
import { Server, Cloud, TrendingUp, Sparkles } from "lucide-react";

const PageWhyCloud = () => {
  const comparisons = [
    {
      label: "서버 1대 도입",
      before: { title: "직접 구매", value: "평균 3~6개월", desc: "견적 → 발주 → 설치 → 설정 → 운영", icon: Server, color: "text-red-400", bg: "from-red-900/20 to-red-800/20", border: "border-red-500/20" },
      after: { title: "클라우드", value: "5분", desc: "콘솔 접속 → 클릭 → 즉시 사용", icon: Cloud, color: "text-blue-400", bg: "from-blue-900/20 to-blue-800/20", border: "border-blue-500/20" },
    },
    {
      label: "초기 비용",
      before: { title: "온프레미스", value: "수억 원", desc: "서버·스토리지·네트워크 장비 선구매", icon: Server, color: "text-red-400", bg: "from-red-900/20 to-red-800/20", border: "border-red-500/20" },
      after: { title: "클라우드", value: "₩0", desc: "사용한 만큼만 지불, CAPEX → OPEX", icon: Cloud, color: "text-blue-400", bg: "from-blue-900/20 to-blue-800/20", border: "border-blue-500/20" },
    },
    {
      label: "트래픽 급증 대응",
      before: { title: "온프레미스", value: "사전 증설 필요", desc: "장비 주문 → 납품 대기 → 이미 늦음", icon: Server, color: "text-red-400", bg: "from-red-900/20 to-red-800/20", border: "border-red-500/20" },
      after: { title: "클라우드", value: "자동 확장", desc: "Auto Scaling이 트래픽에 맞춰 즉시 대응", icon: TrendingUp, color: "text-blue-400", bg: "from-blue-900/20 to-blue-800/20", border: "border-blue-500/20" },
    },
  ];

  const stats = [
    { value: "34개", label: "AWS 글로벌 리전", color: "text-blue-400" },
    { value: "200+", label: "AWS 서비스 수", color: "text-green-400" },
    { value: "31%", label: "글로벌 클라우드 시장 점유율 (AWS)", color: "text-orange-400" },
    { value: "100만+", label: "AWS 고객사 수", color: "text-purple-400" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-grid relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

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
              왜 지금 클라우드인가
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-green-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-blue-500/20">
            IT 인프라의 패러다임이 바뀌고 있습니다
          </p>
        </motion.div>

        <div className="space-y-4 mb-10">
          {comparisons.map((comp, index) => (
            <motion.div
              key={comp.label}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-slate-400 font-semibold mb-2 ml-1">{comp.label}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className={`bg-gradient-to-br ${comp.before.bg} p-4 rounded-2xl border ${comp.before.border}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <comp.before.icon className={`w-5 h-5 ${comp.before.color}`} />
                    <span className={`text-sm font-bold ${comp.before.color}`}>{comp.before.title}</span>
                  </div>
                  <p className={`text-2xl font-bold ${comp.before.color} mb-1`}>{comp.before.value}</p>
                  <p className="text-muted-foreground text-xs">{comp.before.desc}</p>
                </div>
                <div className={`bg-gradient-to-br ${comp.after.bg} p-4 rounded-2xl border ${comp.after.border}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <comp.after.icon className={`w-5 h-5 ${comp.after.color}`} />
                    <span className={`text-sm font-bold ${comp.after.color}`}>{comp.after.title}</span>
                  </div>
                  <p className={`text-2xl font-bold ${comp.after.color} mb-1`}>{comp.after.value}</p>
                  <p className="text-muted-foreground text-xs">{comp.after.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center">
              <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
              <p className="text-muted-foreground text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageWhyCloud;
