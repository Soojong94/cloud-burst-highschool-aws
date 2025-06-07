import { motion } from "framer-motion";
import { Wifi, Shield, BarChart3, Zap, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page16IoT = () => {
  const services = [
    {
      icon: Wifi,
      title: "IoT Core",
      description: "디바이스 연결 관리",
      detail: "MQTT 프로토콜 지원",
      color: "text-cyan-400",
      cardStyle: "card-tech"
    },
    {
      icon: Shield,
      title: "IoT Device Management",
      description: "디바이스 관리",
      detail: "대규모 디바이스 제어",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: BarChart3,
      title: "IoT Analytics",
      description: "IoT 데이터 분석",
      detail: "센서 데이터 처리 및 분석",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: Zap,
      title: "IoT Events",
      description: "이벤트 감지",
      detail: "실시간 이벤트 모니터링",
      color: "text-orange-400",
      cardStyle: "card-neon"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-gradient-to-br from-background via-slate-900 to-cyan-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-green-500/5" />
      <div className="absolute top-28 left-28 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-28 right-28 w-48 h-48 bg-green-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-blue title-main title-section">
              IoT (사물인터넷)
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-cyan-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-green-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
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
              <Card className={`h-full ${service.cardStyle} hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105`}>
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
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-500/80 hover:to-green-500/80 pulse-glow">
                IoT 솔루션 가이드
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-card to-background border-cyan-500/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient-blue">AWS IoT 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="dialog-section-cyan">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">스마트 팩토리</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    제조 장비의 센서 데이터를 실시간으로 수집하여 예측 유지보수,
                    품질 관리, 생산 최적화를 수행할 수 있습니다.
                  </p>
                </div>
                <div className="dialog-section-green">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">스마트 시티</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    교통량 모니터링, 환경 측정, 에너지 관리 등 도시 인프라를
                    지능적으로 관리할 수 있는 IoT 솔루션을 구축할 수 있습니다.
                  </p>
                </div>
                <div className="dialog-section-purple">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">농업 IoT</h3>
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