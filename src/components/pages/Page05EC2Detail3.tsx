// src/components/pages/Page05EC2Detail3.tsx (요금 모델)
import { motion } from "framer-motion";
import { DollarSign, Clock, TrendingDown, Calendar, Sparkles, CheckCircle } from "lucide-react";

const Page05EC2Detail3 = () => {
  const pricingModels = [
    {
      model: "온디맨드",
      icon: Clock,
      description: "시간당 요금, 약정 없음",
      discount: "기준가격",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      borderColor: "border-blue-500/20",
      benefits: ["즉시 사용 가능", "예측 불가능한 워크로드", "초기 투자 없음"],
      bestFor: "개발/테스트, 단기 프로젝트"
    },
    {
      model: "예약 인스턴스",
      icon: Calendar,
      description: "1-3년 약정으로 할인",
      discount: "최대 72% 할인",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      borderColor: "border-green-500/20",
      benefits: ["큰 할인율", "용량 예약", "안정적 비용"],
      bestFor: "프로덕션 환경, 일정한 사용량"
    },
    {
      model: "스팟 인스턴스",
      icon: TrendingDown,
      description: "여유 용량을 경매로 제공",
      discount: "최대 90% 할인",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      borderColor: "border-purple-500/20",
      benefits: ["최대 할인율", "대용량 처리", "자동 확장"],
      bestFor: "배치 처리, 내결함성 워크로드"
    },
    {
      model: "Savings Plans",
      icon: DollarSign,
      description: "유연한 사용량 약정",
      discount: "최대 72% 할인",
      color: "text-orange-400",
      bgColor: "from-orange-900/20 to-orange-800/20",
      borderColor: "border-orange-500/20",
      benefits: ["유연한 변경", "자동 적용", "다양한 서비스"],
      bestFor: "다양한 인스턴스 사용, 성장하는 워크로드"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-orange-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-green-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient-orange title-main">
              EC2 요금 모델
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-green-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            워크로드에 맞는 최적의 요금 모델을 선택하여 비용을 최적화하세요
          </p>
        </motion.div>

        {/* 요금 모델 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingModels.map((model, index) => (
            <motion.div
              key={model.model}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${model.bgColor} p-6 rounded-2xl border ${model.borderColor} hover:scale-105 transition-all duration-300`}
            >
              {/* 아이콘과 제목 */}
              <div className="text-center mb-4">
                <model.icon className={`w-12 h-12 ${model.color} mx-auto mb-3`} />
                <h3 className={`text-lg font-bold ${model.color} mb-1`}>{model.model}</h3>
                <p className="text-muted-foreground text-sm mb-2">{model.description}</p>
                <div className={`${model.color} font-bold text-sm bg-slate-800/50 px-3 py-1 rounded-full inline-block`}>
                  {model.discount}
                </div>
              </div>

              {/* 주요 장점 */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 text-sm">주요 장점</h4>
                <ul className="space-y-1">
                  {model.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-xs">
                      <CheckCircle className={`w-3 h-3 ${model.color} mr-2 flex-shrink-0`} />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 적합한 사용 */}
              <div className="bg-slate-800/30 p-3 rounded-lg">
                <h4 className="text-white font-semibold mb-1 text-sm">적합한 용도</h4>
                <p className="text-muted-foreground text-xs">{model.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 비용 최적화 팁 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-8 rounded-2xl border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gradient-green">비용 최적화 전략</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingDown className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-semibold mb-2 text-blue-400">모니터링</h4>
              <p className="text-muted-foreground text-sm">CloudWatch로 사용량 추적하고 적절한 인스턴스 크기 선택</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="font-semibold mb-2 text-green-400">예약 전략</h4>
              <p className="text-muted-foreground text-sm">안정적 워크로드는 예약 인스턴스나 Savings Plans 활용</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold mb-2 text-purple-400">혼합 사용</h4>
              <p className="text-muted-foreground text-sm">온디맨드 + 스팟 + 예약 인스턴스를 조합하여 최적화</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page05EC2Detail3;