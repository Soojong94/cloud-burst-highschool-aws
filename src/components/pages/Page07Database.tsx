import { motion } from "framer-motion";
import { Database, Zap, Shield, Code, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page07Database = () => {
  const databases = [
    {
      icon: Database,
      title: "RDS",
      description: "관계형 데이터베이스 서비스",
      detail: "MySQL, PostgreSQL, Oracle 지원",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Zap,
      title: "DynamoDB",
      description: "NoSQL 데이터베이스",
      detail: "완전 관리형 키-값 데이터베이스",
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
      detail: "소셜 네트워킹, 추천 엔진 최적화",
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
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-28 left-28 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-28 right-28 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">
              AWS 데이터베이스 서비스
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
            다양한 워크로드에 최적화된 완전 관리형 데이터베이스 서비스
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </motion.section>
  );
};

export default Page07Database;