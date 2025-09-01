document.addEventListener('DOMContentLoaded', function() {
  // Add nav link to the conselho section
  const nav = document.querySelector('nav');
  if (nav) {
    const link = document.createElement('a');
    link.href = '#conselho';
    link.textContent = 'Conselho';
    nav.appendChild(link);
  }

  // Create section
  const footer = document.querySelector('footer');
  if (footer) {
    const section = document.createElement('section');
    section.id = 'conselho';
    section.className = 'conselho';
    section.innerHTML = `
      <div class="container">
        <h3>Pe\u00e7a um conselho espiritual</h3>
        <p>Escreva abaixo sua necessidade ou d\u00favida e receba uma orienta\u00e7\u00e3o de Maria Padilha:</p>
        <form id="conselho-form">
          <input type="text" id="input-conselho" placeholder="Descreva sua quest\u00e3o..." required />
          <button type="submit" class="btn destaque">Receber conselho</button>
        </form>
        <div id="conselho-result"></div>
      </div>
    `;
    footer.parentNode.insertBefore(section, footer);
    // event handler
    const form = document.getElementById('conselho-form');
    const input = document.getElementById('input-conselho');
    const result = document.getElementById('conselho-result');
    const cartas = [
      { titulo: 'Pomba Gira', texto: 'É tempo de assumir seu poder e confiar na sua intui\u00e7\u00e3o. Sua for\u00e7a interior guiar\u00e1 seu caminho.' },
      { titulo: 'Caminhos', texto: 'Os caminhos se abrem com verdade. Acredite em si e siga em frente.' },
      { titulo: 'Espelho', texto: 'Olhe-se com amor. Sua beleza est\u00e1 na sua autenticidade. Seja fiel a quem voc\u00ea \u00e9.' },
      { titulo: 'Guardi\u00e3', texto: 'Proteja-se com rituais de f\u00e9. Maria Padilha est\u00e1 com voc\u00ea, inspirando coragem e clareza.' },
      { titulo: 'Transforma\u00e7\u00e3o', texto: 'Deixe o passado e prepare-se para a renova\u00e7\u00e3o. Seu futuro est\u00e1 nas suas m\u00e3os.' }
    ];
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const question = input.value.trim();
      if (!question) return;
      const carta = cartas[Math.floor(Math.random() * cartas.length)];
      result.innerHTML = '<h4>' + carta.titulo + '</h4><p>' + carta.texto + '</p>';
      input.value = '';
    });
  }
});
