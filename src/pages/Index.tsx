import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Cloud, 
  Globe, 
  Shield, 
  Code, 
  Database, 
  Cpu, 
  HardDrive,
  Brain,
  Users,
  Trophy,
  ChevronRight,
  Target,
  Smartphone,
  Camera,
  Zap,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Building,
  Gamepad2,
  DollarSign,
  Info
} from 'lucide-react';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    {
      id: 'intro',
      title: '일상 속 클라우드',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500',
      hasModal: false
    },
    {
      id: 'generation-comparison',
      title: '세대별 기술 변화',
      icon: Camera,
      color: 'from-purple-500 to-pink-500',
      hasModal: false
    },
    {
      id: 'cloud-definition',
      title: '클라우드란 무엇인가',
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500',
      hasModal: true
    },
    {
      id: 'cloud-benefits',
      title: '클라우드의 장점',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      hasModal: false
    },
    {
      id: 'amazon-story',
      title: '아마존의 변신',
      icon: Building,
      color: 'from-orange-500 to-yellow-500',
      hasModal: true
    },
    {
      id: 'aws-birth',
      title: 'AWS의 탄생',
      icon: Lightbulb,
      color: 'from-red-500 to-pink-500',
      hasModal: true
    },
    {
      id: 'aws-numbers',
      title: 'AWS의 위상',
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500',
      hasModal: true
    },
    {
      id: 'daily-aws',
      title: '일상 속 AWS',
      icon: Gamepad2,
      color: 'from-cyan-500 to-blue-500',
      hasModal: true
    },
    {
      id: 'ec2-intro',
      title: 'EC2 - 클라우드 컴퓨터',
      icon: Cpu,
      color: 'from-amber-500 to-orange-500',
      hasModal: true
    },
    {
      id: 'ec2-demo',
      title: 'EC2 실제 사례',
      icon: Code,
      color: 'from-emerald-500 to-green-500',
      hasModal: true
    },
    {
      id: 's3-intro',
      title: 'S3 - 무제한 저장소',
      icon: HardDrive,
      color: 'from-blue-500 to-indigo-500',
      hasModal: true
    },
    {
      id: 's3-cases',
      title: 'S3 활용 사례',
      icon: HardDrive,
      color: 'from-pink-500 to-rose-500',
      hasModal: true
    },
    {
      id: 'rds-intro',
      title: 'RDS - 관리형 데이터베이스',
      icon: Database,
      color: 'from-teal-500 to-cyan-500',
      hasModal: true
    },
    {
      id: 'ai-services',
      title: 'AWS AI 서비스',
      icon: Brain,
      color: 'from-purple-500 to-violet-500',
      hasModal: true
    },
    {
      id: 'new-careers',
      title: '새로운 직업들',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-500',
      hasModal: true
    },
    {
      id: 'career-paths',
      title: '구체적인 진로',
      icon: Target,
      color: 'from-green-500 to-teal-500',
      hasModal: true
    },
    {
      id: 'student-action',
      title: '고등학생 실천 방안',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-500',
      hasModal: true
    },
    {
      id: 'security-basics',
      title: '보안 기본 원칙',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      hasModal: true
    },
    {
      id: 'learning-roadmap',
      title: '학습 로드맵',
      icon: Users,
      color: 'from-blue-500 to-purple-500',
      hasModal: true
    }
  ];

  const goToNextSection = () => {
    const nextSection = currentSection + 1;
    if (nextSection < sections.length) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSection(nextSection);
        setIsTransitioning(false);
        setTimeout(() => {
          sectionRefs.current[nextSection]?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }, 300);
    }
  };

  const goToPreviousSection = () => {
    const prevSection = currentSection - 1;
    if (prevSection >= 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSection(prevSection);
        setIsTransitioning(false);
        setTimeout(() => {
          sectionRefs.current[prevSection]?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }, 300);
    }
  };

  const goToSection = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(index);
      setIsTransitioning(false);
      setTimeout(() => {
        sectionRefs.current[index]?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }, 300);
  };

  const getModalContent = (sectionId: string) => {
    switch (sectionId) {
      case 'cloud-definition':
        return {
          title: '클라우드 컴퓨팅 심화 이해',
          content: (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-3">클라우드 컴퓨팅의 5가지 핵심 특징</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h5 className="font-semibold">온디맨드 셀프서비스</h5>
                      <p className="text-sm text-gray-600">사용자가 필요할 때 언제든지 컴퓨팅 자원을 자동으로 프로비저닝할 수 있습니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h5 className="font-semibold">광범위한 네트워크 접근</h5>
                      <p className="text-sm text-gray-600">네트워크를 통해 어디서든 접근 가능하며, 다양한 디바이스에서 사용할 수 있습니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h5 className="font-semibold">자원 풀링</h5>
                      <p className="text-sm text-gray-600">여러 사용자가 물리적 자원을 공유하여 효율성을 극대화합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h5 className="font-semibold">빠른 탄력성</h5>
                      <p className="text-sm text-gray-600">필요에 따라 자원을 빠르게 확장하거나 축소할 수 있습니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <div>
                      <h5 className="font-semibold">측정 가능한 서비스</h5>
                      <p className="text-sm text-gray-600">사용량을 모니터링하고 제어할 수 있으며, 사용한 만큼만 비용을 지불합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        };
      
      case 'amazon-story':
        return {
          title: '아마존의 놀라운 변신 이야기',
          content: (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-3">제프 베조스의 비전</h4>
                <p className="text-gray-600 mb-4">
                  1994년, 제프 베조스는 월스트리트의 안정적인 직장을 떠나 시애틀의 차고에서 온라인 서점을 시작했습니다. 
                  당시 인터넷은 매년 2300% 성장하고 있었고, 베조스는 이 기회를 놓치고 싶지 않았습니다.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-3">성장의 고민</h4>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm mb-2"><strong>문제상황:</strong></p>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• 크리스마스 시즌마다 서버가 다운</li>
                    <li>• 전 세계 확장하면서 각국마다 서버 구축 필요</li>
                    <li>• 개발자들이 코딩보다 서버 관리에 더 많은 시간 소모</li>
                    <li>• 예측하기 어려운 트래픽으로 인한 비효율</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3">혁신적인 해결책</h4>
                <p className="text-gray-600">
                  아마존 내부에서 사용하던 인프라 관리 시스템이 너무 잘 작동해서, 
                  "이걸 다른 회사들도 사용할 수 있게 하면 어떨까?"라는 아이디어가 나왔습니다. 
                  이것이 바로 AWS의 시작이었습니다.
                </p>
              </div>
            </div>
          )
        };

      case 'aws-birth':
        return {
          title: 'AWS 탄생의 배경과 의미',
          content: (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-3">2006년 3월 14일 - S3 런칭</h4>
                <p className="text-gray-600 mb-4">
                  AWS의 첫 번째 서비스인 S3(Simple Storage Service)가 출시되었습니다. 
                  처음에는 많은 사람들이 "아마존이 왜 서점에서 IT 서비스를?"라고 의아해했습니다.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3">초기 서비스들</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold">S3 (Simple Storage Service)</h5>
                    <p className="text-sm text-gray-600">파일을 인터넷에 저장하고 어디서든 접근할 수 있는 서비스</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold">EC2 (Elastic Compute Cloud)</h5>
                    <p className="text-sm text-gray-600">가상 컴퓨터를 클라우드에서 임대할 수 있는 서비스</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold">SQS (Simple Queue Service)</h5>
                    <p className="text-sm text-gray-600">애플리케이션 간 메시지를 주고받을 수 있는 서비스</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3">게임 체인저</h4>
                <p className="text-gray-600">
                  AWS의 등장으로 스타트업들도 몇 분 만에 전 세계 서비스를 시작할 수 있게 되었습니다. 
                  이전에는 수억 원의 초기 투자가 필요했던 일이 월 몇만 원으로 가능해진 것입니다.
                </p>
              </div>
            </div>
          )
        };

      case 'ec2-intro':
        return {
          title: 'EC2 완벽 이해하기',
          content: (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-3">EC2란 무엇인가?</h4>
                <p className="text-gray-600 mb-4">
                  EC2는 "Elastic Compute Cloud"의 줄임말로, 클라우드에서 제공하는 가상 컴퓨터입니다. 
                  집에 있는 컴퓨터와 똑같지만, 인터넷을 통해 접근하고 사용하는 점이 다릅니다.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3">EC2 인스턴스 타입</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-blue-800">t2.micro</h5>
                    <p className="text-sm text-blue-600">무료 티어, 웹사이트나 소규모 앱에 적합</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-green-800">c5.large</h5>
                    <p className="text-sm text-green-600">CPU 집약적인 작업에 최적화</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-purple-800">r5.xlarge</h5>
                    <p className="text-sm text-purple-600">메모리 집약적인 작업에 최적화</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3">실제 사용 예시</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm mb-2"><strong>시나리오:</strong> 고등학생이 개인 포트폴리오 웹사이트 만들기</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>1. AWS 프리티어로 t2.micro 인스턴스 생성 (무료)</p>
                    <p>2. 리눅스 서버에 웹서버(Apache/Nginx) 설치</p>
                    <p>3. HTML, CSS, JavaScript로 만든 웹사이트 업로드</p>
                    <p>4. 도메인 연결하여 전 세계에서 접근 가능</p>
                  </div>
                </div>
              </div>
            </div>
          )
        };

      case 's3-intro':
        return {
          title: 'S3 스토리지 서비스 완전 정복',
          content: (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-3">S3의 특별한 점</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">99.999999999%</div>
                    <p className="text-sm text-gray-600">데이터 내구성 (11 9's)</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">무제한</div>
                    <p className="text-sm text-gray-600">저장 용량</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3">S3 스토리지 클래스</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold">Standard</h5>
                    <p className="text-sm text-gray-600">자주 접근하는 데이터용, 가장 빠른 접근 속도</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-semibold">Standard-IA</h5>
                    <p className="text-sm text-gray-600">가끔 접근하는 데이터용, 저장 비용 절약</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold">Glacier</h5>
                    <p className="text-sm text-gray-600">아카이브용, 매우 저렴하지만 복구에 시간 소요</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-3">고등학생 활용 아이디어</h4>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-sm">
                    <li>📸 포트폴리오 이미지 저장소</li>
                    <li>📱 모바일 앱의 사진/동영상 저장</li>
                    <li>🎵 음악이나 팟캐스트 호스팅</li>
                    <li>📚 학습 자료 백업 및 공유</li>
                    <li>🌐 정적 웹사이트 호스팅</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        };

      case 'new-careers':
        return {
          title: '클라우드 시대의 새로운 직업들',
          content: (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-3">고연봉 클라우드 직업 TOP 5</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <h5 className="font-semibold">클라우드 아키텍트</h5>
                      <p className="text-sm text-gray-600">클라우드 인프라 설계 및 구축</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">7천만원~1억원</div>
                      <div className="text-xs text-gray-500">연봉</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <h5 className="font-semibold">DevOps 엔지니어</h5>
                      <p className="text-sm text-gray-600">개발과 운영을 연결하는 역할</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">6천만원~9천만원</div>
                      <div className="text-xs text-gray-500">연봉</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <div>
                      <h5 className="font-semibold">클라우드 보안 전문가</h5>
                      <p className="text-sm text-gray-600">클라우드 환경의 보안 관리</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600">8천만원~1억2천만원</div>
                      <div className="text-xs text-gray-500">연봉</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <div>
                      <h5 className="font-semibold">데이터 엔지니어</h5>
                      <p className="text-sm text-gray-600">클라우드 기반 데이터 파이프라인 구축</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-orange-600">7천만원~1억원</div>
                      <div className="text-xs text-gray-500">연봉</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <div>
                      <h5 className="font-semibold">클라우드 컨설턴트</h5>
                      <p className="text-sm text-gray-600">기업의 클라우드 전환 컨설팅</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600">8천만원~1억5천만원</div>
                      <div className="text-xs text-gray-500">연봉</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-800 mb-2">💡 왜 이렇게 연봉이 높을까?</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• 급속한 디지털 전환으로 수요 급증</li>
                  <li>• 전문 인력 부족 (공급 부족)</li>
                  <li>• 기업의 핵심 인프라를 담당</li>
                  <li>• 글로벌 시장에서 경쟁력 확보</li>
                </ul>
              </div>
            </div>
          )
        };

      case 'student-action':
        return {
          title: '고등학생을 위한 실전 가이드',
          content: (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-3">단계별 실천 계획</h4>
                <div className="space-y-4">
                  <div className="border border-blue-200 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <h5 className="font-semibold">AWS 프리티어 가입 (지금 당장!)</h5>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1 ml-11">
                      <li>• 신용카드 필요 (해외결제 가능한 체크카드도 OK)</li>
                      <li>• 12개월 무료 사용 가능</li>
                      <li>• EC2 750시간, S3 5GB 등 무료 제공</li>
                      <li>• 실습하면서 배우는 것이 가장 효과적</li>
                    </ul>
                  </div>

                  <div className="border border-green-200 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <h5 className="font-semibold">첫 번째 프로젝트 진행</h5>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1 ml-11">
                      <li>• 개인 포트폴리오 웹사이트 만들기</li>
                      <li>• S3로 정적 웹사이트 호스팅</li>
                      <li>• 또는 EC2로 동적 웹사이트 구축</li>
                      <li>• 과정을 블로그에 기록하여 포트폴리오 제작</li>
                    </ul>
                  </div>

                  <div className="border border-purple-200 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <h5 className="font-semibold">AWS 자격증 도전</h5>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1 ml-11">
                      <li>• AWS Cloud Practitioner (입문자용)</li>
                      <li>• 온라인 무료 교육 자료 활용</li>
                      <li>• 시험비 150달러 (대학 진학 시 유리)</li>
                      <li>• 고등학생도 충분히 취득 가능</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">📚 추천 학습 리소스</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• AWS 공식 무료 온라인 교육 (AWS Skill Builder)</li>
                  <li>• 생활코딩 AWS 강의 (무료)</li>
                  <li>• 인프런, 유데미 AWS 강의</li>
                  <li>• AWS 공식 문서 (한국어 지원)</li>
                </ul>
              </div>
            </div>
          )
        };

      default:
        return null;
    }
  };

  const renderSection = () => {
    const section = sections[currentSection];
    const IconComponent = section.icon;
    const modalContent = getModalContent(section.id);

    return (
      <div className={`space-y-8 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {/* Section Header */}
        <div 
          ref={(el) => sectionRefs.current[currentSection] = el}
          className={`bg-gradient-to-r ${section.color} p-12 rounded-2xl text-white text-center transform hover:scale-105 transition-all duration-300 shadow-2xl`}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="animate-pulse">
              <IconComponent className="w-20 h-20" />
            </div>
            <h2 className="text-4xl font-bold">{section.title}</h2>
            {section.hasModal && modalContent && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 transition-all duration-300">
                    <Info className="w-4 h-4 mr-2" />
                    자세히 보기
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">{modalContent.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    {modalContent.content}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>

        {/* Section Content */}
        <div className="space-y-6">
          {currentSection === 0 && (
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-center">우리가 매일 사용하는 클라우드</h3>
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                클라우드는 이제 우리 일상 깊숙이 들어와 있습니다. 아침에 일어나서 스마트폰을 확인하는 순간부터 
                밤에 잠들기 전까지, 우리는 수많은 클라우드 서비스를 사용하고 있습니다.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Smartphone className="w-12 h-12 mb-4 text-blue-500" />
                    <h4 className="text-xl font-bold mb-3">스마트폰 사진</h4>
                    <p className="text-gray-600 leading-relaxed">
                      카메라로 찍은 사진이 자동으로 구글 포토나 아이클라우드에 저장됩니다. 
                      언제 어디서든 접근할 수 있고, 친구들과 쉽게 공유할 수 있습니다.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Gamepad2 className="w-12 h-12 mb-4 text-green-500" />
                    <h4 className="text-xl font-bold mb-3">온라인 게임</h4>
                    <p className="text-gray-600 leading-relaxed">
                      리그오브레전드, 배틀그라운드 같은 게임들은 모두 클라우드 서버에서 운영됩니다. 
                      전 세계 수백만 명이 동시에 게임을 즐길 수 있는 이유입니다.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Globe className="w-12 h-12 mb-4 text-purple-500" />
                    <h4 className="text-xl font-bold mb-3">소셜 미디어</h4>
                    <p className="text-gray-600 leading-relaxed">
                      인스타그램, 틱톡, 유튜브... 우리가 매일 보는 모든 콘텐츠들이 
                      클라우드에 저장되고 전 세계로 배포됩니다.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <BookOpen className="w-12 h-12 mb-4 text-orange-500" />
                    <h4 className="text-xl font-bold mb-3">온라인 수업</h4>
                    <p className="text-gray-600 leading-relaxed">
                      줌, 구글 클래스룸 등으로 진행되는 온라인 수업도 모두 클라우드 기술 덕분입니다. 
                      코로나19 때 우리가 집에서도 공부할 수 있었던 이유죠.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSection === 1 && (
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-center">90년대 vs 현재</h3>
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                불과 30년 전과 비교하면 기술의 변화는 정말 놀랍습니다. 
                특히 사진을 예로 들어보면 그 차이를 확실히 느낄 수 있습니다.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-gray-300">
                  <CardContent className="p-8">
                    <Camera className="w-12 h-12 mb-4 text-gray-500" />
                    <h4 className="text-2xl font-bold mb-4 text-gray-600">1990년대</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span>필름 카메라로 사진 촬영 (36장 제한)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span>현상소에서 필름 현상 (1-2일 소요)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span>인화지에 사진 출력</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span>앨범에 보관</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span>친구들에게 직접 전달하거나 우편 발송</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                      <p className="text-sm text-gray-600">비용: 필름값 + 현상비 + 인화비 (약 1만원)</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2 border-blue-300 bg-blue-50">
                  <CardContent className="p-8">
                    <Smartphone className="w-12 h-12 mb-4 text-blue-500" />
                    <h4 className="text-2xl font-bold mb-4 text-blue-600">현재 (2024년)</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>스마트폰으로 무제한 촬영</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>클라우드에 즉시 자동 저장</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>전 세계 어디서든 즉시 접근</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>AI가 자동으로 분류 및 검색</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>SNS로 전 세계에 즉시 공유</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                      <p className="text-sm text-blue-600">비용: 거의 무료 (데이터 요금만)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center mt-8">
                <div className="inline-block p-4 bg-yellow-100 rounded-lg">
                  <p className="text-lg font-semibold text-yellow-800">
                    💡 이 모든 변화의 핵심이 바로 "클라우드" 기술입니다!
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentSection === 2 && (
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-center">클라우드 컴퓨팅의 정의</h3>
              <div className="text-center mb-8">
                <div className="inline-block p-6 bg-blue-50 rounded-xl">
                  <Cloud className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                  <p className="text-xl font-semibold text-blue-800 leading-relaxed">
                    인터넷을 통해 컴퓨팅 자원을 <br />
                    언제든지 빌려 쓸 수 있는 서비스
                  </p>
                </div>
              </div>
              
              <Card className="border-2 border-blue-200">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold mb-6 text-center">클라우드란 쉽게 말해서...</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h5 className="text-lg font-bold text-red-600">기존 방식 (On-Premise)</h5>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="mb-2">🏠 집에서 컴퓨터를 직접 구매</p>
                        <p className="mb-2">⚡ 전기료 계속 지불</p>
                        <p className="mb-2">🔧 고장나면 직접 수리</p>
                        <p>💾 용량 부족하면 새로 구매</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h5 className="text-lg font-bold text-blue-600">클라우드 방식</h5>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="mb-2">☁️ 인터넷으로 컴퓨터 대여</p>
                        <p className="mb-2">💰 사용한 만큼만 비용 지불</p>
                        <p className="mb-2">🛠️ 관리는 업체가 알아서</p>
                        <p>📈 필요하면 즉시 확장</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                    <h4 className="font-bold text-lg mb-2">On-Demand</h4>
                    <p className="text-gray-600">필요할 때 즉시 사용 가능</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-12 h-12 mx-auto mb-4 text-green-500" />
                    <h4 className="font-bold text-lg mb-2">Everywhere</h4>
                    <p className="text-gray-600">인터넷만 있으면 어디서든</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                    <h4 className="font-bold text-lg mb-2">Pay-as-you-go</h4>
                    <p className="text-gray-600">사용한 만큼만 비용 지불</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSection === 3 && (
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-center">클라우드를 사용하는 이유</h3>
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                전 세계 기업들이 클라우드로 전환하는 이유는 무엇일까요? 
                개인부터 대기업까지 모두가 선택하는 클라우드의 장점을 알아보세요.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-green-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <DollarSign className="w-10 h-10 text-green-500" />
                      <h4 className="text-xl font-bold">비용 절약</h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-600">💰 초기 투자 비용 없음</p>
                      <p className="text-gray-600">📊 사용한 만큼 지불</p>
                      <p className="text-gray-600">🔧 유지보수 비용 절약</p>
                      <div className="bg-green-50 p-3 rounded-lg mt-4">
                        <p className="text-sm font-semibold text-green-800">
                          예: 서버 1대 구매 시 500만원 → 클라우드 월 5만원부터
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Zap className="w-10 h-10 text-blue-500" />
                      <h4 className="text-xl font-bold">빠른 확장</h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-600">⚡ 몇 분 만에 서버 추가</p>
                      <p className="text-gray-600">📈 트래픽 증가 시 자동 확장</p>
                      <p className="text-gray-600">📉 사용량 감소 시 자동 축소</p>
                      <div className="bg-blue-50 p-3 rounded-lg mt-4">
                        <p className="text-sm font-semibold text-blue-800">
                          예: 게임 이벤트 시 서버 100배 확장 → 이벤트 종료 후 원복
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Shield className="w-10 h-10 text-purple-500" />
                      <h4 className="text-xl font-bold">안정성</h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-600">🛡️ 99.99% 이상 안정성</p>
                      <p className="text-gray-600">💾 자동 백업</p>
                      <p className="text-gray-600">🌍 전 세계 데이터센터</p>
                      <div className="bg-purple-50 p-3 rounded-lg mt-4">
                        <p className="text-sm font-semibold text-purple-800">
                          AWS는 한 해에 5분 정도만 서비스가 중단됩니다
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Globe className="w-10 h-10 text-orange-500" />
                      <h4 className="text-xl font-bold">글로벌 접근</h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-600">🌏 전 세계 어디서든 접근</p>
                      <p className="text-gray-600">📱 모든 기기에서 사용</p>
                      <p className="text-gray-600">🔄 실시간 동기화</p>
                      <div className="bg-orange-50 p-3 rounded-lg mt-4">
                        <p className="text-sm font-semibold text-orange-800">
                          한국에서 만든 앱을 전 세계에 즉시 배포 가능
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4">클라우드의 핵심 가치</h4>
                    <p className="text-lg">
                      "더 적은 비용으로, 더 빠르게, 더 안전하게, 더 크게"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSection === 4 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">온라인 서점에서 클라우드 제왕까지</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p>1994년 제프 베조스가 차고에서 시작한 온라인 서점 아마존</p>
                    <p>급성장하면서 서버 관리의 어려움을 겪게 됨</p>
                    <p>내부적으로 서버 관리 시스템을 개발</p>
                    <p className="font-bold text-blue-600">
                      "이 시스템을 다른 회사들도 사용할 수 있게 하면 어떨까?"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSection === 5 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">2006년, 혁신적인 아이디어</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p>아마존이 내부적으로 사용하던 IT 인프라를 외부에 서비스로 제공하기 시작</p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2">AWS의 첫 번째 서비스들</h4>
                      <ul className="space-y-1">
                        <li>• S3 (Simple Storage Service) - 파일 저장</li>
                        <li>• EC2 (Elastic Compute Cloud) - 가상 서버</li>
                        <li>• SQS (Simple Queue Service) - 메시지 큐</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSection === 6 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">숫자로 보는 AWS</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-3xl font-bold text-blue-600 mb-2">33%</h4>
                    <p>전 세계 클라우드 시장 점유율 1위</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-3xl font-bold text-green-600 mb-2">200+</h4>
                    <p>제공하는 서비스 개수</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSection === 7 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">우리가 모르는 사이 사용하는 AWS</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">넷플릭스</h4>
                    <p className="text-sm">전 세계 스트리밍 서비스</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">인스타그램</h4>
                    <p className="text-sm">사진과 동영상 저장 및 배포</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSection === 8 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">클라우드 속 가상 컴퓨터</h3>
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4">EC2는 클라우드에서 제공하는 가상 컴퓨터입니다.</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">EC2의 장점</h4>
                    <ul className="space-y-1">
                      <li>• 몇 분 만에 서버 생성</li>
                      <li>• 필요에 따라 성능 조절</li>
                      <li>• 전 세계 어디든 배치 가능</li>
                      <li>• 사용한 시간만큼만 비용 지불</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSection === 9 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">고등학생들의 실제 EC2 활용</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">웹사이트 호스팅</h4>
                    <p className="text-sm">개인 포트폴리오나 팀 프로젝트 웹사이트 운영</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">개발 환경 구축</h4>
                    <p className="text-sm">언제 어디서든 접근 가능한 개발 서버</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSection === 10 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">무제한 파일 저장소</h3>
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4">S3는 인터넷상의 거대한 저장 공간입니다.</p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">S3의 특징</h4>
                    <ul className="space-y-1">
                      <li>• 99.999999999% (11 9's) 내구성</li>
                      <li>• 무제한 저장 용량</li>
                      <li>• 전 세계 어디서든 빠른 접근</li>
                      <li>• 웹사이트 직접 호스팅 가능</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSection === 11 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">S3 실제 활용 사례</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">정적 웹사이트</h4>
                    <p className="text-sm">HTML, CSS, JS로 만든 웹사이트 호스팅</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">백업 저장소</h4>
                    <p className="text-sm">중요한 파일들의 안전한 백업</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSection === 12 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">데이터베이스 관리의 혁신</h3>
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4">RDS는 데이터베이스를 자동으로 관리해주는 서비스입니다.</p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">RDS가 자동으로 해주는 일들</h4>
                    <ul className="space-y-1">
                      <li>• 정기적인 백업</li>
                      <li>• 보안 업데이트</li>
                      <li>• 성능 모니터링</li>
                      <li>• 장애 시 자동 복구</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSection === 13 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">누구나 사용할 수 있는 AI</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">Amazon Rekognition</h4>
                    <p className="text-sm">이미지와 비디오 분석</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">Amazon Polly</h4>
                    <p className="text-sm">텍스트를 자연스러운 음성으로 변환</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSection === 14 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">클라우드가 만든 새로운 기회</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">클라우드 아키텍트</h4>
                    <p className="text-sm">연봉 7,000만원~1억원</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">DevOps 엔지니어</h4>
                    <p className="text-sm">연봉 6,000만원~9,000만원</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSection === 15 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">구체적인 진로 로드맵</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold">1단계: 기초 학습 (고등학교)</h4>
                      <p>AWS 프리티어로 실습, 기본 자격증 취득</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-bold">2단계: 심화 학습 (대학교)</h4>
                      <p>전문 자격증, 인턴십, 프로젝트 경험</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-bold">3단계: 전문가 (취업 후)</h4>
                      <p>고급 자격증, 실무 경험, 기술 리더십</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSection === 16 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">지금 당장 시작할 수 있는 것들</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">AWS 프리티어 가입</h4>
                    <p className="text-sm">1년간 무료로 AWS 서비스 체험</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2">온라인 강의 수강</h4>
                    <p className="text-sm">AWS 공식 교육 자료 활용</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSection === 17 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">안전한 클라우드 사용법</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">꼭 지켜야 할 보안 원칙</h4>
                    <ul className="space-y-1">
                      <li>• 강력한 비밀번호 사용</li>
                      <li>• 2단계 인증 활성화</li>
                      <li>• 정기적인 접근 권한 검토</li>
                      <li>• 비용 알람 설정</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSection === 18 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">단계별 성장 계획</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-bold">기초 다지기</h4>
                        <p className="text-sm">AWS 기본 개념 학습, 프리티어 체험</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-bold">실습 프로젝트</h4>
                        <p className="text-sm">개인 프로젝트로 경험 쌓기</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-bold">자격증 취득</h4>
                        <p className="text-sm">AWS 공인 자격증으로 실력 검증</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              클라우드를 이용한 혁명
            </h1>
          </div>

          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">진행도</span>
              <span className="text-sm text-gray-600">
                {currentSection + 1} / {sections.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <Button 
              onClick={goToPreviousSection}
              disabled={currentSection === 0}
              variant="outline"
              className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              이전
            </Button>
            
            <div className="text-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {sections[currentSection].title}
              </Badge>
            </div>
            
            <Button 
              onClick={goToNextSection}
              disabled={currentSection === sections.length - 1}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
            >
              다음
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 transition-all duration-500">
            {renderSection()}
          </div>

          {/* Section Navigation Dots */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2 flex-wrap">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSection(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSection 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
