// group.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private apiUrl = 'https://your-api-url/groups';

  constructor(private http: HttpClient) {}

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.apiUrl}`);
  }

  createGroup(group: Group): Observable<Group> {
    return this.http.post<Group>(`${this.apiUrl}`, group);
  }

  updateGroup(groupId: string, group: Group): Observable<Group> {
    return this.http.put<Group>(`${this.apiUrl}/${groupId}`, group);
  }

  deleteGroup(groupId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${groupId}`);
  }

  addUserToGroup(groupId: string, userId: string): Observable<Group> {
    return this.http.post<Group>(`${this.apiUrl}/${groupId}/users`, { userId });
  }

  removeUserFromGroup(groupId: string, userId: string): Observable<Group> {
    return this.http.delete<Group>(`${this.apiUrl}/${groupId}/users/${userId}`);
  }
}
export interface User {
    id: string;
    name: string;
    role: 'superAdmin' | 'groupAdmin' | 'member';
  }
  
  export interface Group {
    id: string;
    name: string;
    adminIds: string[];
    memberIds: string[];
  }
  