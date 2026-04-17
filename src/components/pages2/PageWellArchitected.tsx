import { motion } from "framer-motion";
import { Settings, Shield, RefreshCw, Zap, DollarSign, Leaf, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageWellArchitected = () => {
  const pillars = [
    {
      icon: Settings,
      title: "운영 우수성",
      subtitle: "Operational Excellence",
      description: "운영 절차를 코드로 정의, 작은 단위로 자주 배포, 장애에서 배우는 문화",
      tips: ["CloudFormation IaC", "CI/CD 파이프라인", "게임데이 훈련"],
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Shield,
      title: "보안",
      subtitle: "Security",
      description: "최소 권한 원칙, 모든 계층에서 보안 적용, 보안 이벤트에 대비",
      tips: ["IAM 최소 권한", "데이터 암호화", "CloudTrail 감사"],
      color: "text-red-400",
      cardStyle: "card-security"
    },
    {
      icon: RefreshCw,
      title: "안정성",
      subtitle: "Reliability",
      description: "장애를 자동 복구하고, 변경사항을 테스트하며, 수평 확장으로 가용성 확보",
      tips: ["Multi-AZ 배포", "Auto Scaling", "백업 및 복구 테스트"],
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Zap,
      title: "성능 효율성",
      subtitle: "Performance Efficiency",
      description: "올바른 리소스 유형 선택, 지속적으로 최신 서비스 실험, 글로벌 배포",
      tips: ["인스턴스 패밀리 선택", "캐싱 (ElastiCache)", "CloudFront CDN"],
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: DollarSign,
      title: "비용 최적화",
      subtitle: "Cost Optimization",
      description: "불필요한 비용 제거, 유연한 비용 모델 채택, 지출을 분석하고 귀속",
      tips: ["Reserved Instance", "Spot Instance", "Cost Explorer 분석"],
      color: "text-orange-400",
      cardStyle: "card-data"
    },
    {
      icon: Leaf,
      title: "지속 가능성",
      subtitle: "Sustainability",
      description: "에너지 소비 최소화, 탄소 발자국 감소, 재생에너지 활용",
      tips: ["리소스 사용률 최대화", "AWS 그린 리전 선택", "서버리스 우선 설계"],
      color: "text-emerald-400",
      cardStyle: "card-tech"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-purple title-main title-section">
              Well-Architected Framework
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20">
            AWS가 정의한 클라우드 아키텍처 설계 6대 원칙 — 좋은 아키텍처의 기준
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${pillar.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center pb-2">
                  <pillar.icon className={`w-12 h-12 mx-auto ${pillar.color} mb-3`} />
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                  <p className={`text-xs ${pillar.color} font-mono`}>{pillar.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-xs text-center leading-relaxed">{pillar.description}</p>
                  <div className="space-y-1">
                    {pillar.tips.map(tip => (
                      <div key={tip} className="bg-black/20 rounded-lg px-2 py-1 text-center">
                        <span className="text-white text-xs">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageWellArchitected;
