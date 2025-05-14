// 함안 투자 5·5·5 프로그램 메인 자바스크립트 파일

document.addEventListener('DOMContentLoaded', function() {
    // 페이지 로드 완료 후 실행할 코드
    console.log('함안 투자 5·5·5 프로그램 페이지가 로드되었습니다.');
    
    // 스크롤 애니메이션 처리
    const fadeElems = document.querySelectorAll('.fade-in');
    
    // 초기 화면에 보이는 요소들 표시
    checkFade();
    
    // 스크롤 이벤트에 애니메이션 함수 연결
    window.addEventListener('scroll', checkFade);
    
    function checkFade() {
        const triggerBottom = window.innerHeight * 0.8;
        
        fadeElems.forEach(elem => {
            const elemTop = elem.getBoundingClientRect().top;
            
            if(elemTop < triggerBottom) {
                elem.classList.add('visible');
            }
        });
    }
    
    // 모바일 메뉴 토글
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if(menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 탭 기능 구현
    const tabs = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('[data-tab-content]');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            
            // 모든 탭 비활성화
            tabs.forEach(t => t.classList.remove('active'));
            
            // 모든 콘텐츠 숨기기
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });
            
            // 선택한 탭 활성화
            tab.classList.add('active');
            
            // 해당 콘텐츠 표시
            document.querySelector(`[data-tab-content="${target}"]`).classList.remove('hidden');
        });
    });
});
