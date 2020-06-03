import Home from "../pages/Home";
import ListaContrato from "../pages/ListaContrato";
import painelSelecao from "../pages/PainelSelecao";
import ContratosContinuos from "../pages/ContratosContinuos";
import VisualizarContratos from "../pages/VisualizarContrato";
import DesignacaoCargos from "../pages/DesignacaoCargos";
import AtribuicaoTermoContrato from "../pages/AtribuicaoTermoContrato";
import CadastroCargosProfissoes from "../pages/Cadastro/CargosProfissoes";
import Teste from "../pages/Teste";
import CadastrarContrato from "../pages/CadastrarContrato";
import ModeloAteste from "../pages/ModeloAteste";
import ListarModelosAteste from "../pages/ListarModelosAteste";
import Edital from "../pages/Edital";
import ListarEditais from "../pages/ListarEditais";

const RoutesConfig = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/lista_contratos",
    component: ListaContrato,
    exact: false,
  },
  {
    path: "/painel-selecao",
    component: painelSelecao,
    exact: false,
  },
  {
    path: "/contratos-continuos",
    component: ContratosContinuos,
    exact: false,
  },
  {
    path: "/visualizar-contrato",
    component: VisualizarContratos,
    exact: false,
  },
  {
    path: "/designacao-cargos",
    component: DesignacaoCargos,
    exact: false,
  },
  {
    path: "/atribuicao-termo-contrato",
    component: AtribuicaoTermoContrato,
    exact: false,
  },
  {
    path: "/cadastro-unico-contrato",
    component: CadastrarContrato,
    exact: false,
  },
  {
    path: "/modelo-ateste",
    component: ModeloAteste,
    exact: false,
  },
  {
    path: "/listar-modelos-ateste",
    component: ListarModelosAteste,
    exact: false,
  },
  {
    path: "/edital",
    component: Edital,
    exact: false,
  },
  {
    path: "/listar-editais",
    component: ListarEditais,
    exact: false,
  },
  {
    path: "/cadastro/cargo-profissao",
    component: CadastroCargosProfissoes,
    exact: false,
  },
  {
    path: "/teste",
    component: Teste,
    exact: false,
  },
];

export default RoutesConfig;

export const MenuConfig = [
  {
    label: "Contratos",
    icon: "pi pi-list",
    items: [
      {
        label: "Consultar",
        icon: "pi pi-fw pi-th-large",
        to: "/painel-selecao",
      },
      {
        label: "Atribuição Termo Contratos",
        icon: "pi pi-cog pi-th-large",
        to: "/atribuicao-termo-contrato",
      },
    ],
  },
  {
    label: "Orçamento",
    icon: "pi pi-money-bill",
    command: () => {
      window.location = "#";
    },
  },
  {
    label: "Estoque / Patrimônio",
    icon: "pi pi-clone",
    command: () => {
      window.location = "#";
    },
  },
  {
    label: "Obras",
    icon: "pi pi-users",
    command: () => {
      window.location = "#";
    },
  },
  {
    label: "Relatórios",
    icon: "pi pi-chart-bar",
    command: () => {
      window.location = "#";
    },
  },
  {
    label: "Cadastros",
    icon: "pi pi-user-plus",
    items: [
      {
        label: "Cargo/Profissão",
        icon: "pi pi-cog pi-th-large",
        to: "/cadastro/cargo-profissao",
      },
    ],
  },
  {
    label: "Configurações",
    icon: "pi pi-cog",
    items: [
      {
        label: "Designação de Cargos",
        icon: "pi pi-cog pi-th-large",
        to: "/designacao-cargos",
      },
      {
        label: "Modelos de Ateste",
        icon: "pi pi-cog pi-th-large",
        to: "/listar-modelos-ateste",
      },
      {
        label: "Editais",
        icon: "pi pi-cog pi-th-large",
        to: "/listar-editais",
      },
    ],
  },
];
