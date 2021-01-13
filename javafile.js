//다크모드 함수
function DarkMode(self) {
  var target = document.querySelector('body')
  if(self.value === 'Dark') {
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'White';
  } else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'Dark';
  }
}
//원자량 리스트
function atomw() {
    var atom = {
    'H':1.008,
    'He':4.002602,
    'Li':6.94,
    'Be':9.0121831,
    'B':10.81,
  }
     document.write(atom.H)
  }
//js파일과 링크 확인용
function msg(){
 alert("Javascript link is successfully connected");
}
//분자량으로 그램수 계산
function MtoG() {
  var mol_con = document.getElementById("select_mol").value;
  var mol_vol = document.getElementById("select_vol").value;
  var mtog_v = document.getElementById("mtog_value").value;
  var mtog_l = document.getElementById("mtog_liquid").value;
  var mtog_c = document.getElementById("mtog_concentration").value;
  var mtog_r = document.getElementById("mtog_result");
  var mtog_formula = (mtog_v*mtog_l*mtog_c)/(mol_con*mol_vol);
  if(mtog_formula <0.001) {
  mtog_r.textContent = "Volume of cell stock : " + mtog_formula*1000000 + "ng";
 } else if(mtog_formula <1)  {
  mtog_r.textContent = "Volume of cell stock : " + mtog_formula*1000 + "µg";
} else if(mtog_formula >=1000) {
  mtog_r.textContent = "Volume of cell stock : " + mtog_formula/1000 + "kg";
}else {
  mtog_r.textContent = "Volume of cell stock : " + mtog_formula + "g";
}
  }
//스탁 희석
function StoS() {
  var stos_select_stock = document.getElementById("stos_select_mol_stock").value;
  var stos_select_sol = document.getElementById("stos_select_mol_sol").value;
  var stos_select_vol = document.getElementById("stos_select_sov").value;
  var stos_st = document.getElementById("stos_stock").value;
  var stos_so = document.getElementById("stos_solution").value;
  var stos_sov = document.getElementById("stos_solvent").value;
  var stos_r = document.getElementById("stos_result");
  var stos_r2 = document.getElementById("stos_result2");
  var stos_formula = (stos_so/stos_select_sol)*(stos_sov/stos_select_vol)/(stos_st/stos_select_stock);
  if(stos_formula <0.001){
    stos_r.textContent = "Volume of stock :\n" + stos_formula*1000000  + "µL";
    stos_r2.textContent = "Volume of solvent :\n" + ((stos_sov/stos_select_vol)-stos_formula)*1000000 + "µL";
  } else if(stos_formula <1){
    stos_r.textContent = "Volume of stock :\n" + stos_formula*1000  + "ml";
    stos_r2.textContent = "Volume of solvent :\n" + ((stos_sov/stos_select_vol)-stos_formula)*1000 + "ml";
  } else {
    stos_r.textContent = "Volume of stock :\n" + stos_formula  + "L";
    stos_r2.textContent = "Volume of solvent :\n" + ((stos_sov/stos_select_vol)-stos_formula) + "L";
  }}

// Seeding 함수//
function seeding() {
  var seeding_c = document.getElementById("seeding_cell").value;
  var seeding_d = document.getElementById("seeding_density").value;
  var seeding_select_dish = document.getElementById("select_dish").value;
  var seeding_select_w = document.getElementById("select_well").value;
  var seeding_select_f = document.getElementById("select_flask").value;
  var seeding_r = document.getElementById("seeding_result");
  var seeding_formula = ((seeding_d*seeding_select_w*seeding_select_dish*seeding_select_f)/seeding_c);
   if(seeding_select_dish !== "1" && seeding_select_w !== "1") {
     alert("Please select one culture dish type \n(error code:1)")
   } else if(seeding_select_dish !== "1" && seeding_select_f !== "1") {
     alert("Please select one culture dish type \n(error code:2)")
   } else if(seeding_select_w !== "1" && seeding_select_f !== "1") {
     alert("Please select one culture dish type \n(error code:3)")
   } else {
     if(seeding_formula <0.001) {
     seeding_result.textContent = "Volume of cell stock : " + seeding_formula*1000000 + "µl";
    } else if(seeding_formula <1)  {
     seeding_result.textContent = "Volume of cell stock : " + seeding_formula*1000 + "ml";
    } else {
    seeding_result.textContent = "Volume of cell stock : " + seeding_formula + "L";
  }
}}

