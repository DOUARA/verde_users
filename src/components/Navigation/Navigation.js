
import { HomeIcon } from '../../elements';
import { RightArrowIcon } from '../../elements';

function Navigation ( { navList } ) {

    return (
        <div className="flex w-screen items-center mx-auto px-4 py-2">
           <HomeIcon/>
           <span className="pl-4"> Home </span> 
           { navList.map(el => {
              return (
                <>
                  <span className="px-6 "><RightArrowIcon /></span>
                  {el}
                </>
              )    
            })
           }
        </div>
    );
  }
  
export default Navigation;
  