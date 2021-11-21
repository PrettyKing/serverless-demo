//这里是与event事件相关的
const xx = (e: MouseEvent) => {
    console.log(e.preventDefault());
  };
  
  document.body.addEventListener('mouseenter', xx);
  
  const xx2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
  };
  const xx3: React.FormEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
  };