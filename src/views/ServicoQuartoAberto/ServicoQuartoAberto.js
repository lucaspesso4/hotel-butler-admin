import React, { Component } from 'react';
import firestore_ref from './../../config/fb_conf';

class ServicoQuartoAberto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      servicosAbertos: []
    }
  }

  async populateState() {
    await this.getOrders().then(orders => {
      this.setState({
        servicosAbertos: orders
      })
    });
  }

  async componentWillMount() {
    await this.getOrders().then(orders => {
      this.setState({servicosAbertos: orders});
    })
  }

  async getOrders() {
    let db = firestore_ref.collection('/servicosDeQuarto');
    let orders = [];
    await db.where('atendimentoPendente', '==', true)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach((doc) => {
          let json = {
            id: doc.id,
            data: doc.data()
          }
          orders.push(json);
      });
    });
    console.log(orders);
    return orders;
  }

  changeStatus(index) {
    let docID = this.state.servicosAbertos[index].id;
    console.log(docID);
    const docRef = firestore_ref.collection('/servicosDeQuarto').doc(docID);
    return docRef.update({
      atendimentoPendente: false
    }).then(() => console.log("updated: ", docID))
      .catch((err) => console.error(err));
  }

  renderTableItens() {
    let orders = this.state.servicosAbertos;

    let elements = orders.map((order, index) => {
      return(
        <tr>
          <th scope="row">{order.data.numeroQuarto}</th>
          <td>{
            order.data.itensParaTroca.map((item) => {
              return <span> {item} -</span>
            })
          }</td>
          <td>
            <a href='#' onClick={() => this.changeStatus(index)}>Finalizar Serviço</a>
          </td>
        </tr>
      );
    });
    return elements;
  }

  renderTable() {
    return(
      <table className="table table-sm table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Quarto</th>
            <th scope="col">Pedido</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTableItens()}
          
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <h2 className="custom-title">Serviços de Quarto (Pendentes)</h2>
        {this.renderTable()}
      </div>
    );
  }
}

export default ServicoQuartoAberto;
