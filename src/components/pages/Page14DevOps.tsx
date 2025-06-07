
import { motion } from "framer-motion";
import { GitBranch, Zap, Monitor, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page14DevOps = () => {
  const tools = [
    {
      icon: GitBranch,
      title: "CodeCommit",
      description: "Git 저장소 서비스",
      detail: "완전 관리형 소스 제어"
    },
    {
      icon: Zap,
      title: "CodePipeline",
      description: "CI/CD 파이프라인",
      detail: "자동화된 릴리스 파이프라인"
    },
    {
      icon: Monitor,
      title: "CloudWatch",
      description: "모니터링 서비스",
      detail: "로그, 메트릭, 알람 관리"
    },
    {
      icon: Settings,
      title: "CloudFormation",
      description: "인프라 as 코드",
      detail: "템플릿 기반 인프라 관리"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">DevOps 도구</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            개발과 운영을 통합하여 애플리케이션 배포를 자동화하고 모니터링할 수 있는 도구들입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <tool.icon className="w-12 h-12 mx-auto text-primary mb-4" />
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

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="text-lg px-8 py-4">
                DevOps 모범 사례
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">AWS DevOps 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">CI/CD 파이프라인</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CodeCommit에서 시작하여 CodeBuild로 빌드하고, CodeDeploy로 배포하는 
                    완전 자동화된 파이프라인을 구축할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Infrastructure as Code</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CloudFormation이나 CDK를 사용하여 인프라를 코드로 관리하면 
                    버전 관리, 재현 가능한 배포, 롤백이 가능합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">모니터링과 로깅</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CloudWatch를 통해 메트릭 수집, 로그 분석, 알람 설정을 할 수 있으며, 
                    X-Ray로 분산 추적도 가능합니다.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page14DevOps;
