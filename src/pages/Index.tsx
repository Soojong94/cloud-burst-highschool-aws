
import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  DollarSign
} from 'lucide-react';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    {
      id: 'intro',
      title: '일상 속 클라우드',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'generation-comparison',
      title: '세대별 기술 변화',
      icon: Camera,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'cloud-definition',
      title: '클라우드란 무엇인가',
      icon: Cloud,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'cloud-benefits',
      title: '클라우드의 장점',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'amazon-story',
      title: '아마존의 변신',
      icon: Building,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'aws-birth',
      title: 'AWS의 탄생',
      icon: Lightbulb,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'aws-numbers',
      title: 'AWS의 위상',
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'daily-aws',
      title: '일상 속 AWS',
      icon: Gamepad2,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'ec2-intro',
      title: 'EC2 - 클라우드 컴퓨터',
      icon: Cpu,
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'ec2-demo',
      title: 'EC2 실제 사례',
      icon: Code,
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 's3-intro',
      title: 'S3 - 무제한 저장소',
      icon: HardDrive,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 's3-cases',
      title: 'S3 활용 사례',
      icon: HardDrive,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'rds-intro',
      title: 'RDS - 관리형 데이터베이스',
      icon: Database,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'ai-services',
      title: 'AWS AI 서비스',
      icon: Brain,
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'new-careers',
      title: '새로운 직업들',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      id: 'career-paths',
      title: '구체적인 진로',
      icon: Target,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'student-action',
      title: '고등학생 실천 방안',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'security-basics',
      title: '보안 기본 원칙',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'learning-roadmap',
      title: '학습 로드맵',
      icon: Users,
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const goToNextSection = () => {
    const nextSection = currentSection + 1;
    if (nextSection < sections.length) {
      setCurrentSection(nextSection);
      setTimeout(() => {
        sectionRefs.current[nextSection]?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  const goToPreviousSection = () => {
    const prevSection = currentSection - 1;
    if (prevSection >= 0) {
      setCurrentSection(prevSection);
      setTimeout(() => {
        sectionRefs.current[prevSection]?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
    setTimeout(() => {
      sectionRefs.current[index]?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const renderSection = () => {
    const section = sections[currentSection];
    const IconComponent = section.icon;

    return (
      <div className="space-y-8">
        {/* Section Header */}
        <div 
          ref={(el) => sectionRefs.current[currentSection] = el}
          className={`bg-gradient-to-r ${section.color} p-12 rounded-2xl text-white text-center`}
        >
          <div className="flex flex-col items-center gap-6">
            <IconComponent className="w-20 h-20" />
            <h2 className="text-4xl font-bold">{section.title}</h2>
          </div>
        </div>

        {/* Section Content */}
        <div className="space-y-6">
          {currentSection === 0 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">우리가 매일 사용하는 클라우드</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <Smartphone className="w-8 h-8 mb-4 text-blue-500" />
                    <h4 className="font-bold mb-2">스마트폰</h4>
                    <p>사진을 찍으면 자동으로 구글 포토나 아이클라우드에 저장됩니다.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Gamepad2 className="w-8 h-8 mb-4 text-green-500" />
                    <h4 className="font-bold mb-2">게임</h4>
                    <p>온라인 게임의 서버는 대부분 클라우드에서 운영됩니다.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSection === 1 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">90년대 vs 현재</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-4 text-gray-600">1990년대</h4>
                    <ul className="space-y-2">
                      <li>• 필름 카메라로 사진 촬영</li>
                      <li>• 현상소에서 인화</li>
                      <li>• 앨범에 보관</li>
                      <li>• 친구들에게 직접 전달</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-4 text-blue-600">현재</h4>
                    <ul className="space-y-2">
                      <li>• 스마트폰으로 사진 촬영</li>
                      <li>• 클라우드에 자동 저장</li>
                      <li>• 전 세계 어디서든 접근</li>
                      <li>• SNS로 즉시 공유</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {currentSection === 2 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">클라우드 컴퓨팅의 정의</h3>
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg mb-4">
                    인터넷을 통해 컴퓨팅 자원(서버, 저장소, 데이터베이스, 네트워킹, 소프트웨어 등)을 
                    온디맨드로 제공하는 서비스입니다.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">핵심 특징</h4>
                    <ul className="space-y-1">
                      <li>• 필요할 때만 사용 (On-demand)</li>
                      <li>• 인터넷으로 접근</li>
                      <li>• 사용한 만큼만 비용 지불</li>
                      <li>• 자동 확장/축소</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentSection === 3 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">클라우드를 사용하는 이유</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <DollarSign className="w-6 h-6 mb-2 text-green-500" />
                    <h4 className="font-bold">비용 절약</h4>
                    <p className="text-sm">초기 투자 없이 필요한 만큼만 사용</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <Zap className="w-6 h-6 mb-2 text-yellow-500" />
                    <h4 className="font-bold">빠른 확장</h4>
                    <p className="text-sm">몇 분 만에 서버 추가/제거 가능</p>
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
              className="flex items-center gap-2"
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
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              다음
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
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
