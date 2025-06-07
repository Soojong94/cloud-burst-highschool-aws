
import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

const Page01Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <Cloud className="w-24 h-24 mx-auto text-primary mb-6" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
        >
          AWS 완전정복
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          클라우드 컴퓨팅의 모든 것을 배워보세요
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
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
