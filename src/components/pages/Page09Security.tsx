import { motion } from "framer-motion";
import { Shield, Users, FileText, Building, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page09Security = () => {
  const principles = [
    {
      icon: Shield,
      title: "심층 방어",
      description: "다중 보안 계층으로 포괄적 보호",
      color: "text-red-400",
      cardStyle: "card-security"
    },
    {
      icon: Users,
      title: "최소 권한 원칙",
      description: "필요한 최소한의 권한만 부여",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: FileText,
      title: "보안 모니터링",
      description: "지속적인 보안 상태 모니터링",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Building,
      title: "규정 준수",
      description: "국제 보안 표준 및 인증 준수",
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
      className="min-h-screen py-20 bg-gradient-to-br from-background via-slate-900 to-red-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-24 right-24 w-64 h-64 bg-red-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-24 left-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

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
              AWS 보안 원칙
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-orange-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20">
            AWS는 보안을 최우선으로 고려하여 다양한 보안 서비스와 모범 사례를 제공합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${principle.cardStyle} hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <principle.icon className={`w-12 h-12 mx-auto ${principle.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{principle.description}</p>
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
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-500/80 hover:to-orange-500/80 pulse-glow">
                보안 상세 가이드
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-card to-background border-red-500/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient-orange">AWS 보안 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="dialog-section-red">
                  <h3 className="text-xl font-semibold mb-3 text-red-400">공동 책임 모델</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AWS는 클라우드 '자체'의 보안을 담당하고, 고객은 클라우드 '내'의 보안을 담당합니다.
                    AWS는 인프라 보안을 담당하고, 고객은 운영체제, 애플리케이션, 데이터 보안을 담당합니다.
                  </p>
                </div>
                <div className="dialog-section-blue">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">IAM (Identity and Access Management)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    사용자, 그룹, 역할을 통해 세밀한 권한 관리가 가능합니다.
                    MFA(다중 인증), 임시 자격 증명, 정책 기반 권한 제어 등을 제공합니다.
                  </p>
                </div>
                <div className="dialog-section-green">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">데이터 암호화</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    전송 중 암호화와 저장 시 암호화를 모두 지원합니다.
                    AWS KMS를 통해 암호화 키를 중앙에서 관리할 수 있으며,
                    CloudHSM을 통해 하드웨어 보안 모듈도 사용 가능합니다.
                  </p>
                </div>
                <div className="dialog-section-yellow">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">보안 모니터링</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CloudTrail로 API 호출을 추적하고, Config로 리소스 구성을 모니터링하며,
                    GuardDuty로 위협을 탐지할 수 있습니다. Security Hub를 통해 보안 상태를 통합 관리합니다.
                  </p>
                </div>
                <div className="dialog-section-cyan">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">네트워크 보안</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    VPC, 보안 그룹, NACL, AWS WAF 등을 통해 네트워크 계층에서 보안을 제공합니다.
                    AWS Shield를 통해 DDoS 공격으로부터 보호받을 수 있습니다.
                  </p>
                </div>
                <div className="dialog-section-purple">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">규정 준수</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    SOC, PCI DSS, ISO 27001, HIPAA, GDPR 등 다양한 국제 보안 표준과
                    규정을 준수합니다. AWS Artifact를 통해 규정 준수 보고서에 액세스할 수 있습니다.
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

export default Page09Security;