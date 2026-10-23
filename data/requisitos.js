window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info">
    <div class="callout-title"><span>📌</span><span>Objetivo</span></div>
    <p>Definir los requisitos del sistema desde el punto de vista de <strong>redes y sistemas (SMR)</strong>.</p>
</div>

<h3>4.1. Requisitos Funcionales (RF)</h3>
<p>Completa cada requisito siguiendo el formato: <strong>RF-XX. Descripción + Criterio de aceptación</strong>.</p>
<table class="w-full my-6">
    <thead><tr><th>Código</th><th>Descripción</th><th>Criterio de Aceptación</th><th>Prioridad</th></tr></thead>
    <tbody>
        <tr><td>RF-01</td><td>Acceso web al asistente local...</td><td>...</td><td>Alta</td></tr>
        <tr><td>RF-02</td><td>Autenticación de usuarios...</td><td>...</td><td>Alta</td></tr>
        <tr><td>RF-03</td><td>Servicio 100% accesible por red interna...</td><td>...</td><td>Alta</td></tr>
        <tr><td>RF-04</td><td>Registro de accesos/conversaciones básicas...</td><td>...</td><td>Media</td></tr>
        <tr><td>RF-05</td><td>Selección de modelo LLM...</td><td>...</td><td>Media</td></tr>
    </tbody>
</table>

<h3>4.2. Requisitos No Funcionales (RNF)</h3>
<table class="w-full my-6">
    <thead><tr><th>Código</th><th>Descripción</th><th>Criterio de Aceptación</th></tr></thead>
    <tbody>
        <tr><td>RNF-01</td><td>Seguridad: Sin salida de datos a Internet</td><td>...</td></tr>
        <tr><td>RNF-02</td><td>Disponibilidad</td><td>...</td></tr>
        <tr><td>RNF-03</td><td>Escalabilidad</td><td>...</td></tr>
        <tr><td>RNF-04</td><td>Portabilidad (Docker)</td><td>...</td></tr>
        <tr><td>RNF-05</td><td>Auditabilidad</td><td>...</td></tr>
    </tbody>
</table>

<h3>4.3. Requisitos de Seguridad</h3>
<ul class="space-y-2 my-4">
    <li><strong>RS-01:</strong> Servicio solo visible en red interna y/o VLAN dedicada.</li>
    <li><strong>RS-02:</strong> Restricción de puertos (solo necesarios).</li>
    <li><strong>RS-03:</strong> Activación de autenticación obligatoria.</li>
    <li><strong>RS-04:</strong> Políticas de copias de seguridad.</li>
</ul>
`;
