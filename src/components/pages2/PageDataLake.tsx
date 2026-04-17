import { motion } from "framer-motion";
import { Database, Filter, Search, BarChart3, Sparkles } from "lucide-react";

const PageDataLake = () => {
  const stages = [
    {
      step: "1. 수집",
      icon: Database,
      color: "text-blue-400",
      bg: "from-blue-900/20 to-blue-800/20",
      border: "border-blue-500/20",
      services: ["Kinesis Data Streams", "Kinesis Firehose", "AWS DMS (DB 마이그레이션)", "IoT Core"],
      desc: "실시간 스트림·배치·DB 변경분을 수집"
    },
    {
      step: "2. 저장",
      icon: Database,
      color: "text-green-400",
      bg: "from-green-900/20 to-green-800/20",
      border: "border-green-500/20",
      services: ["S3 (원본 저장, 무제한)", "S3 Intelligent-Tiering", "S3 Glacier (아카이브)"],
      desc: "모든 형태의 데이터를 원본 그대로 저장"
    },
    {
      step: "3. 카탈로그",
      icon: Filter,
      color: "text-orange-400",
      bg: "from-orange-900/20 to-orange-800/20",
      border: "border-orange-500/20",
      services: ["AWS Glue (ETL·크롤러)", "Glue Data Catalog", "Lake Formation (거버넌스)"],
      desc: "데이터 스키마 파악, 변환, 접근 제어"
    },
    {
      step: "4. 분석",
      icon: Search,
      color: "text-purple-400",
      bg: "from-purple-900/20 to-purple-800/20",
      border: "border-purple-500/20",
      services: ["Amazon Athena (서버리스 SQL)", "Redshift Spectrum", "EMR (Spark·Hadoop)"],
      desc: "서버 없이 S3 데이터에 SQL 쿼리 실행"
    },
    {
      step: "5. 시각화",
      icon: BarChart3,
      color: "text-cyan-400",
      bg: "from-cyan-900/20 to-cyan-800/20",
      border: "border-cyan-500/20",
      services: ["Amazon QuickSight (BI 대시보드)", "Grafana (운영 모니터링)", "Jupyter (데이터 과학)"],
      desc: "비즈니스 인사이트를 차트·대시보드로 표현"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-indigo-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl float-animation" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">
              데이터 레이크
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-indigo-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-indigo-500/20">
            수집 → 저장(S3) → 카탈로그(Glue) → 분석(Athena) → 시각화(QuickSight)
          </p>
        </motion.div>

        {/* 파이프라인 흐름 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center justify-center gap-2 flex-wrap"
        >
          {stages.map((stage, i) => (
            <div key={stage.step} className="flex items-center gap-2">
              <div className={`bg-gradient-to-br ${stage.bg} border ${stage.border} px-3 py-1.5 rounded-xl`}>
                <span className={`text-xs font-bold ${stage.color}`}>{stage.step}</span>
              </div>
              {i < stages.length - 1 && <span className="text-slate-500 text-lg">→</span>}
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.step}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${stage.bg} border ${stage.border} p-4 rounded-2xl hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="text-center mb-3">
                <stage.icon className={`w-8 h-8 mx-auto ${stage.color} mb-2`} />
                <p className={`text-xs font-bold ${stage.color} mb-1`}>{stage.step}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{stage.desc}</p>
              </div>
              <div className="space-y-1">
                {stage.services.map(s => (
                  <div key={s} className="bg-black/20 rounded-lg px-2 py-1">
                    <p className="text-white text-xs font-mono">{s}</p>
                  </div>
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
          className="mt-6 bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-indigo-500/20 text-center"
        >
          <p className="text-white">
            🇰🇷 <span className="text-indigo-400 font-bold">현대자동차</span>: 전 세계 공장 센서 데이터 → S3 Data Lake → Athena 분석 → 예지 정비 AI
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageDataLake;
