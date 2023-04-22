import avatar from '../../images/avatar.svg';
import { useAppContainer } from '../container/Context';
import AddToDoList from '../todoDashboard/addingTodos/AddTodoList';
const UserProfileDashboard = () => {
  const { todoLists } = useAppContainer();
  const getCurrentDate = (separator = '') => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${date}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`;
  };

  const totalItems = todoLists.reduce((totalItems: any, todoList: any) => {
    return totalItems + todoList.todoItems.length;
  }, 0);
  const completedItems = todoLists.reduce(
    (totalCompleted: any, todoList: any) => {
      return (
        totalCompleted +
        todoList.todoItems.filter((item: any) => item.completed).length
      );
    },
    0
  );

  return (
    <div>
      <div className='bg-white w-10/12 mx-auto h-fit my-2 px-3 py-4 rounded-lg shadow-xl text-center flex sm:flex-row justify-between sm:items-end items-center mb-5 flex-col'>
        <div className=' '>
          <div className='w-24 rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='80px'
              height='80px'
              viewBox='0 0 366.34 366.34'
              id='Layer_1'
              data-name='Layer 1'
            >
              <defs>
                <linearGradient
                  id='linear-gradient'
                  x1='110.16'
                  y1='129.07'
                  x2='269.6'
                  y2='129.07'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stop-color='#16243f' />
                  <stop offset='1' stop-color='#6878b1' />
                </linearGradient>
                <linearGradient
                  id='linear-gradient-2'
                  x1='69.93'
                  y1='286.17'
                  x2='296.41'
                  y2='286.17'
                  xlinkHref='#linear-gradient'
                />
                <linearGradient
                  id='linear-gradient-3'
                  x1='112.81'
                  y1='199.94'
                  x2='245.48'
                  y2='218.24'
                  xlinkHref='#linear-gradient'
                />
              </defs>
              <path
                className='cls-1'
                d='M269.24,88.86a41.23,41.23,0,0,1-5.61,26.47c-4.73,8.09-6.41,16.36-9.33,25-2.42,7.21-2.81,17-7.07,23.39-9.35,14-27.48,16.4-42.24,21.44a11.6,11.6,0,0,0-2.82.91l-5.23,1.65q-7.51,2.37-15,4.8c-5.66,1.83-11.3,3.7-16.92,5.66-2.51.88-5.09,1.67-7.57,2.61-1.42.53-2.24,2-3.16,3.18a51.53,51.53,0,0,0-4,6.68,1.92,1.92,0,0,1-.57.72,1.75,1.75,0,0,1-.87.21,8.45,8.45,0,0,1-6-2.7c-4.74-4.6-8.13-11-11.26-16.71a82.06,82.06,0,0,1-5-10.36A90.75,90.75,0,0,1,123.51,171c-6.65-27.67-22.78-58-5.89-85.72,6.47-10.6,17.15-17.93,28.14-23.71,16.64-8.76,35-14.78,53.85-15,23.31-.31,61.81,12.13,68.68,37.64a41.45,41.45,0,0,1,.92,4.54Z'
              />
              <path
                className='cls-2'
                d='M296.41,281.52a184.56,184.56,0,0,1-226.48-1l48.66-22.81a46.83,46.83,0,0,0,6.65-3.82c.64-.44,1.28-.9,1.89-1.38a46.35,46.35,0,0,0,12.78-15.09,44.69,44.69,0,0,0,4.64-14.48,67.91,67.91,0,0,0,.74-9.91c0-5.72-.31-11.44-.37-17.17q-.06-4.75-.1-9.51l2,1,5.2,2.69,2.41.41,27.88,4.74,31.12,5.3.94,32,.31,10.46.15,5.08v.33l12.1,4.92Z'
              />
              <path
                className='cls-3'
                d='M296.41,281.52a184.56,184.56,0,0,1-226.48-1l48.66-22.81a46.83,46.83,0,0,0,6.65-3.82c.64-.44,1.28-.9,1.89-1.38,23.55,16.76,55.69,27.33,83.49,14.82,6.62-3,12.7-7.84,16.3-14.06Z'
              />
              <path
                className='cls-4'
                d='M214.81,248c-10.45.63-22.13-2.07-33-8.34-20.41-11.79-31.32-32.35-27.4-49.21l27.88,4.74,31.12,5.3.94,32Z'
              />
              <circle className='cls-2' cx='127.98' cy='158.34' r='17' />
              <circle className='cls-4' cx='133.38' cy='158.34' r='15.22' />
              <path
                className='cls-2'
                d='M241,143.33s4.57,9.68,4.84,26.94a83.66,83.66,0,0,1-3.52,23.66c-1.31,4.71-2.87,9.33-4.49,13.81-4.26,11.77-8.3,26-20.95,31.09-12.37,5-28.46-.13-40.05-5.3a85.13,85.13,0,0,1-31.26-23.91c-4.73-5.82-7.56-10.17-8.12-17.42,0-.37-.06-.74-.08-1.1q-.74-9.32-1.43-18.63-1.17-15.09-2.32-30.18s29.4-16.17,39.88-21.59c20.33-10.48,43.61-20.79,57.78-39,5.37,6.46,11.91,10.16,14,18.81,1.86,7.55.25,15.4-1,22.9C243.2,130,242.09,136.7,241,143.33Z'
              />
              <path
                className='cls-5'
                d='M242.31,193.93c-1.31,4.71-2.87,9.33-4.49,13.81-4.26,11.77-8.3,26-20.95,31.09-12.37,5-28.46-.13-40.05-5.3-12.09-5.39-29.2-18.71-37.55-29-4.73-5.82-5-19.81-5-20.17,11.37,8.85,30.89,20.47,43.74,14.17,6.89-3.37,13.64-7.79,20.83-10.56a34.91,34.91,0,0,1,15.11-2.62c7.34.5,10.48,3.81,15.85,8.18,1.76,1.44,3.73,2.94,6,2.95A11.61,11.61,0,0,0,242.31,193.93Z'
              />
              <path
                className='cls-6'
                d='M199.31,198.7a29.78,29.78,0,0,0,20.91.81'
              />
              <path
                className='cls-7'
                d='M208.13,142.14c-.08.35,13.36,38.48,13.36,38.48l-17.94.87'
              />
              <path
                className='cls-7'
                d='M162.11,135.59a80.34,80.34,0,0,1,28.13-.8'
              />
              <path
                className='cls-7'
                d='M224.7,134.63a55.64,55.64,0,0,1,17.45-1.21'
              />
              <path
                className='cls-7'
                d='M188.85,150.79a11.64,11.64,0,0,1-5.18,8.32,11.26,11.26,0,0,1-1.85,1,23.59,23.59,0,0,1-6.41,1.38'
              />
              <line
                className='cls-7'
                x1='190.21'
                y1='118.4'
                x2='221.81'
                y2='118.4'
              />
              <line
                className='cls-7'
                x1='186.18'
                y1='124.93'
                x2='217.79'
                y2='124.93'
              />
              <path
                className='cls-7'
                d='M221.67,148.51a34.8,34.8,0,0,0,3.74,7.22,10.14,10.14,0,0,0,6.24,4'
              />
              <path
                className='cls-8'
                d='M180.72,145.14c6.1-.07,6.28,9.26.18,9.43h-.27c-6.1.07-6.29-9.25-.19-9.42h.28Z'
              />
              <path
                className='cls-8'
                d='M231,143.51c5.66-.07,5.83,8.59.17,8.74h-.26c-5.66.06-5.83-8.59-.17-8.75H231Z'
              />
            </svg>
          </div>
        </div>
        <div>
          <div>
            <span className='text-green-500 font-bold'>{completedItems}</span>/
            <span className='text-red-600 font-bold '>{totalItems}</span> DONE
          </div>
          <progress
            className='progress progress-success w-56'
            value={completedItems}
            max={totalItems}
          ></progress>
        </div>

        <div className='flex flex-col gap-2 justify-between align-baseline'>
          <label htmlFor={`addTodoList`} className='btn'>
            Add List
          </label>
          <input type='checkbox' id={`addTodoList`} className='modal-toggle' />
          <div className='modal'>
            <div className='modal-box'>
              <h3 className='font-bold text-lg'>Add new Todo item.</h3>
              <AddToDoList />
              <div className='modal-action'>
                <label htmlFor={`addTodoList`} className='btn'>
                  Close
                </label>
              </div>
            </div>
          </div>
          <div className='flex flex-row'>
            <div className='me-1'>{getCurrentDate('/')}</div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
              fill='none'
            >
              <rect
                x='3'
                y='6'
                width='18'
                height='15'
                rx='2'
                stroke='#33363F'
                strokeWidth='2'
              />
              <path
                d='M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z'
                fill='#33363F'
              />
              <path
                d='M7 3L7 6'
                stroke='#33363F'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <path
                d='M17 3L17 6'
                stroke='#33363F'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfileDashboard;