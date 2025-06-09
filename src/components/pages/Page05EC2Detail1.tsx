// src/components/pages/Page05EC2Detail1.tsx (EC2 개요 + 핵심 특징)
import { motion } from "framer-motion";
import { Cpu, CheckCircle, Sparkles, Zap, Shield, Cloud } from "lucide-react";

const Page05EC2Detail1 = () => {
  const coreFeatures = [
    {
      icon: Cpu,
      title: "탄력적 컴퓨팅",
      description: "몇 분 만에 수천 개의 인스턴스 시작 가능",
      color: "text-blue-400"
    },
    {
      icon: Zap,
      title: "완전한 제어",
      description: "루트 액세스 권한으로 인스턴스 완전 제어",
      color: "text-yellow-400"
    },
    {
      icon: Shield,
      title: "보안성",
      description: "입증된 Amazon 네트워크 인프라 활용",
      color: "text-green-400"
    },
    {
      icon: Cloud,
      title: "통합성",
      description: "다른 AWS 서비스와 완벽한 통합",
      color: "text-purple-400"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient-blue title-main">
              Amazon EC2란?
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Amazon Elastic Compute Cloud (EC2)는 클라우드에서 안전하고 크기 조정이 가능한
            컴퓨팅 용량을 제공하는 웹 서비스입니다.
          </p>
        </motion.div>

        {/* 메인 설명 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 mb-12"
        >
          <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">핵심 개념</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">가상 서버</h3>
                  <p className="text-muted-foreground">클라우드에서 실행되는 가상 컴퓨터</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">탄력적 확장</h3>
                  <p className="text-muted-foreground">필요에 따라 즉시 용량 조정</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">사용한 만큼 지불</h3>
                  <p className="text-muted-foreground">실제 사용 시간에 대해서만 요금 부과</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">주요 이점</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">빠른 배포</h3>
                  <p className="text-muted-foreground">몇 분 만에 서버 시작</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">비용 효율성</h3>
                  <p className="text-muted-foreground">하드웨어 투자 없이 시작</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">높은 가용성</h3>
                  <p className="text-muted-foreground">99.95% SLA 보장</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 핵심 특징 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-green">핵심 특징</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-white/10 text-center hover:scale-105 transition-transform duration-300"
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4`} />
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page05EC2Detail1;