// src/components/pages/Page02CloudIntroDetail.tsx
import { motion } from "framer-motion";
import { Cloud, Layers, Users, Building, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

const Page02CloudIntroDetail = () => {
  const serviceModels = [
    {
      title: "IaaS (Infrastructure as a Service)",
      description: "가상 머신, 스토리지, 네트워크 등 인프라 제공",
      icon: Building,
      color: "text-blue-400",
      examples: ["Amazon EC2", "Amazon EBS", "Amazon VPC"],
      benefits: [
        "하드웨어 투자 없이 인프라 사용",
        "필요에 따라 즉시 확장/축소",
        "운영 체제와 애플리케이션 완전 제어",
        "기존 IT 자원과 유사한 환경"
      ],
      useCases: [
        "웹사이트 및 웹 애플리케이션 호스팅",
        "백업 및 복구 솔루션",
        "개발 및 테스트 환경",
        "빅데이터 분석"
      ]
    },
    {
      title: "PaaS (Platform as a Service)",
      description: "애플리케이션 개발 및 배포 플랫폼 제공",
      icon: Layers,
      color: "text-green-400",
      examples: ["AWS Elastic Beanstalk", "AWS Lambda", "Amazon RDS"],
      benefits: [
        "개발에만 집중 가능",
        "자동 확장 및 로드 밸런싱",
        "통합 개발 도구 제공",
        "빠른 애플리케이션 배포"
      ],
      useCases: [
        "웹 애플리케이션 개발",
        "API 개발 및 관리",
        "마이크로서비스 아키텍처",
        "DevOps 파이프라인"
      ]
    },
    {
      title: "SaaS (Software as a Service)",
      description: "완전한 소프트웨어 솔루션을 서비스로 제공",
      icon: Cloud,
      color: "text-purple-400",
      examples: ["Amazon WorkSpaces", "Amazon Chime", "AWS IoT Device Management"],
      benefits: [
        "설치 및 유지보수 불필요",
        "언제 어디서나 접근 가능",
        "자동 업데이트",
        "구독 기반 요금제"
      ],
      useCases: [
        "이메일 및 협업 도구",
        "CRM 및 ERP 시스템",
        "프로젝트 관리",
        "원격 근무 솔루션"
      ]
    }
  ];

  const cloudBenefits = [
    {
      title: "비용 효율성",
      description: "초기 투자 비용 없이 사용한 만큼만 지불",
      details: [
        "CAPEX(자본 지출)에서 OPEX(운영 비용)로 전환",
        "하드웨어 구매 및 유지보수 비용 절약",
        "예측 가능한 운영 비용",
        "리소스 사용량에 따른 탄력적 요금"
      ]
    },
    {
      title: "확장성과 탄력성",
      description: "수요에 따라 즉시 리소스 확장 또는 축소",
      details: [
        "Auto Scaling으로 자동 용량 조정",
        "글로벌 인프라를 통한 지리적 확장",
        "트래픽 급증 시 즉시 대응",
        "사용하지 않는 리소스 자동 해제"
      ]
    },
    {
      title: "안정성과 가용성",
      description: "99.9% 이상의 가용성과 데이터 보호",
      details: [
        "다중 가용 영역을 통한 장애 대응",
        "자동 백업 및 복구 시스템",
        "글로벌 CDN을 통한 성능 최적화",
        "DDoS 공격 방어"
      ]
    },
    {
      title: "보안",
      description: "엔터프라이즈급 보안 기능 기본 제공",
      details: [
        "데이터 암호화 (전송 중/저장 시)",
        "접근 제어 및 인증",
        "컴플라이언스 인증",
        "지속적인 보안 모니터링"
      ]
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 bg-gradient-to-br from-background via-slate-900 to-green-900/30 bg-pattern-grid relative overflow-hidden"
    >
      {/* 배경 요소들 */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* 헤더 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-green title-main">
              클라우드 컴퓨팅 완전 가이드
            </h1>
            <Sparkles className="w-8 h-8 absolute top-0 right-1/4 text-green-400 animate-pulse" />
            <Sparkles className="w-6 h-6 absolute bottom-0 left-1/4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
            클라우드 컴퓨팅의 개념부터 서비스 모델, 장점까지 모든 것을 상세히 알아봅니다.
          </p>
        </motion.div>

        {/* 클라우드 정의 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-br from-blue-900/20 to-green-900/20 p-8 rounded-2xl border border-blue-500/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient-blue">
            클라우드 컴퓨팅이란?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                클라우드 컴퓨팅은 인터넷을 통해 서버, 스토리지, 데이터베이스, 네트워킹,
                소프트웨어, 분석, 인텔리전스 등의 컴퓨팅 서비스를 제공하는 것입니다.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                이를 통해 더 빠른 혁신, 유연한 리소스, 규모의 경제를 실현할 수 있으며,
                일반적으로 사용한 클라우드 서비스에 대해서만 요금을 지불합니다.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-400">핵심 특징</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-muted-foreground">주문형 셀프 서비스</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-muted-foreground">광범위한 네트워크 액세스</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-muted-foreground">리소스 풀링</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-muted-foreground">신속한 탄력성</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-muted-foreground">측정 가능한 서비스</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 서비스 모델들 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-orange">
            클라우드 서비스 모델
          </h2>
          <div className="space-y-8">
            {serviceModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/3">
                  <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10 h-full">
                    <div className="flex items-center mb-4">
                      <model.icon className={`w-12 h-12 ${model.color} mr-4`} />
                      <div>
                        <h3 className="text-xl font-bold">{model.title}</h3>
                        <p className="text-muted-foreground">{model.description}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-white">주요 서비스 예시</h4>
                      <ul className="space-y-1">
                        {model.examples.map((example, i) => (
                          <li key={i} className={`${model.color} text-sm`}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold mb-3 text-white flex items-center">
                        <CheckCircle className={`w-5 h-5 ${model.color} mr-2`} />
                        주요 장점
                      </h4>
                      <ul className="space-y-2">
                        {model.benefits.map((benefit, i) => (
                          <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                            • {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold mb-3 text-white flex items-center">
                        <ArrowRight className={`w-5 h-5 ${model.color} mr-2`} />
                        활용 사례
                      </h4>
                      <ul className="space-y-2">
                        {model.useCases.map((useCase, i) => (
                          <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                            • {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 클라우드 장점 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient-purple">
            클라우드 컴퓨팅의 주요 장점
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cloudBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-2xl border border-purple-500/20"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-400">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{benefit.description}</p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 클라우드 배포 모델 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-orange-500/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient-orange">
            클라우드 배포 모델
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">퍼블릭 클라우드</h3>
              <p className="text-muted-foreground text-sm">
                AWS, Azure, GCP 등 제3자가 소유하고 운영하는 클라우드 서비스
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">프라이빗 클라우드</h3>
              <p className="text-muted-foreground text-sm">
                단일 조직에서 전용으로 사용하는 클라우드 인프라
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">하이브리드 클라우드</h3>
              <p className="text-muted-foreground text-sm">
                퍼블릭과 프라이빗 클라우드를 조합한 환경
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-400">멀티 클라우드</h3>
              <p className="text-muted-foreground text-sm">
                여러 클라우드 제공업체의 서비스를 동시에 사용
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Page02CloudIntroDetail;