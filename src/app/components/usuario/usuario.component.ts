import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/model/usuario';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService){
    this.usuarios = [];
  }

  getAll(){
    this.usuarioService.getAll().subscribe(
      (result:any)=>{
        for(let i = 0; i < result.length; i++){
          let usuario = result[i] as Usuario;
          this.usuarios.push(usuario);
        }
      },
      error=>{
        console.log(error);
      }
    )  
  }

  ngOnInit() {
      this.getAll();
  }

}
