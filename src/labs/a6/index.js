import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list.js"

function Assignment6() {
 const color = 'blue';
 const dangerous = true;
 return(
  <div>
       <h1>Assignment 6</h1>
       <TodoList/>
       <ConditionalOutput/>
       <Styles/>
       <Classes/>
       <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
       Dynamic Blue background
       </div>
       <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                        wd-fg-black wd-padding-10px`}> Dangerous background
       </div>
  </div>
 )
}
export default Assignment6;