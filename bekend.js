function updateTime() {
    const now = new Date();
    
    // Update time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    // Update date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('id-ID', options);
}

// Create background effects
document.addEventListener('mousemove', (e) => {
    const span = document.createElement('span');
    span.className = 'background-span';
    span.style.left = e.clientX + 'px';
    span.style.top = e.clientY + 'px';
    document.body.appendChild(span);
    
    setTimeout(() => span.remove(), 1000);
});

// Initial call and interval
updateTime();
setInterval(updateTime, 1000);