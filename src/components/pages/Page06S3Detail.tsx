import { motion } from "framer-motion";
import { Database, Clock, Snowflake, Archive, Sparkles } from "lucide-react";

const Page06S3Detail = () => {
  const storageClasses = [
    {
      icon: Database,
      name: "Standard",
      description: "자주 액세스하는 데이터",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      features: ["즉시 액세스", "99.9% 가용성", "높은 내구성"]
    },
    {
      icon: Clock,
      name: "Infrequent Access",
      description: "가끔 액세스하는 데이터",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      features: ["저렴한 비용", "빠른 액세스", "백업 용도"]
    },
    {
      icon: Snowflake,
      name: "Glacier",
      description: "장기 아카이브",
      color: "text-cyan-400",
      bgColor: "from-cyan-900/20 to-cyan-800/20",
      features: ["매우 저렴", "분~시간 복원", "규정 준수"]
    },
    {
      icon: Archive,
      name: "Deep Archive",
      description: "최장기 보관",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      features: ["최저 비용", "12시간 복원", "테이프 대체"]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-orange-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-orange title-main">
              S3 스토리지 클래스
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            데이터 액세스 패턴에 따른 최적화된 스토리지 옵션
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storageClasses.map((storageClass, index) => (
            <motion.div
              key={storageClass.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${storageClass.bgColor} p-6 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-6">
                <storageClass.icon className={`w-16 h-16 ${storageClass.color} mx-auto mb-4`} />
                <h3 className={`text-xl font-bold ${storageClass.color} mb-2`}>
                  {storageClass.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {storageClass.description}
                </p>
              </div>

              <div className="space-y-2">
                {storageClass.features.map((feature, i) => (
                  <div key={i} className="bg-slate-800/50 p-2 rounded text-center">
                    <span className="text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 사용 가이드 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-6 rounded-2xl border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gradient-orange">스토리지 클래스 선택 가이드</h3>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <span className="text-blue-400 font-semibold">웹사이트/앱</span>
              <p className="text-muted-foreground">→ Standard</p>
            </div>
            <div className="text-center">
              <span className="text-green-400 font-semibold">백업</span>
              <p className="text-muted-foreground">→ IA</p>
            </div>
            <div className="text-center">
              <span className="text-cyan-400 font-semibold">아카이브</span>
              <p className="text-muted-foreground">→ Glacier</p>
            </div>
            <div className="text-center">
              <span className="text-purple-400 font-semibold">장기보관</span>
              <p className="text-muted-foreground">→ Deep Archive</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page06S3Detail;