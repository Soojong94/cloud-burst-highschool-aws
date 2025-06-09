import { motion } from "framer-motion";
import { Database, Zap, BarChart3, Search, Sparkles } from "lucide-react";

const Page15AnalyticsDetail = () => {
  const analyticsPatterns = [
    {
      icon: Database,
      title: "데이터 레이크",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      components: ["S3", "Glue", "Athena", "QuickSight"],
      workflow: ["데이터 수집", "ETL 처리", "쿼리 분석", "시각화"],
      description: "모든 형태의 데이터를 저장하고 분석"
    },
    {
      icon: Zap,
      title: "실시간 분석",
      color: "text-yellow-400",
      bgColor: "from-yellow-900/20 to-yellow-800/20",
      components: ["Kinesis", "Lambda", "DynamoDB", "CloudWatch"],
      workflow: ["스트림 수집", "실시간 처리", "결과 저장", "알람 발송"],
      description: "실시간 데이터 스트림 처리 및 분석"
    },
    {
      icon: BarChart3,
      title: "데이터 웨어하우스",
      color: "text-red-400",
      bgColor: "from-red-900/20 to-red-800/20",
      components: ["Redshift", "S3", "Glue", "QuickSight"],
      workflow: ["데이터 로드", "스키마 정의", "집계 분석", "보고서 생성"],
      description: "구조화된 데이터의 대규모 분석"
    },
    {
      icon: Search,
      title: "검색 및 로그",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      components: ["Elasticsearch", "Kibana", "CloudWatch", "Lambda"],
      workflow: ["로그 수집", "인덱싱", "검색 쿼리", "대시보드"],
      description: "로그 분석과 전문 검색 서비스"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-yellow-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-orange title-main">
              데이터 분석 아키텍처
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {analyticsPatterns.map((pattern, index) => (
            <motion.div
              key={pattern.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${pattern.bgColor} p-4 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <pattern.icon className={`w-12 h-12 ${pattern.color} mx-auto mb-3`} />
                <h3 className={`text-lg font-bold ${pattern.color} mb-2`}>{pattern.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {pattern.description}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">주요 구성요소</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {pattern.components.map((component, i) => (
                      <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                        <span className="text-white text-xs">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">처리 흐름</h4>
                  <div className="space-y-1">
                    {pattern.workflow.map((step, i) => (
                      <div key={i} className="bg-slate-700/50 p-1 rounded text-center flex items-center">
                        <span className={`w-4 h-4 rounded-full ${pattern.color.replace('text-', 'bg-')} mr-2 text-xs flex items-center justify-center text-black font-bold`}>
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground text-xs">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 분석 트렌드 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-4 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-3 text-center text-gradient-orange">데이터 분석 트렌드</h3>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <span className="text-blue-400 font-semibold">실시간 분석</span>
              <p className="text-muted-foreground text-xs">스트리밍 데이터</p>
            </div>
            <div className="text-center">
              <span className="text-yellow-400 font-semibold">자동화 ML</span>
              <p className="text-muted-foreground text-xs">AutoML 파이프라인</p>
            </div>
            <div className="text-center">
              <span className="text-red-400 font-semibold">서버리스</span>
              <p className="text-muted-foreground text-xs">관리 부담 최소화</p>
            </div>
            <div className="text-center">
              <span className="text-green-400 font-semibold">시각화</span>
              <p className="text-muted-foreground text-xs">인터랙티브 대시보드</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page15AnalyticsDetail;