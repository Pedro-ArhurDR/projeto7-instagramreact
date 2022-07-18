import Stories from "./Stories"
import PostFeed from "./PostFeed"

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





 function ConteudoP(){
    return(
        <div class="conteudoP">
        <Stories/>
        {feed.map(feed => <PostFeed 
        src={feed.src} 
        h2={feed.h2}
        src2={feed.src2}
        src3={feed.src3}
        text={feed.text}
        ion={feed.ion}
        ion2={feed.ion2}
        ion3={feed.ion3}
        ion4={feed.ion4}/>
                 )} 
      </div>
    )
}

export default ConteudoP