import { motion } from "framer-motion";
import { Globe, Database, Image, Smartphone, Sparkles } from "lucide-react";

const Page11LambdaDetail = () => {
  const useCases = [
    {
      icon: Globe,
      title: "웹 애플리케이션",
      color: "text-blue-400",
      bgColor: "from-blue-900/20 to-blue-800/20",
      description: "API Gateway + Lambda로 서버리스 웹 백엔드",
      examples: ["REST API", "인증 처리", "사용자 관리", "데이터 검증"],
      benefits: ["무제한 확장", "운영 부담 없음", "비용 최적화", "빠른 배포"]
    },
    {
      icon: Database,
      title: "데이터 처리",
      color: "text-green-400",
      bgColor: "from-green-900/20 to-green-800/20",
      description: "실시간 데이터 변환 및 ETL 파이프라인",
      examples: ["S3 이벤트", "DynamoDB 스트림", "Kinesis 처리", "데이터 정제"],
      benefits: ["이벤트 기반", "자동 처리", "병렬 실행", "오류 처리"]
    },
    {
      icon: Image,
      title: "미디어 처리",
      color: "text-purple-400",
      bgColor: "from-purple-900/20 to-purple-800/20",
      description: "이미지/비디오 변환 및 최적화",
      examples: ["이미지 리사이징", "썸네일 생성", "포맷 변환", "메타데이터 추출"],
      benefits: ["자동 트리거", "병렬 처리", "다양한 포맷", "클라우드 통합"]
    },
    {
      icon: Smartphone,
      title: "모바일 백엔드",
      color: "text-orange-400",
      bgColor: "from-orange-900/20 to-orange-800/20",
      description: "모바일 앱을 위한 서버리스 백엔드",
      examples: ["푸시 알림", "사용자 인증", "파일 업로드", "데이터 동기화"],
      benefits: ["글로벌 배포", "자동 확장", "실시간 처리", "오프라인 지원"]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gradient-to-br from-background via-slate-900 to-purple-900/30 bg-pattern-dots relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-purple title-main">
              Lambda 활용 사례
            </h2>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-purple-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-pink-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${useCase.bgColor} p-4 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-4">
                <useCase.icon className={`w-12 h-12 ${useCase.color} mx-auto mb-3`} />
                <h3 className={`text-lg font-bold ${useCase.color} mb-2`}>{useCase.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {useCase.description}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">사용 예시</h4>
                  <div className="space-y-1">
                    {useCase.examples.map((example, i) => (
                      <div key={i} className="bg-slate-800/50 p-1 rounded text-center">
                        <span className="text-white text-xs">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-xs mb-2">주요 장점</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {useCase.benefits.map((benefit, i) => (
                      <div key={i} className="bg-slate-700/50 p-1 rounded text-center">
                        <span className="text-muted-foreground text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 Lambda 특징 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 p-4 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-3 text-center text-gradient-purple">Lambda 핵심 특징</h3>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="text-center">
              <span className="text-purple-400 font-semibold">15분 실행</span>
              <p className="text-muted-foreground text-xs">최대 실행 시간</p>
            </div>
            <div className="text-center">
              <span className="text-blue-400 font-semibold">100ms 과금</span>
              <p className="text-muted-foreground text-xs">정밀한 요금 계산</p>
            </div>
            <div className="text-center">
              <span className="text-green-400 font-semibold">자동 확장</span>
              <p className="text-muted-foreground text-xs">동시 실행 1000개</p>
            </div>
            <div className="text-center">
              <span className="text-orange-400 font-semibold">200+ 통합</span>
              <p className="text-muted-foreground text-xs">AWS 서비스 연동</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page11LambdaDetail;