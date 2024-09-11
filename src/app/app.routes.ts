import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { VitrineComponent} from "./vitrine/vitrine.component";
import {LoginComponent} from "./login/login.component";
import {DetalheComponent} from "./detalhe/detalhe.component";
import {CarrinhoComponent} from "./carrinho/carrinho.component";
import {PesquisaComponent} from "./pesquisa/pesquisa.component";
import {EsqueciSenhaComponent} from "./esqueci-senha/esqueci-senha.component";

export const routes: Routes = [
  {path: "cadastro", component: CadastroComponent},
  {path: "vitrine", component: VitrineComponent},
  {path: "", component: VitrineComponent},
  {path: "login", component: LoginComponent},
  {path: "detalhe/:id", component: DetalheComponent},
  {path: "carrinho", component: CarrinhoComponent},
  {path: "pesquisa", component: PesquisaComponent},
  {path: "esqueciSenha", component: EsqueciSenhaComponent}
];
