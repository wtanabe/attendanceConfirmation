window.addEventListener('load', function() {
 
    console.log( 'manage_attend_bord' );
    // echo 'Hello World';

    // 出欠ボード初期画面の場合
    	// 

    // カレンダ表示
		// 日付表示

    // 出欠ボード初期画面の場合(出欠者0名)
    	// 出欠変更ボタン非表示

    	// 出欠削除ボタン非表示

    	

	// 出欠ボード初期画面の場合(出欠者1名)
		// カレンダ表示
			// 参加者、出欠情報表示

	// 出欠記入ボタン押下時 addEventListener
	attend_button("1")

	// 出欠変更ボタン押下時 addEventListener
	attend_button("2")

	// 出欠削除ボタン押下時 addEventListener
	attend_button("3")

	// 出欠ボードを長押し時 addEventListener

	var add_repeat_switch = document.getElementById('add_repeat_switch');
	add_item.addEventListener("click",create_item);
	add_repeat_switch.addEventListener("click",create_repeat_switch);


})

//「出欠記入」ボタン・「出欠変更」ボタン・「出欠削除」ボタン押下のイベント
function attend_button(button_type){
	// 出欠記入ボタン非表示

	// 出欠変更ボタン非表示

    // 出欠削除ボタン非表示

    // メッセージボード表示

    // 「戻る」ボタン、「出欠確定」ボタン表示

    // 参加者、出欠情報表示

    // 出欠記入ボタン押下時
    	// メッセージボード内に「以下の表から出欠を記入します。」を表示

    	// 参加者、出欠情報欄表示

    	// 「出欠確定」ボタン押下

    // 出欠変更ボタン押下時
    	// メッセージボード内に「以下の表から出欠の内容を変更できます。」を表示

    	// 既存の出欠情報に出欠欄表示

    	// 「出欠確定」ボタン押下

    // 出欠削除ボタン押下時
		// メッセージボード内に「以下の表から任意の人が入力した日程すべてを削除できます。」を表示

		// 削除ボタン表示

    	// 「出欠確定」ボタン押下

    // 「戻る」ボタン押下
    

    

}

//「出欠ボード編集画面」に遷移するイベント
function transition_create_attend_bord(){

}

// 出欠記入・変更ボタン押下時
//「出欠確定」押下のイベント
function comfirm_attend_button(event_status){
	if(event_status == 1){
		// 出欠記入ボタン押下時

		// 出欠記入ボタン押下時のINSERT文

	}else if(event_status == 2){
		// 出欠変更ボタン押下時

		// 出欠変更ボタン押下時のINSERT文

	}else if(event_status == 3){
		// 出欠削除ボタン押下時
	}

	// 出欠ボードに遷移
}

// 戻るボタン押下のイベント
function return_button(){

}

// 出欠削除ボタン押下時
// 「削除」ボタン押下
function delete_participant_button(){

}

// 繰り返す対象の項目を生成
function create_item(){
		var item = document.getElementById('item');
		html_content = 
		'<div id="repeat_switch_top">' +
		'<input type="text" name="">' +
		'<input type="button" name="" id="add_repeat_switch" onchange="create_repeat_switch">' +
		'</div>' +
		'<div id="repeat_switch_bottom">' +
		'<input type="checkbox" name="" id="checkbox">' +
		'<input type="text" name="">' +
		'</div>';
		item.insertAdjacentHTML('beforeend',html_content);
}

// 繰り返しボタンを生成
function create_repeat_switch(){
		var repeat_switch = document.getElementById('repeat_switch');
		repeat_switch.insertAdjacentHTML('beforeend','<div class="repeat_switch_copy"><input type="checkbox" name="" id="checkbox"><input type="text" name=""></div>');
}