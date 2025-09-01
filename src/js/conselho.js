document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('conselho-form');
  const input = document.getElementById('input-conselho');
  const result = document.getElementById('conselho-result');

  const cartas = [
    { titulo: 'Pomba Gira', texto: '\u00c9 tempo de assumir seu poder e confiar na sua intui\u00e7\u00e3o.' },
    { titulo: 'Caminhos', texto: 'Os caminhos se abrem quando voc\u00ea confia na sua for\u00e7a interna. Tenha coragem para tomar decis\u00f5es.' },
    { titulo: 'Espelho', texto: 'Olhe-se com carinho e reconhe\u00e7a sua beleza interior. Somente assim atrair\u00e1 o que merece.' },
    { titulo: 'Guardi\u00e3o', texto: 'Proteja-se com rituais de limpeza e agrade\u00e7a aos guias que te acompanham. A prote\u00e7\u00e3o sempre est\u00e1 contigo.' },
    { titulo: 'Transforma\u00e7\u00e3o', texto: 'Deixe o passado para tr\u00e1s e prepare-se para a renova\u00e7\u00e3o. Seu futuro est\u00e1 nas suas m\u00e3os.' }
  ];

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const needs = input.value.trim();
    if (!needs) return;
    const carta = cartas[Math.floor(Math.random() * cartas.length)];
    result.innerHTML = '<h4>' + carta.titulo + '</h4><p>' + carta.texto + '</p>';
    input.value = '';
  });
});
