import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { loadMovies } from "../store/actions";
import { selectMovies } from "../store/selectors";

@Injectable({
    providedIn: 'root'
})
export class MainViewPageResolver implements Resolve<any>{
    isContainsMovies: boolean = false;

    constructor(private store: Store) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.store.dispatch(loadMovies());
        this.store.select(selectMovies).pipe().subscribe(s => {
            this.isContainsMovies = s !== null;
        })
        
        return this.isContainsMovies;
    }

}