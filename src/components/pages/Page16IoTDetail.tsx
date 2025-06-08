import { motion } from "framer-motion";
import { Factory, Building, Leaf, Car, Sparkles } from "lucide-react";

const Page16IoTDetail = () => {
  const iotSolutions = [
    {
      icon: Factory,
      title: "스마트 팩토리",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      devices: ["센서", "컨베이어", "로봇팔", "RFID"],
      analytics: ["예측 유지보수", "품질 관리", "생산 최적화", "에너지 절약"],
      description: "제조 장비의 센서 데이터로 생산성 향상"
    },
    {
      icon: Building,
      title: "스마트 시티",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      devices: ["교통 센서", "환경 모니터", "CCTV", "가로등"],
      analytics: ["교통 최적화", "환경 측정", "안전 관리", "에너지 관리"],
      description: "도시 인프라를 지능적으로 관리"
    },
    {
      icon: Leaf,
      title: "스마트 농업",
      color: "text-cyan-400",
      bgColor: "from-cyan-900/20 to-cyan-800/20",
      devices: ["토양 센서", "온습도계", "카메라", "드론"],
      analytics: ["작물 모니터링", "관개 자동화", "수확량 예측", "병해충 탐지"],
      description: "농업 생산성과 지속가능성 향상"
    },
    {
      icon: Car,
      title: "커넥티드 카",
      color: "text-orange-400",
      bgColor: "from-orange-900/20 to-orange-800/20",
      devices: ["GPS", "가속도계", "카메라", "레이더"],
      analytics: ["운전 패턴", "연료 효율", "안전 분석", "예측 정비"],
      description: "차량과 인프라의 연결된 서비스"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-cyan-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-green-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-cyan title-main">
              IoT 솔루션 가이드
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-cyan-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-green-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {iotSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${solution.bgColor} p-4 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <solution.icon className={`w-12 h-12 ${solution.color} mx-auto mb-3`} />
                <h3 className={`text-lg font-bold ${solution.color} mb-2`}>{solution.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {solution.description}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">IoT 디바이스</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {solution.devices.map((device, i) => (
                      <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                        <span className="text-white text-xs">{device}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">분석 및 활용</h4>
                  <div className="space-y-1">
                    {solution.analytics.map((analytic, i) => (
                      <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                        <span className="text-muted-foreground text-xs">{analytic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 IoT 아키텍처 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-4 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-3 text-center text-gradient-cyan">IoT 아키텍처 계층</h3>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <span className="text-cyan-400 font-semibold">디바이스</span>
              <p className="text-muted-foreground text-xs">센서 & 액추에이터</p>
            </div>
            <div className="text-center">
              <span className="text-blue-400 font-semibold">연결</span>
              <p className="text-muted-foreground text-xs">통신 프로토콜</p>
            </div>
            <div className="text-center">
              <span className="text-green-400 font-semibold">처리</span>
              <p className="text-muted-foreground text-xs">데이터 분석</p>
            </div>
            <div className="text-center">
              <span className="text-orange-400 font-semibold">응용</span>
              <p className="text-muted-foreground text-xs">비즈니스 로직</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page16IoTDetail;