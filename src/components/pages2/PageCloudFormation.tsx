import { motion } from "framer-motion";
import { FileCode, GitBranch, RefreshCw, Layers, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageCloudFormation = () => {
  const benefits = [
    {
      icon: FileCode,
      title: "인프라를 코드로",
      description: "YAML/JSON 템플릿 하나로 전체 인프라 정의. 사람의 실수 없이 동일한 환경을 반복 생성",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: GitBranch,
      title: "버전 관리",
      description: "Git으로 인프라 변경 이력 추적. PR 리뷰 후 인프라 배포 — 코드와 인프라를 함께 관리",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: RefreshCw,
      title: "자동 롤백",
      description: "배포 중 오류 발생 시 이전 상태로 자동 복원. 인프라 변경 실패의 영향 최소화",
      color: "text-orange-400",
      cardStyle: "card-neon"
    },
    {
      icon: Layers,
      title: "스택 관리",
      description: "관련 리소스를 하나의 스택으로 묶어 생성·수정·삭제. 환경(개발·스테이징·운영) 간 일관성 유지",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
  ];

  const templateExample = `AWSTemplateFormatVersion: '2010-09-09'
Resources:
  WebServer:
    Type: AWS::EC2::Instance
    Properties:
      InstanceType: t3.micro
      ImageId: ami-0c55b159cbfafe1f0
      SecurityGroups:
        - !Ref WebSG
  WebSG:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Web server security group
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 80
          ToPort: 80
          CidrIp: 0.0.0.0/0`;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-indigo-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-blue title-main title-section">
              CloudFormation (IaC)
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-indigo-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-indigo-500/20">
            Infrastructure as Code — 클릭이 아닌 코드로 인프라를 관리하는 현대적 방식
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full ${benefit.cardStyle} hover:scale-105 transition-all duration-300`}>
                    <CardHeader className="text-center pb-2">
                      <benefit.icon className={`w-8 h-8 mx-auto ${benefit.color} mb-2`} />
                      <CardTitle className="text-sm">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-xs text-center leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-indigo-500/20"
            >
              <p className="text-indigo-400 font-bold mb-2 text-sm">수동 설정의 문제</p>
              <div className="space-y-1">
                {["콘솔 클릭 과정을 문서화하기 어려움", "같은 설정을 여러 환경에 반복 → 실수", "누가 언제 무엇을 바꿨는지 추적 불가"].map(p => (
                  <p key={p} className="text-xs text-muted-foreground">❌ {p}</p>
                ))}
              </div>
              <div className="mt-3 space-y-1">
                {["YAML 파일 한 줄 수정 → 인프라 변경", "Git blame으로 변경자·시점 즉시 확인", "개발·운영 환경 100% 동일하게 유지"].map(p => (
                  <p key={p} className="text-xs text-white">✅ {p}</p>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-5">
              <p className="text-slate-400 text-xs font-mono mb-3">template.yaml — EC2 + 보안그룹 예시</p>
              <pre className="text-xs text-green-400 font-mono leading-relaxed overflow-auto">
                {templateExample}
              </pre>
              <div className="mt-4 bg-blue-900/20 rounded-xl p-3">
                <p className="text-blue-400 text-xs font-bold">aws cloudformation deploy \</p>
                <p className="text-blue-400 text-xs">  --template-file template.yaml \</p>
                <p className="text-blue-400 text-xs">  --stack-name my-web-stack</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PageCloudFormation;
