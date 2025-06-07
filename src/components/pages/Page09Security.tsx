
import { motion } from "framer-motion";
import { Shield, Users, FileText, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page09Security = () => {
  const principles = [
    {
      icon: Shield,
      title: "심층 방어",
      description: "다중 보안 계층으로 포괄적 보호"
    },
    {
      icon: Users,
      title: "최소 권한 원칙",
      description: "필요한 최소한의 권한만 부여"
    },
    {
      icon: FileText,
      title: "보안 모니터링",
      description: "지속적인 보안 상태 모니터링"
    },
    {
      icon: Building,
      title: "규정 준수",
      description: "국제 보안 표준 및 인증 준수"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AWS 보안 원칙</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <principle.icon className="w-12 h-12 mx-auto text-primary mb-4" />
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
              <Button size="lg" className="text-lg px-8 py-4">
                보안 상세 가이드
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">AWS 보안 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">공동 책임 모델</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AWS는 클라우드 '자체'의 보안을 담당하고, 고객은 클라우드 '내'의 보안을 담당합니다. 
                    AWS는 인프라 보안을 담당하고, 고객은 운영체제, 애플리케이션, 데이터 보안을 담당합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">IAM (Identity and Access Management)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    사용자, 그룹, 역할을 통해 세밀한 권한 관리가 가능합니다. 
                    MFA(다중 인증), 임시 자격 증명, 정책 기반 권한 제어 등을 제공합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">데이터 암호화</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    전송 중 암호화와 저장 시 암호화를 모두 지원합니다. 
                    AWS KMS를 통해 암호화 키를 중앙에서 관리할 수 있으며, 
                    CloudHSM을 통해 하드웨어 보안 모듈도 사용 가능합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">보안 모니터링</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CloudTrail로 API 호출을 추적하고, Config로 리소스 구성을 모니터링하며, 
                    GuardDuty로 위협을 탐지할 수 있습니다. Security Hub를 통해 보안 상태를 통합 관리합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">네트워크 보안</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    VPC, 보안 그룹, NACL, AWS WAF 등을 통해 네트워크 계층에서 보안을 제공합니다. 
                    AWS Shield를 통해 DDoS 공격으로부터 보호받을 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">규정 준수</h3>
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
