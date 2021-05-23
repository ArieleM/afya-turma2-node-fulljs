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
    <div class="container">
      <div class="jokes">
        <div class="header">
          <h1>Chuck Norris ensinamento</h1>
          <hr />
          <p>${jokes.value}</p> 
        </div>
        <div class="formcontainer">
          <form id="form">
            <input type="text" placeholder="Name" id="name" />
            <input type="text" placeholder="Email" id="email" />
            <input type="text" placeholder="Phone" id="phone" />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
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
          document.querySelector('#name').value="";
          document.querySelector('#email').value="";
          document.querySelector('#phone').value="";
          
        }
      ).catch(e=> alert('Algum de errado não está certo'))

    })
  }
}

export default Home;