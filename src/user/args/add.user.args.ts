import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AddUserArgs {

    @Field()
    username: string;

    @Field()
    email: string;
}