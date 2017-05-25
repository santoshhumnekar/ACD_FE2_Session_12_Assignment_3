import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(getFriends: any ): any {
     return getFriends.filter(function(friends){

      if (friends.name.charAt(0).toLowerCase() === 'a' )
      {
            return friends.name;
      }
      
    });
    
  }

}
