// //Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = `https://api.nasa.gov/planetary/apod?api_key=sr2lFuNlKDeFA3ttfzLRKpUXKdpi1ShKR9cIxmsT&date=${choice}`
 
//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector('img').src = data.hdurl;
//         document.querySelector('h3').textContent = data.explanation;


//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


// document.querySelector('button').addEventListener('click', getFetch);

// function getFetch(){
//   const choice = document.querySelector('input').value;
//   const url = `https://api.nasa.gov/planetary/apod?api_key=sr2lFuNlKDeFA3ttfzLRKpUXKdpi1ShKR9cIxmsT&date=${choice}`

//   fetch(url)
//             .then(res => res.json())
//             .then(data => {
//               console.log(data);
//               if(data.media_type === 'image'){
//                 document.querySelector('img').src = data.hdurl;
//                 document.querySelector('iframe').style.display = 'none';
//                 document.querySelector('img').style.display = 'block';

//               } else if(data.media_type === 'video'){
//                 document.querySelector('iframe').src = data.url;
//                 document.querySelector('img').style.display = 'none';
//                 document.querySelector('iframe').style.display = 'block';


//               }
//               document.querySelector('h3').textContent = data.explanation;
//             })
//             .catch(err => 
//               console.log(`error ${err}`))
// };







