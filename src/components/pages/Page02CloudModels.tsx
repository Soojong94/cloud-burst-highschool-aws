import { motion } from "framer-motion";
import { Building, Layers, Cloud, Sparkles } from "lucide-react";

const Page02CloudModels = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main">
              클라우드 서비스 모델
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center p-8 bg-blue-900/20 rounded-2xl border border-blue-500/30 hover:scale-105 transition-transform duration-300"
          >
            <Building className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-blue-400">IaaS</h3>
            <h4 className="text-lg font-semibold mb-3 text-white">Infrastructure as a Service</h4>
            <p className="text-muted-foreground leading-relaxed">
              가상 머신, 스토리지, 네트워크 등 기본 인프라 제공
            </p>
            <div className="mt-6 bg-slate-800/50 p-4 rounded-xl">
              <p className="text-sm text-blue-300">예시: EC2, VPC, EBS</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center p-8 bg-green-900/20 rounded-2xl border border-green-500/30 hover:scale-105 transition-transform duration-300"
          >
            <Layers className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-green-400">PaaS</h3>
            <h4 className="text-lg font-semibold mb-3 text-white">Platform as a Service</h4>
            <p className="text-muted-foreground leading-relaxed">
              애플리케이션 개발 및 배포 플랫폼 제공
            </p>
            <div className="mt-6 bg-slate-800/50 p-4 rounded-xl">
              <p className="text-sm text-green-300">예시: Elastic Beanstalk, Lambda</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center p-8 bg-purple-900/20 rounded-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"
          >
            <Cloud className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-purple-400">SaaS</h3>
            <h4 className="text-lg font-semibold mb-3 text-white">Software as a Service</h4>
            <p className="text-muted-foreground leading-relaxed">
              완전한 소프트웨어 솔루션을 서비스로 제공
            </p>
            <div className="mt-6 bg-slate-800/50 p-4 rounded-xl">
              <p className="text-sm text-purple-300">예시: WorkSpaces, Chime</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page02CloudModels;