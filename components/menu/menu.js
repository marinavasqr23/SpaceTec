import styles from './menu.css'
import Link from 'next/link'
import Image from 'next/image'
import Produtos from '../produtos/produtos'
export default function Menu (){
          return (
<nav>
    <div className="Menu">
        <div className="Logo">
            <Image src="/img/nave.jpg " width="65" height="65" alt="Space Tec"/>
           <h1>SPACE TEC</h1>
        </div>
        
        <div className="Itens-menu"> 
        <ul>
            
              <a>LOJA</a>
          
            
        </ul>
            
        </div>
    </div>   
</nav>            

)
}
//Adicionar o logo e mudar a fonte
//Talvez adicionar mais itens