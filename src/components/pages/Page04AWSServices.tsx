
import { motion } from "framer-motion";
import { Cloud, Database, Cpu, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page04AWSServices = () => {
  const services = [
    {
      icon: Cpu,
      title: "EC2 (Elastic Compute Cloud)",
      description: "확장 가능한 가상 서버",
      category: "컴퓨팅"
    },
    {
      icon: Database,
      title: "S3 (Simple Storage Service)",
      description: "무제한 객체 스토리지",
      category: "스토리지"
    },
    {
      icon: Database,
      title: "RDS (Relational Database Service)",
      description: "관리형 관계형 데이터베이스",
      category: "데이터베이스"
    },
    {
      icon: Shield,
      title: "IAM (Identity and Access Management)",
      description: "보안 및 액세스 관리",
      category: "보안"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AWS 핵심 서비스</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AWS의 200개 이상의 서비스 중에서 가장 핵심적이고 많이 사용되는 서비스들을 알아보세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <service.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{service.category}</span>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
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
                AWS 서비스 전체 보기
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">AWS 서비스 카테고리</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">컴퓨팅 서비스</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    EC2, Lambda, ECS, EKS, Batch, Lightsail 등 다양한 컴퓨팅 환경을 제공합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">스토리지 서비스</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    S3, EBS, EFS, Glacier 등 다양한 스토리지 솔루션을 제공합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">데이터베이스 서비스</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    RDS, DynamoDB, ElastiCache, Neptune 등 관리형 데이터베이스 서비스를 제공합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">네트워킹 서비스</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    VPC, CloudFront, Route 53, API Gateway 등 네트워킹 인프라를 제공합니다.
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

export default Page04AWSServices;
