import { motion } from "framer-motion";
import { Database, Zap, Shield, ArrowRight, Sparkles } from "lucide-react";

const Page07DatabaseDetail = () => {
  const comparisons = [
    {
      type: "관계형 DB (RDS)",
      icon: Database,
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      features: ["ACID 트랜잭션", "SQL 쿼리", "정형 데이터", "복잡한 관계"],
      useCases: ["전자상거래", "ERP 시스템", "CRM", "재무 시스템"],
      engines: ["MySQL", "PostgreSQL", "Oracle", "SQL Server"]
    },
    {
      type: "NoSQL (DynamoDB)",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "from-yellow-900/20 to-yellow-800/20",
      features: ["확장성", "유연한 스키마", "빠른 성능", "자동 확장"],
      useCases: ["모바일 앱", "게임", "IoT", "실시간 웹"],
      engines: ["Key-Value", "Document", "Wide Column", "Graph"]
    },
    {
      type: "인메모리 (ElastiCache)",
      icon: Shield,
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      features: ["초고속 액세스", "캐싱", "세션 스토어", "실시간"],
      useCases: ["웹 캐시", "세션 관리", "리더보드", "실시간 분석"],
      engines: ["Redis", "Memcached", "In-Memory", "Real-time"]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-purple-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main">
              데이터베이스 선택 가이드
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {comparisons.map((db, index) => (
            <motion.div
              key={db.type}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`bg-gradient-to-br ${db.bgColor} p-6 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-6">
                <db.icon className={`w-16 h-16 ${db.color} mx-auto mb-4`} />
                <h3 className={`text-xl font-bold ${db.color} mb-2`}>{db.type}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm">주요 특징</h4>
                  <div className="space-y-1">
                    {db.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <ArrowRight className="w-3 h-3 text-muted-foreground mr-2" />
                        <span className="text-muted-foreground text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm">적합한 용도</h4>
                  <div className="space-y-1">
                    {db.useCases.map((useCase, i) => (
                      <div key={i} className="bg-slate-800/50 p-2 rounded text-center">
                        <span className="text-white text-xs">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2 text-sm">지원 엔진</h4>
                  <div className="flex flex-wrap gap-1">
                    {db.engines.map((engine, i) => (
                      <span key={i} className={`px-2 py-1 rounded text-xs ${db.color} bg-slate-800/50`}>
                        {engine}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page07DatabaseDetail;