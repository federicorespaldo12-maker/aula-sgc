import { useState, useEffect, useRef } from "react";

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const T = {
  bg0: "#060d18",
  bg1: "#0a1628",
  bg2: "#0f1f35",
  bg3: "#152944",
  surface: "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.16)",
  green: "#00d4a0",
  greenDim: "rgba(0,212,160,0.15)",
  blue: "#3b9eff",
  blueDim: "rgba(59,158,255,0.15)",
  amber: "#f0b429",
  amberDim: "rgba(240,180,41,0.15)",
  rose: "#f87171",
  roseDim: "rgba(248,113,113,0.15)",
  violet: "#a78bfa",
  violetDim: "rgba(167,139,250,0.15)",
  text: "#f0f4f8",
  textMid: "#94a3b8",
  textDim: "#4a5568",
};

// ─── CURRICULUM DATA ──────────────────────────────────────────────────────────
const MODULES = [
  {
    id: "intro",
    num: "01",
    title: "Introducción al SGC",
    subtitle: "Sistema de Gestión de Calidad",
    accent: T.green,
    accentDim: T.greenDim,
    icon: "◈",
    estimatedTime: "15 min",
    slides: [
      {
        id: "s1",
        type: "hero",
        title: "¿Qué es el SGC?",
        subtitle: "Sistema de Gestión de Calidad",
        body: "El SGC es el conjunto de procesos, procedimientos y herramientas que utilizamos para asegurar que nuestros proyectos se desarrollen de forma ordenada, controlada y conforme a los requisitos establecidos.",
        visual: "venn3",
      },
      {
        id: "s2",
        type: "content",
        title: "Los 3 pilares del SIG",
        body: "Nuestro Sistema de Gestión Integrado combina tres normas internacionales que se complementan entre sí.",
        visual: "isoCards",
      },
      {
        id: "s3",
        type: "content",
        title: "¿Por qué existe el SGC?",
        body: "El objetivo del sistema no es solo cumplir requisitos. Es ayudarnos a trabajar de forma más eficiente, prevenir errores y garantizar que cada proyecto alcance los estándares que buscamos.",
        visual: "whyList",
      },
      {
        id: "s4",
        type: "content",
        title: "Ciclo de Mejora Continua",
        body: "Todo el SGC funciona bajo el ciclo PDCA — Planear, Hacer, Verificar y Actuar. Este ciclo garantiza que los procesos mejoren de forma sostenida.",
        visual: "pdca",
      },
      {
        id: "s5",
        type: "content",
        title: "Tu rol en el SGC",
        body: "Todos dentro de la empresa tienen un rol. Desde ingeniería y desarrollo, hasta los equipos en obra. La calidad es responsabilidad compartida.",
        visual: "roles",
      },
    ],
    quiz: [
      { q: "¿Cuántos sistemas integra el SIG de 360 Energy?", opts: ["2", "3", "4", "5"], correct: 1 },
      { q: "¿Qué norma ISO corresponde a Calidad?", opts: ["ISO 14001", "ISO 45001", "ISO 9001", "ISO 31000"], correct: 2 },
      { q: "¿Qué significa la 'V' en el ciclo PDCA?", opts: ["Validar", "Verificar", "Vigilar", "Valorar"], correct: 1 },
      { q: "¿Quién es responsable de la calidad en 360 Energy?", opts: ["Solo el área de Calidad", "Solo los supervisores de obra", "La alta dirección", "Todos en la empresa"], correct: 3 },
    ],
  },
  {
    id: "hallazgos",
    num: "02",
    title: "Gestión de Hallazgos",
    subtitle: "NC · OBS · OM · Enaxis",
    accent: T.blue,
    accentDim: T.blueDim,
    icon: "◉",
    estimatedTime: "18 min",
    slides: [
      {
        id: "s1",
        type: "hero",
        title: "¿Qué es un Hallazgo?",
        subtitle: "Gestión de Hallazgos",
        body: "Un hallazgo es cualquier situación detectada durante una auditoría, inspección o revisión que se aparte de lo establecido en nuestros procedimientos, normas o requisitos del cliente.",
        visual: "hallazgoTypes",
      },
      {
        id: "s2",
        type: "content",
        title: "Los 3 tipos de hallazgos",
        body: "No todos los hallazgos son iguales. Según su gravedad y naturaleza, los clasificamos en tres categorías con tratamientos diferentes.",
        visual: "tiposCards",
      },
      {
        id: "s3",
        type: "content",
        title: "No Conformidad (NC)",
        body: "Una NC es el incumplimiento de un requisito. Puede ser un requisito de la norma ISO, del cliente, o de nuestros procedimientos internos. Requiere acción correctiva obligatoria.",
        visual: "ncDetail",
      },
      {
        id: "s4",
        type: "content",
        title: "Cómo registrar en Enaxis",
        body: "Todos los hallazgos deben cargarse en Enaxis, nuestro sistema de gestión documental. El registro correcto permite el seguimiento y cierre del hallazgo.",
        visual: "enaxisFlow",
      },
      {
        id: "s5",
        type: "content",
        title: "Ciclo de vida de un hallazgo",
        body: "Un hallazgo no se cierra hasta que la causa raíz esté resuelta y se haya verificado la eficacia de la acción tomada.",
        visual: "hallazgoCiclo",
      },
      {
        id: "s6",
        type: "content",
        title: "Datos del SGC 2023–2025",
        body: "En los últimos dos años gestionamos 144 hallazgos en total. El 65% fue cerrado correctamente. Conocer estos números nos ayuda a mejorar.",
        visual: "statsHallazgos",
      },
    ],
    quiz: [
      { q: "¿Cuál es la diferencia principal entre NC y OBS?", opts: ["No hay diferencia", "La NC es un incumplimiento de requisito; la OBS es una situación que podría convertirse en NC", "La OBS es más grave que la NC", "Solo las NC se registran en Enaxis"], correct: 1 },
      { q: "¿Dónde se registran los hallazgos en 360 Energy?", opts: ["SharePoint", "Enaxis", "SAP", "Excel"], correct: 1 },
      { q: "¿Cuántos hallazgos totales se registraron entre 2023 y 2025?", opts: ["26", "112", "144", "65"], correct: 2 },
      { q: "¿Una NC se cierra cuando...?", opts: ["El auditor lo decide", "Se documenta el problema", "Se verifica la eficacia de la acción correctiva", "Pasan 30 días"], correct: 2 },
    ],
  },
  {
    id: "documental",
    title: "Control Documental",
    num: "03",
    subtitle: "Ciclo de vida · Enaxis · Trazabilidad",
    accent: T.amber,
    accentDim: T.amberDim,
    icon: "◧",
    estimatedTime: "12 min",
    slides: [
      {
        id: "s1",
        type: "hero",
        title: "¿Por qué es clave el control documental?",
        subtitle: "Control Documental",
        body: "En proyectos de la magnitud de los nuestros, trabajar con documentos desactualizados o sin aprobar puede generar errores en obra, incumplimientos contractuales y riesgos de seguridad.",
        visual: "docHero",
      },
      {
        id: "s2",
        type: "content",
        title: "Tipos de información documentada",
        body: "Según ISO 9001:2015, la información documentada se divide en dos grandes grupos: la que se debe MANTENER (procedimientos) y la que se debe RETENER (registros).",
        visual: "docTypes",
      },
      {
        id: "s3",
        type: "content",
        title: "Ciclo de vida de un documento",
        body: "Todo documento en 360 Energy sigue un ciclo definido: desde su creación hasta su obsolescencia. Ningún documento se usa sin pasar por revisión y aprobación.",
        visual: "docCiclo",
      },
      {
        id: "s4",
        type: "content",
        title: "Enaxis: nuestro sistema documental",
        body: "Enaxis es la plataforma donde gestionamos toda la documentación del SGC. Actualmente tenemos 344 documentos activos — el 51% al día y el 49% pendiente de actualización.",
        visual: "enaxisStats",
      },
      {
        id: "s5",
        type: "content",
        title: "Documentos de obra en SharePoint",
        body: "Los documentos de obra se gestionan en SharePoint. Actualmente hay 240 documentos, de los cuales el 37% están aprobados. El resto está en proceso de revisión.",
        visual: "sharepointStats",
      },
    ],
    quiz: [
      { q: "Según ISO 9001:2015, ¿cómo se llaman los 'procedimientos' en la nueva terminología?", opts: ["Registros documentados", "Información a mantener", "Documentos aprobados", "Fichas técnicas"], correct: 1 },
      { q: "¿Cuántos documentos activos hay en Enaxis?", opts: ["156", "240", "344", "51"], correct: 2 },
      { q: "¿Qué porcentaje de documentos en Enaxis están actualizados y vigentes?", opts: ["37%", "49%", "51%", "65%"], correct: 2 },
      { q: "¿Qué pasa si se usa un documento sin aprobar en obra?", opts: ["No pasa nada, es un trámite", "Puede generar errores, incumplimientos y riesgos de seguridad", "Solo hay que avisarle al supervisor", "Se resuelve en la próxima auditoría"], correct: 1 },
    ],
  },
  {
    id: "obra",
    title: "Calidad en Obra",
    num: "04",
    subtitle: "PIE · Inspecciones · Trazabilidad",
    accent: T.rose,
    accentDim: T.roseDim,
    icon: "◫",
    estimatedTime: "20 min",
    slides: [
      {
        id: "s1",
        type: "hero",
        title: "La calidad empieza en obra",
        subtitle: "Calidad en Obra",
        body: "Los proyectos fotovoltaicos de 360 Energy se ejecutan en condiciones exigentes. El control de calidad en obra es lo que garantiza que cada panel, cada estructura y cada conexión cumpla con los estándares definidos.",
        visual: "obraHero",
      },
      {
        id: "s2",
        type: "content",
        title: "¿Qué es el PIE?",
        body: "El Plan de Inspección y Ensayos (PIE) es el documento que define qué se va a controlar, cuándo, cómo y quién es el responsable durante la construcción del parque.",
        visual: "pieDetail",
      },
      {
        id: "s3",
        type: "content",
        title: "Tipos de inspecciones",
        body: "En obra realizamos distintos tipos de inspecciones según la etapa del proyecto: civil, estructural, eléctrica y de puesta en marcha. Cada una tiene sus propios criterios de aceptación.",
        visual: "inspeccionesTipos",
      },
      {
        id: "s4",
        type: "content",
        title: "Trazabilidad de materiales",
        body: "Cada componente que ingresa a obra debe tener trazabilidad: desde el fabricante hasta su instalación. Esto incluye módulos fotovoltaicos, inversores, estructuras y cables.",
        visual: "trazabilidad",
      },
      {
        id: "s5",
        type: "content",
        title: "Capacitaciones en obra 2023–2025",
        body: "Realizamos 156 capacitaciones con 1.193 participantes. El área de Calidad fue la más activa con 64 sesiones, seguida por Montaje, Eléctrico y Civil.",
        visual: "capObra",
      },
    ],
    quiz: [
      { q: "¿Qué significa PIE?", opts: ["Plan de Inspección y Ensayos", "Procedimiento Interno de Ejecución", "Plan de Implementación en Etapas", "Protocolo de Inspección en Edificios"], correct: 0 },
      { q: "¿Qué debe tener cada componente que ingresa a obra?", opts: ["Un número de serie", "Trazabilidad desde el fabricante hasta su instalación", "Aprobación del cliente", "Sello de auditoría externa"], correct: 1 },
      { q: "¿Cuántas capacitaciones se realizaron en obra entre 2023 y 2025?", opts: ["64", "91", "156", "1193"], correct: 2 },
      { q: "¿Cuál fue el área con más capacitaciones en obra?", opts: ["Civil", "Eléctrico", "Montaje", "Calidad"], correct: 3 },
    ],
  },
];

