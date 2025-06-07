
import { motion } from "framer-motion";
import { Wifi, Shield, BarChart3, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page16IoT = () => {
  const services = [
    {
      icon: Wifi,
      title: "IoT Core",
      description: "디바이스 연결 관리",
      detail: "MQTT 프로토콜 지원"
    },
    {
      icon: Shield,
      title: "IoT Device Management",
      description: "디바이스 관리",
      detail: "대규모 디바이스 제어"
    },
    {
      icon: BarChart3,
      title: "IoT Analytics",
      description: "IoT 데이터 분석",
      detail: "센서 데이터 처리 및 분석"
    },
    {
      icon: Zap,
      title: "IoT Events",
      description: "이벤트 감지",
      detail: "실시간 이벤트 모니터링"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">IoT (사물인터넷)</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            수십억 개의 IoT 디바이스를 안전하게 연결하고 관리할 수 있는 서비스입니다.
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
                IoT 솔루션 가이드
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">AWS IoT 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">스마트 팩토리</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    제조 장비의 센서 데이터를 실시간으로 수집하여 예측 유지보수, 
                    품질 관리, 생산 최적화를 수행할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">스마트 시티</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    교통량 모니터링, 환경 측정, 에너지 관리 등 도시 인프라를 
                    지능적으로 관리할 수 있는 IoT 솔루션을 구축할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">농업 IoT</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    토양 수분, 온도, 습도 등을 모니터링하여 정밀 농업을 구현하고, 
                    자동 관개 시스템을 구축할 수 있습니다.
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

export default Page16IoT;
