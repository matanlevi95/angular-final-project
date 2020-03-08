import { Route } from "@angular/router"
import { SignInComponent } from "../components/sign-in/sign-in.component"
import { SignUpComponent } from '../components/sign-up/sign-up.component'
import { ProductsListComponent } from '../components/products-list/products-list.component'

interface CustomRoute extends Route {
    children?: Array<CustomRoute>;
    title?: string;
    isVisible?: boolean;
}

export const routes: Array<CustomRoute> = [
    { path: "", redirectTo: "signin", pathMatch: "full" },
    { path: "signin", component: SignInComponent, title: "Sign In", isVisible: true },
    { path: "signup", component: SignUpComponent, title: "Sign Up", isVisible: true },
    { path: "products", component: ProductsListComponent, title: "Products", isVisible: true },
]
