import {AfterViewInit, Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { Course } from './model/course';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit{

    courses = COURSES;

    //ViewChild permite instanciar apenas um componente por vez, para instanciar uma Query de componentes é necessário usar a anotação ViewChildren
    @ViewChild('cardRef', {read: ElementRef})
    card: CourseCardComponent;

    @ViewChild('courseImage')
    courseImage: ElementRef;

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards: QueryList<Course>;

    //ContentChild mostra somente o os dados do ng-content que foram declarados no componente app.html (neste caso o courseImage)
    @ContentChild(CourseImageComponent, {read: ElementRef})
    image: ElementRef;

    startDate = new Date();

    constructor() {
    }

    //OnInit é carregado após o primeiro OnChanges, ou seja, é carregado após carregar todos os dados necessários
    ngOnInit(): void {
        console.log(this.image); 
    }

    //AfterViewInit carrega antes do que o OnInit, mas as vezes pode carregar antes que todos os componentes tenham sido carregados
    ngAfterViewInit(): void { 
        console.log(this.cards);
    }
    
    onCourseSelected(course:Course) {
        console.log(this.card)
    }

    onCoursesEdited() {
        this.courses.push(
            {
                id: 11,
                description: "New Course",
                iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
                longDescription: "Just a test for the query",
                lessonsCount: 10,
                category: 'ALL LEVELS'
            }
        )
    }

}