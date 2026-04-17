import { motion } from "framer-motion";
import { Banknote, Heart, Factory, ShoppingCart, Sparkles } from "lucide-react";

const PageIndustryUseCases = () => {
  const industries = [
    {
      icon: Banknote,
      title: "금융 · 핀테크",
      color: "text-yellow-400",
      bg: "from-yellow-900/20 to-yellow-800/20",
      border: "border-yellow-500/20",
      usecases: [
        { name: "인터넷뱅킹", detail: "24/7 고가용성 아키텍처, Multi-AZ RDS" },
        { name: "실시간 사기 탐지", detail: "ML 모델이 거래 즉시 이상 패턴 감지" },
        { name: "로보어드바이저", detail: "개인 맞춤 투자 포트폴리오 AI 추천" },
        { name: "ISMS-P 규정 준수", detail: "CloudTrail·Config로 감사 로그 자동화" },
      ],
      kcase: "신한은행 AI 신용 심사, 카카오뱅크 서버리스 뱅킹"
    },
    {
      icon: Heart,
      title: "의료 · 헬스케어",
      color: "text-red-400",
      bg: "from-red-900/20 to-red-800/20",
      border: "border-red-500/20",
      usecases: [
        { name: "의료 영상 AI 분석", detail: "CT·MRI 이미지에서 이상 소견 자동 탐지" },
        { name: "원격 진료 플랫폼", detail: "화상 상담 + 전자의무기록 클라우드 저장" },
        { name: "유전체 분석", detail: "수TB 유전자 데이터 병렬 분석 (AWS Batch)" },
        { name: "보건 데이터 플랫폼", detail: "공공 보건 통계 실시간 대시보드" },
      ],
      kcase: "서울아산병원 AI 진단 보조, 닥터나우 원격 진료"
    },
    {
      icon: Factory,
      title: "제조 · 스마트팩토리",
      color: "text-cyan-400",
      bg: "from-cyan-900/20 to-cyan-800/20",
      border: "border-cyan-500/20",
      usecases: [
        { name: "예지 정비 (PdM)", detail: "센서 데이터로 설비 고장 사전 예측" },
        { name: "품질 비전 검사", detail: "카메라 + ML로 불량품 실시간 분류" },
        { name: "공급망 최적화", detail: "재고·물류 데이터 통합 분석" },
        { name: "디지털 트윈", detail: "공장 전체를 가상 시뮬레이션" },
      ],
      kcase: "삼성전자 SmartThings, 현대차 차량 데이터 플랫폼"
    },
    {
      icon: ShoppingCart,
      title: "유통 · 이커머스",
      color: "text-green-400",
      bg: "from-green-900/20 to-green-800/20",
      border: "border-green-500/20",
      usecases: [
        { name: "플래시 세일 대응", detail: "Auto Scaling으로 트래픽 급증 즉시 대응" },
        { name: "개인화 추천", detail: "구매 이력 기반 실시간 상품 추천 AI" },
        { name: "물류 경로 최적화", detail: "배송 경로·재고 배치 AI 최적화" },
        { name: "글로벌 결제", detail: "멀티 리전 결제 시스템, PCI DSS 준수" },
      ],
      kcase: "쿠팡 AWS 전면 전환, 배달의민족 Auto Scaling"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-pattern-grid relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main title-section">
              산업별 클라우드 활용
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-green-500/20">
            클라우드는 특정 산업의 전유물이 아닙니다 — 모든 분야에서 혁신이 일어나고 있습니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${ind.bg} p-5 rounded-2xl border ${ind.border} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <ind.icon className={`w-8 h-8 ${ind.color}`} />
                <h3 className={`text-base font-bold ${ind.color}`}>{ind.title}</h3>
              </div>

              <div className="space-y-2 mb-4">
                {ind.usecases.map((uc) => (
                  <div key={uc.name} className="bg-black/20 rounded-lg p-2">
                    <p className={`text-xs font-semibold ${ind.color} mb-0.5`}>{uc.name}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{uc.detail}</p>
                  </div>
                ))}
              </div>

              <div className="bg-black/30 rounded-xl p-2 border border-white/5">
                <p className="text-xs text-slate-400 mb-1">🇰🇷 한국 사례</p>
                <p className={`text-xs ${ind.color} font-medium`}>{ind.kcase}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageIndustryUseCases;
