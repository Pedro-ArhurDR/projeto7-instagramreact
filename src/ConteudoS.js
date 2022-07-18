export default ConteudoS

function SideBar(props){
  return(
    <div class="perfilfy">
              <div class="txtft">
                <img class="fotosfy" src={props.src} />
                <div class="textosfy">
                  <h4>{props.h4}</h4>
                  <h5>{props.h5}</h5>
                </div>
              </div>
              <div class="seguir">
                <h6>
                  {props.h6}
                </h6>
              </div>
            </div>
  )
}

const sidebar=[
  {
    src:"imagens/sugest1.png",
    h4:"bad.vibes.memes",
    h5:"segue você",
    h6:"Seguir",
  },
  {
    src:"imagens/sugest2.png",
    h4:"chibirdart",
    h5:"segue você",
    h6:"Seguir"
  },
  {
    src:"imagens/sugest3.png",
    h4:"razoesparaacreditar",
    h5:"segue você",
    h6:"Seguir"
  },
  {
    src:"imagens/sugest4.png",
    h4:"dorable_animals",
    h5:"segue você",
    h6:"Seguir"
  },
  {
    src:"imagens/sugest5.png",
    h4:"smallcutecats",
    h5:"segue você",
    h6:"Seguir"
  }
]


function ConteudoS(){
    return(
        <div class="conteudoS">
        <div class="separador"></div>
        <div class="sidebar">
          <div class="sugestao1">
            <img class="fotosfeed" src="imagens/sugestao1.png" />
            <div class="perfilsugest">
              <strong>catanacomics</strong><br />
              <h5>Catana</h5>
            </div>
          </div>
          <div class="foryou">
            <div class="topofy">
              <h3 class="cinza">Sugestões para você</h3>
              <h3><strong>Ver tudo</strong></h3>
            </div>
            {sidebar.map(sidebar=><SideBar 
            src={sidebar.src}
            h4={sidebar.h4}
            h5={sidebar.h5}
            h6={sidebar.h6}/>)}
            <div class="termos1">
              <p class="termos1">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma
              </p>
            </div>
            <div class="termos2">
              <p class="termos1">© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
          </div>
        </div>
      </div>
    )
}