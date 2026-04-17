import { motion } from "framer-motion";
import { CheckCircle, Target, Sparkles } from "lucide-react";

const PageCourseObjectives = () => {
  const objectives = [
    { text: "클라우드 컴퓨팅이 무엇인지, 왜 필요한지 설명할 수 있다", color: "text-blue-400" },
    { text: "AWS 핵심 서비스(EC2, S3, RDS, Lambda)의 역할을 이해한다", color: "text-green-400" },
    { text: "실제 한국 기업들이 AWS를 어떻게 활용하는지 사례를 알 수 있다", color: "text-orange-400" },
    { text: "온프레미스 vs 클라우드의 차이와 도입 이점을 비교할 수 있다", color: "text-cyan-400" },
    { text: "VPC·IAM 등 네트워킹·보안의 기본 개념을 파악한다", color: "text-purple-400" },
    { text: "포그 컴퓨팅, 생성형 AI, 광주·전남 데이터센터 등 미래 트렌드를 이해한다", color: "text-emerald-400" },
    { text: "AWS 자격증 로드맵과 클라우드 커리어 경로를 그릴 수 있다", color: "text-yellow-400" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">
              학습 목표
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-green-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="flex items-center justify-center gap-3 bg-black/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-blue-500/20 mx-auto max-w-xl">
            <Target className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <span className="text-lg text-white font-semibold">이 강의를 마치면 할 수 있어요</span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-5 rounded-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-300"
            >
              <CheckCircle className={`w-6 h-6 ${obj.color} flex-shrink-0 mt-0.5`} />
              <p className="text-white text-lg leading-relaxed">{obj.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageCourseObjectives;
