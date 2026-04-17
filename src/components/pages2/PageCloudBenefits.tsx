import { motion } from "framer-motion";
import { DollarSign, Rocket, Globe, Shield, TrendingDown, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageCloudBenefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "CAPEX → OPEX",
      description: "대규모 선투자 없이 사용한 만큼만 비용 지불. 스타트업도 대기업 수준의 인프라 사용 가능",
      stat: "평균 TCO 31% 절감",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: TrendingDown,
      title: "규모의 경제",
      description: "수백만 고객이 공유하는 인프라로 단가 하락. AWS는 지속적으로 가격을 인하 (100회 이상)",
      stat: "2006년 대비 가격 90% 이상 인하",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Rocket,
      title: "속도 & 민첩성",
      description: "몇 주 걸리던 인프라 구축이 몇 분으로 단축. 새 아이디어를 빠르게 시험하고 실패해도 OK",
      stat: "배포 주기 최대 46배 빨라짐",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Globe,
      title: "글로벌 즉시 확장",
      description: "AWS 34개 리전을 활용해 몇 분 안에 전 세계 서비스 제공 가능. 해외 법인 서버 불필요",
      stat: "34개 리전, 108개 AZ",
      color: "text-cyan-400",
      cardStyle: "card-tech"
    },
    {
      icon: Shield,
      title: "보안 & 컴플라이언스",
      description: "AWS가 물리 보안·하드웨어 보안 책임. ISO 27001, SOC2, ISMS-P 인증 내장",
      stat: "98개 이상의 보안 인증 보유",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Users,
      title: "혁신에 집중",
      description: "인프라 관리 대신 서비스 개발에 집중. 데이터 분석·AI·ML 서비스를 버튼 하나로 시작",
      stat: "개발 생산성 평균 20% 향상",
      color: "text-orange-400",
      cardStyle: "card-data"
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
      <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

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
              클라우드 도입 이점
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
            비용 절감을 넘어 — 클라우드가 비즈니스를 바꾸는 6가지 방식
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${benefit.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center">
                  <benefit.icon className={`w-12 h-12 mx-auto ${benefit.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">{benefit.description}</p>
                  <div className={`bg-black/20 rounded-xl p-2 text-center border border-white/5`}>
                    <span className={`text-sm font-bold ${benefit.color}`}>{benefit.stat}</span>
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

export default PageCloudBenefits;
