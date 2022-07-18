import Stories from "./Stories"

function PostFeed(props){
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
              <ion-icon name={props.ion2}></ion-icon>
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

const feed = [
  {
        h2:"meowed",
        src:"imagens/stories2.png",
        ion:"ellipsis-horizontal-outline",
        src2:"imagens/feed 1.png",
        ion2:"heart-outline",
        ion3:"chatbubble-outline",
        ion4:"paper-plane-outline",
        src3:"imagens/respondeai.png",
        text:"respondeai",
  },
  {
        h2:"barked",
        src:"imagens/stories3.png",
        ion:"ellipsis-horizontal-outline",
        src2:"imagens/feed 2.png",
        ion2:"heart-outline",
        ion3:"chatbubble-outline",
        ion4:"paper-plane-outline",
        src3:"imagens/sugest4.png",
        text:"adorable_animals",
  }

]

 export default function ConteudoP(){
    return(
        <div class="conteudoP">
        <Stories/>
        {feed.map(feed => <PostFeed 
        src={feed.src} 
        h2={feed.h2}
        src2={feed.src2}
        src3={feed.src3}
        text={feed.text}/>
                 )} 
      </div>
    )
}