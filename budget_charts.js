// budget_charts.js
document.addEventListener('DOMContentLoaded', function() {
    // 차트1: 10년간 재정 효과 추이
    const fiscalEffectCtx = document.getElementById('fiscalEffectChart').getContext('2d');
    
    const years = ['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035'];
    const budget = [2050, 4000, 1000, 1000, 1000, 1000, 500, 500, 500, 500, 500];
    const revenueLoss = [0, 4090, 4090, 4090, 3272, 2045, 1227, 0, 0, 0, 0];
    const revenueGain = [0, 1315, 2260, 3415, 3680, 5190, 6340, 7400, 7900, 8400, 8900];
    const netEffect = [-2050, -6775, -2830, -1675, -592, 2145, 4613, 6900, 7400, 7900, 8400];
    const cumulativeEffect = [-2050, -8825, -11655, -13330, -13922, -11777, -7164, -264, 7136, 15036, 23436];
    
    new Chart(fiscalEffectCtx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {
                    label: '투입 예산',
                    data: budget,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: '세입 감소',
                    data: revenueLoss,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: '세입 증대',
                    data: revenueGain,
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: '누적 효과',
                    data: cumulativeEffect,
                    type: 'line',
                    fill: false,
                    backgroundColor: 'rgba(153, 102, 255, 0.5)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 2,
                    pointRadius: 4,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: '함안 투자 5·5·5 프로그램 10년간 재정 효과 추이'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: '연도'
                    }
                }],
                yAxes: [
                    {
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: '금액(백만원)'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    },
                    {
                        id: 'y1',
                        position: 'right',
                        scaleLabel: {
                            display: true,
                            labelString: '누적 효과(백만원)'
                        },
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }
                ]
            }
        }
    });

    // 차트2: 투자 규모별 세금 감면 분포
    const taxReductionCtx = document.getElementById('taxReductionChart').getContext('2d');
    
    new Chart(taxReductionCtx, {
        type: 'pie',
        data: {
            labels: ['5억-50억 미만', '50억-100억 미만', '100억-300억 미만', '300억-500억 미만', '500억 이상'],
            datasets: [{
                data: [450, 640, 1000, 1000, 1000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: '투자 규모별 세금 감면 분포 (연간 백만원)'
            },
            legend: {
                position: 'right'
            }
        }
    });

    // 차트3: 연도별 세입 증대 요인 비교
    const revenueGrowthCtx = document.getElementById('revenueGrowthChart').getContext('2d');
    
    const directTaxGain = [0, 900, 1600, 2500, 2500, 3000, 3500, 4000, 4500, 5000, 5500];
    const employmentTaxGain = [0, 175, 360, 555, 380, 390, 400, 410, 420, 430, 440];
    const populationGain = [0, 240, 300, 360, 300, 300, 310, 320, 330, 340, 350];
    const economicGain = [0, 0, 0, 0, 500, 1500, 2130, 2670, 2650, 2630, 2610];
    
    new Chart(revenueGrowthCtx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {
                    label: '기업 세금 직접 증대',
                    data: directTaxGain,
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                },
                {
                    label: '고용 창출 세수',
                    data: employmentTaxGain,
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: '인구 유입 세수',
                    data: populationGain,
                    backgroundColor: 'rgba(255, 206, 86, 0.7)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1
                },
                {
                    label: '지역 경제 활성화 세수',
                    data: economicGain,
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: '연도별 세입 증대 요인 비교'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: '연도'
                    }
                }],
                yAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: '금액(백만원)'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // 차트4: 손익분기점 분석
    const breakEvenCtx = document.getElementById('breakEvenChart').getContext('2d');
    
    new Chart(breakEvenCtx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [
                {
                    label: '누적 비용',
                    data: [2050, 10140, 15230, 20320, 24592, 27637, 29364, 29864, 30364, 30864, 31364],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.1)',
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: '누적 세입 증대',
                    data: [0, 1315, 3575, 6990, 10670, 15860, 22200, 29600, 37500, 45900, 54800],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.1)',
                    borderWidth: 2,
                    fill: true
                },
                {
                    label: '손익분기점',
                    data: Array(8).fill(null).concat([31500, 31500, 31500]),
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: '함안 투자 5·5·5 프로그램 손익분기점 분석'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '연도'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: '누적 금액(백만원)'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
