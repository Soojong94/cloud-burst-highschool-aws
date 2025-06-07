
import { motion } from "framer-motion";
import { Code, Server, Shield, BarChart3, Cpu, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page19Careers = () => {
  const careers = [
    {
      icon: Cloud,
      title: "클라우드 아키텍트",
      description: "클라우드 인프라 설계 및 구축",
      color: "text-blue-400"
    },
    {
      icon: Code,
      title: "DevOps 엔지니어",
      description: "개발과 운영의 자동화 및 통합",
      color: "text-green-400"
    },
    {
      icon: Server,
      title: "SRE (Site Reliability Engineer)",
      description: "시스템 안정성 및 확장성 관리",
      color: "text-purple-400"
    },
    {
      icon: Shield,
      title: "클라우드 보안 전문가",
      description: "클라우드 환경의 보안 설계 및 관리",
      color: "text-red-400"
    },
    {
      icon: BarChart3,
      title: "데이터 엔지니어",
      description: "빅데이터 파이프라인 구축 및 관리",
      color: "text-yellow-400"
    },
    {
      icon: Cpu,
      title: "ML 엔지니어",
      description: "머신러닝 모델 개발 및 운영",
      color: "text-cyan-400"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-gradient-to-br from-background via-background to-green-500/10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-green">AWS 관련 직업</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            클라우드 기술의 확산으로 새롭게 주목받는 직업들을 알아보세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {careers.map((career, index) => (
            <motion.div
              key={career.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-card hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 border-green-500/30">
                <CardHeader className="text-center">
                  <career.icon className={`w-12 h-12 mx-auto ${career.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{career.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{career.description}</p>
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
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-500/80 hover:to-emerald-500/80">
                커리어 로드맵
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-card to-background border-green-500/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient-green">AWS 커리어 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">학습 경로</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AWS 기초부터 시작하여 Solutions Architect, Developer, SysOps Administrator 
                    자격증을 단계적으로 취득하는 것을 권장합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-green-400">실무 경험</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    개인 프로젝트나 오픈소스 기여를 통해 실제 AWS 서비스를 사용해보고, 
                    포트폴리오를 구축하는 것이 중요합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">지속적 학습</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    클라우드 기술은 빠르게 발전하므로 AWS re:Invent, 공식 문서, 
                    커뮤니티를 통해 지속적으로 새로운 기술을 학습해야 합니다.
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

export default Page19Careers;
