
const salesCtx = document.getElementById('salesChart')?.getContext('2d');
if (salesCtx) {
    const gradient = salesCtx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.6)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

    new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: window.sales_dates,
            datasets: [{
                label: 'Sales',
                data: window.sales_data,
                backgroundColor: gradient,
                borderColor: '#3b82f6',
                borderWidth: 2,
                tension: 0.4,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#3b82f6',
                pointRadius: 4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#1f2937' } },
                tooltip: { backgroundColor: '#1e293b', titleColor: '#ffffff', bodyColor: '#ffffff' }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#1f2937' },
                    grid: { color: '#cbd5e1' }
                },
                x: {
                    ticks: { color: '#1f2937' },
                    grid: { display: false }
                }
            }
        }
    });
}