//cell stock 함수//
function stock() {
  var stock_c = document.getElementById("stock_cells").value;
  var stock_v = document.getElementById("stock_volume").value;
  var stock_dc = document.getElementById("stock_dcells").value;
  var stock_formula = (stock_c*stock_v)/stock_dc;
  stock_result.textContent = "Volume of medium : \n" + stock_formula + "mL";
}

function count() {
  var count_a = document.getElementById("count_square1").value;
  var count_b = document.getElementById("count_square2").value;
  var count_c = document.getElementById("count_square3").value;
  var count_d = document.getElementById("count_square4").value;
  var count_di = document.getElementById("count_dilution").value;
  var count_formula = ((parseInt(count_a) + parseInt(count_b) + parseInt(count_c) + parseInt(count_d))/4)*count_di*10000;
  if (count_formula>=10000) {
    count_result.textContent = "Number of Cells : \n" + (count_formula/10000) + "x10⁴ cells/mL";
   } else {
    count_result.textContent = "Number of Cells : \n" + count_formula + "cells/mL";
  }
}

//Tm value 함수 //

function dna() {
  var dna_i = document.getElementById("dna_input").value;
  var dna_l = document.getElementById("dna_length").value;
  var number_a = dna_i.match(/A/gi);
  var number_t = dna_i.match(/T/gi);
  var number_g = dna_i.match(/G/gi);
  var number_c = dna_i.match(/C/gi);
  if (number_a === null) {
    var n_a = 0;
  }else{
    n_a = number_a.length;
  }
  if (number_t === null) {
    var n_t = 0;
  }else{
    n_t = number_t.length;
  }
  if (number_g === null) {
    var n_g = 0;
  }else{
    n_g = number_g.length;
  }
  if (number_c === null) {
    var n_c = 0;
  }else{
    n_c = number_c.length;
  }
  if (dna_l>=14) {
    dna_result_tm.textContent = "Tm value : \n" + parseFloat((64.9 + 41*(((parseInt(n_g)+parseInt(n_c))-16.4)/parseInt(dna_l))).toFixed(3)) + "°C";
  } else {
    dna_result_tm.textContent = "Tm value : \n" + ((parseInt(n_a)+parseInt(n_t))*2 + ((parseInt(n_g)+parseInt(n_c))*4)) + "°C";
          }
dna_result_gc.textContent = "GC content : \n" + parseFloat((((parseInt(n_g)+parseInt(n_c))/(parseInt(n_a)+parseInt(n_t)+parseInt(n_g)+parseInt(n_c)))*100).toFixed(3)) + "%";
}

//timer 1 함수 //

function twolength(n) {
  return (n < 10 ? '0' : '') + n;
}

function stopwatch_1() {
  if (document.getElementById("button_timer1").innerText == "Start") {
     time_set1();
     document.getElementById("button_timer1").innerText = "Stop";
  } else if (document.getElementById("button_timer1").innerText == "Stop") {
    document.getElementById("button_timer1").innerText = "Restart";
    time_set1();
  } else if (document.getElementById("button_timer1").innerText == "Restart") {
    document.getElementById("button_timer1").innerText = "Stop.";
    time_set1s();
  } else if (document.getElementById("button_timer1").innerText == "Stop.") {
    document.getElementById("button_timer1").innerText ="Restart.";
    time_set1s();
  } else {
    document.getElementById("button_timer1").innerText = "Stop.";
    time_set1s();
  }
}

function time_set1s() {
  var settime_1s = setInterval(timer1s,1000);
  var time_1s = hidden_1.textContent;
function timer1s() {
  if (time_1s < 1) {
    clearInterval(settime_1s);
    window.open("timer1.html","Timer 1 is finished","width=500 , height=300");
    timer1_result2();
    document.getElementById("button_timer1").innerText = "Start";
  } else if (document.getElementById("button_timer1").innerText == "Restart.") {
    clearInterval(settime_1s);
  } else {
  time_1s = time_1s -1;
  var rh_t1s = Math.floor(parseInt(time_1s)/3600);
  var rm_t1s = Math.floor((parseInt(time_1s) % 3600)/60);
  var rs_t1s = Math.floor((parseInt(time_1s) % 3600)%60);
  result_timer1.textContent = twolength(rh_t1s) + ":" + twolength(rm_t1s) + ":" + twolength(rs_t1s);
  hidden_1.textContent = (rh_t1s*3600 + rm_t1s*60 + rs_t1s*1);
}}}


