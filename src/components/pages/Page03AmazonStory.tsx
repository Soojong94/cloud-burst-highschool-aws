import { motion } from "framer-motion";
import { Building, TrendingUp, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page03AmazonStory = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 bg-gradient-to-br from-background via-slate-900 to-orange-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5" />
      <div className="absolute top-24 left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-24 right-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />

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
              Amazon의 성장 스토리
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-red-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20">
            1994년 온라인 서점으로 시작한 Amazon이 어떻게 세계 최대의 클라우드 서비스 제공업체가 되었는지 알아보세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full card-tech hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Building className="w-12 h-12 text-orange-400 mb-4 drop-shadow-lg" />
                <CardTitle>1994-2000: 시작</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Jeff Bezos가 차고에서 시작한 온라인 서점.
                  "지구상에서 가장 고객 중심적인 회사"라는 비전으로 출발했습니다.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full card-neon hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-yellow-400 mb-4 drop-shadow-lg" />
                <CardTitle>2000-2010: 확장</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  전자상거래 플랫폼 확장과 함께 내부 인프라의 필요성을 인식.
                  이것이 훗날 AWS의 기반이 되었습니다.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full card-ai hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Users className="w-12 h-12 text-red-400 mb-4 drop-shadow-lg" />
                <CardTitle>2010-현재: 혁신</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AWS가 세계 1위 클라우드 서비스로 성장.
                  AI, ML, IoT 등 최신 기술을 선도하며 디지털 혁신을 이끌고 있습니다.
                </p>
              </CardContent>
            </Card>
          </motion.div>
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
                자세히 보기
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-card to-background border-orange-500/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient-orange">Amazon의 상세한 성장 스토리</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="dialog-section-orange">
                  <h3 className="text-xl font-semibold mb-3 text-orange-400">1994-1997: 온라인 서점의 탄생</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Jeff Bezos는 인터넷 사용량이 연간 2300% 증가한다는 통계를 보고 온라인 비즈니스의 가능성을 확신했습니다.
                    시애틀의 차고에서 시작된 Amazon.com은 처음에는 책만 판매했지만, 곧 "지구상의 모든 것을 파는 상점"이라는
                    비전을 세웠습니다. 1997년 주식 상장 당시 주가는 18달러였습니다.
                  </p>
                </div>
                <div className="dialog-section-red">
                  <h3 className="text-xl font-semibold mb-3 text-red-400">1998-2002: 카테고리 확장과 도전</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Amazon은 음악, DVD, 전자제품, 장난감 등으로 카테고리를 확장했습니다.
                    닷컴 버블 붕괴로 주가가 94% 하락하는 위기를 겪었지만, 고객 중심 철학과 장기적 비전을 유지했습니다.
                    이 시기에 "Customer Obsession"이라는 핵심 가치가 확립되었습니다.
                  </p>
                </div>
                <div className="dialog-section-blue">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">2003-2006: AWS의 기반 구축</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Amazon의 급속한 성장으로 인해 확장 가능한 인프라가 필요해졌습니다.
                    내부적으로 개발한 분산 컴퓨팅 인프라가 매우 효율적이라는 것을 깨달은 Amazon은
                    이를 외부에 서비스로 제공하기로 결정했습니다. 2006년 AWS가 공식 출시되었습니다.
                  </p>
                </div>
                <div className="dialog-section-green">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">2007-2015: 클라우드 혁명의 선도</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AWS는 클라우드 컴퓨팅 시장을 창조하고 선도했습니다. EC2, S3 등 핵심 서비스들이
                    스타트업부터 대기업까지 모든 규모의 회사들에게 채택되었습니다.
                    Netflix, Airbnb, Uber 같은 혁신적인 회사들이 AWS 위에서 성장했습니다.
                  </p>
                </div>
                <div className="dialog-section-purple">
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">2016-현재: AI와 ML의 대중화</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Amazon은 Alexa를 통해 AI를 일상에 도입했고, AWS를 통해 기업용 AI/ML 서비스를 제공하기 시작했습니다.
                    SageMaker, Rekognition, Comprehend 등의 서비스로 AI 기술의 민주화를 이끌고 있습니다.
                    현재 AWS는 전 세계 클라우드 시장 점유율 1위를 유지하고 있습니다.
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

export default Page03AmazonStory;