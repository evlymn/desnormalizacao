import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);
const desnormalizacoesRef = admin.database().ref('desnormalizacoes');
const cartoesPath = '/cartoes/{cartaoID}';

export const cartoes = {
  onCreate: functions.database.ref(cartoesPath).onCreate((snapshot, context) => {
    adicionarCamposDePesquisa(snapshot);
    return true;
  }),
  onUpdate: functions.database.ref(cartoesPath).onUpdate((snapshot, context) => {
    atualizarDadosCartao(snapshot);
    return true;
  }),
  onDelete: functions.database.ref(cartoesPath).onDelete((snapshot, context) => {
    deletarDesnormalizacoes(snapshot).catch(err => console.error(err));
    return true;
  })
};

function adicionarCamposDePesquisa(snapshot: functions.database.DataSnapshot) {
  const bandeira = snapshot.val().bandeira;
  const pais = snapshot.val().pais;
  const key = snapshot.key;
  const bandeiraPais = `${bandeira}_${pais}`.toLowerCase();
  const paisBandeira = `${pais}_${bandeira}`.toLowerCase();

  snapshot.ref
    .update(
      { id: key, bandeira_pais: bandeiraPais, pais_bandeira: paisBandeira, data_cadastro: Date.now().valueOf() },
      () =>
        snapshot.ref
          .once('value', atualizado => {
            gravarDesnormalizacoes(atualizado);
          })
          .catch(err => console.error(err))
    )
    .catch(err => console.error(err));
}

function atualizarDadosCartao(snapshot: functions.Change<functions.database.DataSnapshot>) {
  const bandeiraBefore = snapshot.before.val().bandeira;
  const bandeiraAfter = snapshot.after.val().bandeira;
  const paisBefore = snapshot.before.val().pais;
  const paisAfter = snapshot.after.val().pais;
  const status = snapshot.after.val().status;

  if (status === 'atualizando') {
    if (bandeiraBefore !== bandeiraAfter || paisBefore !== paisAfter) {
      deletarDesnormalizacoes(snapshot.before).catch(err => console.error(err));
    }

    const bandeiraPais = `${bandeiraAfter}_${paisAfter}`.toLowerCase();
    const paisBandeira = `${paisAfter}_${bandeiraAfter}`.toLowerCase();

    snapshot.after.ref
      .update({
        bandeira_pais: bandeiraPais,
        pais_bandeira: paisBandeira,
        status: 'atualizado',
        data_atualizacao: Date.now().valueOf()
      })
      .then(() => {
        gravarDesnormalizacoes(snapshot.after);
      })
      .catch(err => console.error(err));
  }
}

function deletarDesnormalizacoes(snapshot: functions.database.DataSnapshot, context?: functions.EventContext) {
  const cartao = snapshot.val();
  const bandeira = cartao.bandeira;
  const pais = cartao.pais;
  const key = snapshot.key;
  const pathPaisBandeira = `pais_bandeiras/${pais}/${bandeira}/`.toLowerCase() + key;
  const pathBandeiraPais = `bandeira_paises/${bandeira}/${pais}/`.toLowerCase() + key;

  return Promise.all([
    desnormalizacoesRef.child(pathPaisBandeira).remove(),
    desnormalizacoesRef.child(pathBandeiraPais).remove()
  ]);
}

function gravarDesnormalizacoes(snapshot: admin.database.DataSnapshot) {
  const cartao: any = snapshot.val();
  const bandeira = cartao.bandeira;
  const pais = cartao.pais;
  const key = snapshot.key;
  const pathPaisBandeira = `pais_bandeiras/${pais}/${bandeira}/`.toLowerCase() + key;
  const pathBandeiraPais = `bandeira_paises/${bandeira}/${pais}/`.toLowerCase() + key;

  cartao.status = null;

  desnormalizacoesRef
    .child(pathPaisBandeira)
    .set(cartao)
    .catch(err => console.error(err));

  desnormalizacoesRef
    .child(pathBandeiraPais)
    .set(cartao)
    .catch(err => console.error(err));
}