function time_set1() {
  var settime_1 = setInterval(timer1,1000);
  var h_t1 = document.getElementById("timer1_h").value;
  var m_t1 = document.getElementById("timer1_m").value;
  var s_t1 = document.getElementById("timer1_s").value;
  if (h_t1 === "") {
    var h_value1 = 0;
  } else {
    h_value1 = h_t1*3600;
  }
  if (m_t1 === "") {
    var m_value1 = 0;
  } else {
    m_value1 = m_t1*60;
  }
  if (s_t1 === "") {
    var s_value1 = 0;
  } else {
    s_value1 = s_t1;
  }

  var time_1 = (parseInt(h_value1) + parseInt(m_value1) + parseInt(s_value1));


function timer1() {
  if (time_1 < 1) {
    clearInterval(settime_1);
    alert('Timer is finished\nIt stopped at\n' + new Date());
    document.getElementById("button_timer1").innerText = "Start";
  } else if (document.getElementById("button_timer1").innerText == "Restart") {
    clearInterval(settime_1);
  } else {
    time_1 = time_1 - 1;
    var rh_t1 = Math.floor(parseInt(time_1)/3600);
    var rm_t1 = Math.floor((parseInt(time_1) % 3600)/60);
    var rs_t1 = Math.floor((parseInt(time_1) % 3600)%60);
    result_timer1.textContent = twolength(rh_t1) + ":" + twolength(rm_t1) + ":" + twolength(rs_t1);
    hidden_1.textContent = (rh_t1*3600 + rm_t1*60 + rs_t1*1);
  }}

}


function timer1_reset() {
  var inner_1 = document.getElementById("button_timer1");
  if (inner_1.innerText == "Stop." || inner_1.innerText == "Stop") {
    alert("Stop the Timer 1 first.");
  } else {
  document.getElementById("button_timer1").innerText = "Start";
  hidden_1.textContent = "";
  result_timer1.textContent = "";
  document.getElementById("timer1_h").value = "";
  document.getElementById("timer1_m").value = "";
  document.getElementById("timer1_s").value = "";

}}


