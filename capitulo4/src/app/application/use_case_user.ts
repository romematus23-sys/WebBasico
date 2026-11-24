import { User } from "../domain/entities";

export function changeAbout(user:User): void{
    user.acerca="texto modificado";
}