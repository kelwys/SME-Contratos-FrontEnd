import React, { useState, useEffect, Fragment, useMemo } from "react";
import { Row, Col, Label, Input, FormGroup } from "reactstrap";
import CurrencyInput from "react-currency-input";

const DotacaoOrcamentaria = props => {
  const [dotacao, setDotacao] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    setDotacao(props.dotacao);
    setTotal(props.totalMensal);
  }, [props.dotacao, props.totalMensal]);

  const alteraInput = (value, index) => {
    dotacao[index] = value;
    setDotacao([...dotacao]);
    props.getDotacao(dotacao);
  };

  const sizeDotacao = useMemo(() => dotacao.length, [dotacao]);

  const addNovoInput = () => {
    dotacao.push("");
    setDotacao([...dotacao]);
    props.getDotacao(dotacao);
  };

  const removeDotacao = () => {
    dotacao.pop();
    setDotacao([...dotacao]);
    props.getDotacao(dotacao);
  };

  const handleTotalMensal = (value, floatValue) => {
    setTotal(floatValue);
    props.setTotalMensal(floatValue);
  };

  return (
    <Fragment>
      <strong className="mb-3">Informações Orçamentárias de Contrato</strong>
      <Row>
        <Col lg={8} xl={8}>
          <Label>Dotação Orçamentaria</Label>
          {dotacao.length ? (
            dotacao.map((value, i) => (
              <FormGroup key={i} >
                <Input
                  className="mb-2"
                  value={value}
                  key={i}
                  disabled={props.disableded}
                  onChange={e => alteraInput(e.target.value, i)}
                />
              </FormGroup>
            ))
          ) : (
            <FormGroup key={0}>
              <Input
                className="mb-2"
                value=""
                onChange={e => alteraInput(e.target.value, 1)}
                disabled={props.disableded}
              />
            </FormGroup>
          )}

          <button
            type="button"
            className="btn btn-link coad-color font-weight-bold"
            onClick={addNovoInput}
            disabled={dotacao.length === 0 || props.disableded ? true : false}
          >
            Adicionar Dotação
          </button>
          <button
            type="button"
            className="btn btn-link coad-color font-weight-bold"
            disabled={sizeDotacao > 1 ? false : true}
            onClick={removeDotacao}
          >
            Remover Dotação
          </button>
        </Col>
        <Col lg={4} xl={4}>
          <Label>Valor mensal do Contrato</Label>
          <CurrencyInput
            disabled={true}
            decimalSeparator=","
            thousandSeparator="."
            prefix="R$ "
            className="form-control"
            onChange={handleTotalMensal}
            value={total}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={8} xl={8}></Col>
        <Col lg={4} xl={4}></Col>
      </Row>
    </Fragment>
  );
};

export default DotacaoOrcamentaria;
