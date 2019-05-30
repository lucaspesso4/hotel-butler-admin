import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const ServicoQuartoAberto = Loadable({
  loader: () => import('./views/ServicoQuartoAberto/ServicoQuartoAberto'),
  loading: Loading,
});

const ServicoQuartoFechado = Loadable({
  loader: () => import('./views/ServicoQuartoFechado/ServicoQuartoFechado'),
  loading: Loading,
});

const ServicoCozinhaAberto = Loadable({
  loader: () => import('./views/ServicoCozinhaAberto/ServicoCozinhaAberto'),
  loading: Loading,
});

const ServicoCozinhaFechado = Loadable({
  loader: () => import('./views/ServicoCozinhaFechado/ServicoCozinhaFechado'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: DefaultLayout, exact: true },
  { path: '/servico-quarto-aberto', name: 'Serviços de Quarto Aberto', component: ServicoQuartoAberto },
  { path: '/servico-quarto-fechado', name: 'Serviços de Quarto Fechado', component: ServicoQuartoFechado },
  { path: '/servico-cozinha-aberto', name: 'Serviços de Cozinha Aberto', component: ServicoCozinhaAberto },
  { path: '/servico-cozinha-fechado', name: 'Serviços de Cozinha Fechado', component: ServicoCozinhaFechado },
];

export default routes;
