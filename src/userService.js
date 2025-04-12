// UserService.js
import { BehaviorSubject } from "rxjs";

const currentUserSubject = new BehaviorSubject(null);

const UserService = {
  currentUser$: currentUserSubject.asObservable(),
  setCurrentUser: (user) => currentUserSubject.next(user),
  getCurrentUser: () => currentUserSubject.getValue(),
};

export default UserService;
