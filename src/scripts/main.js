import Swal from 'sweetalert2'
import $ from 'jquery'

function main() {
  const searchWord = $('#search-word');

  const baseUrl = 'https://new-kbbi-api.herokuapp.com/cari';

  const getWord = () => {
    fetch(`${baseUrl}/${searchWord.val()}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if(responseJson.error){
          showResponseMessage(responseJson.message);
        } else {
          renderWord(responseJson.data);
        }
        console.log(responseJson.data)
      })
      .catch(error => {
        showResponseMessage(error);
      });
  };

  const renderWord = (words) => {
    const wordElement = document.querySelector('.word-element');
    wordElement.innerHTML = '';

    words.forEach((word) => {
      wordElement.innerHTML += `
        <h2>(${word.lema})</h2>
        ${
          word.arti.map(el => `<h5> ${el.kelas_kata} \n ${el.deskripsi}</h5>`).join('')
        }
        <br>
      `;
    });
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    // alert(message);
    Swal.fire({text: 'Kata yang dimasukkan not found!'});
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#search-button').addEventListener('click', function () {
      getWord();
    })
  });
}

export default main;