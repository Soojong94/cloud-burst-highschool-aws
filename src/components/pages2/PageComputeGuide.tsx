import { motion } from "framer-motion";
import { Server, Zap, Box, HelpCircle, Sparkles } from "lucide-react";

const PageComputeGuide = () => {
  const services = [
    {
      icon: Server,
      name: "EC2",
      subtitle: "Elastic Compute Cloud",
      color: "text-blue-400",
      bg: "from-blue-900/20 to-blue-800/20",
      border: "border-blue-500/20",
      when: ["항상 실행 중인 서버가 필요할 때", "OS·미들웨어를 직접 제어해야 할 때", "레거시 앱, 라이선스 소프트웨어", "장시간 실행되는 배치 작업"],
      notWhen: "짧은 이벤트성 작업, 서버 관리 부담 피하고 싶을 때",
      cost: "시간 단위 과금, Reserved로 최대 72% 절약"
    },
    {
      icon: Zap,
      name: "Lambda",
      subtitle: "Serverless Functions",
      color: "text-yellow-400",
      bg: "from-yellow-900/20 to-yellow-800/20",
      border: "border-yellow-500/20",
      when: ["이벤트 기반 실행 (API 요청, S3 업로드)", "실행 시간 15분 이내 작업", "트래픽이 불규칙한 경우", "서버 관리 없이 코드만 실행"],
      notWhen: "15분 이상 장시간 처리, 상태 유지가 필요한 경우",
      cost: "요청 수 + 실행 시간 과금, 월 100만 건 무료"
    },
    {
      icon: Box,
      name: "ECS / EKS",
      subtitle: "Container Orchestration",
      color: "text-purple-400",
      bg: "from-purple-900/20 to-purple-800/20",
      border: "border-purple-500/20",
      when: ["마이크로서비스 아키텍처", "Docker 컨테이너 운영", "CI/CD 파이프라인과 통합", "환경 일관성이 중요한 경우"],
      notWhen: "컨테이너 경험이 없거나 단순한 앱의 경우",
      cost: "EC2 기반 또는 Fargate(서버리스) 방식 선택"
    },
  ];

  const decision = [
    { q: "서버 직접 제어 필요?", yes: "EC2", no: "↓" },
    { q: "이벤트 기반 & 15분 이내?", yes: "Lambda", no: "↓" },
    { q: "컨테이너 사용?", yes: "ECS/EKS", no: "EC2" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-cyan-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">
              컴퓨팅 서비스 선택 가이드
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-cyan-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
            EC2, Lambda, ECS — 상황에 맞는 컴퓨팅 서비스를 고르는 기준
          </p>
        </motion.div>

        {/* 의사결정 흐름 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-white/10"
        >
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <HelpCircle className="w-6 h-6 text-slate-400" />
            {decision.map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="bg-slate-800/50 rounded-xl px-3 py-2 text-sm text-white text-center min-w-32">
                  <p className="text-xs text-slate-400 mb-1">{d.q}</p>
                  <span className="text-green-400 text-xs">YES → </span>
                  <span className="text-green-400 font-bold text-xs">{d.yes}</span>
                  {d.no !== "EC2" && <span className="text-slate-400 text-xs"> | NO → {d.no}</span>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, index) => (
            <motion.div
              key={svc.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${svc.bg} p-5 rounded-2xl border ${svc.border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <svc.icon className={`w-8 h-8 ${svc.color}`} />
                <div>
                  <h3 className={`text-xl font-bold ${svc.color}`}>{svc.name}</h3>
                  <p className="text-slate-400 text-xs">{svc.subtitle}</p>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-xs text-green-400 font-semibold mb-2">✅ 언제 쓰나요</p>
                <ul className="space-y-1">
                  {svc.when.map(w => (
                    <li key={w} className="text-xs text-white bg-black/20 rounded-lg px-2 py-1">{w}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <p className="text-xs text-red-400 font-semibold mb-1">❌ 부적합한 경우</p>
                <p className="text-xs text-muted-foreground bg-black/20 rounded-lg px-2 py-1">{svc.notWhen}</p>
              </div>

              <div className="bg-black/30 rounded-xl px-3 py-2">
                <p className="text-xs text-slate-400 mb-0.5">💰 비용</p>
                <p className={`text-xs ${svc.color}`}>{svc.cost}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageComputeGuide;
