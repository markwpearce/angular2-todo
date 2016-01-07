import { Pipe, PipeTransform} from "angular2/core";

@Pipe({
    name: "prioritySort",
    pure: false
})
export class PrioritySortPipe implements PipeTransform {

    transform(array: Array<any>, args: any[]): Array<any> {
        console.log(array);
        if (typeof args[0] === "undefined") {
            return array;
        }

        let direction :string   = args[0];

        array = array.sort((a, b) : number => {

            let left : number =  a.priority;
            let right : number = b.priority;

            return (direction === "desc") ? right - left : left - right;
        });

        return array;
    }
}
