import { motion } from "framer-motion";
import { Database, RefreshCw, Shield, Copy, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageRDSDetail = () => {
  const features = [
    {
      icon: RefreshCw,
      title: "Multi-AZ 자동 장애 조치",
      description: "Primary DB 장애 시 Standby DB로 자동 전환 (약 60~120초). 데이터 손실 없이 서비스 지속",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Copy,
      title: "Read Replica",
      description: "읽기 전용 복제본을 여러 개 생성. 읽기 쿼리를 분산해 Primary DB 부하를 대폭 감소",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Shield,
      title: "자동 백업",
      description: "매일 자동 스냅샷 + 5분 단위 트랜잭션 로그 백업. 최대 35일까지 특정 시점 복원 가능",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Database,
      title: "Amazon Aurora",
      description: "MySQL/PostgreSQL 호환의 AWS 전용 엔진. 기존 대비 최대 5배 성능, 스토리지 자동 확장 (최대 128TB)",
      color: "text-orange-400",
      cardStyle: "card-neon"
    },
  ];

  const engines = ["MySQL", "PostgreSQL", "MariaDB", "Oracle", "SQL Server", "Aurora"];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-emerald-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

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
              RDS 상세
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-emerald-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-emerald-500/20">
            Relational Database Service — 운영 부담 없이 관계형 DB를 관리형으로 운영
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {engines.map(eng => (
            <span key={eng} className="bg-emerald-900/20 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-sm font-semibold">{eng}</span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${feature.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center">
                  <feature.icon className={`w-12 h-12 mx-auto ${feature.color} mb-4`} />
                  <CardTitle className="text-sm">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-xs text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-emerald-500/20"
        >
          <h3 className="text-lg font-bold text-center text-emerald-400 mb-3">RDS vs EC2에서 직접 DB 설치</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-slate-400 font-semibold mb-2">EC2 + MySQL 직접 설치</p>
              {["OS 패치 직접 관리", "백업 스크립트 직접 작성", "HA 구성 직접 구현", "모니터링 직접 세팅"].map(t => (
                <p key={t} className="text-muted-foreground text-xs">❌ {t}</p>
              ))}
            </div>
            <div className="space-y-1">
              <p className="text-emerald-400 font-semibold mb-2">RDS 관리형 서비스</p>
              {["OS 패치 자동", "자동 백업 내장", "Multi-AZ HA 옵션 클릭", "CloudWatch 연동 기본"].map(t => (
                <p key={t} className="text-white text-xs">✅ {t}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageRDSDetail;
