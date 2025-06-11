//[지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 
// 각 변수에 저장하고 총점 과 평균을 계산하여 console탭에 출력하시오.
  /* let 국어 = prompt( "국어점수 입력하세요" )
    let 수학 = prompt( "수학점수 입력하세요" )
    let 합계점수 = Number(국어) + Number(수학)
    console.log(`총합계 : ${합계점수}`);
    let 평균 = (합계점수/2)
    console.log(`평균 : ${평균}`);
  */  
//[지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 
// 각 변수에 저장하고 총점 과 평균을 계산하여 console탭에 출력하시오.
let 국어=prompt("국어 : ")  //입력
let 영어=prompt("영어 : ")
let 수학=prompt("수학 : ")
let 총점=Number(국어)+Number(영어)+Number(수학) //처리(연산)
let 평균=총점/3
console.log( `총점 : ${총점} , 평균 : ${평균}` ) ; //출력

// [지문2] prompt 함수로 반지름를 
// 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 
// console탭에 출력하시오. 