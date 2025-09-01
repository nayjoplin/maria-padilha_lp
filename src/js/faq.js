document.addEventListener('DOMContentLoaded', function() {
  // FAQ toggle
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('active');
    });
  });

  // Spiritual advice section creation
  const footer = document.querySelector('footer');
  if (footer) {
    const section = document.createElement('section');
    section.id = 'conselho';
    section.className = 'conselho';
    section.innerHTML = `
      <div class="container">
        <h3>Peça um conselho espiritual</h3>
        <p>Escreva abaixo sua necessidade ou dúvida e receba uma orientação de Maria Padilha:</p>
        <form id="conselho-form">
          <input type="text" id="input-conselho" placeholder="Digite sua questão..." required />
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
      { titulo: 'Pomba Gira', texto: 'É tempo de assumir seu poder e confiar na sua intuição. Sua força interior guiará seu caminho.' },
      { titulo: 'Caminhos', texto: 'Os caminhos se abrem quando se busca a verdade. Acredite em si e siga em frente.' },
      { titulo: 'Espelho', texto: 'Olhe-se com amor. Sua beleza está na autenticidade. Seja fiel a quem você é.' },
      { titulo: 'Guardiã', texto: 'Proteja-se com rituais de fé. Sua guarda está com você, inspirando coragem e clareza.' },
      { titulo: 'Transformação', texto: 'Deixe o passado para trás e prepare-se para a renovação. Seu futuro está nas suas mãos.' }
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
