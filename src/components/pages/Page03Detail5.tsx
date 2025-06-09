// src/components/pages/Page03Detail5.tsx (2016-현재: AI와 ML의 대중화)
import { motion } from "framer-motion";
import { Users, CheckCircle, Sparkles, TrendingUp, Building2 } from "lucide-react";

const Page03Detail5 = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-purple-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5" />
      <div className="absolute top-24 left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-24 right-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />

      <div className="container mx-auto px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-purple title-main">
              2016-현재: AI와 ML의 대중화
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-pink-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        {/* 메인 콘텐츠 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-8">
          {/* 왼쪽: 개요 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
          >
            <div className="flex items-center mb-6">
              <Users className="w-12 h-12 text-purple-400 mr-4" />
              <h2 className="text-3xl font-bold text-purple-400">AI 시대 선도</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Amazon은 Alexa를 통해 AI를 일상에 도입했고, AWS를 통해 기업용 AI/ML 서비스를 제공하기 시작했습니다.
              전 세계 클라우드 시장 점유율 1위를 유지하며 생성형 AI 시대의 리더십을 확보했습니다.
            </p>
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-purple-400">핵심 성과</h3>
              <p className="text-white leading-relaxed">
                AI 기술의 대중화와 혁신 가속화를 통한 차세대 기술 선도
              </p>
            </div>
          </motion.div>

          {/* 오른쪽: 상세 사항 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-pink-400">주요 사건</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">SageMaker, Rekognition, Comprehend 등 AI 서비스 출시</h3>
                  <p className="text-muted-foreground">기업들이 쉽게 AI를 도입할 수 있는 서비스 제공</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">AI 기술의 민주화 선도</h3>
                  <p className="text-muted-foreground">전문가가 아니어도 AI를 활용할 수 있는 환경 구축</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">전 세계 클라우드 시장 점유율 1위 유지</h3>
                  <p className="text-muted-foreground">지속적인 혁신으로 시장 리더십 공고화</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">생성형 AI 시대의 리더십 확보</h3>
                  <p className="text-muted-foreground">Bedrock 등으로 차세대 AI 기술 시장 선점</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 하단 성공 요소 요약 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-2xl border border-purple-500/20"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gradient-purple">
            Amazon 성공의 핵심 요소
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">고객 중심</h3>
              <p className="text-muted-foreground text-sm">
                "Customer Obsession"을 핵심 가치로 삼아 지속적으로 고객 경험을 개선
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">장기적 비전</h3>
              <p className="text-muted-foreground text-sm">
                단기 수익보다 장기적 성장에 집중하며 혁신적 기술에 지속 투자
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">혁신 문화</h3>
              <p className="text-muted-foreground text-sm">
                실패를 두려워하지 않는 혁신 문화와 빠른 실험을 통한 학습
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page03Detail5;