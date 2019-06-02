window.addEventListener('load', function() {
 
    console.log( 'create_attend_bord' );
    // echo 'Hello World';


    $('#mycalendar').monthly();
	

	// var add_repeat_switch = document.getElementById('add_repeat_switch');
	// add_item.addEventListener("click",create_item);
	// add_repeat_switch.addEventListener("click",create_repeat_switch);


})

// カレンダから日程を選び「日程」テキスト欄が追加されるイベント
function add_date(){
	// 日程、コメント、日程削除の列名が表示

	// 選んだ日付が表示
}

//「日程削除」ボタン押下のイベント
function delete_date_button(){

}

//「作成完了」ボタン押下のイベント
function finish_create_attend_bord_button(){
	// INSERT

	// UPDATE
}

//完了メッセージを表示するイベント
function transition_create_attend_bord(){

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