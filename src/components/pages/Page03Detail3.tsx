// src/components/pages/Page03Detail3.tsx (2003-2006: AWS의 기반 구축)
import { motion } from "framer-motion";
import { Users, CheckCircle, Sparkles } from "lucide-react";

const Page03Detail3 = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-24 left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-24 right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />

      <div className="container mx-auto px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main">
              2003-2006: AWS의 기반 구축
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        {/* 메인 콘텐츠 */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 왼쪽: 개요 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20"
          >
            <div className="flex items-center mb-6">
              <Users className="w-12 h-12 text-blue-400 mr-4" />
              <h2 className="text-3xl font-bold text-blue-400">클라우드의 시작</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Amazon의 급속한 성장으로 인해 확장 가능한 인프라가 필요해졌습니다.
              내부적으로 개발한 분산 컴퓨팅 인프라의 효율성을 깨닫고 외부 서비스로 제공하기로 결정했습니다.
            </p>
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-blue-400">핵심 성과</h3>
              <p className="text-white leading-relaxed">
                클라우드 컴퓨팅 혁명의 시작과 AWS 공식 출시 (S3, EC2)
              </p>
            </div>
          </motion.div>

          {/* 오른쪽: 상세 사항 */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">주요 사건</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">내부적으로 분산 컴퓨팅 인프라 개발</h3>
                  <p className="text-muted-foreground">급속한 성장에 대응하기 위한 확장 가능한 시스템 구축</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">인프라의 효율성을 깨닫고 외부 서비스로 제공 결정</h3>
                  <p className="text-muted-foreground">내부 솔루션의 가치를 인식하고 비즈니스 기회로 전환</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">2006년 AWS 공식 출시 (S3, EC2)</h3>
                  <p className="text-muted-foreground">Simple Storage Service와 Elastic Compute Cloud 서비스 시작</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">클라우드 컴퓨팅 시장의 개척자 역할</h3>
                  <p className="text-muted-foreground">새로운 산업 분야를 창조하고 시장을 선도</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page03Detail3;