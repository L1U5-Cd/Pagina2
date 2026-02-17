const frases = [
    "<3 ---------- TE AMO MUCHO MI NIÑA ---------- <3 ",
    "¿A veces pienso que el destino sonríe cuando coincidimos?",
    "Hay silencios contigo que dicen más de lo que imagino.",
    "No sé cuándo pasó, pero tu presencia empezó a importarme más de lo normal.",
    "Contigo, incluso los días simples se sienten especiales.",
    "Hay miradas que no se olvidan… y la tuya es una de ellas.",
    "Me gusta cómo, sin darte cuenta, haces que todo se sienta más bonito.",
    "No sé si es intuición, pero algo me dice que contigo podría ser distinto.",
    "Tu risa tiene la extraña habilidad de quedarse conmigo todo el día.",
    "A veces siento que nuestras conversaciones se quedan cortas de tiempo.",
    "Contigo, la idea de arriesgar no da tanto miedo.",
    "Hay algo en tu cercanía que me calma y me emociona a la vez.",
    "No sé si lo notas, pero me gusta más el mundo cuando estás cerca.",
    "Tal vez no lo diga seguido, pero contigo me siento cómodo siendo yo.",
    "Hay momentos contigo que quisiera guardar como pequeños secretos.",
    "Me pregunto si también sientes esa conexión silenciosa entre nosotros.",
    "No sé a dónde nos llevaría esto, pero me gusta imaginarlo contigo.",
    "Tu forma de estar hace que todo parezca más sencillo.",
    "A veces una sola sonrisa tuya cambia por completo mi día.",
    "Contigo, incluso el silencio tiene sentido.",
    "Quizá no sea casualidad que me guste tanto coincidir contigo.",
    "Hay algo en ti que me hace querer quedarme un poco más.",
    "No sé si es el momento perfecto, pero sí sé que me gustaría que fueras tú.",
    "Me encanta cómo, sin proponértelo, te vuelves parte de mis pensamientos.",
    "Tal vez no sea amor aún, pero definitivamente es algo bonito.",
    "Si tuviera que elegir una compañía para perderme un rato, serías tú."
];
  
  let i = 0;
  let j = 0;
  let escribiendo = true;
  const speed = 70;
  const pausaEntreFrases = 3000;
  
  const contenedor = document.getElementById("texto");
  
  function escribir() {
    if (escribiendo) {
      if (j < frases[i].length) {
        contenedor.textContent += frases[i].charAt(j);
        j++;
        setTimeout(escribir, speed);
      } else {
        escribiendo = false;
        setTimeout(escribir, pausaEntreFrases);
      }
    } else {
      if (j > 0) {
        contenedor.textContent = frases[i].substring(0, j - 1);
        j--;
        setTimeout(escribir, speed / 2);
      } else {
        escribiendo = true;
        i = (i + 1) % frases.length;
        setTimeout(escribir, speed);
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    escribir();
});
