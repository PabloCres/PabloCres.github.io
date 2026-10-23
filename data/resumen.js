window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.resumen = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📄</span>
        <span>Resumen Ejecutivo</span>
    </div>
    <p>
        El presente proyecto tiene como finalidad el <strong>despliegue de un asistente de IA local</strong> sobre la infraestructura de <strong>TecnoValencia Solutions</strong>, 
        una empresa con cerca de 120 empleados dedicada a la prestación de servicios TIC a pymes valencianas. 
        Se trata de una solución basada en sistemas y redes, pensada para el Ciclo Formativo de Grado Medio <strong>SMR</strong>.
    </p>
</div>

<h3>1. Contexto y Problemática</h3>
<p>
    La empresa recibe un elevado volumen de consultas repetitivas al departamento de soporte técnico (aproximadamente <strong>1.500 tickets/mes</strong>). 
    Tras un análisis inicial se ha detectado que cerca del <strong>40 %</strong> de dichos tickets son preguntas frecuentes o incidencias de carácter genérico.
    El uso de asistentes de IA comerciales plantea serios inconvenientes para la organización:
</p>
<ul class="space-y-2 my-4">
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Riesgo para la seguridad y el RGPD:</strong> Enviar información interna a servicios en la nube externos puede suponer una fuga de datos.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Costes recurrentes:</strong> Las licencias por usuario se disparan con el crecimiento de la plantilla.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Dependencia externa:</strong> Sin conexión o con cambios en las condiciones de uso, el servicio deja de estar garantizado.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Falta de control:</strong> No se puede auditar qué consultas se realizan ni limitar el uso por perfiles.</span>
    </li>
</ul>

<h3>2. Solución Propuesta</h3>
<p>
    Se plantea desplegar un <strong>asistente de IA 100 % local</strong> sobre un servidor virtual de la infraestructura de la empresa. 
    La pila tecnológica seleccionada es <strong>Ollama</strong> (gestión de modelos LLM open-source) y <strong>Open WebUI</strong> (interfaz web para el alumnado/técnicos). 
    Todo ello se integrará en la red corporativa con los criterios propios de SMR:
</p>
<ul class="space-y-2 my-4">
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Soberanía de datos:</strong> Ninguna consulta sale a Internet. Todo el tráfico se mantiene en la red local.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Despliegue con contenedores:</strong> Uso de <strong>Docker</strong> para garantizar portabilidad y facilidad de mantenimiento.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Segmentación de red:</strong> VLAN dedicada para el servicio de IA, con reglas de firewall restrictivas.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Acceso controlado:</strong> Autenticación, perfiles y registro de accesos.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Resiliencia:</strong> Copias de seguridad, monitorización y procedimientos documentados.</span>
    </li>
</ul>

<h3>3. Objetivos del Proyecto</h3>
<h4>Objetivo General</h4>
<p>
    Diseñar, desplegar y documentar la infraestructura necesaria para poner en marcha un <strong>asistente de IA local</strong> en TecnoValencia Solutions, 
    garantizando seguridad, segmentación de red y facilidad de uso para el personal del departamento de soporte.
</p>
<h4>Objetivos Específicos</h4>
<ul class="space-y-2 my-4">
    <li><span class="text-blue-600 font-bold">OE-01:</span> Analizar la problemática y justificar la implantación de una solución local.</li>
    <li><span class="text-blue-600 font-bold">OE-02:</span> Planificar la infraestructura virtual/red necesaria (VLAN, direccionamiento, firewall).</li>
    <li><span class="text-blue-600 font-bold">OE-03:</span> Desplegar <strong>Ollama</strong> y <strong>Open WebUI</strong> mediante <strong>Docker</strong> en un servidor Linux.</li>
    <li><span class="text-blue-600 font-bold">OE-04:</span> Configurar el acceso controlado, permisos y registro de eventos.</li>
    <li><span class="text-blue-600 font-bold">OE-05:</span> Aplicar medidas de seguridad básicas (segmentación, actualizaciones, copias).</li>
    <li><span class="text-blue-600 font-bold">OE-06:</span> Documentar el despliegue siguiendo la normativa y buenas prácticas de SMR.</li>
</ul>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Instrucciones para el alumnado</span>
    </div>
    <p>
        <strong>Este proyecto es PEDAGÓGICO.</strong> La <strong>Introducción</strong> se presenta como caso realista y detallado. 
        El resto de secciones constituyen <strong>GUÍAS DIDÁCTICAS</strong>: NO se da la configuración completa, sino las directrices, tablas, checklists y preguntas guía 
        para que <strong>el alumnado</strong> investigue, configure y documente <strong>su propio despliegue</strong> en entorno de pruebas (máquinas virtuales).
    </p>
</div>
`;