// ─── VISUAL COMPONENTS ────────────────────────────────────────────────────────
function SlideVisual({ type, accent }) {
  const vs = {
    venn3: (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 0, height: 110 }}>
        {[["CALIDAD\nISO 9001", "#ef4444"], ["AMBIENTE\nISO 14001", "#22c55e"], ["SEGURIDAD\nISO 45001", "#3b82f6"]].map(([label, c], i) => (
          <div key={i} style={{ width: 80, height: 80, borderRadius: "50%", background: c, opacity: 0.85, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, color: "white", textAlign: "center", lineHeight: 1.3, marginLeft: i > 0 ? -24 : 0, zIndex: i, whiteSpace: "pre-line", padding: 4 }}>{label}</div>
        ))}
        <div style={{ position: "absolute", marginTop: 30, fontSize: 11, fontWeight: 800, color: "white", background: "rgba(0,0,0,0.6)", padding: "2px 8px", borderRadius: 4 }}>SIG</div>
      </div>
    ),
    isoCards: (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[["ISO 9001:2015", "Calidad de productos y servicios", "#ef4444"], ["ISO 14001:2015", "Protección del medio ambiente", "#22c55e"], ["ISO 45001:2018", "Seguridad y salud en el trabajo", "#3b82f6"]].map(([iso, desc, c]) => (
          <div key={iso} style={{ display: "flex", gap: 10, alignItems: "center", padding: "8px 12px", borderRadius: 8, background: "rgba(255,255,255,0.04)", borderLeft: `3px solid ${c}` }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: c, minWidth: 90 }}>{iso}</span>
            <span style={{ fontSize: 11, color: T.textMid }}>{desc}</span>
          </div>
        ))}
      </div>
    ),
    whyList: (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[["🎯", "Prevenir errores antes de que ocurran"], ["⚡", "Trabajar de forma más eficiente"], ["📋", "Cumplir compromisos contractuales"], ["🔄", "Mejorar continuamente los procesos"]].map(([icon, text]) => (
          <div key={text} style={{ display: "flex", gap: 10, alignItems: "center", padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: 16 }}>{icon}</span>
            <span style={{ fontSize: 11, color: T.textMid }}>{text}</span>
          </div>
        ))}
      </div>
    ),
    pdca: (
      <div style={{ position: "relative", height: 110, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", width: 110, height: 110 }}>
          {[["P", "Planear", "#3b82f6", "0%", "25%"], ["H", "Hacer", "#22c55e", "25%", "75%"], ["V", "Verificar", "#f59e0b", "75%", "75%"], ["A", "Actuar", "#ef4444", "75%", "25%"]].map(([l, label, c, top, left]) => (
            <div key={l} style={{ position: "absolute", top, left, transform: "translate(-50%,-50%)", textAlign: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: c, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, color: "white", margin: "0 auto" }}>{l}</div>
              <div style={{ fontSize: 9, color: T.textMid, marginTop: 2 }}>{label}</div>
            </div>
          ))}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: 9, color: T.textDim, textAlign: "center", fontWeight: 700 }}>MEJORA<br/>CONTINUA</div>
        </div>
      </div>
    ),
    roles: (
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {[["🏗️", "Obra"], ["⚙️", "Ingeniería"], ["📊", "Calidad"], ["💼", "Admin"], ["🔌", "Eléctrico"], ["🏢", "Dirección"]].map(([icon, label]) => (
          <div key={label} style={{ padding: "6px 10px", borderRadius: 8, background: "rgba(255,255,255,0.05)", border: `1px solid ${accent}33`, textAlign: "center", fontSize: 10 }}>
            <div style={{ fontSize: 18 }}>{icon}</div>
            <div style={{ color: T.textMid, marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>
    ),
    hallazgoTypes: (
      <div style={{ display: "flex", gap: 8 }}>
        {[["NC", "No Conformidad", "#ef4444", "Incumplimiento de requisito"], ["OBS", "Observación", "#f59e0b", "Situación de riesgo potencial"], ["OM", "Oportunidad de Mejora", "#22c55e", "Sugerencia de optimización"]].map(([code, name, c, desc]) => (
          <div key={code} style={{ flex: 1, padding: 10, borderRadius: 10, background: "rgba(255,255,255,0.04)", borderTop: `3px solid ${c}`, textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: c }}>{code}</div>
            <div style={{ fontSize: 9, color: T.textMid, marginTop: 3, lineHeight: 1.3 }}>{name}</div>
          </div>
        ))}
      </div>
    ),
    tiposCards: (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[["NC", "No Conformidad", "#ef4444", "112 registradas en 2023-2025"], ["OBS", "Observación", "#f59e0b", "14 registradas en 2023-2025"], ["OM", "Oportunidad de Mejora", "#22c55e", "4 registradas en 2023-2025"]].map(([code, name, c, stat]) => (
          <div key={code} style={{ display: "flex", gap: 10, alignItems: "center", padding: "8px 12px", borderRadius: 8, background: "rgba(255,255,255,0.04)", borderLeft: `3px solid ${c}` }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: c, minWidth: 32 }}>{code}</span>
            <div style={{ flex: 1 }}><div style={{ fontSize: 11, color: T.text }}>{name}</div><div style={{ fontSize: 10, color: T.textDim }}>{stat}</div></div>
          </div>
        ))}
      </div>
    ),
    ncDetail: (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[["1. Detectar", "Identificar el desvío respecto al requisito"], ["2. Registrar", "Cargar en Enaxis con descripción y evidencia"], ["3. Analizar", "Determinar la causa raíz"], ["4. Corregir", "Implementar acción correctiva"], ["5. Verificar", "Confirmar eficacia y cerrar"]].map(([step, desc]) => (
          <div key={step} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "6px 10px", borderRadius: 8, background: "rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: 10, fontWeight: 800, color: accent, minWidth: 70 }}>{step}</span>
            <span style={{ fontSize: 10, color: T.textMid }}>{desc}</span>
          </div>
        ))}
      </div>
    ),
    enaxisFlow: (
      <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
        {["Detectar desvío", "→", "Abrir Enaxis", "→", "Completar ficha", "→", "Asignar responsable", "→", "Seguimiento", "→", "Cierre"].map((item, i) => (
          item === "→"
            ? <span key={i} style={{ color: accent, fontSize: 14, fontWeight: 700 }}>→</span>
            : <div key={i} style={{ padding: "5px 8px", borderRadius: 6, background: "rgba(255,255,255,0.05)", border: `1px solid ${accent}33`, fontSize: 10, color: T.textMid, textAlign: "center" }}>{item}</div>
        ))}
      </div>
    ),
    hallazgoCiclo: (
      <div style={{ display: "flex", justifyContent: "center", gap: 6, flexWrap: "wrap" }}>
        {[["Abierto", "#ef4444"], ["En análisis", "#f59e0b"], ["En resolución", "#3b82f6"], ["Verificando", "#a78bfa"], ["Cerrado", "#22c55e"]].map(([label, c], i) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ padding: "5px 10px", borderRadius: 20, background: `${c}22`, border: `1px solid ${c}`, fontSize: 10, color: c, fontWeight: 600 }}>{label}</div>
            {i < 4 && <span style={{ color: T.textDim, fontSize: 12 }}>›</span>}
          </div>
        ))}
      </div>
    ),
    statsHallazgos: (
      <div style={{ display: "flex", gap: 10 }}>
        {[["144", "Total hallazgos", accent], ["65%", "Cerrados", "#22c55e"], ["35%", "En proceso", "#f59e0b"], ["112", "NC", "#ef4444"]].map(([val, label, c]) => (
          <div key={label} style={{ flex: 1, textAlign: "center", padding: "8px 4px", borderRadius: 10, background: "rgba(255,255,255,0.04)" }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: c }}>{val}</div>
            <div style={{ fontSize: 9, color: T.textMid, marginTop: 2 }}>{label}</div>
          </div>
        ))}
      </div>
    ),
    docHero: (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[["⚠️", "Documentos desactualizados = errores en obra"], ["⚠️", "Sin aprobación = incumplimiento contractual"], ["✅", "Control documental = proyectos seguros y conformes"]].map(([icon, text]) => (
          <div key={text} style={{ display: "flex", gap: 10, alignItems: "center", padding: "7px 12px", borderRadius: 8, background: icon === "✅" ? "rgba(34,197,94,0.08)" : "rgba(248,113,113,0.08)" }}>
            <span style={{ fontSize: 14 }}>{icon}</span>
            <span style={{ fontSize: 11, color: T.textMid }}>{text}</span>
          </div>
        ))}
      </div>
    ),
    docTypes: (
      <div style={{ display: "flex", gap: 10 }}>
        {[["MANTENER", "Procedimientos, instrucciones, políticas", "#3b82f6", "Información que describe cómo hacer las cosas"], ["RETENER", "Registros, formularios, evidencias", "#22c55e", "Información que demuestra lo que se hizo"]].map(([type, examples, c, desc]) => (
          <div key={type} style={{ flex: 1, padding: 10, borderRadius: 10, background: "rgba(255,255,255,0.04)", borderTop: `3px solid ${c}` }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: c }}>{type}</div>
            <div style={{ fontSize: 10, color: T.text, marginTop: 4 }}>{examples}</div>
            <div style={{ fontSize: 9, color: T.textDim, marginTop: 4, fontStyle: "italic" }}>{desc}</div>
          </div>
        ))}
      </div>
    ),
    docCiclo: (
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {[["📝 Elaboración", "Se redacta el documento según la plantilla"], ["👀 Revisión", "El área responsable lo revisa"], ["✅ Aprobación", "La dirección o responsable autorizado lo aprueba"], ["📤 Distribución", "Se publica en Enaxis con versión y fecha"], ["🔄 Actualización", "Cuando corresponda, se inicia un nuevo ciclo"], ["🗃️ Obsolescencia", "Se retira y archiva correctamente"]].map(([step, desc]) => (
          <div key={step} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "5px 10px", borderRadius: 6, background: "rgba(255,255,255,0.03)" }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: accent, minWidth: 100 }}>{step}</span>
            <span style={{ fontSize: 10, color: T.textMid }}>{desc}</span>
          </div>
        ))}
      </div>
    ),
    enaxisStats: (
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {[["344", "Documentos activos", accent], ["51%", "Al día", "#22c55e"], ["49%", "A revisar", "#f59e0b"]].map(([val, label, c]) => (
          <div key={label} style={{ flex: 1, textAlign: "center", padding: 12, borderRadius: 10, background: "rgba(255,255,255,0.04)" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: c }}>{val}</div>
            <div style={{ fontSize: 10, color: T.textMid, marginTop: 3 }}>{label}</div>
          </div>
        ))}
      </div>
    ),
    sharepointStats: (
      <div style={{ display: "flex", gap: 10 }}>
        {[["240", "Documentos totales", accent], ["37%", "Aprobados", "#22c55e"], ["63%", "En revisión", "#f59e0b"]].map(([val, label, c]) => (
          <div key={label} style={{ flex: 1, textAlign: "center", padding: 12, borderRadius: 10, background: "rgba(255,255,255,0.04)" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: c }}>{val}</div>
            <div style={{ fontSize: 10, color: T.textMid, marginTop: 3 }}>{label}</div>
          </div>
        ))}
      </div>
    ),
    obraHero: (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[["🌞", "Parques solares fotovoltaicos de gran escala"], ["🏗️", "Condiciones de trabajo exigentes en zonas remotas"], ["📋", "Procesos de inspección rigurosos en cada etapa"], ["🔍", "Trazabilidad de cada componente instalado"]].map(([icon, text]) => (
          <div key={text} style={{ display: "flex", gap: 10, alignItems: "center", padding: "7px 12px", borderRadius: 8, background: "rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: 16 }}>{icon}</span>
            <span style={{ fontSize: 11, color: T.textMid }}>{text}</span>
          </div>
        ))}
      </div>
    ),
    pieDetail: (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[["¿QUÉ?", "Qué actividad se va a inspeccionar"], ["¿CUÁNDO?", "En qué etapa del proyecto"], ["¿CÓMO?", "Método de inspección o ensayo"], ["¿QUIÉN?", "Responsable de realizarla"], ["¿CRITERIO?", "Parámetros de aceptación y rechazo"]].map(([key, val]) => (
          <div key={key} style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 12px", borderRadius: 8, background: "rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: 10, fontWeight: 800, color: accent, minWidth: 70 }}>{key}</span>
            <span style={{ fontSize: 10, color: T.textMid }}>{val}</span>
          </div>
        ))}
      </div>
    ),
    inspeccionesTipos: (
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {[["🏗️", "Civil", "Hormigón, movimiento de suelos"], ["🔩", "Estructural", "Montaje de perfiles y tracker"], ["⚡", "Eléctrico", "Cableado, conexiones, puesta a tierra"], ["🚀", "Puesta en marcha", "Pruebas de performance y rendimiento"]].map(([icon, type, desc]) => (
          <div key={type} style={{ flex: "1 1 45%", padding: 10, borderRadius: 10, background: "rgba(255,255,255,0.04)", borderLeft: `3px solid ${accent}` }}>
            <div style={{ fontSize: 14 }}>{icon}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.text, marginTop: 4 }}>{type}</div>
            <div style={{ fontSize: 9, color: T.textDim, marginTop: 2 }}>{desc}</div>
          </div>
        ))}
      </div>
    ),
    trazabilidad: (
      <div style={{ display: "flex", alignItems: "center", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
        {["Fabricante", "→", "Transporte", "→", "Ingreso a obra", "→", "Almacenamiento", "→", "Instalación", "→", "Registro"].map((item, i) => (
          item === "→"
            ? <span key={i} style={{ color: accent, fontSize: 12, fontWeight: 700 }}>→</span>
            : <div key={i} style={{ padding: "5px 8px", borderRadius: 6, background: "rgba(255,255,255,0.05)", border: `1px solid ${accent}33`, fontSize: 9, color: T.textMid, textAlign: "center" }}>{item}</div>
        ))}
      </div>
    ),
    capObra: (
      <div style={{ display: "flex", gap: 8 }}>
        {[["64", "Calidad", accent], ["35", "Montaje", "#3b82f6"], ["27", "Eléctrico", "#f59e0b"], ["19", "Civil", "#22c55e"]].map(([n, area, c]) => (
          <div key={area} style={{ flex: 1, textAlign: "center", padding: "10px 6px", borderRadius: 10, background: "rgba(255,255,255,0.04)" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: c }}>{n}</div>
            <div style={{ fontSize: 9, color: T.textMid, marginTop: 2 }}>{area}</div>
          </div>
        ))}
      </div>
    ),
  };
  return vs[type] ? <div style={{ marginTop: 12 }}>{vs[type]}</div> : null;
}

