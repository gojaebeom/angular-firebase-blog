import { Component, OnInit } from '@angular/core';
import * as Masonry from 'masonry-layout';
import * as imagesloaded from 'imagesloaded';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  title = 'jb-world';
  posts: Post[] = [];

  constructor() {
    this.posts.push(
      new Post(
        'java01',
        'assets/images/01.jpg',
        '자바01-변수와 상수',
        `It is a long established fact that a reader will
          bem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop 
          publishing packages and web page editors now use Lorem Ipsum as their default 
          model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
        '가나다라마바사아자차카타파하하하하하하',
        '2022-05-05',
        ['자바', 'java', '변수', '상수']
      ),
      new Post(
        'java02',
        'assets/images/02.jpg',
        '자바02-멋진 자바바바바바',
        `It is a long established fact that a reader will
          model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
        '가나다라마바사아자차카타파하하하하하하',
        '2022-05-05',
        ['자바', 'java', '변수', '상수']
      ),
      new Post(
        'java02',
        'assets/images/03.jpg',
        '자바03-객체지향',
        `It is a long established fact that a reader will
          model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
        '가나다라마바사아자차카타파하하하하하하',
        '2022-05-05',
        ['자바', 'java', '변수', '상수']
      ),
      new Post(
        'java02',
        'assets/images/04.jpg',
        '자바04-제너럴',
        '변수와 상수를 선언하는 방법을 다뤄보자',
        '가나다라마바사아자차카타파하하하하하하',
        '2022-05-05',
        ['자바', 'java', '변수', '상수']
      ),
      new Post(
        'java02',
        'assets/images/05.jpg',
        '자바05-변수와 상수',
        '변수와 상수를 선언하는 방법을 다뤄보자',
        '가나다라마바사아자차카타파하하하하하하',
        '2022-05-05',
        ['자바', 'java', '변수', '상수']
      ),
      new Post(
        'java02',
        'assets/images/01.jpg',
        '자바06-변수와 상수',
        '변수와 상수를 선언하는 방법을 다뤄보자',
        '가나다라마바사아자차카타파하하하하하하',
        '2022-05-05',
        ['자바', 'java', '변수', '상수']
      ),
      new Post(
        'java01',
        'assets/images/01.jpg',
        '자바01-변수와 상수',
        `It is a long established fact that a reader will
          bem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop 
          publishing packages and web page editors now use Lorem Ipsum as their default 
          model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
        '가나다라마바사아자차카타파하하하하하하',
        '2022-05-05',
        ['자바', 'java', '변수', '상수']
      ),
      new Post(
        'java02',
        'assets/images/02.jpg',
        '자바02-멋진 자바바바바바',
        `It is a long established fact that a reader will
          model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
        '가나다라마바사아자차카타파하하하하하하',
        '2022-05-05',
        ['자바', 'java', '변수', '상수']
      ),
      new Post(
        'java02',
        'assets/images/03.jpg',
        '자바03-객체지향',
        `It is a long established fact that a reader will
          model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
        '가나다라마바사아자차카타파하하하하하하',
        '2022-05-05',
        ['자바', 'java', '변수', '상수']
      ),
      new Post(
        'java02',
        'assets/images/04.jpg',
        '자바04-제너럴',
        '변수와 상수를 선언하는 방법을 다뤄보자',
        '가나다라마바사아자차카타파하하하하하하',
        '2022-05-05',
        ['자바', 'java', '변수', '상수']
      ),
      new Post(
        'java02',
        'assets/images/05.jpg',
        '자바05-변수와 상수',
        '변수와 상수를 선언하는 방법을 다뤄보자',
        '가나다라마바사아자차카타파하하하하하하',
        '2022-05-05',
        ['자바', 'java', '변수', '상수']
      ),
      new Post(
        'java02',
        'assets/images/01.jpg',
        '자바06-변수와 상수',
        '변수와 상수를 선언하는 방법을 다뤄보자',
        '가나다라마바사아자차카타파하하하하하하',
        '2022-05-05',
        ['자바', 'java', '변수', '상수']
      )
    );
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const masonryLayoutEl: any = document.querySelector('.masonry-layout');
    imagesloaded(masonryLayoutEl, () => {
      new Masonry(masonryLayoutEl, {
        // options
        itemSelector: '.masonry-item',
        // columnWidth: 300,
      });
    });
  }
}
