function createToDo() {
  const getComment        = document.getElementById("getTask");  //タスク入力ノード取得
  const outDisp           = document.getElementById("outDisp");  //タスク出力ノード取得
  let   rowLength         = outDisp.rows.length;                 //テーブル行数取得
  const existRow          = 1;                                   //既存テーブル行数格納
  let   createRows        = outDisp.insertRow();                 //新規テーブル行作成
  let   createId          = createRows.insertCell();             //ID列新規セル作成
  let   createComment     = createRows.insertCell();             //コメント列新規セル作成
  let   createStatus      = createRows.insertCell();             //状態列新規セル作成
  createId.innerHTML      = rowLength - existRow;                //ID列出力
  createComment.innerHTML = getComment.value;                    //コメント列出力
  const statusButton      ='<input type="button" value="作業中"> <input type="button" value="削除">';  //状態列出力項目
  createStatus.innerHTML  = statusButton;                        //状態列出力
  getComment.value        = '';                                  //タスク入力値クリア
}
