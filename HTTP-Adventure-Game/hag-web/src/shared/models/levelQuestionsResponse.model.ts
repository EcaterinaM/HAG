export class LevelQuestionsResponse{
    public QuestionText: string;
    public RightAnswer: string;
    public FirstWrongAnswer: string; 
    public SecondWrongAnswer: string; 
    public ThirdWrongAnswer: string;
    public QuestionId: string; 

    public constructor(object : any){
           this.QuestionId = object.questionId;
           this.QuestionText = object.questionText;
           this.RightAnswer = object.rightAnswer;
           this.SecondWrongAnswer = object.secondWrongAnswer;
           this.ThirdWrongAnswer = object.thirdWrongAnswer;
           this.FirstWrongAnswer = object.firstWrongAnswer;
       }
}
