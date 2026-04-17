import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Settings, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageAutoScaling = () => {
  const policies = [
    {
      icon: TrendingUp,
      title: "동적 스케일링",
      description: "CPU·메모리·요청 수 등 메트릭이 임계값 초과 시 자동으로 EC2 인스턴스 추가",
      example: "CPU > 70% → 인스턴스 2대 추가",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: TrendingDown,
      title: "스케일 인 (축소)",
      description: "트래픽 감소 시 불필요한 인스턴스를 자동 종료. 사용한 시간만큼만 비용 지불",
      example: "CPU < 30% → 인스턴스 1대 종료",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Settings,
      title: "예약 스케일링",
      description: "예측 가능한 트래픽 패턴에 대해 시간대별 인스턴스 수를 미리 스케줄 지정",
      example: "평일 9시 최소 10대 → 새벽 2시 최소 2대",
      color: "text-orange-400",
      cardStyle: "card-neon"
    },
  ];

  const koreanCases = [
    { company: "배달의민족", time: "점심 11~13시, 저녁 17~20시", peak: "평시 대비 8배 트래픽", solution: "Auto Scaling으로 자동 확장·축소" },
    { company: "쿠팡 로켓배송", time: "블랙프라이데이·쿠팡데이", peak: "순간 100배 트래픽", solution: "Predictive Scaling으로 사전 증설" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-cyan-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float-animation" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">
              Auto Scaling
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-cyan-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
            트래픽에 따라 서버를 자동으로 늘리고 줄이는 탄력적 인프라
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${policy.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center">
                  <policy.icon className={`w-12 h-12 mx-auto ${policy.color} mb-4`} />
                  <CardTitle>{policy.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm text-center">{policy.description}</p>
                  <div className="bg-black/20 rounded-xl p-3">
                    <p className={`text-xs font-mono ${policy.color} text-center`}>{policy.example}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20"
        >
          <h3 className="text-xl font-bold mb-4 text-center text-cyan-400">🇰🇷 한국 적용 사례</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {koreanCases.map((c) => (
              <div key={c.company} className="bg-cyan-900/10 rounded-xl p-4">
                <h4 className="text-cyan-400 font-bold mb-2">{c.company}</h4>
                <p className="text-sm text-slate-300 mb-1">🕐 {c.time}</p>
                <p className="text-sm text-white mb-1">📈 {c.peak}</p>
                <p className="text-sm text-muted-foreground">✅ {c.solution}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageAutoScaling;
