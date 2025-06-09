import { motion } from "framer-motion";
import { Container, Shield, Zap, Cpu, Sparkles } from "lucide-react";

const Page12ECSDetail = () => {
  const containerServices = [
    {
      icon: Container,
      title: "ECS vs EKS",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      ecsFeatures: ["AWS 네이티브", "간단한 설정", "빠른 시작", "AWS 통합"],
      eksFeatures: ["Kubernetes 표준", "오픈소스", "포터빌리티", "생태계"],
      comparison: "ECS는 간단함, EKS는 표준화"
    },
    {
      icon: Shield,
      title: "Fargate vs EC2",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      fargateFeatures: ["서버리스", "관리 불필요", "보안 격리", "자동 확장"],
      ec2Features: ["세밀한 제어", "비용 최적화", "성능 튜닝", "기존 워크로드"],
      comparison: "Fargate는 편의성, EC2는 제어권"
    },
    {
      icon: Zap,
      title: "배포 전략",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      blueGreen: ["무중단 배포", "빠른 롤백", "트래픽 전환", "안전성"],
      rolling: ["점진적 배포", "리소스 효율", "리스크 분산", "모니터링"],
      comparison: "Blue/Green vs Rolling 배포"
    },
    {
      icon: Cpu,
      title: "성능 최적화",
      color: "text-orange-400",
      bgColor: "from-orange-900/20 to-orange-800/20",
      optimization: ["리소스 할당", "네트워크 모드", "스토리지 옵션", "로그 관리"],
      monitoring: ["CloudWatch", "Container Insights", "X-Ray", "Health Checks"],
      comparison: "성능과 모니터링 최적화"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-blue-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-blue title-main">
              컨테이너 서비스 가이드
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-blue-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-green-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {containerServices.map((service, index) => (
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
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {service.comparison}
                </p>
              </div>

              <div className="space-y-3">
                {service.ecsFeatures && (
                  <>
                    <div>
                      <h4 className="text-white font-semibold text-xs mb-2">ECS 특징</h4>
                      <div className="space-y-1">
                        {service.ecsFeatures.map((feature, i) => (
                          <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                            <span className="text-white text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xs mb-2">EKS 특징</h4>
                      <div className="space-y-1">
                        {service.eksFeatures.map((feature, i) => (
                          <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                            <span className="text-muted-foreground text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {service.fargateFeatures && (
                  <>
                    <div>
                      <h4 className="text-white font-semibold text-xs mb-2">Fargate</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.fargateFeatures.map((feature, i) => (
                          <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                            <span className="text-white text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xs mb-2">EC2</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.ec2Features.map((feature, i) => (
                          <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                            <span className="text-muted-foreground text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {service.blueGreen && (
                  <>
                    <div>
                      <h4 className="text-white font-semibold text-xs mb-2">Blue/Green</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.blueGreen.map((feature, i) => (
                          <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                            <span className="text-white text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xs mb-2">Rolling</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.rolling.map((feature, i) => (
                          <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                            <span className="text-muted-foreground text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {service.optimization && (
                  <>
                    <div>
                      <h4 className="text-white font-semibold text-xs mb-2">최적화</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.optimization.map((feature, i) => (
                          <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                            <span className="text-white text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-xs mb-2">모니터링</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {service.monitoring.map((feature, i) => (
                          <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                            <span className="text-muted-foreground text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Page12ECSDetail;