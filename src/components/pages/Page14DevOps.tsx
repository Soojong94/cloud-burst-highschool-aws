import { motion } from "framer-motion";
import { GitBranch, Zap, Monitor, Settings, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page14DevOps = () => {
  const tools = [
    {
      icon: GitBranch,
      title: "CodeCommit",
      description: "Git 저장소 서비스",
      detail: "완전 관리형 소스 제어",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Zap,
      title: "CodePipeline",
      description: "CI/CD 파이프라인",
      detail: "자동화된 릴리스 파이프라인",
      color: "text-orange-400",
      cardStyle: "card-neon"
    },
    {
      icon: Monitor,
      title: "CloudWatch",
      description: "모니터링 서비스",
      detail: "로그, 메트릭, 알람 관리",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Settings,
      title: "CloudFormation",
      description: "인프라 as 코드",
      detail: "템플릿 기반 인프라 관리",
      color: "text-purple-400",
      cardStyle: "card-ai"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-24 left-24 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-24 right-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main title-section">
              DevOps 도구
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-orange-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
            개발과 운영을 통합하여 애플리케이션 배포를 자동화하고 모니터링할 수 있는 도구들
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${tool.cardStyle} hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <tool.icon className={`w-12 h-12 mx-auto ${tool.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-2">{tool.description}</p>
                  <p className="text-sm text-muted-foreground text-center">{tool.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page14DevOps;