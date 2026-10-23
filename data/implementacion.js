window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info">
    <div class="callout-title"><span>⚙️</span><span>Guía de Implementación</span></div>
    <p><strong>NO se proporciona el comando exacto sin entenderlo.</strong> Sigue los pasos, razona y documenta lo que haces con capturas.</p>
</div>

<h3>6.1. Preparación del Entorno</h3>
<ul class="space-y-2 my-4">
    <li><strong>6.1.1.</strong> Crear/usar VM Linux con red configurada.</li>
    <li><strong>6.1.2.</strong> Actualizar el sistema.</li>
    <li><strong>6.1.3.</strong> Configurar IP estática acorde al diseño.</li>
    <li><strong>6.1.4.</strong> Verificar conectividad.</li>
</ul>

<h3>6.2. Instalación de Docker</h3>
<div class="callout callout-warning"><div class="callout-title"><span>📋</span><span>Tarea</span></div><p>Investiga el procedimiento oficial para instalar Docker en tu distribución. Documenta: repositorio, instalación, usuario al grupo <code class="text-sm">docker</code> y prueba <code class="text-sm">docker run hello-world</code>.</p></div>

<h3>6.3. Despliegue de Ollama + Open WebUI</h3>
<p>Crea un <strong>docker-compose.yml</strong> en un directorio del proyecto (p. ej. <code class="text-sm">~/ia-local/</code>). Debes:</p>
<ul class="space-y-2 my-4">
    <li>Definir los dos servicios.</li>
    <li>Crear volúmenes persistentes.</li>
    <li>Publicar puertos solo si es necesario y acorde al firewall.</li>
    <li>Levantar con <code class="text-sm">docker compose up -d</code>.</li>
</ul>

<h3>6.4. Descarga e inicialización del modelo</h3>
<p>Accede a Open WebUI, configura el primer usuario/administrador y descarga <strong>UN SOLO</strong> modelo ligero elegido en el apartado 2.4. Documenta el proceso.</p>

<h3>6.5. Integración con la red corporativa</h3>
<ul class="space-y-2 my-4">
    <li><strong>6.5.1.</strong> Comprobar acceso solo desde red interna.</li>
    <li><strong>6.5.2.</strong> Aplicar reglas básicas de firewall.</li>
    <li><strong>6.5.3.</strong> Verificar que <strong>NO</strong> hay salida innecesaria a Internet desde el contenedor (comprobación razonada).</li>
</ul>

<h3>6.6. Diario de Implementación</h3>
<p>Usa esta tabla para llevar tu diario (obligatorio):</p>
<table class="w-full my-6">
    <thead><tr><th>Fecha</th><th>Tarea realizada</th><th>Incidencias</th><th>Solución / Observaciones</th></tr></thead>
    <tbody>
        <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
    </tbody>
</table>
`;
