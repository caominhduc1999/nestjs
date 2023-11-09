import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { StoreModule } from "src/store/store.module";

@Module({
    imports: [StoreModule],
    controllers: [UserController],
    providers: [{
        provide: 'USER_SERVICE',
        useClass: UserService
    }]
})
export class UsersModule {

}