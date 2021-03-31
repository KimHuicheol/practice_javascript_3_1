function displayTodos(task) {                                                        //画面表示用関数定義
  const outDisp            = document.getElementById("out-disp");                     //タスク出力ノード取得
  const createRows         = outDisp.insertRow();                                     //新規テーブル行作成
  const createIdCells      = createRows.insertCell();                                 //新規セル作成-ID列
  const createCommentCells = createRows.insertCell();                                 //新規セル作成-コメント列
  const createStatusCells  = createRows.insertCell();                                 //新規セル作成-状態列

  const workBtn          = document.createElement('input');                           //初期画面表示ボタン作成-作業中
  workBtn.type           = "button";
  workBtn.style.margin   = "0 0.25em 0 0";                                            //ボタン間の間隔調整
  workBtn.value          = task[task.length - 1].status;                              //初期値代入

  const deleteBtn        = document.createElement('input');                           //初期画面表示ボタン作成-作業中
  deleteBtn.type         = "button";
  deleteBtn.style.margin = "0 0 0.25em 0";                                            //ボタン間の間隔調整
  deleteBtn.value        = "削除";                                                    //初期値代入

  createIdCells.innerHTML      =  task.length - 1;                                    //画面出力-ID列
  createCommentCells.innerHTML =  task[task.length - 1].task;                         //画面出力-コメント列
  createStatusCells.appendChild(workBtn);                                             //画面出力-状態列
  createStatusCells.appendChild(deleteBtn);                                           //画面出力-状態列

}
document.addEventListener("DOMContentLoaded", function() {
  let todos = [];                                                                     //タスクリスト管理用配列宣言
  document.getElementById("push-task").addEventListener("click", function() {         //以下追加ボタン押下時処理
  const getTask = document.getElementById("get-task");                                //タスク入力ノード取得
  let todo = {                                                                        //タスク取得様オブジェクト宣言
    task  :getTask.value,                                                              //タスク入力値取得
    status:"作業中"                                                                    //状態初期値取得
  }
  todos.push(todo);                                                                   //タスクリストへ追加
  displayTodos(todos);                                                                //画面表示用関数実行
  getTask.value = '';                                                                 //画面タスク入力値クリア
  }, false);
}, false);
