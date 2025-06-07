import { motion } from "framer-motion";
import { Smartphone, Cloud, Zap, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page17Mobile = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Amplify",
      description: "풀스택 앱 개발",
      detail: "React Native, Flutter 지원",
      color: "text-pink-400",
      cardStyle: "card-ai"
    },
    {
      icon: Cloud,
      title: "AppSync",
      description: "GraphQL API",
      detail: "실시간 데이터 동기화",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Zap,
      title: "Pinpoint",
      description: "사용자 참여 분석",
      detail: "푸시 알림, 이메일 캠페인",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Users,
      title: "Cognito",
      description: "사용자 인증",
      detail: "소셜 로그인, 다중 인증",
      color: "text-green-400",
      cardStyle: "card-data"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-gradient-to-br from-background via-slate-900 to-pink-900/30 bg-soft-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-16 right-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-16 left-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />

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
              모바일 개발
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/3 text-pink-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/3 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/20">
            모바일 애플리케이션 개발과 배포를 위한 완전 관리형 서비스들입니다.
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
              <Card className={`h-full ${service.cardStyle} hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105`}>
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
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-500/80 hover:to-blue-500/80 pulse-glow">
                모바일 앱 개발 가이드
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-card to-background border-pink-500/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient-purple">AWS 모바일 개발 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="dialog-section-pink">
                  <h3 className="text-xl font-semibold mb-3 text-pink-400">Amplify 프레임워크</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    React Native, Flutter, iOS, Android 개발을 지원하며,
                    인증, API, 스토리지, 호스팅을 쉽게 구성할 수 있습니다.
                  </p>
                </div>
                <div className="dialog-section-blue">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">실시간 기능</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AppSync를 통해 GraphQL API와 실시간 구독을 구현하여
                    채팅, 협업 도구, 소셜 앱을 쉽게 개발할 수 있습니다.
                  </p>
                </div>
                <div className="dialog-section-yellow">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">사용자 참여도 향상</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pinpoint를 사용하여 사용자 행동을 분석하고, 개인화된 푸시 알림과
                    이메일 캠페인을 통해 사용자 참여도를 높일 수 있습니다.
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

export default Page17Mobile;