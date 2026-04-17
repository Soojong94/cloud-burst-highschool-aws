import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";

const PageCourseOverview = () => {
  const modules = [
    { time: "00:00", duration: "15분", title: "오리엔테이션", desc: "강사 소개, 강의 목표, 일정 안내", color: "text-blue-400", bg: "from-blue-900/20 to-blue-800/20", border: "border-blue-500/20" },
    { time: "00:15", duration: "35분", title: "클라우드 컴퓨팅 기초", desc: "온프레미스 vs 클라우드, IaaS·PaaS·SaaS, 한국 사례", color: "text-green-400", bg: "from-green-900/20 to-green-800/20", border: "border-green-500/20" },
    { time: "00:50", duration: "20분", title: "AWS 소개", desc: "Amazon 역사, 글로벌 인프라, 서비스 카테고리", color: "text-orange-400", bg: "from-orange-900/20 to-orange-800/20", border: "border-orange-500/20" },
    { time: "01:10", duration: "35분", title: "컴퓨팅 서비스", desc: "EC2·Lambda·ECS, Auto Scaling, Load Balancer", color: "text-cyan-400", bg: "from-cyan-900/20 to-cyan-800/20", border: "border-cyan-500/20" },
    { time: "01:45", duration: "15분", title: "휴식", desc: "", color: "text-slate-400", bg: "from-slate-800/20 to-slate-700/20", border: "border-slate-500/20" },
    { time: "02:00", duration: "25분", title: "스토리지 & 데이터베이스", desc: "S3·EBS·EFS, RDS·DynamoDB", color: "text-emerald-400", bg: "from-emerald-900/20 to-emerald-800/20", border: "border-emerald-500/20" },
    { time: "02:25", duration: "35분", title: "네트워킹 & 보안", desc: "VPC, IAM, 공동 책임 모델, Well-Architected", color: "text-red-400", bg: "from-red-900/20 to-red-800/20", border: "border-red-500/20" },
    { time: "03:00", duration: "25분", title: "DevOps & 데이터 분석", desc: "CI/CD, CloudWatch, 데이터 레이크", color: "text-indigo-400", bg: "from-indigo-900/20 to-indigo-800/20", border: "border-indigo-500/20" },
    { time: "03:25", duration: "20분", title: "AI & 미래 기술", desc: "Bedrock, 포그 컴퓨팅, 광주·전남 데이터센터", color: "text-purple-400", bg: "from-purple-900/20 to-purple-800/20", border: "border-purple-500/20" },
    { time: "03:45", duration: "15분", title: "마무리 & Q&A", desc: "자격증 로드맵, 다음 단계, 질의응답", color: "text-blue-400", bg: "from-blue-900/20 to-blue-800/20", border: "border-blue-500/20" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">
              오늘 강의 개요
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="flex items-center justify-center gap-3 bg-black/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-blue-500/20 inline-flex mx-auto">
            <Clock className="w-6 h-6 text-blue-400" />
            <span className="text-xl text-white font-semibold">총 4시간 강의</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
          {modules.map((mod, index) => (
            <motion.div
              key={mod.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${mod.bg} p-4 rounded-2xl border ${mod.border} hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-slate-400 font-mono">{mod.time}</span>
                <span className={`text-xs font-bold ${mod.color}`}>{mod.duration}</span>
              </div>
              <h3 className={`text-sm font-bold ${mod.color} mb-1`}>{mod.title}</h3>
              {mod.desc && <p className="text-muted-foreground text-xs leading-relaxed">{mod.desc}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageCourseOverview;
