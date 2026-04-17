import { motion } from "framer-motion";
import { User, Users, Building, Globe, Sparkles } from "lucide-react";

const PageStartupToEnterprise = () => {
  const stages = [
    {
      icon: User,
      stage: "1인 개발자 · 사이드 프로젝트",
      scale: "사용자 ~1만 명",
      color: "text-green-400",
      bg: "from-green-900/20 to-green-800/20",
      border: "border-green-500/20",
      arch: ["EC2 t3.micro (무료 티어)", "S3 정적 웹호스팅", "RDS MySQL (단일 AZ)", "Route 53 도메인"],
      cost: "월 $20~50",
      tip: "Free Tier 12개월 활용, 학습과 동시에 운영"
    },
    {
      icon: Users,
      stage: "스타트업 · Series A",
      scale: "사용자 ~100만 명",
      color: "text-blue-400",
      bg: "from-blue-900/20 to-blue-800/20",
      border: "border-blue-500/20",
      arch: ["ALB + Auto Scaling Group", "RDS Multi-AZ + Read Replica", "ElastiCache (캐싱)", "CloudFront CDN"],
      cost: "월 $500~3,000",
      tip: "Reserved Instance로 비용 40% 절감"
    },
    {
      icon: Building,
      stage: "성장기 기업 · Series B~C",
      scale: "사용자 ~1000만 명",
      color: "text-orange-400",
      bg: "from-orange-900/20 to-orange-800/20",
      border: "border-orange-500/20",
      arch: ["마이크로서비스 + ECS/EKS", "Aurora Serverless", "Kinesis 실시간 스트리밍", "SageMaker ML 파이프라인"],
      cost: "월 $1만~10만",
      tip: "DevOps 자동화, 보안 강화, 멀티 AZ 필수"
    },
    {
      icon: Globe,
      stage: "대기업 · 글로벌 서비스",
      scale: "사용자 수억 명",
      color: "text-purple-400",
      bg: "from-purple-900/20 to-purple-800/20",
      border: "border-purple-500/20",
      arch: ["멀티 리전 액티브-액티브", "글로벌 데이터 레이크 (S3)", "Direct Connect 전용선", "AWS Organizations 거버넌스"],
      cost: "월 $10만+",
      tip: "Enterprise Support, Savings Plan, 규정 준수 자동화"
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
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main title-section">
              스타트업부터 대기업까지
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-green-500/20">
            비즈니스가 성장할수록 AWS 아키텍처도 함께 진화합니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${stage.bg} p-5 rounded-2xl border ${stage.border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <stage.icon className={`w-10 h-10 mx-auto ${stage.color} mb-2`} />
                <h3 className={`text-sm font-bold ${stage.color}`}>{stage.stage}</h3>
                <span className="text-xs text-slate-400">{stage.scale}</span>
              </div>

              <div className="space-y-1 mb-3">
                <p className="text-xs text-slate-400 font-semibold mb-2">주요 아키텍처</p>
                {stage.arch.map((item) => (
                  <div key={item} className="bg-black/20 rounded-lg px-2 py-1">
                    <p className="text-xs text-white">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-black/30 rounded-xl p-2 border border-white/5 mb-2">
                <p className="text-xs text-slate-400 mb-0.5">예상 비용</p>
                <p className={`text-sm font-bold ${stage.color}`}>{stage.cost}</p>
              </div>

              <p className="text-xs text-muted-foreground italic leading-relaxed">{stage.tip}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageStartupToEnterprise;
