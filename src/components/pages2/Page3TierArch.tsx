import { motion } from "framer-motion";
import { Globe, Layers, Database, Sparkles } from "lucide-react";

const Page3TierArch = () => {
  const tiers = [
    {
      name: "프레젠테이션 계층",
      layer: "Tier 1 — 사용자와 접점",
      icon: Globe,
      color: "text-blue-400",
      bg: "from-blue-900/20 to-blue-800/20",
      border: "border-blue-500/20",
      services: ["Route 53 (DNS)", "CloudFront (CDN)", "Application Load Balancer (ALB)", "S3 (정적 파일 호스팅)"]
    },
    {
      name: "애플리케이션 계층",
      layer: "Tier 2 — 비즈니스 로직",
      icon: Layers,
      color: "text-green-400",
      bg: "from-green-900/20 to-green-800/20",
      border: "border-green-500/20",
      services: ["EC2 Auto Scaling Group (다중 AZ)", "Lambda (서버리스 함수)", "ECS/EKS (컨테이너)", "ElastiCache (세션·캐싱)"]
    },
    {
      name: "데이터 계층",
      layer: "Tier 3 — 데이터 저장",
      icon: Database,
      color: "text-purple-400",
      bg: "from-purple-900/20 to-purple-800/20",
      border: "border-purple-500/20",
      services: ["RDS Aurora Multi-AZ (관계형 DB)", "DynamoDB (NoSQL)", "S3 (객체 스토리지)", "Backup (자동 백업)"]
    },
  ];

  const crossCutting = [
    { name: "IAM", desc: "계층 간 최소 권한 접근", color: "text-red-400" },
    { name: "VPC", desc: "계층별 서브넷 격리", color: "text-orange-400" },
    { name: "CloudWatch", desc: "전 계층 모니터링·알람", color: "text-yellow-400" },
    { name: "WAF + Shield", desc: "DDoS·SQL인젝션 방어", color: "text-cyan-400" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

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
              실전 아키텍처: 3-Tier 웹앱
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-blue-500/20">
            대부분의 웹 서비스가 따르는 표준 아키텍처 패턴
          </p>
        </motion.div>

        {/* 흐름 다이어그램 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-white/10 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 flex-wrap text-xs">
            {["사용자", "→", "Route53", "→", "CloudFront", "→", "ALB", "→", "EC2 (ASG)", "→", "RDS Aurora"].map((item, i) => (
              <span key={i} className={item === "→" ? "text-slate-500" : "bg-slate-800/50 border border-white/10 px-2 py-1 rounded-lg text-white font-mono"}>{item}</span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${tier.bg} p-5 rounded-2xl border ${tier.border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-2 mb-3">
                <tier.icon className={`w-8 h-8 ${tier.color}`} />
                <div>
                  <h3 className={`text-base font-bold ${tier.color}`}>{tier.name}</h3>
                  <p className="text-xs text-slate-400">{tier.layer}</p>
                </div>
              </div>
              <div className="space-y-2">
                {tier.services.map(s => (
                  <div key={s} className="bg-black/20 rounded-lg px-3 py-1.5 text-white text-xs">{s}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
        >
          <p className="text-slate-400 text-sm font-semibold mb-3 text-center">전 계층 공통 적용</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {crossCutting.map(cc => (
              <div key={cc.name} className="bg-slate-800/30 rounded-xl p-3 text-center">
                <p className={`font-bold text-sm ${cc.color}`}>{cc.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{cc.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page3TierArch;
