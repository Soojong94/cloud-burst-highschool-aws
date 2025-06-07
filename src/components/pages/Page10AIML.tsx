
import { motion } from "framer-motion";
import { Brain, Camera, FileText, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Page10AIML = () => {
  const services = [
    {
      icon: Brain,
      title: "SageMaker",
      description: "기계 학습 플랫폼",
      detail: "모델 구축, 훈련, 배포의 전체 ML 워크플로우"
    },
    {
      icon: Camera,
      title: "Rekognition",
      description: "이미지 및 비디오 분석",
      detail: "얼굴 인식, 객체 탐지, 텍스트 추출"
    },
    {
      icon: FileText,
      title: "Comprehend",
      description: "자연어 처리",
      detail: "감정 분석, 키워드 추출, 언어 감지"
    },
    {
      icon: Code,
      title: "CodeWhisperer",
      description: "AI 코드 어시스턴트",
      detail: "실시간 코드 제안 및 보안 스캔"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AWS AI/ML 서비스</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            인공지능과 머신러닝을 누구나 쉽게 활용할 수 있는 다양한 서비스를 제공합니다.
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
                AI/ML 자세히 알아보기
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">AWS AI/ML 완전 가이드</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Amazon SageMaker</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    완전 관리형 머신러닝 서비스로, 데이터 과학자와 개발자가 빠르게 ML 모델을 구축, 훈련, 배포할 수 있습니다. 
                    Jupyter 노트북, 자동 모델 튜닝, A/B 테스트, 모델 모니터링 등의 기능을 제공합니다. 
                    Netflix, Lyft, Capital One 등이 사용하고 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">컴퓨터 비전 서비스</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Amazon Rekognition은 딥러닝 기반의 이미지 및 비디오 분석 서비스입니다. 
                    얼굴 인식, 객체 및 장면 탐지, 텍스트 추출, 부적절한 콘텐츠 감지 등이 가능합니다. 
                    보안 시스템, 미디어 분석, 소매업 등에서 활용됩니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">자연어 처리</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Amazon Comprehend는 텍스트에서 인사이트를 추출하는 자연어 처리 서비스입니다. 
                    감정 분석, 엔티티 추출, 키 구문 추출, 언어 감지, 토픽 모델링 등이 가능합니다. 
                    고객 리뷰 분석, 소셜 미디어 모니터링, 문서 분류 등에 활용됩니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Amazon Bedrock</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    생성형 AI를 위한 완전 관리형 서비스로, Claude, Llama, Titan 등 
                    다양한 파운데이션 모델에 API를 통해 액세스할 수 있습니다. 
                    RAG(Retrieval Augmented Generation), 파인튜닝, 에이전트 등을 지원합니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Amazon Q</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    비즈니스용 AI 어시스턴트로, 기업 데이터를 기반으로 질문에 답변하고, 
                    코드 생성, 문서 요약, 워크플로우 자동화 등을 수행할 수 있습니다. 
                    AWS 콘솔에서 바로 사용할 수 있습니다.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">AI/ML 활용 사례</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    개인화 추천 시스템, 사기 탐지, 수요 예측, 의료 이미지 분석, 
                    자율주행, 음성 인식, 번역 서비스 등 다양한 분야에서 활용되고 있습니다. 
                    특히 생성형 AI를 통해 콘텐츠 생성, 코드 작성, 고객 서비스 자동화 등이 가능합니다.
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

export default Page10AIML;