//제이쿼리 DNA
  $(document).ready(function () {
    $("#dna_input").keyup(function() {
        $(this).val($(this).val().toUpperCase().replace(/[^ACGT \r\s&%'(]/g, ""))
        $("#dna_length").val((($(this).val()).replace(/(\s*)/g, "").length));
      })
    })



//코드의 무덤



/* 구버전 timer 2 함수
function time_set2() {
  var settime_2 = setInterval(timer2,1000);
  var h_t2 = document.getElementById("timer2_h").value;
  var m_t2 = document.getElementById("timer2_m").value;
  var s_t2 = document.getElementById("timer2_s").value;
  if (h_t2 === "") {
    var h_value2 = 0;
  } else {
    h_value2 = h_t2*3600;
  }
  if (m_t2 === "") {
    var m_value2 = 0;
  } else {
    m_value2 = m_t2*60;
  }
  if (s_t2 === "") {
    var s_value2 = 0;
  } else {
    s_value2 = s_t2;
  }
  var time_2 = (parseInt(h_value2) + parseInt(m_value2) + parseInt(s_value2));

function timer2() {

  if (time_2 < 1) {
    clearInterval(settime_2);
    alert("Timer 2 is finished !!!");
  } else {
    time_2 = time_2 - 1;
    var rh_t2 = Math.floor(parseInt(time_2)/3600);
    var rm_t2 = Math.floor((parseInt(time_2) % 3600)/60);
    var rs_t2 = Math.floor((parseInt(time_2) % 3600)%60);
    result_timer2.textContent = twolength(rh_t2) + ":" + twolength(rm_t2) + ":" + twolength(rs_t2);

  }
}
  function timer2_reset() {
    clearInterval(settime_2);

  }
}
*/



/* Tm value 함수 원본
  $(document).ready(function () {
      $("#dna_input").keyup(function() {
          $(this).val($(this).val().toUpperCase().replace(/[^ACGTRWSDBNYMKHVI \r\s&%'(]/g, ""));
          $("#dna_length").text("[ " + (blankReplaceAll($(this).val()).length) + " ]");
        })
      })
*/

// 타이머 1 제이쿼리
/* function time_over_1_2() {
  var time_o_1 = setInterval(time_o_1s_2,1000);
  var time_o_1r = 0
  function time_o_1s_2() {
    time_o_1r = time_o_1r + 1;
    timeover_1_2.textContent = time_o_1r;
  }}
*/
/*  //제이쿼리 다이얼로그
  function timer1_result2()
  {
  	$('#dialog-message').dialog({
  		modal: true,
  		buttons: {
  			"Close": function() { $(this).dialog('close'); },
  		}
  	});
  }
*/


// 타이머 2 함수 (팝업알람 뜨는 타이머 함수)
/*
// timer 2 함수

function stopwatch_2() {
  var inner_2 = document.getElementById("button_timer2");
  if (inner_2.innerText == "Start") {
     time_set2();
     inner_2.innerText = "Stop";
  } else if (inner_2.innerText == "Stop") {
    inner_2.innerText = "Restart";
    time_set2();
  } else if (inner_2.innerText == "Restart") {
    inner_2.innerText = "Stop.";
    time_set2s();
  } else if (inner_2.innerText == "Stop.") {
    inner_2.innerText ="Restart.";
    time_set2s();
  } else {
    inner_2.innerText = "Stop.";
    time_set2s();
  }
}

function time_set2s() {
  var settime_2s = setInterval(timer2s,1000);
  var time_2s = hidden_2.textContent;
function timer2s() {
  if (time_2s < 1) {
    clearInterval(settime_2s);
    window.open("timer2.html","Timer 2 is finished","width=500 , height=300");
    document.getElementById("button_timer2").innerText = "Start";
  } else if (document.getElementById("button_timer2").innerText == "Restart.") {
    clearInterval(settime_2s);
  } else {
  time_2s = time_2s -1;
  var rh_t2s = Math.floor(parseInt(time_2s)/3600);
  var rm_t2s = Math.floor((parseInt(time_2s) % 3600)/60);
  var rs_t2s = Math.floor((parseInt(time_2s) % 3600)%60);
  result_timer2.textContent = twolength(rh_t2s) + ":" + twolength(rm_t2s) + ":" + twolength(rs_t2s);
  hidden_2.textContent = (rh_t2s*3600 + rm_t2s*60 + rs_t2s*1);
}}}


function time_set2() {
  var settime_2 = setInterval(timer2,1000);
  var h_t2 = document.getElementById("timer2_h").value;
  var m_t2 = document.getElementById("timer2_m").value;
  var s_t2 = document.getElementById("timer2_s").value;
  if (h_t2 === "") {
    var h_value2 = 0;
  } else {
    h_value2 = h_t2*3600;
  }
  if (m_t2 === "") {
    var m_value2 = 0;
  } else {
    m_value2 = m_t2*60;
  }
  if (s_t2 === "") {
    var s_value2 = 0;
  } else {
    s_value2 = s_t2;
  }

  var time_2 = (parseInt(h_value2) + parseInt(m_value2) + parseInt(s_value2));


function timer2() {
  if (time_2 < 1) {
    clearInterval(settime_2);
    window.open("timer2.html","Timer 2 is finished","width=500 , height=300");
    document.getElementById("button_timer2").innerText = "Start";
  } else if (document.getElementById("button_timer2").innerText == "Restart") {
    clearInterval(settime_2);
  } else {
    time_2 = time_2 - 1;
    var rh_t2 = Math.floor(parseInt(time_2)/3600);
    var rm_t2 = Math.floor((parseInt(time_2) % 3600)/60);
    var rs_t2 = Math.floor((parseInt(time_2) % 3600)%60);
    result_timer2.textContent = twolength(rh_t2) + ":" + twolength(rm_t2) + ":" + twolength(rs_t2);
    hidden_2.textContent = (rh_t2*3600 + rm_t2*60 + rs_t2*1);
  }}

}


function timer2_reset() {
  var inner_2 = document.getElementById("button_timer2");
  if (inner_2.innerText == "Stop." || inner_2.innerText == "Stop") {
    alert("Stop the Timer 2 first.");
  } else {
  document.getElementById("button_timer2").innerText = "Start";
  hidden_2.textContent = "";
  result_timer2.textContent = "";
  document.getElementById("timer2_h").value = "";
  document.getElementById("timer2_m").value = "";
  document.getElementById("timer2_s").value = "";

}}

*/

/* 타이머 팝업
// 타이머1 팝업
function time_over_1() {
  var time_o_1 = setInterval(time_o_1s,1000);
  var time_o_1r = 0
  function time_o_1s() {
    time_o_1r = time_o_1r + 1;
    timeover_1.textContent = time_o_1r;
  }}

// 타이머 2팝업
function time_over_2() {
  var time_o_2 = setInterval(time_o_2s,1000);
  var time_o_2r = 0
  function time_o_2s() {
    time_o_2r = time_o_2r + 1;
    timeover_2.textContent = time_o_2r;
  }}

*/
