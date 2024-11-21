import { useEffect, useState, useRef } from 'react';

const MyForm = () => {
  const [value, setValue] = useState('');
  const [classList, setClassList] = useState('');
  const [position, setPosition] = useState('');
  const inputRef = useRef(null); //referenciar el input en la linea 18
  useEffect(() => {
    inputRef.current.focus(); //accede al mismo eleento y pasamos lo que queremos q haga.(dar el foco)
    setClassList(inputRef.current.classList);
    setPosition(inputRef.current.getBoundingClientRect());
  }, []);

  return (
    <>
      <input
        id="name"
        type="text"
        placeholder="añade el dato"
        className="inputClassLIST"
        onChange={() => setValue(inputRef.current.value)}
        value={value}
        ref={inputRef}
      />
      <div>{value} </div>
      <div>{classList} </div>
      {console.log(position)}
    </>
  );
};

export default MyForm;
