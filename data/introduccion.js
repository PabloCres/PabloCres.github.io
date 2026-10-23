window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>👋</span>
        <span>Introducción al Proyecto</span>
    </div>
    <p>
        En la actualidad, muchas pymes buscan aprovechar las ventajas de la Inteligencia Artificial, pero se ven frenadas por restricciones legales, económicas y de seguridad. 
        <strong>TecnoValencia Solutions</strong> decide dar un paso hacia la soberanía digital implantando un <strong>asistente de IA local</strong> adaptado a sus necesidades.
    </p>
</div>

<h3>1.1. Identificación de la Empresa</h3>
<p>
    <strong>TecnoValencia Solutions S.L.</strong> es una empresa de servicios TIC con sede en Valencia, especializada en consultoría, soporte, redes y mantenimiento para pymes. 
    Cuenta con aproximadamente <strong>120 empleados</strong>, distribuidos entre administración, soporte técnico, proyectos y comercial.
</p>

<h3>1.2. Motivación del Proyecto</h3>
<p>
    El departamento de <strong>Soporte Técnico</strong> gestiona, día a día, un gran número de incidencias mediante su plataforma de tickets. 
    Tras revisar los últimos 12 meses, se han identificado los siguientes hechos:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Volumen:</strong> ~1.500 tickets/mes, con picos en inicio de curso y tras actualizaciones.</li>
    <li><strong>Repetitividad:</strong> El 40 % son consultas frecuentes (configuración VPN, impresoras, correo, permisos).</li>
    <li><strong>Tiempo perdido:</strong> El técnico dedica gran parte de su jornada a responder las mismas preguntas.</li>
    <li><strong>Preocupación por datos:</strong> La dirección veta el uso masivo de IA externa por riesgos de fuga de información y cumplimiento del <strong>RGPD</strong>.</li>
</ul>

<h3>1.3. Problemática Crítica</h3>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>🚨</span>
        <span>Situación actual</span>
    </div>
    <p>
        <strong>Si no se actúa:</strong> Se mantendrá la sobrecarga del departamento, se incrementará el tiempo de espera para incidencias realmente críticas 
        y se expondrá a la empresa al riesgo de compartir documentación interna con servicios IA externos. 
        Además, los costes por licencias seguirán creciendo sin garantía de control sobre los datos.
    </p>
</div>

<h3>1.4. Propuesta Técnica</h3>
<p>
    Se propone el <strong>despliegue de un asistente de IA local</strong> con las siguientes premisas:
</p>
<ul class="space-y-2 my-4">
    <li><strong>100 % local:</strong> El modelo y las conversaciones nunca abandonan la red corporativa.</li>
    <li><strong>Basado en open-source:</strong> <strong>Ollama</strong> + <strong>Open WebUI</strong>, desplegados con <strong>Docker</strong>.</li>
    <li><strong>Integrado en la infraestructura:</strong> Servidor virtual en Proxmox/VMware, VLAN dedicada, firewall, DNS.</li>
    <li><strong>Seguro y auditable:</strong> Autenticación, control de acceso, logs y copias de seguridad.</li>
</ul>

<h3>1.5. Objetivos SMART</h3>
<ul class="space-y-2 my-4">
    <li><strong>Específico:</strong> Desplegar un asistente IA local accesible solo desde la red interna.</li>
    <li><strong>Medible:</strong> Reducir los tickets repetitivos en un <strong>30 %</strong> en los 3 meses siguientes a su implantación.</li>
    <li><strong>Alcanzable:</strong> Con la infraestructura existente (servidor virtual) y los conocimientos de SMR.</li>
    <li><strong>Relevante:</strong> Mejora la productividad, la seguridad y el cumplimiento normativo.</li>
    <li><strong>Temporal:</strong> Despliegue completo y documentado dentro del periodo del proyecto intermodular (<strong>96 h</strong>).</li>
</ul>

<h3>1.6. Alcance del Proyecto</h3>
<p>El proyecto se centrará exclusivamente en <strong>sistemas, redes y seguridad básica</strong>:</p>
<ul class="space-y-2 my-4">
    <li>Planificación y segmentación de red (VLAN para IA).</li>
    <li>Despliegue del servidor Linux y virtualización.</li>
    <li>Instalación y configuración de Docker, Ollama y Open WebUI.</li>
    <li>Configuración de firewall, acceso y autenticación.</li>
    <li>Monitorización básica, copias de seguridad y documentación técnica.</li>
</ul>

<div class="relative my-8">
    <img src="./images/hero.jpg" alt="Infraestructura de servidores para despliegue de IA local" class="w-full rounded-2xl shadow-xl">
    <p class="text-sm text-slate-500 mt-2 text-center">Figura 1.1: Infraestructura TIC orientada al despliegue de servicios locales.</p>
</div>

<h3>1.7. Estructura del Documento</h3>
<ul class="space-y-2 my-4">
    <li><strong>2. Estado del Arte:</strong> Análisis de soluciones (Ollama/Open WebUI) y alternativas.</li>
    <li><strong>3. Estudio de Viabilidad:</strong> Técnica, económica, operativa y legal.</li>
    <li><strong>4. Análisis de Requisitos:</strong> Funcionales, no funcionales y de seguridad.</li>
    <li><strong>5. Diseño:</strong> Arquitectura, red, direccionamiento y esquema de contenedores.</li>
    <li><strong>6. Implementación:</strong> Guía para el despliegue paso a paso.</li>
    <li><strong>7. Administración:</strong> Mantenimiento, logs, copias y incidencias.</li>
    <li><strong>8. Herramientas de Apoyo:</strong> Recursos, comandos y utilidades.</li>
    <li><strong>9. Conclusiones:</strong> Valoración y propuestas de mejora.</li>
    <li><strong>10. Bibliografía y Anexos:</strong> Fuentes y evidencias.</li>
</ul>
`;
