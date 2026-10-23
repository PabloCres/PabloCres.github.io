window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title"><span>🛠️</span><span>Objetivo</span></div>
    <p>Documentar la operativa, mantenimiento y seguridad post-despliegue.</p>
</div>

<h3>7.1. Procedimientos de Mantenimiento</h3>
<table class="w-full my-6">
    <thead><tr><th>Procedimiento</th><th>Frecuencia</th><th>Responsable</th><th>Comprobación</th></tr></thead>
    <tbody>
        <tr><td>Actualización de paquetes S.O.</td><td>Semanal/Mensual</td><td>...</td><td>...</td></tr>
        <tr><td>Actualización de imágenes Docker</td><td>Mensual</td><td>...</td><td>...</td></tr>
        <tr><td>Revisión de logs</td><td>Semanal</td><td>...</td><td>...</td></tr>
        <tr><td>Comprobación espacio disco</td><td>Semanal</td><td>...</td><td>...</td></tr>
    </tbody>
</table>

<h3>7.2. Copias de Seguridad</h3>
<div class="callout callout-warning"><div class="callout-title"><span>💾</span><span>Guía</span></div><p>¿Qué elementos <strong>DEBES</strong> guardar para poder restaurar el servicio? (volúmenes Docker, <code class="text-sm">docker-compose.yml</code>, configuración red, reglas firewall)</p></div>
<p>Elabora un <strong>plan de copias</strong>: tipo, frecuencia, ubicación, verificación de restauración.</p>

<h3>7.3. Monitorización Básica</h3>
<ul class="space-y-2 my-4">
    <li><strong>7.3.1.</strong> Monitorizar uso de CPU/RAM/Disco.</li>
    <li><strong>7.3.2.</strong> Comprobar estado de contenedores (<code class="text-sm">docker ps</code>, <code class="text-sm">docker logs</code>).</li>
    <li><strong>7.3.3.</strong> Comprobar conectividad y accesibilidad al servicio.</li>
</ul>

<h3>7.4. Gestión de Incidencias</h3>
<table class="w-full my-6">
    <thead><tr><th>Incidencia</th><th>Síntoma</th><th>Comprobación</th><th>Posible solución</th></tr></thead>
    <tbody>
        <tr><td>Servicio no accesible</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>Ollama no responde</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>Sin espacio en disco</td><td>...</td><td>...</td><td>...</td></tr>
    </tbody>
</table>

<h3>7.5. Seguridad Operativa</h3>
<ul class="space-y-2 my-4">
    <li><strong>7.5.1.</strong> Revisar usuarios con acceso al servidor.</li>
    <li><strong>7.5.2.</strong> Mantener el servicio <strong>solo en red interna</strong>.</li>
    <li><strong>7.5.3.</strong> Auditar accesos a Open WebUI.</li>
    <li><strong>7.5.4.</strong> Documentar cambios realizados.</li>
</ul>
`;
