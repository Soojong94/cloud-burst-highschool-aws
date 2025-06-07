
import { motion } from "framer-motion";
import { Smartphone, Cloud, Zap, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page17Mobile = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Amplify",
      description: "풀스택 앱 개발",
      detail: "React Native, Flutter 지원"
    },
    {
      icon: Cloud,
      title: "AppSync",
      description: "GraphQL API",
      detail: "실시간 데이터 동기화"
    },
    {
      icon: Zap,
      title: "Pinpoint",
      description: "사용자 참여 분석",
      detail: "푸시 알림, 이메일 캠페인"
    },
    {
      icon: Users,
      title: "Cognito",
      description: "사용자 인증",
      detail: "소셜 로그인, 다중 인증"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">모바일 개발</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                모바일 앱 개발 가이드
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">AWS 모바일 개발 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Amplify 프레임워크</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    React Native, Flutter, iOS, Android 개발을 지원하며, 
                    인증, API, 스토리지, 호스팅을 쉽게 구성할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">실시간 기능</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AppSync를 통해 GraphQL API와 실시간 구독을 구현하여 
                    채팅, 협업 도구, 소셜 앱을 쉽게 개발할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">사용자 참여도 향상</h3>
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
