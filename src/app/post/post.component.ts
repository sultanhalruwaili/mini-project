import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  loadedPosts: user[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.FetchPosts()
  }


  onCreatePost(postData: user) {
    console.log(postData);
    this.http.post<user>('http://localhost:8080/api/user/add', postData).subscribe(res => {
      console.log(res);
    })
  }

  onFetchPosts() {
    this.FetchPosts()
  }

  onClearPosts() {
    this.http.delete('http://localhost:8080/api/user/delete').subscribe(res => {
      this.loadedPosts = [];
    });
  }

  onClearPost(username: string, i: number) {
    this.http.delete<user>(`http://localhost:8080/api/user/delete/${username}`).subscribe(res => {
      console.log(res);
      this.FetchPosts();
    });
  }


  private FetchPosts() {
    this.http.get<user[]>('http://localhost:8080/api/user').subscribe(res => {
      this.loadedPosts = res;
      console.log(this.loadedPosts);
    })
  }
}
