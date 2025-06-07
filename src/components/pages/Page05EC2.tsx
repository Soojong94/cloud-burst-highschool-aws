
import { motion } from "framer-motion";
import { Cpu, Zap, Shield, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page05EC2 = () => {
  const features = [
    {
      icon: Cpu,
      title: "확장성",
      description: "몇 분 만에 수천 개의 인스턴스 시작 가능",
      color: "text-blue-400"
    },
    {
      icon: Zap,
      title: "성능",
      description: "다양한 인스턴스 유형으로 최적화된 성능",
      color: "text-yellow-400"
    },
    {
      icon: Shield,
      title: "보안",
      description: "VPC와 보안 그룹으로 네트워크 보안 제어",
      color: "text-green-400"
    },
    {
      icon: DollarSign,
      title: "비용 효율성",
      description: "사용한 만큼만 지불하는 유연한 요금제",
      color: "text-emerald-400"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-gradient-to-br from-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-blue">EC2 (Elastic Compute Cloud)</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            클라우드에서 안전하고 크기 조정이 가능한 컴퓨팅 용량을 제공하는 가상 서버 서비스입니다.
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
              <Card className="h-full bg-gradient-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border-primary/30">
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
              <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/80 hover:to-blue-500/80">
                EC2 상세 정보
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-card to-background border-primary/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient-purple">EC2 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="p-4 bg-blue-900/20 rounded-xl border border-blue-500/30">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">인스턴스 유형</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    t2.micro부터 고성능 GPU 인스턴스까지, 다양한 워크로드에 최적화된 인스턴스를 제공합니다.
                    범용, 컴퓨팅 최적화, 메모리 최적화, 스토리지 최적화, 가속 컴퓨팅 등 5가지 카테고리로 분류됩니다.
                  </p>
                </div>
                <div className="p-4 bg-green-900/20 rounded-xl border border-green-500/30">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">요금 모델</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    온디맨드, 예약 인스턴스, 스팟 인스턴스, 전용 호스트 등 다양한 요금 모델을 통해
                    비용을 최적화할 수 있습니다. 워크로드의 특성에 따라 최대 90%까지 비용을 절약할 수 있습니다.
                  </p>
                </div>
                <div className="p-4 bg-purple-900/20 rounded-xl border border-purple-500/30">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">보안 기능</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    보안 그룹, VPC, IAM 역할, 키 페어 등을 통해 강력한 보안을 제공합니다.
                    또한 AWS Systems Manager를 통해 패치 관리와 구성 관리를 자동화할 수 있습니다.
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

export default Page05EC2;
