import { motion } from "framer-motion";
import { Globe, Video, Archive, Database, FileText, Layers, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageS3UseCases = () => {
  const usecases = [
    {
      icon: Globe,
      title: "정적 웹 호스팅",
      description: "HTML·CSS·JS 파일을 S3에 업로드하면 별도 서버 없이 웹사이트 운영. CloudFront와 연동 시 글로벌 CDN 자동 적용",
      example: "포트폴리오 사이트, 랜딩 페이지",
      cost: "월 1원~수십 원 수준",
      color: "text-blue-400",
      cardStyle: "card-tech"
    },
    {
      icon: Video,
      title: "미디어 스트리밍",
      description: "영상·오디오 파일 저장 후 CloudFront로 전 세계 스트리밍. 용량 무제한, 99.999999999% 내구성",
      example: "넷플릭스, 유튜브 스타일 서비스",
      cost: "저장 + 전송량 과금",
      color: "text-red-400",
      cardStyle: "card-neon"
    },
    {
      icon: Archive,
      title: "백업 & 아카이브",
      description: "DB 스냅샷, 로그 파일, 문서를 자동 백업. Glacier 클래스로 장기 보관 시 GB당 $0.004로 초저가",
      example: "기업 문서 보관, DR 백업",
      cost: "Glacier: GB당 월 $0.004",
      color: "text-orange-400",
      cardStyle: "card-data"
    },
    {
      icon: Database,
      title: "데이터 레이크",
      description: "정형·비정형·반정형 모든 데이터를 중앙 집중 저장. Athena로 SQL 쿼리, Glue로 ETL 파이프라인 구성",
      example: "빅데이터 분석, ML 학습 데이터셋",
      cost: "저장: GB당 월 $0.023",
      color: "text-purple-400",
      cardStyle: "card-ai"
    },
    {
      icon: FileText,
      title: "로그 중앙 수집",
      description: "EC2·Lambda·ELB 로그를 자동으로 S3에 집적. Athena나 OpenSearch로 실시간 분석 및 이상 탐지",
      example: "보안 감사, 서비스 모니터링",
      cost: "로그 저장 + 분석 쿼리 과금",
      color: "text-green-400",
      cardStyle: "card-data"
    },
    {
      icon: Layers,
      title: "소프트웨어 배포",
      description: "빌드 결과물, Docker 이미지, 설치 파일을 S3에 저장. CodeDeploy·CodePipeline과 연동해 자동 배포",
      example: "CI/CD 파이프라인 아티팩트 저장소",
      cost: "파일 크기·요청 수 기반 과금",
      color: "text-cyan-400",
      cardStyle: "card-tech"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-8 md:py-12 lg:py-0 flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-emerald-900/30 bg-pattern-dots relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main title-section">
              S3 활용 사례
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-emerald-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/20">
            단순한 파일 저장소를 넘어 — S3가 아키텍처의 핵심이 되는 6가지 방식
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usecases.map((uc, index) => (
            <motion.div
              key={uc.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${uc.cardStyle} hover:scale-105 transition-all duration-300`}>
                <CardHeader className="text-center">
                  <uc.icon className={`w-12 h-12 mx-auto ${uc.color} mb-4`} />
                  <CardTitle className="text-lg">{uc.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">{uc.description}</p>
                  <div className="bg-black/20 rounded-xl p-2 space-y-1">
                    <p className="text-xs text-slate-400">예시: <span className="text-white">{uc.example}</span></p>
                    <p className="text-xs text-slate-400">비용: <span className={`${uc.color} font-semibold`}>{uc.cost}</span></p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PageS3UseCases;
