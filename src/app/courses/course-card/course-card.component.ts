import {
    Component, EventEmitter, Input, OnInit, Output, TemplateRef
} from '@angular/core';
import { Course } from 'src/app/model/course';



@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements  OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Input()
    nameTpl: TemplateRef<any>;

    @Output('courseSelected')
    courseEmitter = new EventEmitter<Course>;

    constructor() {
    }

    ngOnInit() {
    }

    onCourseViewed() {
        console.log("card component - button clicked ...");
        this.courseEmitter.emit(this.course);
    }

    isImageVisible() {
        return this.course && this.course.iconUrl;
    }

    cardClasses() {
        if (this.course.category == 'BEGINNER') {
            return 'beginner';
        } else if (this.course.category == 'INTERMEDIATE') {
            return 'intermediate';
        } else if (this.course.category == 'ADVANCED') {
            return 'advanced';
        } else {
            return '';
        }
    }

    cardStyles() {
        return {
            'text-decoration':'underline',
        };
    }
}