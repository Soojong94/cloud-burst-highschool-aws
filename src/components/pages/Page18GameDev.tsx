import { motion } from "framer-motion";
import { Gamepad2, Zap, Users, BarChart3, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page18GameDev = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "GameLift",
      description: "멀티플레이어 게임 호스팅",
      detail: "자동 확장 게임 서버",
      color: "text-red-400",
      cardStyle: "card-security"
    },
    {
      icon: Zap,
      title: "GameSparks",
      description: "게임 백엔드 서비스",
      detail: "리더보드, 매치메이킹",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Users,
      title: "Lumberyard",
      description: "게임 엔진",
      detail: "3D 게임 개발 엔진",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: BarChart3,
      title: "Game Analytics",
      description: "게임 분석",
      detail: "플레이어 행동 분석",
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
      className="min-h-screen py-20 bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-yellow-500/5" />
      <div className="absolute top-24 left-24 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-24 right-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-orange title-main title-section">
              게임 개발
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-yellow-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20">
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
              <Card className={`h-full ${service.cardStyle} hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-105`}>
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
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-500/80 hover:to-pink-500/80 pulse-glow">
                게임 개발 아키텍처
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-card to-background border-red-500/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient-orange">AWS 게임 개발 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="dialog-section-red">
                  <h3 className="text-xl font-semibold mb-3 text-red-400">멀티플레이어 게임</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    GameLift를 사용하여 수백만 명의 플레이어를 지원하는 멀티플레이어 게임을
                    구축할 수 있습니다. 자동 확장과 지연 시간 최적화를 제공합니다.
                  </p>
                </div>
                <div className="dialog-section-yellow">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">게임 백엔드</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Lambda, DynamoDB, API Gateway를 조합하여 서버리스 게임 백엔드를 구축하고,
                    리더보드, 인앱 구매, 플레이어 데이터 관리를 할 수 있습니다.
                  </p>
                </div>
                <div className="dialog-section-green">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">라이브 운영</h3>
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