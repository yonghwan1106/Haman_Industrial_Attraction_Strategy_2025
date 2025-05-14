// 문서가 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 이벤트에 따른 네비게이션 상태 변경
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('shadow-lg', 'bg-white');
        } else {
            nav.classList.remove('shadow-lg');
        }
    });

    // 네비게이션 링크 클릭 이벤트 - 부드러운 스크롤
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // 차트 데이터 설정
    setupCharts();
    
    // "맨 위로" 버튼 추가
    addScrollToTopButton();
});

// 차트 설정 함수
function setupCharts() {
    // 지역명 트렌드 차트
    const regionTrendCtx = document.getElementById('regionTrendChart').getContext('2d');
    new Chart(regionTrendCtx, {
        type: 'line',
        data: {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', '1월', '2월', '3월', '4월'],
            datasets: [{
                label: '지역명 검색 관심도',
                data: [28.80, 26.22, 30.83, 46.68, 100.00, 34.84, 39.37, 33.67, 30.75, 35.04, 26.89, 24.66, 27.65, 25.71, 37.50, 34.67, 38.25, 33.02, 34.77, 29.02, 30.21, 30.44, 26.18, 24.28, 26.15, 23.47, 34.22, 28.60],
                borderColor: 'rgba(79, 70, 229, 1)',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '지역명 검색 관심도 추이 (2023-2025)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 100
                }
            }
        }
    });

    // 키워드 비교 차트
    const keywordComparisonCtx = document.getElementById('keywordComparisonChart').getContext('2d');
    new Chart(keywordComparisonCtx, {
        type: 'bar',
        data: {
            labels: ['기업유치 관련', '인센티브 관련', '산업 관련'],
            datasets: [{
                label: '평균 검색 관심도',
                data: [28, 70, 15],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)'
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(245, 158, 11, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '키워드 그룹별 평균 검색 관심도',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // 함안군 트렌드 차트
    const hamanTrendCtx = document.getElementById('hamanTrendChart').getContext('2d');
    new Chart(hamanTrendCtx, {
        type: 'line',
        data: {
            labels: ['2023-01', '2023-02', '2023-03', '2023-04', '2023-05', '2023-06', '2023-07', '2023-08', '2023-09', '2023-10', '2023-11', '2023-12', '2024-01', '2024-02', '2024-03', '2024-04', '2024-05', '2024-06', '2024-07', '2024-08', '2024-09', '2024-10', '2024-11', '2024-12', '2025-01', '2025-02', '2025-03', '2025-04'],
            datasets: [{
                label: '함안군 검색 관심도',
                data: [17.14, 15.12, 19.24, 39.25, 100, 24.57, 27.32, 20.74, 20.59, 26.34, 15.51, 14.24, 16.09, 15.20, 29.01, 23.18, 29.60, 23.82, 23.12, 17.59, 18.47, 20.24, 16.84, 14.52, 16.07, 13.33, 21.70, 19.84],
                borderColor: 'rgba(220, 38, 38, 1)',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '함안군 검색 관심도 추이 (2023-2025)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `관심도: ${context.parsed.y}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 100
                }
            }
        }
    });

    // 도시별 비교 차트
    const cityComparisonCtx = document.getElementById('cityComparisonChart').getContext('2d');
    new Chart(cityComparisonCtx, {
        type: 'line',
        data: {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', '1월', '2월', '3월', '4월'],
            datasets: [
                {
                    label: '함안',
                    data: [17.14, 15.12, 19.24, 39.25, 100, 24.57, 27.32, 20.74, 20.59, 26.34, 15.51, 14.24, 16.09, 15.20, 29.01, 23.18, 29.60, 23.82, 23.12, 17.59, 18.47, 20.24, 16.84, 14.52, 16.07, 13.33, 21.70, 19.84],
                    borderColor: 'rgba(220, 38, 38, 1)',
                    backgroundColor: 'transparent',
                    tension: 0.3
                },
                {
                    label: '창원',
                    data: [55.35, 49.05, 58.83, 56.06, 60.25, 54.62, 59.77, 90.89, 57.73, 56.34, 52.03, 48.56, 52.99, 52.91, 58.72, 62.03, 55.72, 50.99, 56.04, 63.04, 66.99, 50.07, 49.29, 46.32, 49.24, 49.26, 63.47, 51.15],
                    borderColor: 'rgba(37, 99, 235, 1)',
                    backgroundColor: 'transparent',
                    tension: 0.3
                },
                {
                    label: '진주',
                    data: [72.80, 58.36, 78.33, 58.70, 57.66, 50.39, 55.27, 82.00, 55.83, 65.27, 60.24, 69.85, 70.99, 62.48, 59.42, 56.86, 59.19, 53.91, 57.67, 55.73, 57.36, 54.87, 46.87, 45.37, 55.13, 43.75, 55.53, 41.33],
                    borderColor: 'rgba(79, 70, 229, 1)',
                    backgroundColor: 'transparent',
                    tension: 0.3
                },
                {
                    label: '김해',
                    data: [35.22, 33.23, 37.25, 34.97, 37.73, 36.50, 42.78, 43.84, 35.28, 34.64, 32.01, 32.16, 36.85, 35.86, 37.22, 41.75, 38.86, 36.79, 39.68, 37.14, 50.70, 42.74, 31.86, 32.82, 41.16, 31.68, 39.80, 36.75],
                    borderColor: 'rgba(139, 92, 246, 1)',
                    backgroundColor: 'transparent',
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '경쟁 지자체 검색 관심도 비교 (2023-2025)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 100
                }
            }
        }
    });

    // 키워드 그룹별 차트
    const keywordGroupsCtx = document.getElementById('keywordGroupsChart').getContext('2d');
    new Chart(keywordGroupsCtx, {
        type: 'line',
        data: {
            labels: ['2023-01', '2023-02', '2023-03', '2023-04', '2023-05', '2023-06', '2023-07', '2023-08', '2023-09', '2023-10', '2023-11', '2023-12', '2024-01', '2024-02', '2024-03', '2024-04', '2024-05', '2024-06', '2024-07', '2024-08', '2024-09', '2024-10', '2024-11', '2024-12', '2025-01', '2025-02', '2025-03', '2025-04'],
            datasets: [
                {
                    label: '지역명',
                    data: [28.80, 26.22, 30.83, 46.68, 100.00, 34.84, 39.37, 33.67, 30.75, 35.04, 26.89, 24.66, 27.65, 25.71, 37.50, 34.67, 38.25, 33.02, 34.77, 29.02, 30.21, 30.44, 26.18, 24.28, 26.15, 23.47, 34.22, 28.60],
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'transparent',
                    tension: 0.3
                },
                {
                    label: '기업유치',
                    data: [28.88, 27.17, 33.88, 34.39, 34.45, 33.70, 27.26, 26.78, 26.52, 28.89, 30.75, 26.58, 27.67, 24.66, 29.69, 29.27, 29.62, 27.78, 26.93, 25.20, 24.73, 26.66, 26.14, 23.82, 22.08, 21.39, 23.74, 21.36],
                    borderColor: 'rgba(16, 185, 129, 1)',
                    backgroundColor: 'transparent',
                    tension: 0.3
                },
                {
                    label: '인센티브',
                    data: [73.36, 71.26, 69.13, 68.86, 73.25, 70.29, 67.08, 100.00, 65.43, 61.05, 55.49, 74.75, 76.82, 65.48, 71.41, 68.60, 74.80, 94.28, 98.34, 78.95, 76.29, 70.89, 60.12, 61.43, 62.41, 59.21, 60.14, 54.22],
                    borderColor: 'rgba(245, 158, 11, 1)',
                    backgroundColor: 'transparent',
                    tension: 0.3
                },
                {
                    label: '산업관련',
                    data: [13.91, 13.35, 20.03, 21.56, 18.27, 17.65, 13.90, 13.31, 16.14, 16.51, 15.70, 12.41, 13.02, 11.96, 16.11, 18.66, 16.42, 15.01, 14.93, 13.40, 14.14, 14.90, 14.42, 11.30, 9.13, 9.09, 11.30, 10.55],
                    borderColor: 'rgba(124, 58, 237, 1)',
                    backgroundColor: 'transparent',
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '키워드 그룹별 검색 관심도 추이 (2023-2025)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 100
                }
            }
        }
    });
}

// "맨 위로" 버튼 추가 함수
function addScrollToTopButton() {
    const button = document.createElement('div');
    button.className = 'scroll-top';
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    document.body.appendChild(button);
    
    // 버튼 클릭 이벤트
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 스크롤 위치에 따라 버튼 표시/숨김
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
}

// 프린트 버튼 기능
function printReport() {
    window.print();
}
