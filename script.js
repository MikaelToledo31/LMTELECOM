/*const preçosBrodowski = {
    '0': 'R$ 49,90',
    '1': 'R$ 64,99',
    '2': 'R$ 79,90',
    '3': 'R$ 89,90',
    '4': 'R$ 99,90',
    '5': 'R$ 109,90',
  };

const preçosRibeirao = {
    '0': 'R$ 49,90',
    '1': 'R$ 59,90',
    '2': 'R$ 69,90',
    '3': 'R$ 79,90',
    '4': 'R$ 189,90',
    '5': 'R$ 199,90',
  };

const preçosSerrana = {
    '0': 'R$ 50,90',
    '1': 'R$ 60,90',
    '2': 'R$ 70,90',
    '3': 'R$ 80,90',
    '4': 'R$ 90,90',
    '5': 'R$ 100,90',
  };

const preçosPedregulho = {
    '0': 'R$ xx,xx',
    '1': 'R$ xx,xx',
    '2': 'R$ xx,xx',
    '3': 'R$ xxx,xx',
    '4': 'R$ xxx,xx',
    '5': 'R$ xxx,xx',
  };

  const select = document.querySelector('select');
  const cards = document.querySelectorAll('.card');
  
  select.addEventListener('change', () => {
    const valor = select.value;

    switch (valor) {
        case valor == 0:
            cards.forEach((card) => {
                const cardId = card.getAttribute('data-id');
                const preco = card.querySelector('h2');
                preco.textContent = preçosBrodowski[cardId];
            });
          break;
        case valor == 1:
            cards.forEach((card) => {
                const cardId = card.getAttribute('data-id');
                const preco = card.querySelector('h2');
                preco.textContent = preçosRibeirao[cardId];
            });
          break;
        case valor == 2:
            cards.forEach((card) => {
                const cardId = card.getAttribute('data-id');
                const preco = card.querySelector('h2');
                preco.textContent = preçosSerrana[cardId];
            });
          break;
        case valor == 3:
            cards.forEach((card) => {
                const cardId = card.getAttribute('data-id');
                const preco = card.querySelector('h2');
                preco.textContent = preçosPedregulho[cardId];
            });
          break;
        default:
          preco.textContent = 'Opção Inválida';
      }

    
  });*/


  document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('select');
    const cards = document.querySelectorAll('.card');
    const preços = {
      '0': {
        '0': 'R$ 49,90',
        '1': 'R$ 64,90',
        '2': 'R$ 79,90',
        '3': 'R$ 89,90',
        '4': 'R$ 99,90',
        '5': 'R$ 109,90',
      },
      '1': {
        '0': 'R$ 59,90',
        '1': 'R$ 74,90',
        '2': 'R$ 89,90',
        '3': 'R$ 99,90',
        '4': 'R$ 109,90',
        '5': 'R$ 119,90',
      },
      '2': {
        '0': 'R$ 69,90',
        '1': 'R$ 84,90',
        '2': 'R$ 99,90',
        '3': 'R$ 109,90',
        '4': 'R$ 119,90',
        '5': 'R$ 129,90',
      },
      '3': {
        '0': 'R$ 79,90',
        '1': 'R$ 94,90',
        '2': 'R$ 109,90',
        '3': 'R$ 119,90',
        '4': 'R$ 129,90',
        '5': 'R$ 139,90',
      },
    };

    const megas = {
        '0': {
          '0': '30 MEGA',
          '1': '50 MEGA',
          '2': '100 MEGA',
          '3': '200 MEGA',
          '4': '300 MEGA',
          '5': '400 MEGA',
        },
        '1': {
          '0': '50 MEGA',
          '1': '100 MEGA',
          '2': '200 MEGA',
          '3': '300 MEGA',
          '4': '400 MEGA',
          '5': '500 MEGA',
        },
        '2': {
          '0': '10 MEGA',
          '1': '20 MEGA',
          '2': '30 MEGA',
          '3': '40 MEGA',
          '4': '50 MEGA',
          '5': '60 MEGA',
        },
        '3': {
          '0': '200 MEGA',
          '1': '300 MEGA',
          '2': '400 MEGA',
          '3': '500 MEGA',
          '4': '600 MEGA',
          '5': '700 MEGA',
        },
      };
  
    select.addEventListener('change', () => {
      const valor = select.value;
      cards.forEach((card) => {
        const cardId = card.getAttribute('data-id');
        const preco = card.querySelector('h2');
        const mega = card.querySelector('h1');
        preco.textContent = preços[valor][cardId];
        mega.textContent = megas[valor][cardId];
      });
    });
  });