function handleQuizSumit(e) {
  e.preventDefault();
}

function quizEventHandlers(e) {
  $('#quiz').submit(handleQuizSumit);
}
