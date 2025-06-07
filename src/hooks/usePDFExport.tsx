import { useCallback } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// 진행 상황 표시
const showProgress = (message: string) => {
  const existing = document.getElementById('pdf-progress');
  if (existing) existing.remove();

  const progressDiv = document.createElement('div');
  progressDiv.id = 'pdf-progress';
  progressDiv.style.cssText = `
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.9); color: white; padding: 20px; border-radius: 10px;
    z-index: 10000; font-family: Arial, sans-serif; text-align: center;
    min-width: 300px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  `;
  progressDiv.innerHTML = `
    <div style="font-size: 18px; margin-bottom: 10px;">📄 PDF 생성 중...</div>
    <div style="font-size: 14px; color: #60A5FA;">${message}</div>
    <div style="margin-top: 10px; font-size: 12px; color: #94A3B8;">잠시만 기다려주세요</div>
  `;
  document.body.appendChild(progressDiv);
};

const hideProgress = () => {
  const progressDiv = document.getElementById('pdf-progress');
  if (progressDiv) progressDiv.remove();
};

// 메인 섹션 캡처
const captureMainSection = async (
  section: HTMLElement,
  pdf: jsPDF,
  pdfWidth: number,
  pdfHeight: number,
  isFirstPage: boolean,
  sectionIndex: number
) => {
  // 모든 다이얼로그 닫기
  const existingDialogs = document.querySelectorAll('[role="dialog"]');
  existingDialogs.forEach(dialog => {
    const closeButton = dialog.querySelector('[data-radix-dialog-close]');
    if (closeButton) (closeButton as HTMLElement).click();
  });

  // Escape 키로도 닫기
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
  await new Promise(resolve => setTimeout(resolve, 300));

  // 섹션으로 스크롤
  window.scrollTo(0, 0);
  section.scrollIntoView({ behavior: 'instant', block: 'start' });
  await new Promise(resolve => setTimeout(resolve, 800)); // 더 긴 대기

  try {
    const canvas = await html2canvas(section, {
      useCORS: true,
      allowTaint: true,
      scale: 2, // 더 높은 해상도
      width: section.scrollWidth,
      height: section.scrollHeight,
      backgroundColor: '#0f172a', // 다크 배경색 강제 설정
      logging: false,
      scrollX: 0,
      scrollY: 0,
      windowWidth: 1920,
      windowHeight: 1080,
      onclone: (clonedDoc) => {
        const style = clonedDoc.createElement('style');
        style.textContent = `
          * {
            font-family: 'Noto Sans KR', 'Malgun Gothic', '맑은 고딕', system-ui, sans-serif !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
          }
          
          /* 배경 강제 적용 */
          section {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            transform: none !important;
            min-height: 100vh !important;
            width: 100% !important;
            overflow: visible !important;
            background: #0f172a !important;
          }
          
          /* 그라데이션 배경 복원 */
          section[class*="bg-gradient"] {
            background-image: linear-gradient(135deg, #1e293b 0%, #334155 100%) !important;
          }
          
          /* 텍스트 그라데이션 복원 */
          .text-gradient-blue {
            background: linear-gradient(to right, #60a5fa, #34d399) !important;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            color: transparent !important;
          }
          
          .text-gradient-purple {
            background: linear-gradient(to right, #a855f7, #ec4899) !important;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            color: transparent !important;
          }
          
          .text-gradient-green {
            background: linear-gradient(to right, #22c55e, #10b981) !important;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            color: transparent !important;
          }
          
          .text-gradient-orange {
            background: linear-gradient(to right, #f97316, #ef4444) !important;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            color: transparent !important;
          }
          
          /* 애니메이션 제거 */
          .float-animation, .pulse-glow {
            animation: none !important;
          }
          
          /* 고정 요소 숨기기 */
          [role="dialog"], .fixed {
            display: none !important;
          }
          
          /* Lovable 속성 무시 */
          [data-lov-id], [data-lov-name], [data-component-path] {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }
          
          /* 배경 패턴 복원 */
          .bg-pattern-dots {
            background-image: radial-gradient(circle, rgba(59, 130, 246, 0.08) 1px, transparent 1px) !important;
            background-size: 24px 24px !important;
          }
          
          .bg-pattern-grid {
            background-image: 
              linear-gradient(rgba(59, 130, 246, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.06) 1px, transparent 1px) !important;
            background-size: 40px 40px !important;
          }
          
          .bg-pattern-diagonal {
            background-image: repeating-linear-gradient(45deg,
              transparent,
              transparent 15px,
              rgba(59, 130, 246, 0.03) 15px,
              rgba(59, 130, 246, 0.03) 30px) !important;
          }
          
          .bg-tech-pattern {
            background-image: radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0) !important;
            background-size: 50px 50px !important;
          }
          
          /* 카드 스타일 복원 */
          .card-neon {
            background: linear-gradient(135deg, #1e293b, #0f172a) !important;
            border: 1px solid rgba(59, 130, 246, 0.3) !important;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.15) !important;
          }
          
          .card-tech {
            background: linear-gradient(135deg, #0f172a, #1e293b) !important;
            border: 1px solid rgba(34, 211, 238, 0.2) !important;
          }
          
          .card-ai {
            background: linear-gradient(135deg, rgba(147, 51, 234, 0.4), rgba(236, 72, 153, 0.4)) !important;
            border: 1px solid rgba(147, 51, 234, 0.2) !important;
          }
          
          .card-data {
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(16, 185, 129, 0.4)) !important;
            border: 1px solid rgba(34, 197, 94, 0.2) !important;
          }
          
          .card-security {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.4), rgba(251, 146, 60, 0.4)) !important;
            border: 1px solid rgba(239, 68, 68, 0.2) !important;
          }
          
          /* 색상 복원 */
          .text-white { color: #ffffff !important; }
          .text-muted-foreground { color: #94a3b8 !important; }
          .text-blue-400 { color: #60a5fa !important; }
          .text-green-400 { color: #4ade80 !important; }
          .text-purple-400 { color: #a78bfa !important; }
          .text-orange-400 { color: #fb923c !important; }
          .text-red-400 { color: #f87171 !important; }
          .text-yellow-400 { color: #facc15 !important; }
          .text-cyan-400 { color: #22d3ee !important; }
        `;
        clonedDoc.head.appendChild(style);

        // Lovable 속성 제거
        const elementsWithLovable = clonedDoc.querySelectorAll('[data-lov-id]');
        elementsWithLovable.forEach((el) => {
          el.removeAttribute('data-lov-id');
          el.removeAttribute('data-lov-name');
          el.removeAttribute('data-component-path');
          el.removeAttribute('data-component-line');
          el.removeAttribute('data-component-file');
          el.removeAttribute('data-component-name');
          el.removeAttribute('data-component-content');
        });
      }
    });

    if (canvas && canvas.width > 0 && canvas.height > 0) {
      const imgData = canvas.toDataURL('image/png', 1.0);

      if (!isFirstPage) {
        pdf.addPage();
      }

      // 가로 형태로 여백 없이 전체 페이지에 맞춤
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      console.log(`메인 페이지 ${sectionIndex + 1} 캡처 완료`);
      return true;
    }
  } catch (error) {
    console.error(`메인 섹션 ${sectionIndex + 1} 캡처 오류:`, error);
  }

  return false;
};

