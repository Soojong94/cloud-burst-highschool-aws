import { motion } from "framer-motion";
import { Database, Shield, Zap, Cloud, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page06S3 = () => {
  const features = [
    {
      icon: Database,
      title: "무제한 저장",
      description: "99.999999999%의 내구성으로 안전한 데이터 보관",
      color: "text-orange-400",
      cardStyle: "card-data"
    },
    {
      icon: Shield,
      title: "보안",
      description: "암호화, 액세스 제어, 감사 기능 제공",
      color: "text-red-400",
      cardStyle: "card-security"
    },
    {
      icon: Zap,
      title: "성능",
      description: "전 세계 어디서나 빠른 액세스 가능",
      color: "text-yellow-400",
      cardStyle: "card-neon"
    },
    {
      icon: Cloud,
      title: "다양한 스토리지 클래스",
      description: "용도에 맞는 최적화된 스토리지 옵션",
      color: "text-cyan-400",
      cardStyle: "card-tech"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-gradient-to-br from-background via-slate-900 to-orange-900/30 bg-tech-pattern relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

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
              S3 (Simple Storage Service)
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/3 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/3 text-cyan-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20">
            업계 최고의 확장성, 데이터 가용성, 보안 및 성능을 제공하는 객체 스토리지 서비스입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${feature.cardStyle} hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105`}>
                <CardHeader className="text-center">
                  <feature.icon className={`w-12 h-12 mx-auto ${feature.color} mb-4 drop-shadow-lg`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
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
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-500/80 hover:to-red-500/80 pulse-glow">
                S3 자세히 알아보기
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-card to-background border-orange-500/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient-orange">S3 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="dialog-section-orange">
                  <h3 className="text-xl font-semibold mb-3 text-orange-400">스토리지 클래스</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Standard, IA(Infrequent Access), Glacier, Deep Archive 등 다양한 스토리지 클래스를
                    통해 비용을 최적화할 수 있습니다. 각각 다른 액세스 패턴과 비용 구조를 가지고 있습니다.
                  </p>
                </div>
                <div className="dialog-section-red">
                  <h3 className="text-xl font-semibold mb-3 text-red-400">보안 기능</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    기본적으로 모든 데이터는 암호화되며, IAM, 버킷 정책, ACL 등을 통해
                    세밀한 액세스 제어가 가능합니다. 또한 CloudTrail을 통해 모든 액세스를 추적할 수 있습니다.
                  </p>
                </div>
                <div className="dialog-section-yellow">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">활용 사례</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    웹사이트 호스팅, 데이터 백업, 아카이브, 빅데이터 분석, 콘텐츠 배포 등
                    다양한 용도로 활용할 수 있습니다. Netflix, Airbnb 등 글로벌 기업들이 사용하고 있습니다.
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

export default Page06S3;