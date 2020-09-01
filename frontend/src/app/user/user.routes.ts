import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard'

export const userRoutes = [
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
]