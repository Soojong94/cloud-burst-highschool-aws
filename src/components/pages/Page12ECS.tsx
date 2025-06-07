
import { motion } from "framer-motion";
import { Container, Shield, Zap, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page12ECS = () => {
  const services = [
    {
      icon: Container,
      title: "ECS",
      description: "Elastic Container Service",
      detail: "완전 관리형 컨테이너 오케스트레이션"
    },
    {
      icon: Shield,
      title: "EKS",
      description: "Elastic Kubernetes Service",
      detail: "관리형 Kubernetes 서비스"
    },
    {
      icon: Zap,
      title: "Fargate",
      description: "서버리스 컨테이너",
      detail: "인프라 관리 없는 컨테이너 실행"
    },
    {
      icon: Settings,
      title: "ECR",
      description: "Elastic Container Registry",
      detail: "컨테이너 이미지 저장소"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">ECS/EKS (컨테이너 서비스)</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            컨테이너화된 애플리케이션을 쉽게 배포, 관리, 확장할 수 있는 서비스입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <service.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-2">{service.description}</p>
                  <p className="text-sm text-muted-foreground text-center">{service.detail}</p>
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
                컨테이너 서비스 비교
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">AWS 컨테이너 서비스 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">ECS vs EKS</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    ECS는 AWS 고유의 컨테이너 오케스트레이션 서비스로 간단하고 빠른 시작이 가능합니다. 
                    EKS는 Kubernetes를 사용하므로 기존 Kubernetes 경험을 활용할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Fargate의 장점</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    서버리스 컨테이너 플랫폼으로 EC2 인스턴스를 관리할 필요가 없습니다. 
                    컨테이너에만 집중할 수 있어 운영 부담을 크게 줄일 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">마이크로서비스 아키텍처</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    컨테이너 서비스는 마이크로서비스 아키텍처 구현에 최적화되어 있습니다. 
                    각 서비스를 독립적으로 배포하고 확장할 수 있습니다.
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

export default Page12ECS;
