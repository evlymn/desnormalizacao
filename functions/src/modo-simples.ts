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
  })
};

function adicionarCamposDePesquisa(snapshot: functions.database.DataSnapshot) {
  const bandeira = snapshot.val().bandeira;
  const pais = snapshot.val().pais;
  const key = snapshot.key;
  const bandeiraPais = `${bandeira}_${pais}`.toLowerCase();
  const paisBandeira = `${pais}_${bandeira}`.toLowerCase();

  snapshot.ref
    .update({ id: key, bandeira_pais: bandeiraPais, pais_bandeira: paisBandeira, data_cadastro: Date.now().valueOf() })
    .catch(err => console.error(err));
}

function atualizarDadosCartao(snapshot: functions.Change<functions.database.DataSnapshot>) {
  const bandeiraBefore = snapshot.before.val().bandeira;
  const bandeiraAfter = snapshot.after.val().bandeira;
  const paisBefore = snapshot.before.val().pais;
  const paisAfter = snapshot.after.val().pais;
  const status = snapshot.after.val().status;

  if (status === 'atualizando') {
    const bandeiraPais = `${bandeiraAfter}_${paisAfter}`.toLowerCase();
    const paisBandeira = `${paisAfter}_${bandeiraAfter}`.toLowerCase();

    snapshot.after.ref
      .update({
        bandeira_pais: bandeiraPais,
        pais_bandeira: paisBandeira,
        status: 'atualizado',
        data_atualizacao: Date.now().valueOf()
      })
      .catch(err => console.error(err));
  }
}
