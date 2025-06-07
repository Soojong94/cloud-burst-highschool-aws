
import { motion } from "framer-motion";
import { Database, Zap, Shield, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page07Database = () => {
  const databases = [
    {
      icon: Database,
      title: "RDS",
      description: "관계형 데이터베이스 서비스",
      detail: "MySQL, PostgreSQL, Oracle, SQL Server 지원"
    },
    {
      icon: Zap,
      title: "DynamoDB",
      description: "NoSQL 데이터베이스",
      detail: "완전 관리형 키-값 및 문서 데이터베이스"
    },
    {
      icon: Shield,
      title: "ElastiCache",
      description: "인메모리 캐시",
      detail: "Redis와 Memcached 지원"
    },
    {
      icon: Code,
      title: "Neptune",
      description: "그래프 데이터베이스",
      detail: "소셜 네트워킹, 추천 엔진에 최적화"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AWS 데이터베이스 서비스</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <db.icon className="w-12 h-12 mx-auto text-primary mb-4" />
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
              <Button size="lg" className="text-lg px-8 py-4">
                데이터베이스 선택 가이드
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">데이터베이스 서비스 선택 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">관계형 데이터베이스 (RDS)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    ACID 트랜잭션이 필요한 애플리케이션에 적합합니다. 
                    전자상거래, ERP, CRM 시스템 등에서 주로 사용됩니다. 
                    자동 백업, 패치 관리, 모니터링 등의 기능을 제공합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">NoSQL 데이터베이스 (DynamoDB)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    높은 확장성과 성능이 필요한 애플리케이션에 적합합니다. 
                    모바일 앱, 웹 애플리케이션, 게임, IoT 등에서 사용됩니다. 
                    서버리스 아키텍처와 완벽하게 통합됩니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">캐시 (ElastiCache)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    애플리케이션 성능 향상을 위한 인메모리 캐싱 솔루션입니다. 
                    세션 스토어, 실시간 분석, 게임 리더보드 등에 활용됩니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">그래프 데이터베이스 (Neptune)</h3>
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
