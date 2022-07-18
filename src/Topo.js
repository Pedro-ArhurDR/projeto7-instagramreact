 export default Topo
 
 function Post(props){
  return(
      <ion-icon class={props.class} name={props.name}></ion-icon>
  )
 }

 function Topo(){
    return (
        <div class="topo">
        <div class="iconestopo">
          <div class="iconesL">
            <Post name="logo-instagram"/>
            <div class="borda"></div>
            <img class="instagram" src="imagens/logo.png" />
          </div>
          <div class="iconesC">
            <div class="barraP">Pesquisar</div>
            <img class="instagram2" src="imagens/logo.png" />
          </div>
          <div class="iconesR">
            <Post name="paper-plane-outline"/>
            <Post class="compass" name="compass-outline"/>
            <Post class="heart" name="heart-outline"/>
            <Post class="person" name="person-outline"/>
          </div>
        </div>
      </div>
    )
}