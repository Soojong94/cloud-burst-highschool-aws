import { motion } from "framer-motion";
import { Shield, Globe, Zap, Network, Sparkles } from "lucide-react";

const Page08NetworkDetail = () => {
  const architectures = [
    {
      icon: Shield,
      title: "VPC 아키텍처",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      components: ["Public Subnet", "Private Subnet", "Internet Gateway", "NAT Gateway"],
      description: "논리적으로 격리된 안전한 네트워크 환경"
    },
    {
      icon: Globe,
      title: "글로벌 CDN",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      components: ["Edge Locations", "Regional Caches", "Origin Servers", "SSL/TLS"],
      description: "전 세계 216개 엣지 로케이션을 통한 콘텐츠 배포"
    },
    {
      icon: Zap,
      title: "DNS & 라우팅",
      color: "text-yellow-400",
      bgColor: "from-yellow-900/20 to-yellow-800/20",
      components: ["Health Checks", "Failover", "Geolocation", "Weighted Routing"],
      description: "99.99% 가용성을 보장하는 DNS 서비스"
    },
    {
      icon: Network,
      title: "API 관리",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      components: ["REST APIs", "WebSocket", "Authentication", "Rate Limiting"],
      description: "RESTful API와 WebSocket API 통합 관리"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-cyan-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-cyan title-main">
              네트워킹 아키텍처
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-cyan-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectures.map((arch, index) => (
            <motion.div
              key={arch.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${arch.bgColor} p-6 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-6">
                <arch.icon className={`w-16 h-16 ${arch.color} mx-auto mb-4`} />
                <h3 className={`text-lg font-bold ${arch.color} mb-2`}>{arch.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {arch.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-semibold text-sm mb-3">핵심 구성요소</h4>
                {arch.components.map((component, i) => (
                  <div key={i} className="bg-slate-800/50 p-2 rounded text-center">
                    <span className="text-white text-xs">{component}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 네트워킹 모범 사례 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-6 rounded-2xl border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gradient-cyan">네트워킹 모범 사례</h3>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <span className="text-blue-400 font-semibold">보안</span>
              <p className="text-muted-foreground">Security Groups + NACLs</p>
            </div>
            <div className="text-center">
              <span className="text-green-400 font-semibold">성능</span>
              <p className="text-muted-foreground">CloudFront + Route 53</p>
            </div>
            <div className="text-center">
              <span className="text-yellow-400 font-semibold">확장성</span>
              <p className="text-muted-foreground">Auto Scaling + Load Balancer</p>
            </div>
            <div className="text-center">
              <span className="text-purple-400 font-semibold">모니터링</span>
              <p className="text-muted-foreground">CloudWatch + VPC Flow Logs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page08NetworkDetail;