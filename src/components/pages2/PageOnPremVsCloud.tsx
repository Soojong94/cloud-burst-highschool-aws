import { motion } from "framer-motion";
import { Server, Cloud, CheckCircle, XCircle, Sparkles } from "lucide-react";

const PageOnPremVsCloud = () => {
  const items = [
    { category: "초기 비용", onprem: "수억 원 선구매 (CAPEX)", cloud: "0원, 사용한 만큼 지불 (OPEX)", cloudWin: true },
    { category: "도입 기간", onprem: "3~6개월 (발주·설치·설정)", cloud: "몇 분 만에 서버 생성", cloudWin: true },
    { category: "확장성", onprem: "장비 추가 구매 필요, 몇 주 소요", cloud: "클릭 한 번으로 즉시 확장", cloudWin: true },
    { category: "유지보수", onprem: "전담 인력 필요, 장비 노후화", cloud: "AWS가 하드웨어 관리", cloudWin: true },
    { category: "재해복구", onprem: "별도 DR 사이트 구축 비용 발생", cloud: "다중 AZ 자동 복제 내장", cloudWin: true },
    { category: "글로벌 서비스", onprem: "해외 DC 직접 구축 필요", cloud: "34개 리전 즉시 배포", cloudWin: true },
    { category: "데이터 통제권", onprem: "물리적 완전 통제 가능", cloud: "공동 책임 모델 이해 필요", cloudWin: false },
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
              온프레미스 vs 클라우드
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 헤더 */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="flex items-center gap-2 justify-center bg-slate-800/50 p-3 rounded-xl">
              <span className="text-slate-300 font-semibold text-sm">항목</span>
            </div>
            <div className="flex items-center gap-2 justify-center bg-red-900/20 p-3 rounded-xl border border-red-500/20">
              <Server className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-semibold text-sm">온프레미스</span>
            </div>
            <div className="flex items-center gap-2 justify-center bg-blue-900/20 p-3 rounded-xl border border-blue-500/20">
              <Cloud className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm">클라우드 (AWS)</span>
            </div>
          </div>

          {/* 비교 행 */}
          <div className="space-y-2">
            {items.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-3"
              >
                <div className="bg-slate-800/30 p-3 rounded-xl flex items-center">
                  <span className="text-slate-300 text-sm font-medium">{item.category}</span>
                </div>
                <div className="bg-red-900/10 p-3 rounded-xl border border-red-500/10 flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-xs leading-relaxed">{item.onprem}</span>
                </div>
                <div className={`p-3 rounded-xl border flex items-start gap-2 ${item.cloudWin ? 'bg-blue-900/20 border-blue-500/20' : 'bg-slate-800/30 border-slate-500/20'}`}>
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${item.cloudWin ? 'text-blue-400' : 'text-slate-400'}`} />
                  <span className="text-white text-xs leading-relaxed">{item.cloud}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PageOnPremVsCloud;
