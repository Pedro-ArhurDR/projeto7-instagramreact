export default Stories

function PostStories(props){
    return(
      <div class="box">
      <img class={props.class} src={props.src} />
      <img
        class={props.class1}
        src={props.src1}
      />
      <div class={props.class2}><h1>{props.h1}</h1></div>
    </div>
    )
  }


const stories =[
    "imagens/stories1.png",
    "imagens/stories2.png",
    "imagens/stories3.png",
    "imagens/stories4.png",
    "imagens/stories5.png",
    "imagens/stories6.png",
    "imagens/stories7.png"
]

function Stories(){
    return(
        <div class="stories">
            {stories.map(stories => <PostStories src={stories}
            class={"stories_foto"}
            class1={"stories_background"} src1={"imagens/stories_background.jpg"}
            class2={"9gag"} h1={"9gag"} />)}
          <div class="box6">
            <img class="stories_foto" src="imagens/stories8.png" />
            <img
              class="stories_background"
              src="imagens/stories_background.jpg"
            />
            <div class="meme"><h1>meme</h1></div>
            <div class="seta">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
        </div>
    )
}