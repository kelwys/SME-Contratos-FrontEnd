import React, { Component } from "react";
import Page from "../../components/Global/Page";
import Container from "../../components/Global/Container";
import { TabView, TabPanel } from "primereact/tabview";
import { TableContrato } from "../../components/Contratos/TableContrato";
import {
  getContratos,
  getCamposContrato
} from "../../service/Contratos.service";
import "./style.scss";
import { BuscaContratosForm } from "../../components/Contratos/BuscaContratosForm";
import { SelecionaColunasContrato } from "../../components/Contratos/SelecionaColunasContrato";
import { getUsuario } from "../../service/auth.service";
import { getUrlParams } from "../../utils/params";
import { Button, ButtonGroup } from "reactstrap";
import { redirect } from "../../utils/redirect";
import CoadAccordion from "../../components/Global/CoadAccordion";

class ContratosContinuos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: null,
      contratos: [],
      colunas: [
        { field: "row_index", header: "#" },
        { field: "processo", header: "Processo" },
        { field: "tipo_servico.nome", header: "Tipode de Serviço" },
        { field: "empresa_contratada.nome", header: "Empresa" },
        { field: "estado_contrato", header: "Estado do Contrato" },
        { field: "data_encerramento", header: "Data Encerramento" }
      ],
      filtros: {
        gestor: getUsuario().user_id,
        empresa_contratada: "",
        encerramento_de: "",
        encerramento_ate: "",
        equipamento: "",
        estado_contrato: "",
        situacao: "",
        termo_Contrato: "",
        tipo_servico: ""
      }
    };
  }
  async setaColunasDefaut() {
    const colUsuario = await getCamposContrato();
    const colunasUsuario = colUsuario[0];
    if (colunasUsuario || colunasUsuario.length != 0) {
      this.setState({
        colunas: colunasUsuario.colunas_array,
        uuid: colunasUsuario.uuid
      });
    }
  }

  setaMeusContratos() {
    const { filtros } = this.state;
    getContratos(filtros).then(contratos => {
      this.setState({ contratos });
    });
  }

  onBuscarClick = filtros => {
    getContratos(filtros).then(contratos => {
      this.setState({ contratos, filtros });
    });
  };

  onAplicarClick = colunas => {
    this.setState({ colunas });
  };

  pegaParametrosUrl = () => {
    const params = getUrlParams();
    const key = Object.keys(params)[0];
    let filtros = this.state.filtros;
    switch (key) {
      case "equipamento":
        filtros.equipamento = params[key];
        break;
      case "tipo_servico":
        filtros.tipo_servico = params[key];
        break;
      default:
    }

    this.setState({ filtros });
  };

  componentDidMount() {
    this.pegaParametrosUrl();
    this.setaMeusContratos();
    this.setaColunasDefaut();
  }

  render() {
    const { contratos, colunas } = this.state;
    return (
      <Page titulo="Contratos Contínuos">
        <ButtonGroup className="mb-4">
          <Button
            onClick={() => redirect("#/painel-selecao")}
            className="btn-coad-background-outline"
            size="sm"
          >
            <i className="pi pi-table mx-4"></i>
          </Button>
          <Button className="btn-coad-background" size="sm" outline>
            <i className="pi pi-list mx-4"></i>
          </Button>
        </ButtonGroup>
        <Container icone="pi pi-chart-bar" subtitulo="Vizualizar Contratos">
          <CoadAccordion titulo="Personalizar filtro de busca">
            <TabView className="coad-tab-panel-contratos-continuos">
              <TabPanel header="Personalizar Filtros">
                <BuscaContratosForm
                  onBuscarClick={filtros => this.onBuscarClick(filtros)}
                />
              </TabPanel>
              <TabPanel header="Personalizar Colunas">
                <SelecionaColunasContrato
                  uuid={this.state.uuid}
                  onAplicarClick={this.onAplicarClick}
                />
              </TabPanel>
            </TabView>
          </CoadAccordion>

          <TableContrato contratos={contratos} colunas={this.state.colunas} />
        </Container>
      </Page>
    );
  }
}

export default ContratosContinuos;
