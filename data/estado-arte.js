window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['estado-arte'] = `
<div class="callout callout-info">
    <div class="callout-title"><span>📚</span><span>Objetivo de la sección</span></div>
    <p>Investigar y comparar soluciones para desplegar un <strong>asistente de IA local</strong>. <strong>No copies y pegues</strong>: analiza, razona y justifica tu elección.</p>
</div>

<h3>2.1. ¿Qué se entiende por IA local?</h3>
<p>Define con tus palabras: <strong>¿Qué ventajas tiene ejecutar un LLM en local frente a un servicio en la nube?</strong> Anótalo en tu memoria justificando con argumentos técnicos.</p>

<h3>2.2. Comparativa de soluciones</h3>
<p>Completa la siguiente tabla con la información que encuentres:</p>
<table class="w-full my-6">
    <thead><tr><th>Solución</th><th>Open Source</th><th>Fácil de usar</th><th>Consumo recursos</th><th>Observaciones</th></tr></thead>
    <tbody>
        <tr><td>Ollama + Open WebUI</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>LMDeploy / vLLM</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>AnythingLLM</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>Otras (indicar)</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
    </tbody>
</table>

<h3>2.3. Justificación de la solución elegida</h3>
<div class="callout callout-warning">
    <div class="callout-title"><span>💡</span><span>Pregunta guía</span></div>
    <p>¿Por qué consideras que <strong>Ollama + Open WebUI</strong> es la más adecuada para un entorno SMR (sistemas y redes) y para los objetivos de TecnoValencia Solutions?</p>
</div>
<p>Redacta tu respuesta argumentada (<strong>mínimo 4 líneas</strong>), citando razones de seguridad, sencillez, control y mantenimiento.</p>

<h3>2.4. Modelos LLM a considerar</h3>
<p>Investiga modelos ligeros aptos para hardware modesto (VM con 4-8 GB RAM):</p>
<table class="w-full my-6">
    <thead><tr><th>Modelo</th><th>Tamaño</th><th>RAM recomendada</th><th>Idioma ES</th><th>Idoneidad</th></tr></thead>
    <tbody>
        <tr><td>llama-3.2 / llama-3.1</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>gemma2 / gemma3</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>mistral / qwen2.5</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
    </tbody>
</table>
<p><strong>Tarea:</strong> Elige <strong>UN</strong> modelo para tu despliegue, justificando tu elección.</p>
`;
