//제출 알림만 뜨고 페이지 이동은 없다
var final_submit = function () {
    new_alert('이 버튼을 누르면 최종 제출이 되며 테스트가 끝납니다');
    new_alert('Submit all your code and finish test');
};

//테스트 페이지로 이동
var goTest = function () {
    //new_confirm 구현 귀찮다
    //new_alert("let's go test");
    location.href = "/coditide/test";
};

//spotlight 관련 변수, 함수
var spotLightData = [
    {target: "#select-problem", msg: '문제를 선택할 수 있습니다.'},
    {target: "#top-bar > .input-field.col.s2.no-padding", msg: '세 가지 언어 중 한가지를 선택하여주세요.'},
    {target: "#save-code", msg: '코드를 반드시 저장하여주세요. 단축키: ctrl+S'},
    {target: "#select-testcase", msg: '코드의 결과값을 선택할 수 있습니다.'},
    {target: "#run-code", msg: '코드를 실행하실 경우 자동으로 저장됩니다. 단축키: ctrl+R'},
    {target: "#load-code", msg: '만약 실수로 시험을 종료하실 경우, 불러오기 버튼을 눌러주세요.(마지막으로 저장한 코드를 불러옵니다.)'},
    {target: "#final-submit", msg: '시험을 마치셨으면, 제출하여주세요.'},
    {target: ".timer", msg: '시간을 초과하시면, 마지막으로 저장한 코드가 제출됩니다.'},
    {target: "#btn-help", msg: '도움말을 누르시면, 도움말이 나옵니다.'},
];
var index = 0;
//도움말 함수 호출. spotlight해준다
var help = function () {
    var dataLength = spotLightData.length;
    if (index == dataLength) {
        index = 0;
        $("#dialog-confirm").dialog("close");
        $(".spotlight-background").remove();
        return;
    }
    if (index < dataLength) {
        var options = {msg: spotLightData[index].msg, index: index};
        $(spotLightData[index].target).spotlight(options);
        index++;
    }
};

var load_code = function () {
   new_alert('Load last saved code');
}
