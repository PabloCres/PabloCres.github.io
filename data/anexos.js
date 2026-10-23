window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.anexos = `
<div class="callout callout-info">
    <div class="callout-title"><span>📎</span><span>Objetivo</span></div>
    <p>Incluir las <strong>evidencias reales</strong> de tu despliegue.</p>
</div>

<h3>11.1. Esquemas de Red</h3>
<p>Incluir el esquema dibujado por ti (draw.io/Excalidraw) con VLAN, IPs, servidor y clientes.</p>

<h3>11.2. Configuración del Sistema</h3>
<ul class="space-y-2 my-4">
    <li><strong>11.2.1.</strong> Captura de <code class="text-sm">ip a</code> / configuración de red.</li>
    <li><strong>11.2.2.</strong> Captura de <code class="text-sm">docker version</code> y <code class="text-sm">docker compose version</code>.</li>
    <li><strong>11.2.3.</strong> Archivo <code class="text-sm">docker-compose.yml</code> (comentado).</li>
</ul>

<h3>11.3. Despliegue de la Aplicación</h3>
<ul class="space-y-2 my-4">
    <li><strong>11.3.1.</strong> <code class="text-sm">docker ps</code> mostrando ambos contenedores en ejecución.</li>
    <li><strong>11.3.2.</strong> Pantalla de Open WebUI (acceso local).</li>
    <li><strong>11.3.3.</strong> Descarga/comprobación del modelo seleccionado.</li>
</ul>

<h3>11.4. Pruebas Realizadas</h3>
<table class="w-full my-6">
    <thead><tr><th>Prueba</th><th>Resultado</th><th>Captura (SI/NO)</th><th>Observaciones</th></tr></thead>
    <tbody>
        <tr><td>Conectividad desde cliente</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>Acceso a Open WebUI</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>Consulta al asistente</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>Restricción a red interna</td><td>...</td><td>...</td><td>...</td></tr>
    </tbody>
</table>

<h3>11.5. Listado de Comandos</h3>
<p>Incluye aquí los comandos que has utilizado <strong>realmente</strong>, con una breve explicación de cada uno.</p>
`;
