import { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorFollow = document.querySelector('.cursor-follow');
    
    if (!cursor || !cursorFollow) {
      return;
    }
    
    document.addEventListener('mousemove', e => {
      cursor.setAttribute('style', `top: ${e.pageY - 3}px; left: ${e.pageX - 3}px;`);
      
      cursorFollow.setAttribute('style', `top: ${e.pageY - 10.5}px; left: ${e.pageX - 10.5}px;`);
      if (e.target.classList.contains('linkitem') || e.target.classList.contains('linkitem2')) {
        cursorFollow.classList.add('red');
        cursorFollow.setAttribute('style', `top: ${e.pageY - 21}px; left: ${e.pageX - 21}px;`);
      } else {
        cursorFollow.classList.remove('red');
      }
    });
  }, []);

  return (
    <div>
      <div className="cursor"></div>
      <div className="cursor-follow"></div>
    </div>
  );
};

export default Cursor;