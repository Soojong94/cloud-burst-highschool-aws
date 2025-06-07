import { motion } from "framer-motion";
import { Zap, Database, Cloud, Code, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page13Serverless = () => {
  const services = [
    {
      icon: Zap,
      title: "Lambda",
      description: "함수 실행 서비스",
      detail: "이벤트 기반 코드 실행",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Database,
      title: "DynamoDB",
      description: "NoSQL 데이터베이스",
      detail: "완전 관리형 서버리스 DB",
      color: "text-orange-400",
      cardStyle: "card-data"
    },
    {
      icon: Cloud,
      title: "API Gateway",
      description: "API 관리 서비스",
      detail: "RESTful API 생성 및 관리",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Code,
      title: "Step Functions",
      description: "워크플로우 오케스트레이션",
      detail: "서버리스 함수 조정",
      color: "text-green-400",
      cardStyle: "card-neon"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-gradient-to-br from-background via-slate-900 to-purple-900/30 bg-circuit-pattern relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-16 left-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-16 right-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-purple title-main title-section">
              서버리스 아키텍처
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/3 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/3 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
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
              <Card className={`h-full ${service.cardStyle} hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <service.icon className={`w-12 h-12 mx-auto ${service.color} mb-4 drop-shadow-lg`} />
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
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-500/80 hover:to-blue-500/80 pulse-glow">
                서버리스 아키텍처 패턴
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-card to-background border-purple-500/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient-purple">서버리스 아키텍처 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="dialog-section-purple">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">서버리스의 장점</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    운영 부담 제로, 자동 확장, 사용한 만큼만 지불, 높은 가용성을 제공합니다.
                    개발자는 비즈니스 로직에만 집중할 수 있습니다.
                  </p>
                </div>
                <div className="dialog-section-blue">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">일반적인 패턴</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    웹 애플리케이션 백엔드, 실시간 데이터 처리, 이미지/비디오 변환,
                    IoT 데이터 수집, 채팅 애플리케이션 등에 활용됩니다.
                  </p>
                </div>
                <div className="dialog-section-green">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">모니터링과 디버깅</h3>
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