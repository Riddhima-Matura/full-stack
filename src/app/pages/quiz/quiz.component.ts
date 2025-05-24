import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  answers: { [index: number]: string } = {};
  score = 0;
  submitted = false;
  

  constructor( private http: HttpClient) {}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    
    this.http.get('http://localhost:4000/get-questions').subscribe({
      next:(res:any)=>{
        this.questions =res.data;
        console.log("res.data",res.data);
      },
      error:(err)=>{
        console.log(err);       
      }
    })
  }
  

  selectAnswer(index: number, option: string) {
    this.answers[index] = option;
  }

  submitQuiz() {
    this.score = 0;
    this.questions.forEach((q, i) => {
      if (this.answers[i] === q.correct_option) {
        this.score++;
      }
    });
    this.submitted = true;
  }

  restart() {
    this.answers = {};
    this.score = 0;
    this.submitted = false;
  }
}