// 상세 다이얼로그 캡처
const captureDetailDialog = async (
  section: HTMLElement,
  pdf: jsPDF,
  pdfWidth: number,
  pdfHeight: number,
  sectionIndex: number
): Promise<boolean> => {
  try {
    // 다이얼로그 트리거 버튼 찾기
    const dialogButtons = section.querySelectorAll('button');
    let triggerButton: HTMLButtonElement | null = null;

    for (const button of dialogButtons) {
      const buttonText = button.textContent?.toLowerCase() || '';
      if (buttonText.includes('자세히') ||
        buttonText.includes('상세') ||
        buttonText.includes('더보기') ||
        buttonText.includes('보기') ||
        buttonText.includes('가이드') ||
        buttonText.includes('완전') ||
        buttonText.includes('알아보기')) {
        triggerButton = button as HTMLButtonElement;
        break;
      }
    }

    if (!triggerButton) {
      console.log(`섹션 ${sectionIndex + 1}: 다이얼로그 버튼 없음`);
      return false;
    }

    console.log(`섹션 ${sectionIndex + 1}: 다이얼로그 버튼 발견 - "${triggerButton.textContent}"`);

    // 다이얼로그 열기
    triggerButton.click();
    await new Promise(resolve => setTimeout(resolve, 800));

    // 다이얼로그 찾기
    const dialog = document.querySelector('[role="dialog"]');
    const dialogContent = dialog?.querySelector('[class*="DialogContent"], [data-radix-dialog-content]');

    if (!dialogContent) {
      console.log(`섹션 ${sectionIndex + 1}: 다이얼로그 콘텐츠 없음`);
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      return false;
    }

    // 상세 페이지용 컨테이너 생성
    const tempContainer = document.createElement('div');
    tempContainer.style.cssText = `
      position: fixed;
      top: -20000px;
      left: -20000px;
      width: 1400px;
      min-height: 900px;
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      padding: 0;
      font-family: 'Noto Sans KR', sans-serif;
      color: #f8fafc;
      overflow: visible;
      z-index: -1;
    `;

    // 헤더 섹션
    const headerSection = document.createElement('div');
    headerSection.style.cssText = `
      background: linear-gradient(90deg, #1e40af, #3b82f6);
      padding: 40px;
      text-align: center;
      margin-bottom: 0;
    `;
    headerSection.innerHTML = `
      <h1 style="margin: 0; font-size: 32px; color: white; font-weight: bold;">
        페이지 ${sectionIndex + 1} - 상세 가이드
      </h1>
      <p style="margin: 10px 0 0 0; font-size: 18px; color: #ddd;">
        ${section.querySelector('h2')?.textContent || 'AWS 서비스 가이드'}
      </p>
    `;

    // 콘텐츠 섹션
    const contentSection = document.createElement('div');
    contentSection.style.cssText = `
      padding: 40px;
      line-height: 1.8;
      font-size: 16px;
    `;

    // 다이얼로그 내용 복사
    const clonedContent = dialogContent.cloneNode(true) as HTMLElement;

    // 불필요한 요소 제거
    const elementsToRemove = clonedContent.querySelectorAll('button, [data-radix-dialog-close], [role="dialog"]');
    elementsToRemove.forEach(el => el.remove());

    // 다이얼로그 제목 제거
    const dialogTitle = clonedContent.querySelector('[data-radix-dialog-title], h2');
    if (dialogTitle) dialogTitle.remove();

    // 스타일 적용
    clonedContent.style.cssText = `
      background: transparent;
      border: none;
      box-shadow: none;
      max-width: none;
      max-height: none;
      position: static;
      transform: none;
      margin: 0;
      padding: 0;
    `;

    // CSS 스타일 추가
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .dialog-section-blue { 
        background: rgba(59, 130, 246, 0.15) !important; 
        border: 1px solid rgba(59, 130, 246, 0.3) !important;
        border-radius: 12px !important;
        padding: 24px !important;
        margin: 20px 0 !important;
      }
      .dialog-section-green { 
        background: rgba(34, 197, 94, 0.15) !important; 
        border: 1px solid rgba(34, 197, 94, 0.3) !important;
        border-radius: 12px !important;
        padding: 24px !important;
        margin: 20px 0 !important;
      }
      .dialog-section-purple { 
        background: rgba(147, 51, 234, 0.15) !important; 
        border: 1px solid rgba(147, 51, 234, 0.3) !important;
        border-radius: 12px !important;
        padding: 24px !important;
        margin: 20px 0 !important;
      }
      .dialog-section-orange { 
        background: rgba(251, 146, 60, 0.15) !important; 
        border: 1px solid rgba(251, 146, 60, 0.3) !important;
        border-radius: 12px !important;
        padding: 24px !important;
        margin: 20px 0 !important;
      }
      .dialog-section-cyan { 
        background: rgba(6, 182, 212, 0.15) !important; 
        border: 1px solid rgba(6, 182, 212, 0.3) !important;
        border-radius: 12px !important;
        padding: 24px !important;
        margin: 20px 0 !important;
      }
      .dialog-section-red { 
        background: rgba(239, 68, 68, 0.15) !important; 
        border: 1px solid rgba(239, 68, 68, 0.3) !important;
        border-radius: 12px !important;
        padding: 24px !important;
        margin: 20px 0 !important;
      }
      .dialog-section-yellow { 
        background: rgba(245, 158, 11, 0.15) !important; 
        border: 1px solid rgba(245, 158, 11, 0.3) !important;
        border-radius: 12px !important;
        padding: 24px !important;
        margin: 20px 0 !important;
      }
      .dialog-section-pink { 
        background: rgba(236, 72, 153, 0.15) !important; 
        border: 1px solid rgba(236, 72, 153, 0.3) !important;
        border-radius: 12px !important;
        padding: 24px !important;
        margin: 20px 0 !important;
      }
      h3 { 
        color: #60A5FA !important; 
        font-size: 22px !important; 
        margin-bottom: 16px !important;
        font-weight: 600 !important;
      }
      p { 
        color: #e2e8f0 !important; 
        margin-bottom: 16px !important;
        line-height: 1.7 !important;
        font-size: 16px !important;
      }
      * {
        font-family: 'Noto Sans KR', 'Malgun Gothic', '맑은 고딕', sans-serif !important;
      }
    `;
    clonedContent.appendChild(styleElement);

    contentSection.appendChild(clonedContent);
    tempContainer.appendChild(headerSection);
    tempContainer.appendChild(contentSection);
    document.body.appendChild(tempContainer);

    await new Promise(resolve => setTimeout(resolve, 500));

    // 캡처
    const canvas = await html2canvas(tempContainer, {
      useCORS: true,
      allowTaint: true,
      scale: 1.5,
      width: 1400,
      height: Math.max(900, tempContainer.scrollHeight),
      backgroundColor: null,
      logging: false,
    });

    // 임시 컨테이너 제거
    document.body.removeChild(tempContainer);

    // 다이얼로그 닫기
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await new Promise(resolve => setTimeout(resolve, 300));

    if (canvas && canvas.width > 0 && canvas.height > 0) {
      const imgData = canvas.toDataURL('image/png', 1.0);

      // 새 페이지 추가
      pdf.addPage();

      // 가로 전체 크기로 맞춤
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      console.log(`상세 페이지 ${sectionIndex + 1} 캡처 완료`);
      return true;
    }

  } catch (error) {
    console.error(`다이얼로그 캡처 오류 (섹션 ${sectionIndex + 1}):`, error);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
  }

  return false;
};

// 메인 훅
export const usePDFExport = () => {
  const exportToPDF = useCallback(async () => {
    const element = document.getElementById('aws-content');
    if (!element) return;

    try {
      const sections = element.querySelectorAll('section');
      if (sections.length === 0) return;

      console.log(`총 ${sections.length}개 섹션 발견`);

      // A4 landscape (가로) 크기 설정
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      console.log(`PDF 크기: ${pdfWidth} x ${pdfHeight}`);

      let isFirstPage = true;
      let totalPages = 0;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;

        // 1. 메인 섹션 캡처
        showProgress(`메인 페이지 ${i + 1}/${sections.length} 처리 중...`);

        const mainCaptured = await captureMainSection(
          section,
          pdf,
          pdfWidth,
          pdfHeight,
          isFirstPage,
          i
        );

        if (mainCaptured) {
          if (isFirstPage) isFirstPage = false;
          totalPages++;
        }

        // 2. 상세 다이얼로그 캡처
        showProgress(`페이지 ${i + 1} 상세 내용 확인 중...`);

        const dialogCaptured = await captureDetailDialog(
          section,
          pdf,
          pdfWidth,
          pdfHeight,
          i
        );

        if (dialogCaptured) {
          totalPages++;
        }

        // 잠시 대기
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      hideProgress();

      // PDF 저장
      const fileName = `AWS_완전정복_가로형_${totalPages}페이지.pdf`;
      pdf.save(fileName);

      console.log(`PDF 생성 완료: ${fileName}`);

    } catch (error) {
      console.error('PDF 생성 중 오류:', error);
      hideProgress();
      alert('PDF 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  }, []);

  return { exportToPDF };
};