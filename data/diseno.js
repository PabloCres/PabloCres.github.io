window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info">
    <div class="callout-title"><span>🔧</span><span>Objetivo</span></div>
    <p>Diseñar la arquitectura (redes + sistemas) para el despliegue. Debes representar esquemáticamente y justificar tus decisiones.</p>
</div>

<h3>5.1. Arquitectura General del Sistema</h3>
<p><strong>Tarea:</strong> Dibuja/describe la arquitectura: <em>Cliente → Red LAN → VLAN IA → Servidor Linux (Docker) → Ollama + Open WebUI</em>. Indica flujos de tráfico.</p>
<div class="callout callout-warning"><div class="callout-title"><span>💡</span><span>Guía</span></div><p>Incluye en tus esquemas: firewall, switch/router, interfaz de red y servidor virtual.</p></div>

<h3>5.2. Diseño de Red</h3>
<p>Completa la planificación de red (segmentación):</p>
<table class="w-full my-6">
    <thead><tr><th>Elemento</th><th>Valor/Propuesta</th><th>Justificación</th></tr></thead>
    <tbody>
        <tr><td>Red/VLAN</td><td>...</td><td>...</td></tr>
        <tr><td>Rango de IPs</td><td>...</td><td>...</td></tr>
        <tr><td>Puerta de enlace</td><td>...</td><td>...</td></tr>
        <tr><td>DNS</td><td>...</td><td>...</td></tr>
        <tr><td>Reglas Firewall</td><td>...</td><td>...</td></tr>
    </tbody>
</table>

<h3>5.3. Diseño del Servidor</h3>
<table class="w-full my-6">
    <thead><tr><th>Parámetro</th><th>Configuración propuesta</th><th>Observaciones</th></tr></thead>
    <tbody>
        <tr><td>S.O.</td><td>Ubuntu Server (recomendado)</td><td>...</td></tr>
        <tr><td>Memoria RAM</td><td>...</td><td>...</td></tr>
        <tr><td>CPU</td><td>...</td><td>...</td></tr>
        <tr><td>Disco</td><td>...</td><td>...</td></tr>
        <tr><td>Virtualización</td><td>Proxmox/VM (indicar)</td><td>...</td></tr>
    </tbody>
</table>

<h3>5.4. Diseño de Contenedores (Docker)</h3>
<p>Define volúmenes, puertos y redes Docker para <strong>Ollama</strong> y <strong>Open WebUI</strong>:</p>
<table class="w-full my-6">
    <thead><tr><th>Servicio</th><th>Puerto</th><th>Volumen/Path</th><th>Descripción</th></tr></thead>
    <tbody>
        <tr><td>Ollama</td><td>11434</td><td>./ollama_data</td><td>Almacenamiento de modelos</td></tr>
        <tr><td>Open WebUI</td><td>3000</td><td>./open-webui_data</td><td>Configuración y datos</td></tr>
    </tbody>
</table>
<p><strong>Tarea:</strong> Justifica por qué usar <strong>Docker</strong> frente a instalación nativa (ventajas para SMR).</p>
`;
