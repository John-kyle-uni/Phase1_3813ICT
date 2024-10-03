export interface User {
    id: string;
    username: string;
    email: string;
    role: 'Chat User' | 'Group Admin' | 'Super Admin';
    groups: Group[];
  }
  
  export interface Group {
    id: string;
    name: string;
    admins: User[];
    members: User[]; 
  }
  