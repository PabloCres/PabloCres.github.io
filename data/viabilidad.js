window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info">
    <div class="callout-title"><span>📊</span><span>Objetivo</span></div>
    <p>Realizar un estudio de viabilidad orientado a <strong>sistemas y redes</strong>. Enfócate en infraestructura, seguridad, operativa y aspectos legales.</p>
</div>

<h3>3.1. Viabilidad Técnica</h3>
<p>Analiza los recursos necesarios para tu entorno de pruebas:</p>
<table class="w-full my-6">
    <thead><tr><th>Recurso</th><th>Necesario</th><th>Disponible (tu entorno)</th><th>Observaciones</th></tr></thead>
    <tbody>
        <tr><td>CPU</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>RAM</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>Disco</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>Red</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>Hypervisor/VM</td><td>...</td><td>...</td><td>...</td></tr>
    </tbody>
</table>

<h3>3.2. Viabilidad Económica</h3>
<p>Para una solución local con software <strong>open-source</strong>, ¿qué costes reales se prevén?</p>
<table class="w-full my-6">
    <thead><tr><th>Concepto</th><th>Coste (€)</th><th>Justificación</th></tr></thead>
    <tbody>
        <tr><td>Licencias software</td><td>...</td><td>...</td></tr>
        <tr><td>Hardware (si aplica)</td><td>...</td><td>...</td></tr>
        <tr><td>Formación/mantenimiento</td><td>...</td><td>...</td></tr>
        <tr><td><strong>TOTAL</strong></td><td>...</td><td>...</td></tr>
    </tbody>
</table>

<h3>3.3. Viabilidad Operativa</h3>
<ul class="space-y-2 my-4">
    <li><strong>Mantenimiento:</strong> ¿Quién podrá mantenerlo tras la implantación? ¿Qué tareas periódicas?</li>
    <li><strong>Actualizaciones:</strong> ¿Cómo se gestionarán las actualizaciones de contenedores e imágenes?</li>
    <li><strong>Soporte:</strong> ¿Se reduce la carga de tickets repetitivos?</li>
</ul>

<h3>3.4. Viabilidad Legal y Seguridad (RGPD)</h3>
<div class="callout callout-warning">
    <div class="callout-title"><span>⚖️</span><span>Reflexión obligatoria</span></div>
    <p>Investiga brevemente: <strong>¿Por qué es importante que los datos NO salgan de la red con esta solución?</strong> Relaciónalo con <strong>RGPD</strong>, principio de minimización y responsabilidad.</p>
</div>

<h3>3.5. Análisis DAFO</h3>
<p>Completa el siguiente DAFO aplicado al <strong>despliegue de un asistente IA local</strong>:</p>
<table class="w-full my-6">
    <thead><tr><th>Debilidades (D)</th><th>Amenazas (A)</th><th>Fortalezas (F)</th><th>Oportunidades (O)</th></tr></thead>
    <tbody>
        <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
    </tbody>
</table>
`;
