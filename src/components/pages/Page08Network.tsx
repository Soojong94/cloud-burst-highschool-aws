import { motion } from "framer-motion";
import { Cloud, Shield, Zap, Building, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page08Network = () => {
  const services = [
    {
      icon: Building,
      title: "VPC",
      description: "가상 프라이빗 클라우드",
      detail: "격리된 네트워크 환경 구성",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Zap,
      title: "CloudFront",
      description: "콘텐츠 전송 네트워크",
      detail: "전 세계 빠른 콘텐츠 배포",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Cloud,
      title: "Route 53",
      description: "DNS 웹 서비스",
      detail: "확장 가능한 도메인 네임 시스템",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Shield,
      title: "API Gateway",
      description: "API 관리 서비스",
      detail: "REST 및 WebSocket API 생성",
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
      className="min-h-screen py-20 bg-gradient-to-br from-background via-slate-900 to-cyan-900/30 bg-circuit-pattern relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-16 right-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float-animation" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-blue title-main title-section">
              AWS 네트워킹 서비스
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/3 text-cyan-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/3 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
            안전하고 확장 가능한 네트워크 인프라를 구축할 수 있는 다양한 서비스를 제공합니다.
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
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-500/80 hover:to-blue-500/80 pulse-glow">
                네트워킹 아키텍처 가이드
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-card to-background border-cyan-500/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient-blue">AWS 네트워킹 아키텍처</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="dialog-section-blue">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">VPC (Virtual Private Cloud)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AWS 클라우드에서 논리적으로 격리된 네트워크 공간을 제공합니다.
                    서브넷, 라우팅 테이블, 보안 그룹, NACL 등을 통해 세밀한 네트워크 제어가 가능합니다.
                  </p>
                </div>
                <div className="dialog-section-yellow">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">CloudFront CDN</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    전 세계 216개 이상의 엣지 로케이션을 통해 콘텐츠를 캐싱하여
                    사용자에게 빠른 응답 속도를 제공합니다. 동적/정적 콘텐츠 모두 지원합니다.
                  </p>
                </div>
                <div className="dialog-section-green">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">Route 53 DNS</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    99.99% 가용성을 보장하는 DNS 서비스입니다.
                    지연 시간 기반, 지리적 위치 기반, 가중치 기반 라우팅 등 다양한 라우팅 정책을 제공합니다.
                  </p>
                </div>
                <div className="dialog-section-purple">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">API Gateway</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    RESTful API와 WebSocket API를 쉽게 생성, 게시, 유지 관리할 수 있는 서비스입니다.
                    인증, 모니터링, 버전 관리, 트래픽 관리 등의 기능을 제공합니다.
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

export default Page08Network;