var load_code = function () {
    var editor = ace.edit("editor");
    $.ajax({
        url: '/coditide/test/load',
        type: "post",
        data: {"problem_id": problem_id, "applicant_id": applicant_id},
        success: function (response) {
            if (response == 'fail') {
                alert('저장한 코드가 존재하지않습니다.');
            }
            else {
                editor.setValue(response);
            }
        },
        error: function (xhr, status, error) {
            console.error(status + ":" + error);
        }
    });
}

//최종 제출
var final_submit = function () {
    var a = confirm('제출하시겠습니까?');
    if (a) {
        $.ajax({
            url: '/coditide/test/submit',
            type: "post",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            //dataType: "json",
            success: function () {
                alert("수고하셨습니다.");
                location.href = "/coditide/result";
            },
            error: function (xhr, status, error) {
                console.error(status + ":" + error);
            }
        });
    }
    else {
    }
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

