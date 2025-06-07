
import { motion } from "framer-motion";
import { Rocket, Brain, Zap, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page20Future = () => {
  const trends = [
    {
      icon: Brain,
      title: "AI/ML 통합",
      description: "모든 서비스에 AI 기능 내장"
    },
    {
      icon: Zap,
      title: "서버리스 확산",
      description: "더 많은 완전 관리형 서비스"
    },
    {
      icon: Globe,
      title: "엣지 컴퓨팅",
      description: "지연 시간 최소화"
    },
    {
      icon: Rocket,
      title: "양자 컴퓨팅",
      description: "Amazon Braket의 발전"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-gradient-to-br from-background to-muted"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AWS의 미래</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            클라우드 컴퓨팅의 미래와 AWS가 나아가는 방향을 살펴보세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {trends.map((trend, index) => (
            <motion.div
              key={trend.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <trend.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl">{trend.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{trend.description}</p>
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
          className="text-center mb-16"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="text-lg px-8 py-4">
                미래 기술 트렌드
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">클라우드의 미래</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">AI-First 클라우드</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    모든 AWS 서비스에 AI 기능이 기본적으로 내장되어, 
                    개발자들이 별도의 ML 지식 없이도 지능형 애플리케이션을 구축할 수 있게 됩니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">완전 자동화</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    인프라 관리, 보안, 최적화가 완전 자동화되어 
                    개발자는 비즈니스 로직에만 집중할 수 있는 환경이 조성됩니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">지속가능한 클라우드</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AWS는 2025년까지 100% 재생에너지 사용을 목표로 하며, 
                    탄소 중립적인 클라우드 서비스를 제공하기 위해 노력하고 있습니다.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6">AWS와 함께하는 여러분의 여정</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            클라우드 기술은 계속 발전하고 있습니다. 
            AWS와 함께 미래를 준비하고, 여러분의 아이디어를 현실로 만들어보세요.
          </p>
          <Button size="lg" className="text-lg px-12 py-4">
            지금 시작하기
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page20Future;
