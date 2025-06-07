import { motion } from "framer-motion";
import { Database, Zap, Shield, Code, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page07Database = () => {
  const databases = [
    {
      icon: Database,
      title: "RDS",
      description: "관계형 데이터베이스 서비스",
      detail: "MySQL, PostgreSQL, Oracle, SQL Server 지원",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Zap,
      title: "DynamoDB",
      description: "NoSQL 데이터베이스",
      detail: "완전 관리형 키-값 및 문서 데이터베이스",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Shield,
      title: "ElastiCache",
      description: "인메모리 캐시",
      detail: "Redis와 Memcached 지원",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Code,
      title: "Neptune",
      description: "그래프 데이터베이스",
      detail: "소셜 네트워킹, 추천 엔진에 최적화",
      color: "text-purple-400",
      cardStyle: "card-ai"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-28 left-28 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-28 right-28 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-blue title-main title-section">
              AWS 데이터베이스 서비스
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
            다양한 워크로드에 최적화된 완전 관리형 데이터베이스 서비스를 제공합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {databases.map((db, index) => (
            <motion.div
              key={db.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${db.cardStyle} hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <db.icon className={`w-12 h-12 mx-auto ${db.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{db.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-2">{db.description}</p>
                  <p className="text-sm text-muted-foreground text-center">{db.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-500/80 hover:to-purple-500/80 pulse-glow">
                데이터베이스 선택 가이드
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-card to-background border-blue-500/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient-blue">데이터베이스 서비스 선택 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="dialog-section-blue">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">관계형 데이터베이스 (RDS)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    ACID 트랜잭션이 필요한 애플리케이션에 적합합니다.
                    전자상거래, ERP, CRM 시스템 등에서 주로 사용됩니다.
                    자동 백업, 패치 관리, 모니터링 등의 기능을 제공합니다.
                  </p>
                </div>
                <div className="dialog-section-yellow">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">NoSQL 데이터베이스 (DynamoDB)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    높은 확장성과 성능이 필요한 애플리케이션에 적합합니다.
                    모바일 앱, 웹 애플리케이션, 게임, IoT 등에서 사용됩니다.
                    서버리스 아키텍처와 완벽하게 통합됩니다.
                  </p>
                </div>
                <div className="dialog-section-green">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">캐시 (ElastiCache)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    애플리케이션 성능 향상을 위한 인메모리 캐싱 솔루션입니다.
                    세션 스토어, 실시간 분석, 게임 리더보드 등에 활용됩니다.
                  </p>
                </div>
                <div className="dialog-section-purple">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">그래프 데이터베이스 (Neptune)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    복잡한 관계를 다루는 애플리케이션에 적합합니다.
                    소셜 네트워킹, 추천 시스템, 사기 탐지, 지식 그래프 등에 사용됩니다.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page07Database;