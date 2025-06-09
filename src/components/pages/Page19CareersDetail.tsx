import { motion } from "framer-motion";
import { GraduationCap, Trophy, Briefcase, TrendingUp, Sparkles } from "lucide-react";

const Page19CareersDetail = () => {
  const careerPaths = [
    {
      icon: GraduationCap,
      title: "학습 경로",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      steps: ["기초 학습", "실습 프로젝트", "자격증 취득", "포트폴리오"],
      details: ["AWS 기본 개념", "핸즈온 랩", "Solutions Architect", "GitHub 프로젝트"],
      description: "체계적인 AWS 기술 학습 과정"
    },
    {
      icon: Trophy,
      title: "자격증 경로",
      color: "text-yellow-400",
      bgColor: "from-yellow-900/20 to-yellow-800/20",
      steps: ["Cloud Practitioner", "Associate", "Professional", "Specialty"],
      details: ["기초 인증", "SA/Developer/SysOps", "Solutions Architect Pro", "Security/ML/Data"],
      description: "AWS 공식 자격증 로드맵"
    },
    {
      icon: Briefcase,
      title: "실무 경험",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      steps: ["개인 프로젝트", "오픈소스 기여", "인턴십", "풀타임 취업"],
      details: ["서버리스 앱", "GitHub 기여", "스타트업 경험", "대기업 입사"],
      description: "실무 경험을 통한 역량 강화"
    },
    {
      icon: TrendingUp,
      title: "성장 전략",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      steps: ["기술 전문성", "리더십", "비즈니스 이해", "네트워킹"],
      details: ["심화 기술", "팀 리드", "도메인 지식", "커뮤니티 활동"],
      description: "지속적인 커리어 발전 방향"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-green title-main">
              AWS 커리어 로드맵
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {careerPaths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${path.bgColor} p-4 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <path.icon className={`w-12 h-12 ${path.color} mx-auto mb-3`} />
                <h3 className={`text-lg font-bold ${path.color} mb-2`}>{path.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {path.description}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">단계별 과정</h4>
                  <div className="space-y-1">
                    {path.steps.map((step, i) => (
                      <div key={i} className="bg-slate-800/50 p-1 rounded text-center flex items-center">
                        <span className={`w-4 h-4 rounded-full ${path.color.replace('text-', 'bg-')} mr-2 text-xs flex items-center justify-center text-black font-bold`}>
                          {i + 1}
                        </span>
                        <span className="text-white text-xs">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">구체적 목표</h4>
                  <div className="space-y-1">
                    {path.details.map((detail, i) => (
                      <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                        <span className="text-muted-foreground text-xs">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 취업 시장 정보 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-4 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-3 text-center text-gradient-green">AWS 취업 시장</h3>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <span className="text-blue-400 font-semibold">높은 수요</span>
              <p className="text-muted-foreground text-xs">지속적 성장</p>
            </div>
            <div className="text-center">
              <span className="text-yellow-400 font-semibold">경쟁력 있는 연봉</span>
              <p className="text-muted-foreground text-xs">높은 보상</p>
            </div>
            <div className="text-center">
              <span className="text-green-400 font-semibold">원격 근무</span>
              <p className="text-muted-foreground text-xs">유연한 환경</p>
            </div>
            <div className="text-center">
              <span className="text-purple-400 font-semibold">글로벌 기회</span>
              <p className="text-muted-foreground text-xs">세계적 수요</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page19CareersDetail;