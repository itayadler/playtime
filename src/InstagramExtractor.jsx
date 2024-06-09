// import React, { Component } from "react";

// class InstagramExtractor extends Component {

//     componentDidMount(){
//       this.tester()
//     };
    
//     tester = () => {
//         const instagramURL = this.props.instagramURL;
//         const _ = e => document.querySelector(e);
//         const holder = _('.InstagramExtractor')

//         console.log("instagramURL : " , instagramURL)
//         // create video
//         const createVideo = data => {
//         let v = document.createElement('video');
//         // v.id = "instavideo";
//         v.src = data.content; 
//         v.controls = true;
//         v.autoplay = false;
        
//         // create info
//         // let info = document.createElement('p');
//         // info.textContent = "";

//         // holder.innerHTML = ""; 
//         // holder.appendChild(v);
//         // holder.appendChild(info);
//         };
//         // create image
//         const createImg = data => {
//         // create image
//         let i = document.createElement('img');
//         // i.id = "instaImg";
//         i.src = data.content;

//         // create info
//         let info = document.createElement('p');
//         info.textContent = "";

//         holder.innerHTML = ""; 
//         holder.appendChild(i);     
//         holder.appendChild(info);   
//         }

//         // extract html
//         const getMedia = (instagramURL) => {
//         holder.innerHTML = "<div class='image-placeholder'></div>";
//         // get input value
//         // let url = _('input').value;
//         // let url = "https://www.instagram.com/p/CB6DYljA7Na/?hl=en"
//         // let url = "https://www.instagram.com/p/BI2mJnlBIQ2"
//         let url = instagramURL;
//         if (url) {
//             fetch(url).
//             then(r => r.text()).
//             then(r => {
//             // render html
//             holder.innerHTML = r;
//             // wait, find meta and create video or image
//             let w = setTimeout(() => {
//                 let v = _('meta[property="og:video"]');
//                 if (v) {
//                 createVideo(v);
//                 } else {
//                 let img = _('meta[property="og:image"]');
//                 if (img) {
//                     createImg(img);
//                 } else {
//                     // document.body.innerHTML = body;
//                     console.log('Error extracting Instagram image / video.');
//                 };
//                 }
//                 clearTimeout(w);
//             }, 200);
//             });
//         } else {
//             // _('input').setAttribute('placeholder', 'Invalid address, use a proper Insagram link');

//         }
        
//       };
//       getMedia(instagramURL)
//     }

//     render() {    
//     return (     
//       <div>
//           <div className="InstagramExtractor"></div>
//       </div>
//     )
    
//   }
// }

// export default InstagramExtractor;

