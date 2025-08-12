import type Servico from './Servico'

export default interface Categoria{
  id: number;
  nome: string;
  servico?: Servico[] | null;
}