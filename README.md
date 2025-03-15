# Jam Digital JS

 Web jam digital menggunakan JavaScript.

## Repiew

![Pratinjau Jam Digital](test.png)

## Importan!!
isi ke file css

```bash
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(45deg, #0a0a0a, #3a4452);
    font-family: 'Orbitron', sans-serif;
    overflow: hidden;
}

.container {
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    backdrop-filter: blur(15px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    padding: 40px 60px;
    perspective: 1000px;
    transition: 0.3s;
    cursor: pointer;
}

.container:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.clock {
    font-size: 5rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    display: flex;
    gap: 15px;
    letter-spacing: 3px;
}

.time-segment {
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    padding: 15px 25px;
    border-radius: 10px;
    transition: 0.3s;
}

.time-segment::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1));
    border-radius: inherit;
}

.colon {
    display: flex;
    align-items: center;
    color: rgba(255,255,255,0.8);
}

.date {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255,255,255,0.7);
    font-size: 1.2rem;
    opacity: 0;
    transition: 0.3s;
    font-weight: 400;
}

.container:hover .date {
    opacity: 1;
}

.background-span {
    position: absolute;
    pointer-events: none;
    background: radial-gradient(circle, 
        rgba(255,255,255,0.1) 0%, 
        rgba(255,255,255,0) 70%);
    transform: translate(-50%, -50%);
    animation: pulse 4s infinite;
}

@keyframes pulse {
    0%, 100% { width: 0; height: 0; }
    50% { width: 500px; height: 500px; opacity: 0; }
}

@media (max-width: 768px) {
    .clock {
        font-size: 3rem;
        letter-spacing: 2px;
    }
    .container {
        padding: 30px 40px;
    }
    .date {
        font-size: 1rem;
    }
}
```
