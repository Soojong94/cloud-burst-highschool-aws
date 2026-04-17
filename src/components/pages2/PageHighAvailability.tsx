import { motion } from "framer-motion";
import { Server, Layers, Globe, Sparkles } from "lucide-react";

const PageHighAvailability = () => {
  const levels = [
    {
      icon: Server,
      level: "Level 1",
      title: "단일 AZ",
      availability: "99% (연 87.6시간 다운)",
      color: "text-red-400",
      bg: "from-red-900/20 to-red-800/20",
      border: "border-red-500/20",
      arch: ["EC2 1대 (단일 AZ)", "RDS 단일 인스턴스", "ELB 없음"],
      risk: "AZ 장애 시 전체 서비스 중단",
      usecase: "개발 환경, 실험적 서비스"
    },
    {
      icon: Layers,
      level: "Level 2",
      title: "다중 AZ",
      availability: "99.95% (연 4.38시간 다운)",
      color: "text-yellow-400",
      bg: "from-yellow-900/20 to-yellow-800/20",
      border: "border-yellow-500/20",
      arch: ["ALB + ASG (2개 이상 AZ)", "RDS Multi-AZ Standby", "ElastiCache 복제본"],
      risk: "리전 전체 장애 시 중단",
      usecase: "대부분의 상용 서비스 (권장)"
    },
    {
      icon: Globe,
      level: "Level 3",
      title: "다중 리전",
      availability: "99.999% (연 5분 이하 다운)",
      color: "text-green-400",
      bg: "from-green-900/20 to-green-800/20",
      border: "border-green-500/20",
      arch: ["Active-Active (서울+도쿄)", "Global DynamoDB 테이블", "Route 53 지연 기반 라우팅"],
      risk: "극히 낮음 (천재지변 수준)",
      usecase: "금융·의료·글로벌 서비스"
    },
  ];

  const rtoRpo = [
    { term: "RTO", full: "Recovery Time Objective", desc: "장애 발생 후 서비스가 복구되는 데 허용하는 최대 시간", example: "\"30분 이내 복구\"" },
    { term: "RPO", full: "Recovery Point Objective", desc: "장애 발생 시 데이터 손실을 허용하는 최대 시점", example: "\"최대 5분치 데이터 손실 허용\"" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-green-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-purple title-main title-section">
              고가용성 & 재해복구
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-green-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-red-500/20">
            장애는 언제든 발생합니다 — 얼마나 빨리 복구하느냐가 핵심
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {levels.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${level.bg} p-5 rounded-2xl border ${level.border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <level.icon className={`w-10 h-10 mx-auto ${level.color} mb-2`} />
                <span className="text-xs text-slate-400">{level.level}</span>
                <h3 className={`text-lg font-bold ${level.color}`}>{level.title}</h3>
                <p className={`text-sm font-semibold ${level.color}`}>{level.availability}</p>
              </div>
              <div className="space-y-1 mb-3">
                {level.arch.map(a => (
                  <div key={a} className="bg-black/20 rounded-lg px-2 py-1 text-xs text-white">{a}</div>
                ))}
              </div>
              <div className="bg-black/30 rounded-xl p-2 mb-2">
                <p className="text-xs text-slate-400">위험</p>
                <p className="text-xs text-white">{level.risk}</p>
              </div>
              <p className={`text-xs ${level.color} italic`}>적합: {level.usecase}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-white/10 max-w-4xl mx-auto"
        >
          <h3 className="text-white font-bold text-center mb-4">DR 설계의 두 핵심 지표</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {rtoRpo.map(r => (
              <div key={r.term} className="bg-slate-800/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-cyan-400">{r.term}</span>
                  <span className="text-xs text-slate-400">{r.full}</span>
                </div>
                <p className="text-sm text-white mb-1">{r.desc}</p>
                <p className="text-cyan-400 text-sm italic">{r.example}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageHighAvailability;
