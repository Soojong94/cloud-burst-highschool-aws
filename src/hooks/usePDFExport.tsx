import { useCallback } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const usePDFExport = () => {
  const exportToPDF = useCallback(async () => {
    const element = document.getElementById('aws-content');
    if (!element) return;

    try {
      // 모든 페이지 섹션 찾기
      const sections = element.querySelectorAll('section');
      if (sections.length === 0) return;

      const pdf = new jsPDF({
        orientation: 'portrait', // 세로 방향으로 변경
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const margin = 10; // 여백 설정

      // 첫 번째 페이지는 addPage 없이 시작
      let isFirstPage = true;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;

        // 각 섹션을 개별적으로 캡처 - 한글 폰트 문제 해결을 위한 설정 개선
        const canvas = await html2canvas(section, {
          width: section.scrollWidth,
          height: section.scrollHeight,
          useCORS: true,
          allowTaint: true,
          scale: 1.5, // 해상도 향상
          backgroundColor: '#1a1a1a', // 검정 배경
          logging: false, // 콘솔 로그 제거
          // 한글 텍스트 렌더링 개선
          onclone: (clonedDoc) => {
            // 클론된 문서에서 폰트 설정 강화
            const style = clonedDoc.createElement('style');
            style.textContent = `
              * {
                font-family: 'Noto Sans KR', 'Malgun Gothic', '맑은 고딕', sans-serif !important;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
            `;
            clonedDoc.head.appendChild(style);
          }
        });

        const imgData = canvas.toDataURL('image/png', 1.0);
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // PDF 크기에 맞게 비율 계산
        const availableWidth = pdfWidth - (margin * 2);
        const availableHeight = pdfHeight - (margin * 2);
        const ratio = Math.min(availableWidth / (imgWidth * 0.264583), availableHeight / (imgHeight * 0.264583));
        const scaledWidth = imgWidth * 0.264583 * ratio;
        const scaledHeight = imgHeight * 0.264583 * ratio;

        // 페이지 중앙에 배치
        const x = (pdfWidth - scaledWidth) / 2;
        const y = (pdfHeight - scaledHeight) / 2;

        // 첫 번째 페이지가 아니면 새 페이지 추가
        if (!isFirstPage) {
          pdf.addPage();
        }
        isFirstPage = false;

        // 이미지를 PDF에 추가
        pdf.addImage(imgData, 'PNG', x, y, scaledWidth, scaledHeight);
      }

      pdf.save('AWS_완전정복.pdf');
    } catch (error) {
      console.error('PDF 생성 중 오류 발생:', error);
    }
  }, []);

  return { exportToPDF };
};