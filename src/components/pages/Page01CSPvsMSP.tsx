import { motion } from "framer-motion";
import { Cloud, Users, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const Page01CSPvsMSP = () => {
  const comparison = {
    csp: {
      title: "CSP",
      fullName: "Cloud Service Provider",
      icon: Cloud,
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      borderColor: "border-blue-500/20",
      description: "클라우드 인프라와 서비스를 직접 제공하는 업체",
      examples: ["Amazon AWS", "Microsoft Azure", "Google Cloud", "Naver Cloud"],
      services: [
        "클라우드 인프라 제공",
        "기본 플랫폼 서비스",
        "표준화된 서비스",
        "글로벌 데이터센터 운영"
      ]
    },
    msp: {
      title: "MSP",
      fullName: "Managed Service Provider",
      icon: Users,
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      borderColor: "border-green-500/20",
      description: "고객의 IT 시스템을 대신 관리하고 운영하는 전문 업체",
      examples: ["으뜸정보기술", "LG CNS", "삼성SDS", "메가존클라우드"],
      services: [
        "클라우드 설계 및 구축",
        "24/7 모니터링 및 운영",
        "맞춤형 컨설팅",
        "비용 최적화"
      ]
    }
  };

  const benefits = [
    { title: "전문성", description: "AWS 인증 전문가", icon: CheckCircle },
    { title: "비용 절감", description: "리소스 최적화", icon: CheckCircle },
    { title: "안정성", description: "24시간 모니터링", icon: CheckCircle },
    { title: "집중력", description: "핵심 업무 집중", icon: CheckCircle }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="relative mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-green title-main">
              CSP vs MSP
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-green-500/20">
            클라우드 생태계의 핵심 파트너들을 알아보세요
          </p>
        </motion.div>

        {/* CSP vs MSP 비교 */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* CSP */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`bg-gradient-to-br ${comparison.csp.bgColor} p-4 rounded-2xl border ${comparison.csp.borderColor}`}
          >
            <div className="text-center mb-4">
              <comparison.csp.icon className={`w-12 h-12 ${comparison.csp.color} mx-auto mb-3`} />
              <h2 className={`text-xl font-bold ${comparison.csp.color} mb-1`}>{comparison.csp.title}</h2>
              <p className="text-white font-semibold text-sm mb-2">{comparison.csp.fullName}</p>
              <p className="text-muted-foreground text-xs">{comparison.csp.description}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2 text-sm">주요 서비스</h3>
              <div className="space-y-1">
                {comparison.csp.services.map((service, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className={`w-3 h-3 ${comparison.csp.color} mr-2 flex-shrink-0`} />
                    <span className="text-muted-foreground text-xs">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2 text-sm">주요 업체</h3>
              <div className="grid grid-cols-2 gap-1">
                {comparison.csp.examples.map((example, i) => (
                  <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                    <span className="text-white text-xs">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 화살표 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 p-3 rounded-full border border-white/20">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          {/* MSP */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`bg-gradient-to-br ${comparison.msp.bgColor} p-4 rounded-2xl border ${comparison.msp.borderColor}`}
          >
            <div className="text-center mb-4">
              <comparison.msp.icon className={`w-12 h-12 ${comparison.msp.color} mx-auto mb-3`} />
              <h2 className={`text-xl font-bold ${comparison.msp.color} mb-1`}>{comparison.msp.title}</h2>
              <p className="text-white font-semibold text-sm mb-2">{comparison.msp.fullName}</p>
              <p className="text-muted-foreground text-xs">{comparison.msp.description}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2 text-sm">주요 서비스</h3>
              <div className="space-y-1">
                {comparison.msp.services.map((service, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className={`w-3 h-3 ${comparison.msp.color} mr-2 flex-shrink-0`} />
                    <span className="text-muted-foreground text-xs">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2 text-sm">주요 업체</h3>
              <div className="grid grid-cols-2 gap-1">
                {comparison.msp.examples.map((example, i) => (
                  <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                    <span className="text-white text-xs">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* MSP 선택의 이점 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-4 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-4 text-center text-gradient-green">MSP 파트너의 장점</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <benefit.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-1 text-green-400 text-sm">{benefit.title}</h4>
                <p className="text-muted-foreground text-xs">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page01CSPvsMSP;