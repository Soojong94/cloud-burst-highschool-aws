import { motion } from "framer-motion";
import { Shield, Key, Eye, Lock, Sparkles } from "lucide-react";

const Page09SecurityDetail = () => {
  const securityServices = [
    {
      icon: Shield,
      title: "공동 책임 모델",
      color: "text-red-400",
      bgColor: "from-red-900/20 to-red-800/20",
      awsResponsible: ["인프라 보안", "물리적 보안", "하드웨어 관리", "네트워크 제어"],
      customerResponsible: ["운영체제 패치", "애플리케이션 보안", "데이터 암호화", "네트워크 구성"]
    },
    {
      icon: Key,
      title: "IAM & 접근 제어",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      features: ["사용자 관리", "그룹 정책", "역할 기반", "MFA 지원"],
      capabilities: ["세밀한 권한", "임시 자격증명", "API 키 관리", "SAML 연동"]
    },
    {
      icon: Eye,
      title: "모니터링 & 감사",
      color: "text-yellow-400",
      bgColor: "from-yellow-900/20 to-yellow-800/20",
      services: ["CloudTrail", "Config", "GuardDuty", "Security Hub"],
      capabilities: ["API 추적", "구성 모니터링", "위협 탐지", "보안 통합"]
    },
    {
      icon: Lock,
      title: "데이터 보호",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      encryption: ["전송 중 암호화", "저장 시 암호화", "KMS 키 관리", "CloudHSM"],
      compliance: ["SOC", "PCI DSS", "ISO 27001", "HIPAA"]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-red title-main">
              AWS 보안 완전 가이드
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-orange-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {securityServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${service.bgColor} p-4 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <service.icon className={`w-12 h-12 ${service.color} mx-auto mb-3`} />
                <h3 className={`text-lg font-bold ${service.color} mb-2`}>{service.title}</h3>
              </div>

              <div className="space-y-3">
                {service.awsResponsible && (
                  <div>
                    <h4 className="text-white font-semibold text-xs mb-2">AWS 책임</h4>
                    <div className="space-y-1">
                      {service.awsResponsible.map((item, i) => (
                        <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                          <span className="text-white text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.customerResponsible && (
                  <div>
                    <h4 className="text-white font-semibold text-xs mb-2">고객 책임</h4>
                    <div className="space-y-1">
                      {service.customerResponsible.map((item, i) => (
                        <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                          <span className="text-muted-foreground text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.features && (
                  <div>
                    <h4 className="text-white font-semibold text-xs mb-2">주요 기능</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features.map((feature, i) => (
                        <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                          <span className="text-white text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.services && (
                  <div>
                    <h4 className="text-white font-semibold text-xs mb-2">보안 서비스</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.services.map((svc, i) => (
                        <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                          <span className="text-white text-xs">{svc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.encryption && (
                  <div>
                    <h4 className="text-white font-semibold text-xs mb-2">암호화</h4>
                    <div className="space-y-1">
                      {service.encryption.map((enc, i) => (
                        <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                          <span className="text-white text-xs">{enc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.compliance && (
                  <div>
                    <h4 className="text-white font-semibold text-xs mb-2">규정 준수</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.compliance.map((comp, i) => (
                        <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                          <span className="text-white text-xs">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page09SecurityDetail;