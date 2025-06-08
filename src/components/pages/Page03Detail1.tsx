// src/components/pages/Page03Detail1.tsx (1994-1997: 온라인 서점의 탄생)
import { motion } from "framer-motion";
import { Building2, CheckCircle, Sparkles } from "lucide-react";

const Page03Detail1 = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-orange-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5" />
      <div className="absolute top-24 left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-24 right-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />

      <div className="container mx-auto px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-orange title-main">
              1994-1997: 온라인 서점의 탄생
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-red-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        {/* 메인 콘텐츠 */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 왼쪽: 개요 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20"
          >
            <div className="flex items-center mb-6">
              <Building2 className="w-12 h-12 text-orange-400 mr-4" />
              <h2 className="text-3xl font-bold text-orange-400">창업의 시작</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Jeff Bezos는 인터넷 사용량이 연간 2300% 증가한다는 통계를 보고 온라인 비즈니스의 가능성을 확신했습니다.
              1994년 시애틀의 차고에서 Amazon.com을 창립하며 온라인 상거래 혁명의 첫걸음을 내딛었습니다.
            </p>
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-orange-400">핵심 성과</h3>
              <p className="text-white leading-relaxed">
                온라인 상거래의 새로운 가능성을 제시하며 '지구상의 모든 것을 파는 상점'이라는 비전을 수립했습니다.
              </p>
            </div>
          </motion.div>

          {/* 오른쪽: 상세 사항 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-red-500/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-red-400">주요 사건</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">시애틀의 차고에서 Amazon.com 창립</h3>
                  <p className="text-muted-foreground">작은 시작이지만 큰 꿈을 품고 온라인 서점 사업을 시작</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">처음에는 책만 판매, 점진적으로 카테고리 확장</h3>
                  <p className="text-muted-foreground">책이라는 표준화된 상품으로 시작하여 점차 영역을 확대</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">'지구상의 모든 것을 파는 상점'이라는 비전 수립</h3>
                  <p className="text-muted-foreground">단순한 온라인 서점을 넘어선 거대한 비전을 제시</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">1997년 주식 상장 당시 주가 18달러</h3>
                  <p className="text-muted-foreground">나스닥 상장으로 성장을 위한 자본 확보</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page03Detail1;