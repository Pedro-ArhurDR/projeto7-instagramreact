export default Barranav

function Post (props){
  return(
    <ion-icon name={props.name}></ion-icon>
  )
}

function Barranav(){
    return (
        <div class="barranav">
          <Post name="home"/>
          <Post name="search-outline"/>
          <Post name="add-circle-outlin"/>
          <Post name="heart-outline"/>
          <Post name="person-outline"/>
        </div>
    )
}