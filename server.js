const http = require('http');
const os = require('os');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Serve HTML dashboard
    if (req.url === '/' && req.method === 'GET') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading dashboard');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } 
    // API Endpoint for System Stats
    else if (req.url === '/api/stats' && req.method === 'GET') {
        const totalMem = os.totalmem();
        const freeMem = os.freemem();
        const usedMem = totalMem - freeMem;
        const memPercent = ((usedMem / totalMem) * 100).toFixed(2);
        
        const stats = {
            hostname: os.hostname(),
            platform: os.type() + ' ' + os.release(),
            uptime: os.uptime(),
            cpuModel: os.cpus()[0]?.model || 'Unknown CPU',
            cpuCores: os.cpus().length,
            memoryTotal: (totalMem / 1073741824).toFixed(2),
            memoryUsed: (usedMem / 1073741824).toFixed(2),
            memoryPercent: memPercent,
            loadAvg: os.loadavg().map(v => v.toFixed(2))
        };
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(stats));
    } 
    // Handle 404
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`\n🚀 Server Monitoring Tool is running!`);
    console.log(`👉 Open http://localhost:${PORT} in your browser to view the dashboard.\n`);
});
