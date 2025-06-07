
import { motion } from "framer-motion";
import { Zap, Database, Cloud, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page13Serverless = () => {
  const services = [
    {
      icon: Zap,
      title: "Lambda",
      description: "함수 실행 서비스",
      detail: "이벤트 기반 코드 실행"
    },
    {
      icon: Database,
      title: "DynamoDB",
      description: "NoSQL 데이터베이스",
      detail: "완전 관리형 서버리스 DB"
    },
    {
      icon: Cloud,
      title: "API Gateway",
      description: "API 관리 서비스",
      detail: "RESTful API 생성 및 관리"
    },
    {
      icon: Code,
      title: "Step Functions",
      description: "워크플로우 오케스트레이션",
      detail: "서버리스 함수 조정"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">서버리스 아키텍처</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            서버 관리 없이 애플리케이션을 구축하고 실행할 수 있는 완전 관리형 서비스들입니다.
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
                서버리스 아키텍처 패턴
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">서버리스 아키텍처 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">서버리스의 장점</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    운영 부담 제로, 자동 확장, 사용한 만큼만 지불, 높은 가용성을 제공합니다. 
                    개발자는 비즈니스 로직에만 집중할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">일반적인 패턴</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    웹 애플리케이션 백엔드, 실시간 데이터 처리, 이미지/비디오 변환, 
                    IoT 데이터 수집, 채팅 애플리케이션 등에 활용됩니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">모니터링과 디버깅</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CloudWatch, X-Ray, AWS SAM 등을 통해 서버리스 애플리케이션을 
                    효과적으로 모니터링하고 디버깅할 수 있습니다.
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

export default Page13Serverless;
