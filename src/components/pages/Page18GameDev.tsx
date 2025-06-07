
import { motion } from "framer-motion";
import { Gamepad2, Zap, Users, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page18GameDev = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "GameLift",
      description: "멀티플레이어 게임 호스팅",
      detail: "자동 확장 게임 서버"
    },
    {
      icon: Zap,
      title: "GameSparks",
      description: "게임 백엔드 서비스",
      detail: "리더보드, 매치메이킹"
    },
    {
      icon: Users,
      title: "Lumberyard",
      description: "게임 엔진",
      detail: "3D 게임 개발 엔진"
    },
    {
      icon: BarChart3,
      title: "Game Analytics",
      description: "게임 분석",
      detail: "플레이어 행동 분석"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">게임 개발</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            모바일부터 AAA급 게임까지, 모든 규모의 게임 개발을 지원하는 서비스들입니다.
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
                게임 개발 아키텍처
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">AWS 게임 개발 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">멀티플레이어 게임</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    GameLift를 사용하여 수백만 명의 플레이어를 지원하는 멀티플레이어 게임을 
                    구축할 수 있습니다. 자동 확장과 지연 시간 최적화를 제공합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">게임 백엔드</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Lambda, DynamoDB, API Gateway를 조합하여 서버리스 게임 백엔드를 구축하고, 
                    리더보드, 인앱 구매, 플레이어 데이터 관리를 할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">라이브 운영</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CloudWatch와 Kinesis를 통해 실시간 게임 분석을 수행하고, 
                    플레이어 이탈 방지와 수익 최적화를 위한 인사이트를 얻을 수 있습니다.
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

export default Page18GameDev;
