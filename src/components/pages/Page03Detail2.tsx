// src/components/pages/Page03Detail2.tsx (1998-2002: 카테고리 확장과 도전)
import { motion } from "framer-motion";
import { TrendingDown, CheckCircle, Sparkles } from "lucide-react";

const Page03Detail2 = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-24 left-24 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-24 right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />

      <div className="container mx-auto px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-red title-main">
              1998-2002: 카테고리 확장과 도전
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        {/* 메인 콘텐츠 */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 왼쪽: 개요 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-red-500/20"
          >
            <div className="flex items-center mb-6">
              <TrendingDown className="w-12 h-12 text-red-400 mr-4" />
              <h2 className="text-3xl font-bold text-red-400">위기와 성장</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Amazon은 음악, DVD, 전자제품, 장난감 등으로 카테고리를 확장했습니다.
              하지만 닷컴 버블 붕괴로 주가가 94% 하락하는 심각한 위기를 겪었습니다.
            </p>
            <div className="bg-gradient-to-br from-red-900/20 to-purple-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-red-400">핵심 성과</h3>
              <p className="text-white leading-relaxed">
                위기 극복을 통한 기업 문화 강화와 'Customer Obsession' 핵심 가치 확립
              </p>
            </div>
          </motion.div>

          {/* 오른쪽: 상세 사항 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-purple-400">주요 사건</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">닷컴 버블 붕괴로 주가 94% 하락하는 위기</h3>
                  <p className="text-muted-foreground">투자자들의 신뢰 상실과 극심한 재정적 어려움 직면</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">고객 중심 철학과 장기적 비전 유지</h3>
                  <p className="text-muted-foreground">단기 수익보다 장기적 성장에 집중하는 철학 고수</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">'Customer Obsession' 핵심 가치 확립</h3>
                  <p className="text-muted-foreground">고객 만족을 최우선으로 하는 기업 문화 정착</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">시장 점유율 확대를 위한 공격적 투자</h3>
                  <p className="text-muted-foreground">위기 상황에서도 미래를 위한 투자를 지속</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page03Detail2;