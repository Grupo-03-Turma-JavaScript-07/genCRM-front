import type Servico from "./Servico"

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  servico?: Servico[] | null;
}