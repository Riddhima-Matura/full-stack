import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Learning-material',
  templateUrl: './Learning-material.component.html',
  styleUrls: ['./Learning-material.component.css']
})
export class LearningMaterialComponent implements OnInit {
  selectedLevel: string = 'Beginner'; // Default
  questions: any[]=[];
  constructor( private http: HttpClient,) { }

  ngOnInit() {
    this.loadQuestions();
  }

  selectLevel(level: string): void {
    this.selectedLevel = level;
    this.loadQuestions();
  }

  loadQuestions(){
    this.http.get('http://localhost:4000/get-learning-questions').subscribe((res:any)=>{
      console.log("ques",res);
      const questions = Array.isArray(res) ? res : res.questions || res.data || [];

      this.questions = questions.filter((q: any) => q.level === this.selectedLevel);
    })
  }
}
