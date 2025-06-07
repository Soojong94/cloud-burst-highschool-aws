
import { motion } from "framer-motion";
import { BarChart3, Database, Zap, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page15Analytics = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Redshift",
      description: "데이터 웨어하우스",
      detail: "페타바이트 규모 분석"
    },
    {
      icon: Database,
      title: "Athena",
      description: "서버리스 쿼리",
      detail: "S3 데이터 직접 분석"
    },
    {
      icon: Zap,
      title: "Kinesis",
      description: "실시간 데이터 스트리밍",
      detail: "실시간 데이터 수집 및 처리"
    },
    {
      icon: Search,
      title: "Elasticsearch",
      description: "검색 및 분석",
      detail: "로그 분석 및 검색 엔진"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">분석 및 빅데이터</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            대용량 데이터를 수집, 저장, 처리, 분석할 수 있는 완전 관리형 서비스들입니다.
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
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-2">{service.description}</p>
                  <p className="text-sm text-muted-foreground text-center">{service.detail}</p>
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
                데이터 분석 아키텍처
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">AWS 분석 서비스 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">데이터 레이크 아키텍처</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    S3를 중심으로 한 데이터 레이크를 구축하고, Glue로 ETL 작업을 수행하며, 
                    Athena로 서버리스 쿼리를 실행할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">실시간 분석</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Kinesis를 통해 실시간 데이터 스트림을 처리하고, 
                    Lambda나 Kinesis Analytics로 실시간 분석을 수행할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">기업용 데이터 웨어하우스</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Redshift를 사용하여 페타바이트 규모의 데이터 웨어하우스를 구축하고, 
                    QuickSight로 비즈니스 인텔리전스를 구현할 수 있습니다.
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

export default Page15Analytics;