// ─── PROGRESS TRACKER ─────────────────────────────────────────────────────────
function ProgressRing({ value, size = 48, accent }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width={size} height={size}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={5} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={accent} strokeWidth={5}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} style={{ transition: "stroke-dashoffset 0.8s ease" }} />
      <text x={size / 2} y={size / 2 + 4} textAnchor="middle" fontSize={11} fontWeight={700} fill={accent}>{value}%</text>
    </svg>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function SGCLearningHub() {
  const [screen, setScreen] = useState("home");
  const [activeModId, setActiveModId] = useState(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [progress, setProgress] = useState({});
  const [userName, setUserName] = useState("Colaborador/a");
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState("");
  const [animKey, setAnimKey] = useState(0);

  const mod = activeModId ? MODULES.find(m => m.id === activeModId) : null;
  const totalDone = Object.keys(progress).length;
  const avgScore = totalDone > 0
    ? Math.round(Object.values(progress).reduce((a, b) => a + b, 0) / totalDone) : 0;

  function openModule(id) {
    setActiveModId(id);
    setSlideIdx(0);
    setQuizAnswers([]);
    setAnimKey(k => k + 1);
    setScreen("slide");
  }
  function goSlide(idx) { setSlideIdx(idx); setAnimKey(k => k + 1); }
  function answer(qi, ai) { const a = [...quizAnswers]; a[qi] = ai; setQuizAnswers(a); }
  function submitQuiz() {
    const score = Math.round(quizAnswers.filter((a, i) => a === mod.quiz[i].correct).length / mod.quiz.length * 100);
    setProgress(p => ({ ...p, [mod.id]: score }));
    setScreen("result");
  }

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700;800&family=DM+Mono:wght@400;500&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: ${T.bg0}; }
    .hub-root { min-height: 100vh; background: ${T.bg0}; font-family: 'DM Sans', sans-serif; color: ${T.text}; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: ${T.bg0}; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
    @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes shimmer { 0%,100%{opacity:0.5} 50%{opacity:1} }
    @keyframes glow { 0%,100%{box-shadow:0 0 0 0 transparent} 50%{box-shadow:0 0 24px rgba(0,212,160,0.2)} }
    .fade-up { animation: fadeUp 0.45s ease both; }
    .btn-base { cursor:pointer; border:none; font-family:'DM Sans',sans-serif; transition:all 0.18s ease; }
    .btn-base:hover { filter:brightness(1.1); transform:translateY(-1px); }
    .btn-base:active { transform:translateY(0); }
    .mod-card { cursor:pointer; transition:all 0.22s ease; }
    .mod-card:hover { transform:translateY(-3px); }
    .opt-row { cursor:pointer; transition:all 0.15s ease; }
    .opt-row:hover { background:rgba(255,255,255,0.07) !important; }
    .nav-dot { cursor:pointer; transition:all 0.2s; }
    .nav-dot:hover { transform:scale(1.4); }
  `;

  // ── HOME ──────────────────────────────────────────────────────────────────
  if (screen === "home") return (
    <div className="hub-root">
      <style>{CSS}</style>

      {/* Grid bg pattern */}
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", top: "-20%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,160,0.06) 0%, transparent 60%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── HEADER ── */}
        <header style={{ borderBottom: `1px solid ${T.border}`, padding: "0 40px", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(6,13,24,0.85)", backdropFilter: "blur(16px)", position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <div style={{ width: 8, height: 28, background: T.green, borderRadius: 2 }} />
              <div style={{ width: 8, height: 20, background: T.blue, borderRadius: 2, opacity: 0.7 }} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.3px", color: T.text }}>SGC Learning Hub</div>
              <div style={{ fontSize: 10, color: T.textDim, fontFamily: "'DM Mono', monospace" }}>360 Energy Solar · Sistema de Gestión de Calidad</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {editingName ? (
              <div style={{ display: "flex", gap: 6 }}>
                <input value={tempName} onChange={e => setTempName(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter") { setUserName(tempName || "Colaborador/a"); setEditingName(false); } }}
                  placeholder="Tu nombre" autoFocus
                  style={{ padding: "5px 10px", borderRadius: 8, border: `1px solid ${T.green}`, background: T.bg2, color: T.text, fontSize: 12, outline: "none", width: 160 }} />
                <button className="btn-base" onClick={() => { setUserName(tempName || "Colaborador/a"); setEditingName(false); }}
                  style={{ padding: "5px 10px", borderRadius: 8, background: T.green, color: T.bg0, fontSize: 11, fontWeight: 700 }}>OK</button>
              </div>
            ) : (
              <button className="btn-base" onClick={() => { setTempName(userName); setEditingName(true); }}
                style={{ padding: "5px 12px", borderRadius: 20, background: T.surface, border: `1px solid ${T.border}`, color: T.textMid, fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${T.green}33`, border: `1px solid ${T.green}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>
                  {userName[0]?.toUpperCase() || "C"}
                </div>
                {userName}
              </button>
            )}
          </div>
        </header>

        {/* ── HERO ── */}
        <section style={{ padding: "56px 40px 40px", maxWidth: 1000, margin: "0 auto" }}>
          <div className="fade-up" style={{ marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", borderRadius: 20, background: `${T.green}15`, border: `1px solid ${T.green}33`, marginBottom: 16 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.green, animation: "shimmer 2s ease-in-out infinite" }} />
              <span style={{ fontSize: 11, color: T.green, fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>PORTAL ACTIVO · {new Date().getFullYear()}</span>
            </div>
            <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, marginBottom: 12 }}>
              Bienvenido/a,<br />
              <span style={{ background: `linear-gradient(135deg, ${T.green}, ${T.blue})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{userName}</span>
            </h1>
            <p style={{ fontSize: 14, color: T.textMid, maxWidth: 520, lineHeight: 1.7 }}>
              Tu espacio de aprendizaje sobre el Sistema de Gestión de Calidad de 360 Energy Solar. Avanzá a tu ritmo y fortalecé tu rol dentro del SGC.
            </p>
          </div>

          {/* Stats */}
          <div className="fade-up" style={{ display: "flex", gap: 12, marginBottom: 52, animationDelay: "0.05s" }}>
            {[
              { label: "Módulos", value: "4", sub: "disponibles", accent: T.green },
              { label: "Completados", value: totalDone.toString(), sub: `de ${MODULES.length}`, accent: T.blue },
              { label: "Puntaje promedio", value: totalDone > 0 ? `${avgScore}%` : "—", sub: "en quizzes", accent: T.amber },
              { label: "Tiempo estimado", value: "65", sub: "minutos totales", accent: T.violet },
            ].map(({ label, value, sub, accent: ac }) => (
              <div key={label} style={{ flex: 1, padding: "16px 18px", borderRadius: 14, background: T.surface, border: `1px solid ${T.border}` }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: ac }}>{value}</div>
                <div style={{ fontSize: 11, color: T.text, fontWeight: 600, marginTop: 2 }}>{label}</div>
                <div style={{ fontSize: 10, color: T.textDim }}>{sub}</div>
              </div>
            ))}
          </div>

          {/* ── MODULE GRID ── */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, color: T.textDim, letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: 20 }}>
              Módulos de Capacitación
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {MODULES.map((m, i) => {
                const done = progress[m.id] != null;
                const score = progress[m.id];
                const passed = done && score >= 75;
                return (
                  <div key={m.id} className="mod-card fade-up" onClick={() => openModule(m.id)}
                    style={{ padding: "24px", borderRadius: 18, background: T.surface, border: `1px solid ${done ? m.accent + "44" : T.border}`, animationDelay: `${i * 0.07}s`, position: "relative", overflow: "hidden" }}>

                    {/* Accent corner */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${m.accent}, transparent)`, borderRadius: "18px 18px 0 0" }} />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 44, height: 44, borderRadius: 12, background: m.accentDim, border: `1px solid ${m.accent}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: m.accent }}>
                          {m.icon}
                        </div>
                        <div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: m.accent, fontWeight: 500 }}>Módulo {m.num}</div>
                          <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.2, marginTop: 1 }}>{m.title}</div>
                        </div>
                      </div>
                      {done && <ProgressRing value={score} size={44} accent={passed ? T.green : T.amber} />}
                    </div>

                    <div style={{ fontSize: 11, color: T.textMid, marginBottom: 14, lineHeight: 1.5 }}>{m.subtitle}</div>

                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ fontSize: 10, color: T.textDim }}>⏱ {m.estimatedTime}</span>
                      <span style={{ fontSize: 10, color: T.textDim }}>· {m.slides.length} slides</span>
                      <span style={{ fontSize: 10, color: T.textDim }}>· {m.quiz.length} preguntas</span>
                      <div style={{ flex: 1 }} />
                      <div style={{ padding: "4px 12px", borderRadius: 20, background: done ? (passed ? `${T.green}15` : `${T.amber}15`) : m.accentDim, border: `1px solid ${done ? (passed ? T.green : T.amber) : m.accent}`, color: done ? (passed ? T.green : T.amber) : m.accent, fontSize: 11, fontWeight: 600 }}>
                        {done ? (passed ? "✓ Aprobado" : "↺ Repasar") : "Iniciar →"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* All passed banner */}
          {totalDone === 4 && Object.values(progress).every(v => v >= 75) && (
            <div className="fade-up" style={{ marginTop: 28, padding: "24px 28px", borderRadius: 18, background: `linear-gradient(135deg, ${T.green}12, ${T.blue}12)`, border: `1px solid ${T.green}44`, display: "flex", gap: 20, alignItems: "center" }}>
              <div style={{ fontSize: 40 }}>🏆</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 17, background: `linear-gradient(90deg,${T.green},${T.blue})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Certificado SGC — 360 Energy Solar
                </div>
                <div style={{ color: T.textMid, fontSize: 12, marginTop: 4 }}>
                  {userName} completó satisfactoriamente los 4 módulos del SGC Learning Hub · {new Date().toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" })}
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                  {MODULES.map(m => (
                    <div key={m.id} style={{ padding: "2px 10px", borderRadius: 20, background: `${m.accent}15`, border: `1px solid ${m.accent}44`, fontSize: 10, color: m.accent }}>
                      {m.num} · {progress[m.id]}%
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div style={{ height: 40 }} />
        </section>
      </div>
    </div>
  );

  // ── SLIDE ─────────────────────────────────────────────────────────────────
  if (screen === "slide" && mod) {
    const slide = mod.slides[slideIdx];
    const pct = Math.round((slideIdx / mod.slides.length) * 100);
    const isLast = slideIdx === mod.slides.length - 1;

    return (
      <div className="hub-root">
        <style>{CSS}</style>
        <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />

        {/* Top bar */}
        <div style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(6,13,24,0.92)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${T.border}`, padding: "0 32px", height: 52, display: "flex", alignItems: "center", gap: 16 }}>
          <button className="btn-base" onClick={() => setScreen("home")}
            style={{ padding: "5px 12px", borderRadius: 8, background: T.surface, border: `1px solid ${T.border}`, color: T.textMid, fontSize: 12 }}>← Volver</button>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: T.text }}>{mod.title}</span>
              <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: T.textDim }}>{slideIdx + 1} / {mod.slides.length}</span>
            </div>
            <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${mod.accent}, ${mod.accent}bb)`, borderRadius: 2, transition: "width 0.4s ease" }} />
            </div>
          </div>
          <button className="btn-base" onClick={() => setScreen("quiz")}
            style={{ padding: "5px 14px", borderRadius: 8, background: `${mod.accent}22`, border: `1px solid ${mod.accent}55`, color: mod.accent, fontSize: 11, fontWeight: 600 }}>Quiz →</button>
        </div>

        <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 32px", position: "relative", zIndex: 1 }}>
          <div key={animKey} className="fade-up"
            style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 22, padding: "36px 40px", minHeight: 420, display: "flex", flexDirection: "column" }}>

            {/* Module tag */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <div style={{ padding: "3px 12px", borderRadius: 20, background: mod.accentDim, border: `1px solid ${mod.accent}55`, fontSize: 10, color: mod.accent, fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>
                {mod.num} · {mod.title}
              </div>
              <div style={{ padding: "3px 10px", borderRadius: 20, background: T.surface, border: `1px solid ${T.border}`, fontSize: 10, color: T.textDim }}>
                Slide {slideIdx + 1}
              </div>
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              {slide.subtitle && (
                <div style={{ fontSize: 11, color: mod.accent, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 8 }}>{slide.subtitle}</div>
              )}
              <h2 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.2, marginBottom: 14 }}>{slide.title}</h2>
              <p style={{ fontSize: 13, color: T.textMid, lineHeight: 1.75, maxWidth: 620 }}>{slide.body}</p>
              <SlideVisual type={slide.visual} accent={mod.accent} />
            </div>

            {/* Accent line bottom */}
            <div style={{ marginTop: 28, height: 1, background: `linear-gradient(90deg, ${mod.accent}44, transparent)` }} />
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
            <button className="btn-base" onClick={() => slideIdx > 0 && goSlide(slideIdx - 1)} disabled={slideIdx === 0}
              style={{ padding: "10px 22px", borderRadius: 12, background: slideIdx === 0 ? "rgba(255,255,255,0.03)" : T.surface, border: `1px solid ${slideIdx === 0 ? "transparent" : T.border}`, color: slideIdx === 0 ? T.textDim : T.textMid, fontSize: 13, fontWeight: 600 }}>
              ← Anterior
            </button>

            <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
              {mod.slides.map((_, i) => (
                <div key={i} className="nav-dot" onClick={() => goSlide(i)}
                  style={{ width: i === slideIdx ? 22 : 7, height: 7, borderRadius: 4, background: i === slideIdx ? mod.accent : "rgba(255,255,255,0.12)", transition: "all 0.25s ease" }} />
              ))}
            </div>

            <button className="btn-base" onClick={() => isLast ? setScreen("quiz") : goSlide(slideIdx + 1)}
              style={{ padding: "10px 22px", borderRadius: 12, background: isLast ? mod.accent : T.surface, border: `1px solid ${isLast ? "transparent" : T.border}`, color: isLast ? T.bg0 : T.text, fontSize: 13, fontWeight: isLast ? 700 : 600 }}>
              {isLast ? "Ir al Quiz →" : "Siguiente →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── QUIZ ──────────────────────────────────────────────────────────────────
  if (screen === "quiz" && mod) {
    const allDone = quizAnswers.filter(a => a !== undefined).length === mod.quiz.length;
    return (
      <div className="hub-root">
        <style>{CSS}</style>
        <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />

        <div style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(6,13,24,0.92)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${T.border}`, padding: "0 32px", height: 52, display: "flex", alignItems: "center", gap: 16 }}>
          <button className="btn-base" onClick={() => setScreen("slide")} style={{ padding: "5px 12px", borderRadius: 8, background: T.surface, border: `1px solid ${T.border}`, color: T.textMid, fontSize: 12 }}>← Volver al módulo</button>
          <div style={{ fontSize: 13, fontWeight: 700 }}>Evaluación · {mod.title}</div>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto", padding: "36px 32px", position: "relative", zIndex: 1 }}>
          <div className="fade-up" style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, color: mod.accent, fontFamily: "'DM Mono', monospace", fontWeight: 500, marginBottom: 6 }}>EVALUACIÓN FINAL · MÓDULO {mod.num}</div>
            <h2 style={{ fontSize: 22, fontWeight: 800 }}>Demostrar lo aprendido</h2>
            <p style={{ fontSize: 13, color: T.textMid, marginTop: 6 }}>Respondé las {mod.quiz.length} preguntas. Necesitás 75% para aprobar el módulo.</p>
          </div>

          {mod.quiz.map((q, qi) => (
            <div key={qi} className="fade-up" style={{ marginBottom: 14, animationDelay: `${qi * 0.06}s` }}>
              <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: "20px 22px" }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14, lineHeight: 1.4 }}>
                  <span style={{ color: mod.accent, fontFamily: "'DM Mono', monospace", fontSize: 12 }}>#{qi + 1} · </span>
                  {q.q}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {q.opts.map((opt, oi) => {
                    const sel = quizAnswers[qi] === oi;
                    return (
                      <div key={oi} className="opt-row" onClick={() => answer(qi, oi)}
                        style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${sel ? mod.accent : T.border}`, background: sel ? mod.accentDim : "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 16, height: 16, borderRadius: "50%", border: `2px solid ${sel ? mod.accent : T.textDim}`, background: sel ? mod.accent : "transparent", flexShrink: 0, transition: "all 0.15s" }} />
                        <span style={{ fontSize: 13, color: sel ? T.text : T.textMid }}>{opt}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}

          <button className="btn-base" onClick={submitQuiz} disabled={!allDone}
            style={{ width: "100%", padding: "14px", borderRadius: 14, background: allDone ? mod.accent : "rgba(255,255,255,0.05)", color: allDone ? T.bg0 : T.textDim, fontWeight: 800, fontSize: 15, marginTop: 6, cursor: allDone ? "pointer" : "not-allowed", transition: "all 0.2s" }}>
            {allDone ? "Confirmar respuestas y ver resultado →" : `Respondé todas las preguntas (${quizAnswers.filter(a => a !== undefined).length}/${mod.quiz.length})`}
          </button>
        </div>
      </div>
    );
  }

  // ── RESULT ────────────────────────────────────────────────────────────────
  if (screen === "result" && mod) {
    const score = progress[mod.id];
    const passed = score >= 75;
    const correct = mod.quiz.filter((q, i) => quizAnswers[i] === q.correct).length;

    return (
      <div className="hub-root">
        <style>{CSS}</style>
        <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 640, margin: "0 auto", padding: "60px 32px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>

          <div className="fade-up" style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 52, marginBottom: 12 }}>{passed ? "🎯" : "📖"}</div>
            <ProgressRing value={score} size={88} accent={passed ? T.green : T.amber} />
            <div style={{ fontSize: 24, fontWeight: 800, marginTop: 16 }}>{passed ? "¡Módulo aprobado!" : "Seguí practicando"}</div>
            <div style={{ fontSize: 13, color: T.textMid, marginTop: 6 }}>{correct} de {mod.quiz.length} respuestas correctas · {mod.title}</div>
          </div>

          {/* Answer review */}
          <div className="fade-up" style={{ width: "100%", marginBottom: 24, animationDelay: "0.1s" }}>
            <div style={{ fontSize: 10, color: T.textDim, letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginBottom: 12 }}>Revisión de respuestas</div>
            {mod.quiz.map((q, i) => {
              const ok = quizAnswers[i] === q.correct;
              return (
                <div key={i} style={{ padding: "10px 14px", borderRadius: 10, background: ok ? "rgba(34,197,94,0.06)" : "rgba(248,113,113,0.06)", border: `1px solid ${ok ? "#22c55e33" : "#f8717133"}`, marginBottom: 7 }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span>{ok ? "✅" : "❌"}</span>
                    <div>
                      <div style={{ fontSize: 12, color: T.text }}>{q.q}</div>
                      {!ok && <div style={{ fontSize: 11, color: T.green, marginTop: 3 }}>✓ Correcta: {q.opts[q.correct]}</div>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="fade-up" style={{ display: "flex", gap: 10, width: "100%", animationDelay: "0.15s" }}>
            {!passed && (
              <button className="btn-base" onClick={() => { setSlideIdx(0); setQuizAnswers([]); setScreen("slide"); }}
                style={{ flex: 1, padding: "12px", borderRadius: 12, background: `${T.amber}15`, border: `1px solid ${T.amber}44`, color: T.amber, fontWeight: 700, fontSize: 13 }}>
                Repasar módulo
              </button>
            )}
            <button className="btn-base" onClick={() => setScreen("home")}
              style={{ flex: 1, padding: "12px", borderRadius: 12, background: mod.accent, color: T.bg0, fontWeight: 800, fontSize: 13 }}>
              {passed ? "Siguiente módulo →" : "Volver al inicio"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
