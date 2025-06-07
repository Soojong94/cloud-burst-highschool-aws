import { motion } from "framer-motion";
import { Cloud, Sparkles } from "lucide-react";

const Page01Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 relative"
        >
          <Cloud className="w-24 h-24 mx-auto text-primary mb-6 drop-shadow-lg pulse-glow" />
          <Sparkles className="w-8 h-8 absolute top-0 right-1/3 text-yellow-400 animate-pulse" />
          <Sparkles className="w-6 h-6 absolute bottom-4 left-1/3 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 text-gradient-blue title-main title-section"
        >
          AWS 완전정복
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-gradient-purple mb-8 font-medium"
        >
          클라우드 컴퓨팅의 모든 것을 배워보세요
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-primary/20"
        >
          Amazon Web Services(AWS)는 세계에서 가장 포괄적이고 널리 채택된 클라우드 플랫폼입니다.
          200개 이상의 서비스를 통해 컴퓨팅, 스토리지, 데이터베이스, 네트워킹, 분석,
          기계 학습, 인공 지능 등 모든 클라우드 요구사항을 충족할 수 있습니다.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page01Hero;