import { motion } from "framer-motion";
import { GitBranch, Cog, Eye, Shield, Sparkles } from "lucide-react";

const Page14DevOpsDetail = () => {
  const devopsAreas = [
    {
      icon: GitBranch,
      title: "CI/CD 파이프라인",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      tools: ["CodeCommit", "CodeBuild", "CodeDeploy", "CodePipeline"],
      practices: ["자동 빌드", "테스트 자동화", "단계별 배포", "롤백 지원"],
      description: "소스 코드부터 프로덕션까지 자동화"
    },
    {
      icon: Cog,
      title: "Infrastructure as Code",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      tools: ["CloudFormation", "CDK", "Terraform", "SAM"],
      practices: ["버전 관리", "재현 가능", "템플릿화", "스택 관리"],
      description: "인프라를 코드로 관리하여 일관성 확보"
    },
    {
      icon: Eye,
      title: "모니터링 & 로깅",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      tools: ["CloudWatch", "X-Ray", "CloudTrail", "Config"],
      practices: ["메트릭 수집", "로그 중앙화", "알람 설정", "추적 관리"],
      description: "시스템 상태와 성능을 실시간 모니터링"
    },
    {
      icon: Shield,
      title: "보안 & 컴플라이언스",
      color: "text-red-400",
      bgColor: "from-red-900/20 to-red-800/20",
      tools: ["IAM", "Secrets Manager", "Parameter Store", "Inspector"],
      practices: ["최소 권한", "비밀 관리", "보안 스캔", "규정 준수"],
      description: "DevSecOps로 보안을 파이프라인에 통합"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-green title-main">
              DevOps 모범 사례
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-orange-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {devopsAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${area.bgColor} p-4 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <area.icon className={`w-12 h-12 ${area.color} mx-auto mb-3`} />
                <h3 className={`text-lg font-bold ${area.color} mb-2`}>{area.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">주요 도구</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {area.tools.map((tool, i) => (
                      <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                        <span className="text-white text-xs">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">모범 사례</h4>
                  <div className="space-y-1">
                    {area.practices.map((practice, i) => (
                      <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                        <span className="text-muted-foreground text-xs">{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 DevOps 성숙도 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-4 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-3 text-center text-gradient-green">DevOps 성숙도 단계</h3>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <span className="text-green-400 font-semibold">1단계</span>
              <p className="text-muted-foreground text-xs">수동 배포</p>
            </div>
            <div className="text-center">
              <span className="text-blue-400 font-semibold">2단계</span>
              <p className="text-muted-foreground text-xs">자동 빌드</p>
            </div>
            <div className="text-center">
              <span className="text-purple-400 font-semibold">3단계</span>
              <p className="text-muted-foreground text-xs">CI/CD 완성</p>
            </div>
            <div className="text-center">
              <span className="text-orange-400 font-semibold">4단계</span>
              <p className="text-muted-foreground text-xs">완전 자동화</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page14DevOpsDetail;