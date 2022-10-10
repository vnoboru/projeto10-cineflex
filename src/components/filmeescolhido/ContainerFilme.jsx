import FooterFilme from "../FooterFilme";
import Imagem from "../Imagem";

export default function ContainerFilme({ posterURL, title }) {
  return (
    <FooterFilme>
      <Imagem data-identifier="movie-img-preview">
        <img src={posterURL} alt={title}/>
      </Imagem>
      <h1 data-identifier="movie-and-session-infos-preview">{title}</h1>
    </FooterFilme>
  );
}
