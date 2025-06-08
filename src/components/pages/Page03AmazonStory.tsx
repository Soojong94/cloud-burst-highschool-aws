// src/components/pages/Page03AmazonStory.tsx (기존 페이지는 간소화)
import { motion } from "framer-motion";
import { Building, TrendingUp, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
          <p className="text-lg text-muted-foreground mb-6">
            다음 페이지에서 Amazon의 상세한 성장 과정을 확인하세요
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page03AmazonStory;