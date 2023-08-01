import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateUserArgs {

    @Field((type) => Int)
    id: number;

    @Field()
    username: string;

    @Field()
    email: string;
}