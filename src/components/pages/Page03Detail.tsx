// src/components/pages/Page03Detail.tsx (새로운 상세 페이지)
import { motion } from "framer-motion";
import { Calendar, TrendingUp, Users, Building2, Sparkles, CheckCircle } from "lucide-react";

const Page03Detail = () => {
  const timelineData = [
    {
      period: "1994-1997",
      title: "온라인 서점의 탄생",
      icon: Building2,
      color: "text-orange-400",
      content: {
        overview: "Jeff Bezos는 인터넷 사용량이 연간 2300% 증가한다는 통계를 보고 온라인 비즈니스의 가능성을 확신했습니다.",
        details: [
          "시애틀의 차고에서 Amazon.com 창립",
          "처음에는 책만 판매, 점진적으로 카테고리 확장",
          "'지구상의 모든 것을 파는 상점'이라는 비전 수립",
          "1997년 주식 상장 당시 주가 18달러"
        ],
        achievement: "온라인 상거래의 새로운 가능성 제시"
      }
    },
    {
      period: "1998-2002",
      title: "카테고리 확장과 도전",
      icon: TrendingUp,
      color: "text-red-400",
      content: {
        overview: "Amazon은 음악, DVD, 전자제품, 장난감 등으로 카테고리를 확장했습니다.",
        details: [
          "닷컴 버블 붕괴로 주가 94% 하락하는 위기",
          "고객 중심 철학과 장기적 비전 유지",
          "'Customer Obsession' 핵심 가치 확립",
          "시장 점유율 확대를 위한 공격적 투자"
        ],
        achievement: "위기 극복을 통한 기업 문화 강화"
      }
    },
    {
      period: "2003-2006",
      title: "AWS의 기반 구축",
      icon: Users,
      color: "text-blue-400",
      content: {
        overview: "Amazon의 급속한 성장으로 인해 확장 가능한 인프라가 필요해졌습니다.",
        details: [
          "내부적으로 분산 컴퓨팅 인프라 개발",
          "인프라의 효율성을 깨닫고 외부 서비스로 제공 결정",
          "2006년 AWS 공식 출시 (S3, EC2)",
          "클라우드 컴퓨팅 시장의 개척자 역할"
        ],
        achievement: "클라우드 컴퓨팅 혁명의 시작"
      }
    },
    {
      period: "2007-2015",
      title: "클라우드 혁명의 선도",
      icon: TrendingUp,
      color: "text-green-400",
      content: {
        overview: "AWS는 클라우드 컴퓨팅 시장을 창조하고 선도했습니다.",
        details: [
          "EC2, S3 등 핵심 서비스 확장",
          "스타트업부터 대기업까지 폭넓은 채택",
          "Netflix, Airbnb, Uber 등 혁신 기업들의 성장 지원",
          "클라우드 퍼스트 전략의 글로벌 확산"
        ],
        achievement: "클라우드 생태계의 표준 확립"
      }
    },
    {
      period: "2016-현재",
      title: "AI와 ML의 대중화",
      icon: Users,
      color: "text-purple-400",
      content: {
        overview: "Amazon은 Alexa를 통해 AI를 일상에 도입했고, AWS를 통해 기업용 AI/ML 서비스를 제공하기 시작했습니다.",
        details: [
          "SageMaker, Rekognition, Comprehend 등 AI 서비스 출시",
          "AI 기술의 민주화 선도",
          "전 세계 클라우드 시장 점유율 1위 유지",
          "생성형 AI 시대의 리더십 확보"
        ],
        achievement: "AI 기술의 대중화와 혁신 가속화"
      }
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 bg-gradient-to-br from-background via-slate-900 to-orange-900/30 bg-pattern-diagonal relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5" />
      <div className="absolute top-24 left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-24 right-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-orange title-main">
              Amazon 성장 스토리 상세 가이드
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-orange-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-red-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20">
            온라인 서점에서 시작하여 세계 최대 클라우드 서비스 제공업체로 성장한 Amazon의 여정을 시대순으로 살펴봅니다.
          </p>
        </motion.div>

        {/* 타임라인 */}
        <div className="space-y-12">
          {timelineData.map((period, index) => (
            <motion.div
              key={period.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* 아이콘 및 기간 */}
              <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${period.color.replace('text-', '')} to-${period.color.replace('text-', '')}/50 flex items-center justify-center mb-4 shadow-lg`}>
                  <period.icon className={`w-8 h-8 ${period.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-center lg:text-left">{period.period}</h3>
                <h4 className={`text-lg ${period.color} font-semibold text-center lg:text-left`}>
                  {period.title}
                </h4>
              </div>

              {/* 내용 */}
              <div className="lg:w-3/4">
                <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {period.content.overview}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-semibold mb-3 text-white">주요 사건</h5>
                      <ul className="space-y-2">
                        {period.content.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className={`w-5 h-5 ${period.color} mr-2 mt-0.5 flex-shrink-0`} />
                            <span className="text-muted-foreground text-sm leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-xl">
                      <h5 className="text-lg font-semibold mb-3 text-white">핵심 성과</h5>
                      <p className={`${period.color} font-medium leading-relaxed`}>
                        {period.content.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 요약 섹션 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-orange-500/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient-orange">
            Amazon 성공의 핵심 요소
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">고객 중심</h3>
              <p className="text-muted-foreground">
                "Customer Obsession"을 핵심 가치로 삼아 지속적으로 고객 경험을 개선
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">장기적 비전</h3>
              <p className="text-muted-foreground">
                단기 수익보다 장기적 성장에 집중하며 혁신적 기술에 지속 투자
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">혁신 문화</h3>
              <p className="text-muted-foreground">
                실패를 두려워하지 않는 혁신 문화와 빠른 실험을 통한 학습
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page03Detail;