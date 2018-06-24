"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const desnormalizacoesRef = admin.database().ref('desnormalizacoes');
const cartoesPath = '/cartoes/{uid}/{cartaoID}';
exports.cartoes = {
    onCreate: functions.database.ref(cartoesPath).onCreate((snapshot, context) => {
        adicionarCamposDePesquisa(snapshot, context);
        return true;
    }),
    onUpdate: functions.database.ref(cartoesPath).onUpdate((snapshot, context) => {
        atualizarDadosCartao(snapshot, context);
        return true;
    }),
    onDelete: functions.database.ref(cartoesPath).onDelete((snapshot, context) => {
        deletarDesnormalizacoes(snapshot, context).catch(err => console.error(err));
        return true;
    })
};
function adicionarCamposDePesquisa(snapshot, context) {
    const bandeira = snapshot.val().bandeira;
    const pais = snapshot.val().pais;
    const key = snapshot.key;
    const bandeiraPais = `${bandeira}_${pais}`.toLowerCase();
    const paisBandeira = `${pais}_${bandeira}`.toLowerCase();
    snapshot.ref
        .update({ id: key, bandeira_pais: bandeiraPais, pais_bandeira: paisBandeira, data_cadastro: Date.now().valueOf() }, () => snapshot.ref
        .once('value', atualizado => {
        gravarDesnormalizacoes(atualizado, context.auth.uid);
    })
        .catch(err => console.error(err)))
        .catch(err => console.error(err));
}
function atualizarDadosCartao(snapshot, context) {
    const bandeiraBefore = snapshot.before.val().bandeira;
    const bandeiraAfter = snapshot.after.val().bandeira;
    const paisBefore = snapshot.before.val().pais;
    const paisAfter = snapshot.after.val().pais;
    const status = snapshot.after.val().status;
    if (status === 'atualizando') {
        if (bandeiraBefore !== bandeiraAfter || paisBefore !== paisAfter) {
            deletarDesnormalizacoes(snapshot.before, context).catch(err => console.error(err));
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
            gravarDesnormalizacoes(snapshot.after, context.auth.uid);
        })
            .catch(err => console.error(err));
    }
}
function deletarDesnormalizacoes(snapshot, context) {
    const uid = context.auth.uid;
    const cartao = snapshot.val();
    const bandeira = cartao.bandeira;
    const pais = cartao.pais;
    const key = snapshot.key;
    const pathPaisBandeira = `pais_bandeiras/${pais}/${bandeira}/`.toLowerCase() + key;
    const pathBandeiraPais = `bandeira_paises/${bandeira}/${pais}/`.toLowerCase() + key;
    return Promise.all([
        desnormalizacoesRef.child(uid).child(pathPaisBandeira).remove(),
        desnormalizacoesRef.child(uid).child(pathBandeiraPais).remove()
    ]);
}
function gravarDesnormalizacoes(snapshot, uid) {
    const cartao = snapshot.val();
    const bandeira = cartao.bandeira;
    const pais = cartao.pais;
    const key = snapshot.key;
    const pathPaisBandeira = `pais_bandeiras/${pais}/${bandeira}/`.toLowerCase() + key;
    const pathBandeiraPais = `bandeira_paises/${bandeira}/${pais}/`.toLowerCase() + key;
    cartao.status = null;
    desnormalizacoesRef.child(uid)
        .child(pathPaisBandeira)
        .set(cartao)
        .catch(err => console.error(err));
    desnormalizacoesRef.child(uid)
        .child(pathBandeiraPais)
        .set(cartao)
        .catch(err => console.error(err));
}
//# sourceMappingURL=modo-seguro.js.map