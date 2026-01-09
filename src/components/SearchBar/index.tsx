import { useState } from 'react';
import './styles.css';

type Props = {
  onSearch: Function;
}

export default function SearchBar({onSearch}: Props) {

  const [text, setText] = useState("");

  function handleChange(event: any){
    setText(event.target.value);
  }

  function handleResetClick(){
    setText("");
    onSearch(text);
  }

  function handleSubmit(event: any){
    //Bloquear o carregamento da página
    event.preventDefault();
    //Desparar o evento
    onSearch(text);
  }

  return (
    <form className="dsc-search-bar" onSubmit={handleSubmit}>
      <button type="submit">🔎︎</button>
      <input
        value={text} 
        type="text" 
        placeholder="Nome do produto"
        onChange={handleChange}
      />
      <button onClick={handleResetClick}>❌</button>
    </form>
  );
}
