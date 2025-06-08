// src/components/pages/Page03Detail4.tsx (2007-2015: 클라우드 혁명의 선도)
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, Sparkles } from "lucide-react";

const Page03Detail4 = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-24 left-24 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-24 right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />

      <div className="container mx-auto px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main">
              2007-2015: 클라우드 혁명의 선도
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        {/* 메인 콘텐츠 */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 왼쪽: 개요 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20"
          >
            <div className="flex items-center mb-6">
              <TrendingUp className="w-12 h-12 text-green-400 mr-4" />
              <h2 className="text-3xl font-bold text-green-400">시장 지배력 확보</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              AWS는 클라우드 컴퓨팅 시장을 창조하고 선도했습니다.
              스타트업부터 대기업까지 폭넓은 채택을 받으며 클라우드 생태계의 표준을 확립했습니다.
            </p>
            <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-green-400">핵심 성과</h3>
              <p className="text-white leading-relaxed">
                클라우드 생태계의 표준 확립과 혁신 기업들의 성장 지원
              </p>
            </div>
          </motion.div>

          {/* 오른쪽: 상세 사항 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-400">주요 사건</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">EC2, S3 등 핵심 서비스 확장</h3>
                  <p className="text-muted-foreground">점진적인 서비스 포트폴리오 확대와 기능 개선</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">스타트업부터 대기업까지 폭넓은 채택</h3>
                  <p className="text-muted-foreground">다양한 규모의 기업들이 AWS를 도입하기 시작</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Netflix, Airbnb, Uber 등 혁신 기업들의 성장 지원</h3>
                  <p className="text-muted-foreground">유니콘 기업들의 급속한 확장을 기술적으로 뒷받침</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">클라우드 퍼스트 전략의 글로벌 확산</h3>
                  <p className="text-muted-foreground">기업들의 IT 전략에 패러다임 변화를 가져옴</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page03Detail4;