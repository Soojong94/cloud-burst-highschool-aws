import { motion } from "framer-motion";
import { Network, Layers, Zap, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageELB = () => {
  const types = [
    {
      icon: Layers,
      title: "ALB",
      subtitle: "Application Load Balancer",
      layer: "L7 (HTTP/HTTPS)",
      color: "text-blue-400",
      cardStyle: "card-tech",
      features: ["URL 경로 기반 라우팅", "호스트 헤더 기반 라우팅", "WebSocket·HTTP/2 지원", "WAF 통합 가능"],
      usecase: "웹 애플리케이션, REST API, 마이크로서비스"
    },
    {
      icon: Zap,
      title: "NLB",
      subtitle: "Network Load Balancer",
      layer: "L4 (TCP/UDP)",
      color: "text-orange-400",
      cardStyle: "card-neon",
      features: ["초저지연 (~100μs)", "초당 수백만 요청 처리", "고정 IP 주소 지원", "TCP 패스스루"],
      usecase: "게임 서버, IoT, 고성능 실시간 처리"
    },
    {
      icon: Network,
      title: "GLB",
      subtitle: "Gateway Load Balancer",
      layer: "L3 (IP)",
      color: "text-purple-400",
      cardStyle: "card-ai",
      features: ["네트워크 트래픽 검사", "방화벽·IDS 어플라이언스 통합", "투명 네트워크 게이트웨이", "수평 확장 가능"],
      usecase: "보안 장비 통합, 네트워크 트래픽 분석"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-cyan-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">
              Elastic Load Balancer
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-cyan-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20">
            들어오는 트래픽을 여러 서버에 균등하게 분산 — 부하 집중 방지, 고가용성 확보
          </p>
        </motion.div>

        {/* 다이어그램 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20"
        >
          <div className="flex items-center justify-center gap-4 flex-wrap text-sm">
            <div className="bg-blue-900/30 border border-blue-500/30 px-4 py-2 rounded-xl text-blue-400 font-semibold">사용자 100만 명</div>
            <span className="text-slate-400">→</span>
            <div className="bg-orange-900/30 border border-orange-500/30 px-4 py-2 rounded-xl text-orange-400 font-bold">ELB</div>
            <span className="text-slate-400">→</span>
            <div className="flex gap-2">
              {['EC2 #1', 'EC2 #2', 'EC2 #3', 'EC2 #4'].map(ec2 => (
                <div key={ec2} className="bg-green-900/20 border border-green-500/20 px-2 py-2 rounded-lg text-green-400 text-xs font-mono">{ec2}</div>
              ))}
            </div>
          </div>
          <p className="text-center text-muted-foreground text-sm mt-3">각 EC2에 25만 명씩 균등 분배 → 서버 과부하 없음</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${type.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center">
                  <type.icon className={`w-12 h-12 mx-auto ${type.color} mb-3`} />
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{type.subtitle}</p>
                  <span className={`text-xs font-mono ${type.color} bg-black/20 px-2 py-1 rounded-full`}>{type.layer}</span>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-1">
                    {type.features.map(f => (
                      <li key={f} className="text-muted-foreground text-xs flex items-start gap-2">
                        <span className={`${type.color} font-bold flex-shrink-0`}>·</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-black/20 rounded-xl p-2">
                    <p className="text-xs text-slate-400">적합한 상황</p>
                    <p className={`text-xs font-semibold ${type.color}`}>{type.usecase}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageELB;
