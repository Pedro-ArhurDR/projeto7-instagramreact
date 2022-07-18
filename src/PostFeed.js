import React from "react";
function PostFeed(props){
    function like(){
      alert('texto')
    }
    return(
      <div class="feed">
            <div class="perfil">
              <div>
                <img class="fotosfeed" src={props.src} />
                <h2>{props.h2}</h2>
              </div>
              <div>
                <ion-icon name={props.ion}></ion-icon>
              </div>
            </div>
            <div class="foto">
              <img class="fotosfeed" src={props.src2} />
            </div>
            <div class="feedback">
              <div class="likes">
                <ion-icon name="heart-outline" 
                onClick={like}>
                </ion-icon>
                <ion-icon name={props.ion3}></ion-icon>
                <ion-icon name={props.ion4}></ion-icon>
              </div>
              <div class="curtidas">
                <img class="fotosfeed" src={props.src3} />
                <p>
                  Curtido por <strong>{props.text}</strong> e
                  <strong>outras 101.523 pessoas</strong>
                </p>
              </div>
            </div>
          </div>
  
    )
  }

export default PostFeed