import { api, postForm } from '../../../service/api';

async function getRandomJoke(){
  const response = await api.get('random');
  return response.data;
}

getRandomJoke();

let Home = {
  is_private: false,

  render: async () => {
    const jokes = await getRandomJoke();
    let view = /*html*/`
        <div>
          <h1>Primeira página</h1>
          <img src=${jokes.icon_url} alt="Image" />
          ${jokes.value}
        </div>
        <hr />
        <div class="formcontainer">
          <form id="form">
            <input type="text" placeholder="name" id="name" />
            <input type="text" placeholder="email" id="email" />
            <input type="text" placeholder="phone" id="phone" />
            <input type="submit" value="Enviar" />
          </form>
        </div>
    `;

    return view
  },

  after_render: async () => {
    let formContent = document.getElementById('form');

    formContent.addEventListener('submit', (e) => {
      e.preventDefault();

      let name = document.querySelector('#name').value,
      email = document.querySelector('#email').value,
      phone = document.querySelector('#phone').value;

      let postData = {
        name, email, phone
      }

      postForm.post('', postData).then(
        response => {
          alert('Tudo certo!')
        }
      ).catch(e=> alert('Algum de errado não está certo'))

    })
  }
}

export default Home;