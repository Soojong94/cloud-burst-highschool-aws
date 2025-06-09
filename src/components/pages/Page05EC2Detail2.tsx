// src/components/pages/Page05EC2Detail2.tsx (인스턴스 패밀리)
import { motion } from "framer-motion";
import { Cpu, Database, Zap, HardDrive, Sparkles } from "lucide-react";

const Page05EC2Detail2 = () => {
  const instanceFamilies = [
    {
      family: "범용 (General Purpose)",
      icon: Cpu,
      instances: ["M7i", "M6i", "M5", "T3", "T4g"],
      description: "균형잡힌 컴퓨팅, 메모리, 네트워킹",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      borderColor: "border-blue-500/20",
      useCases: ["웹 서버", "중소규모 DB", "개발환경"]
    },
    {
      family: "컴퓨팅 최적화 (Compute Optimized)",
      icon: Zap,
      instances: ["C7g", "C6i", "C5", "C5n"],
      description: "고성능 프로세서에 최적화",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      borderColor: "border-green-500/20",
      useCases: ["HPC", "배치처리", "게임서버"]
    },
    {
      family: "메모리 최적화 (Memory Optimized)",
      icon: Database,
      instances: ["R7g", "R6i", "R5", "X2iezn"],
      description: "메모리 집약적 워크로드 최적화",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      borderColor: "border-purple-500/20",
      useCases: ["인메모리 DB", "빅데이터", "캐시"]
    },
    {
      family: "스토리지 최적화 (Storage Optimized)",
      icon: HardDrive,
      instances: ["I4i", "I3", "D3", "H1"],
      description: "높은 순차 읽기/쓰기 성능",
      color: "text-orange-400",
      bgColor: "from-orange-900/20 to-orange-800/20",
      borderColor: "border-orange-500/20",
      useCases: ["분산파일시스템", "DW", "MapReduce"]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient-green title-main">
              EC2 인스턴스 패밀리
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            워크로드에 최적화된 다양한 인스턴스 패밀리를 알아보세요
          </p>
        </motion.div>

        {/* 인스턴스 패밀리 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instanceFamilies.map((family, index) => (
            <motion.div
              key={family.family}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${family.bgColor} p-6 rounded-2xl border ${family.borderColor} hover:scale-105 transition-all duration-300`}
            >
              {/* 아이콘과 제목 */}
              <div className="text-center mb-6">
                <family.icon className={`w-16 h-16 ${family.color} mx-auto mb-4`} />
                <h3 className={`text-lg font-bold ${family.color} mb-2`}>
                  {family.family.split(' ')[0]}
                </h3>
                <p className="text-muted-foreground text-sm">{family.description}</p>
              </div>

              {/* 인스턴스 유형 */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 text-sm">주요 인스턴스</h4>
                <div className="flex flex-wrap gap-1">
                  {family.instances.map((instance, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded text-xs ${family.color} bg-slate-800/50`}
                    >
                      {instance}
                    </span>
                  ))}
                </div>
              </div>

              {/* 사용 사례 */}
              <div>
                <h4 className="text-white font-semibold mb-2 text-sm">주요 용도</h4>
                <ul className="space-y-1">
                  {family.useCases.map((useCase, i) => (
                    <li key={i} className="text-muted-foreground text-xs">
                      • {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 가이드 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-3 text-gradient-orange">인스턴스 선택 가이드</h3>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-blue-400 font-semibold">웹 애플리케이션</span>
              <p className="text-muted-foreground">→ 범용 (M5, T3)</p>
            </div>
            <div>
              <span className="text-green-400 font-semibold">고성능 컴퓨팅</span>
              <p className="text-muted-foreground">→ 컴퓨팅 최적화 (C5)</p>
            </div>
            <div>
              <span className="text-purple-400 font-semibold">대용량 데이터</span>
              <p className="text-muted-foreground">→ 메모리 최적화 (R5)</p>
            </div>
            <div>
              <span className="text-orange-400 font-semibold">빅데이터 분석</span>
              <p className="text-muted-foreground">→ 스토리지 최적화 (I3)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page05EC2Detail2;