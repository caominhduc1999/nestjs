import { Injectable } from "@nestjs/common";
import { StoreService } from "src/store/store.service";
import { UserDto } from "src/user.dto";

@Injectable()
export class UserService {
    constructor(private storeService: StoreService) {

    }

    createUser(user:any): any {
        this.storeService.save(user);

        user.createdAt = new Date();
        user.updatedAt = new Date();
        user.id = '1';
       
        return UserDto.plainToClass(user);
    }
}